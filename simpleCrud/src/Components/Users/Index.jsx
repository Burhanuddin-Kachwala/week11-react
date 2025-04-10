import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Trash2 , Pencil} from 'lucide-react'; // using lucide-react icons (very clean)
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Link } from 'react-router';

function Index() {
    const notyf = new Notyf(); 
  const apiUrl = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(apiUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        notyf.error('Failed to load users',error);
      });
  };

  const handleDelete = (userId) => {
    axios.delete(`${apiUrl}/${userId}`)
      .then((response) => {
        console.log('User deleted:', response.data.name);
        fetchUsers();
        notyf.success(`User ${response.data.name} successfully`); 
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        notyf.error('Error deleting user'); // show error message
      });
  };

//   const handleCreate = () => {
//     const newUser = {
//       name: `User ${Date.now()}`, // Dummy data
//       // Add other required fields here based on your API
//     };

//     axios.post(apiUrl, newUser)
//       .then(() => {
//         notyf.success('User created successfully');
//         fetchUsers();
//       })
//       .catch((error) => {
//         console.error('Error creating user:', error);
//         notyf.error('Failed to create user');
//       });
//   };
  

return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/create" className="text-center mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Create User</Link>
         
        {users.map((user) => (
            <div key={user.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition relative">
                <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-1">ID: {user.id}</p>
                
                {/* Delete Icon */}
                <button 
                    onClick={() => handleDelete(user.id)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition"
                >
                    <Trash2 size={24} />
                </button>

                {/* Edit Icon */}
                <Link 
                    to={`/edit/${user.id}`}
                    className="absolute top-4 right-12 text-blue-500 hover:text-blue-700 transition"
                >
                    <Pencil size={24} />
                </Link>
            </div>
        ))}
        
    </div>
);
}

export default Index;
