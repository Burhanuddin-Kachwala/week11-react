import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Notyf CSS

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const notyf = new Notyf();

  useEffect(() => {
    // Fetch the user data by ID
    axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        notyf.error('Failed to fetch user');
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the user
    axios.put(`${import.meta.env.VITE_API_URL}/${id}`, user)
      .then(() => { 
        notyf.success('User updated successfully!');
        navigate('/'); // Go back to home or users page
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        notyf.error('Failed to update user');
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

       

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white py-2 rounded-xl hover:from-pink-500 hover:to-purple-600 transition"
        >
          Update User
        </button>
      </form>
    </div>
  );
}

export default Edit;
