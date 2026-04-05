import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading]   = useState(true);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3001/student/view');
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    try {
      await axios.delete(`http://localhost:3001/student/delete/${id}`);
      fetchStudents();
    } catch (err) {
      alert('Failed to delete student.');
    }
  };

  if (loading) return <p className="loading">⏳ Loading students...</p>;

  return (
    <div className="card">
      <h2>All Students</h2>
      {students.length === 0 ? (
        <p className="empty">No students found. Click "Add Student" to get started!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={s._id}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>
                  <button className="btn btn-blue" onClick={() => navigate(`/edit/${s._id}`)}>✏️ Edit</button>
                  <button className="btn btn-red"  onClick={() => handleDelete(s._id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewStudents;
