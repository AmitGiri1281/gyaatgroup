import React, { Component } from 'react';
import axios from 'axios';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import AddEditUserModal from './AddEditUserModal';

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchTerm: '',
      isModalOpen: false,
      editUser: null
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      this.setState({ users: res.data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  openModal = (user = null) => {
    this.setState({ isModalOpen: true, editUser: user });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, editUser: null });
  };

  handleSave = async (user) => {
    const { editUser } = this.state;
    try {
      if (editUser) {
        await axios.put(`http://localhost:5000/api/users/${editUser._id}`, user); 
      } else {
        await axios.post('http://localhost:5000/api/users', user);
      }
      this.fetchUsers();
      this.closeModal();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };


handleDelete = async (_id) => {
  console.log('Deleting user with ID:', _id);  // Log user ID
  try {
    await axios.delete(`http://localhost:5000/api/users/${_id}`);
    this.fetchUsers();
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};


  render() {
    const { users, searchTerm, isModalOpen, editUser } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold">User Management</h3>
          <div className="flex space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="form-input pl-8 py-1 text-sm border rounded"
                value={searchTerm}
                onChange={this.handleSearch}
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button
              className="btn btn-primary flex items-center text-sm py-1 px-3 bg-blue-500 text-white rounded"
              onClick={() => this.openModal()}
            >
              <FiPlus className="mr-1" /> Add User
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subscription</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role === 'Student'
                      ? user.school || 'N/A'
                      : (user.children !== undefined
                          ? `${user.children} ${user.children > 1 ? 'children' : 'child'}`
                          : 'N/A')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.plan || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900" onClick={() => this.openModal(user)}>
                        <FiEdit2 />
                      </button>
                      <button className="text-red-600 hover:text-red-900" onClick={() => this.handleDelete(user._id)}>
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <AddEditUserModal
            user={editUser}
            onClose={this.closeModal}
            onSave={this.handleSave}
          />
        )}
      </div>
    );
  }
}

export default UserManagement;

