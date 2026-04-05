import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
  const [form, setForm]       = useState({ name: '', email: '', course: '' });
  const [message, setMessage] = useState('');
  const [error, setError]     = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setMessage(''); setError('');
    if (!form.name || !form.email || !form.course) {
      setError('All fields are required!');
      return;
    }
    try {
      await axios.post('http://localhost:3001/student/add', form);
      setMessage('✅ Student added successfully!');
      setForm({ name: '', email: '', course: '' });
    } catch (err) {
      setError('❌ Failed to add student. Make sure backend is running.');
    }
  };

  return (
    <div className="card">
      <h2>Add New Student</h2>
      <div className="form-group">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Enter email address" />
      </div>
      <div className="form-group">
        <label>Course</label>
        <input name="course" value={form.course} onChange={handleChange} placeholder="Enter course name" />
      </div>
      <button className="btn btn-green" onClick={handleSubmit}>Add Student</button>
      {message && <p className="success">{message}</p>}
      {error   && <p className="error">{error}</p>}
    </div>
  );
}

export default AddStudent;
