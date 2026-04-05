import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { id }   = useParams();
  const navigate = useNavigate();
  const [form, setForm]       = useState({ name: '', email: '', course: '' });
  const [message, setMessage] = useState('');
  const [error, setError]     = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/student/view/${id}`)
      .then(res => setForm(res.data))
      .catch(() => setError('❌ Failed to load student data.'));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    setMessage(''); setError('');
    try {
      await axios.put(`http://localhost:3001/student/update/${id}`, form);
      setMessage('✅ Student updated successfully! Redirecting...');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError('❌ Failed to update student.');
    }
  };

  return (
    <div className="card">
      <h2>Edit Student</h2>
      <div className="form-group">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Course</label>
        <input name="course" value={form.course} onChange={handleChange} />
      </div>
      <button className="btn btn-blue" onClick={handleUpdate}>Update Student</button>
      <button className="btn btn-grey" onClick={() => navigate('/')}>Cancel</button>
      {message && <p className="success">{message}</p>}
      {error   && <p className="error">{error}</p>}
    </div>
  );
}

export default EditStudent;
