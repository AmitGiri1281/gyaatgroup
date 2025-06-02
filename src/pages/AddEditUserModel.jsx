import React, { Component } from 'react';

class AddEditUserModal extends Component {
  constructor(props) {
    super(props);
    const { user } = props;
    this.state = {
      name: user?.name || '',
      role: user?.role || 'Student',
      school: user?.school || '',
      children: user?.children || '',
      plan: user?.plan || 'Monthly',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { name, role, school, children, plan } = this.state;
    const userData = {
      id: this.props.user?.id || Date.now(),
      name,
      role,
      plan,
      ...(role === 'Student' ? { school } : { children: Number(children) }),
    };
    this.props.onSave(userData);
  };

  render() {
    const { name, role, school, children, plan } = this.state;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-lg font-semibold mb-4">{this.props.user ? 'Edit User' : 'Add User'}</h2>
          <div className="space-y-3">
            <input name="name" value={name} onChange={this.handleChange} placeholder="Name" className="w-full border p-2 rounded" />
            <select name="role" value={role} onChange={this.handleChange} className="w-full border p-2 rounded">
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
            </select>
            {role === 'Student' ? (
              <input name="school" value={school} onChange={this.handleChange} placeholder="School Name" className="w-full border p-2 rounded" />
            ) : (
              <input name="children" value={children} onChange={this.handleChange} placeholder="Number of Children" className="w-full border p-2 rounded" type="number" />
            )}
            <select name="plan" value={plan} onChange={this.handleChange} className="w-full border p-2 rounded">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button onClick={this.props.onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button onClick={this.handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
              {this.props.user ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEditUserModal;
