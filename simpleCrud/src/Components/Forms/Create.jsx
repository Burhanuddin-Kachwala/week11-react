/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import {  useNavigate } from 'react-router';

function Create() {
  const [name, setName] = useState('');
  const notyf = new Notyf();
  const apiUrl = import.meta.env.VITE_API_URL;
    const Navigate = useNavigate(); // useNavigate hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      name: name,
      // Add more fields if needed
    };

    axios.post(apiUrl, newUser)
      .then(() => {
        notyf.success('User created successfully!');
        setName(''); // clear the field
        Navigate('/'); // Redirect to the home page or user list
        
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        notyf.error('Failed to create user.');
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input 
            type="text" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
