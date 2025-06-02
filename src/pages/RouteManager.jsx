import React, { Component } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiCheck, FiX } from 'react-icons/fi';
import axios from 'axios';

class RouteManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      isEditing: null,
      newRoute: { name: '', stops: '', buses: '', status: 'Active' },
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/routes')
      .then(response => this.setState({ routes: response.data }))
      .catch(error => console.error('Error fetching routes:', error));
  }

  handleInputChange = (e, field, id = null) => {
    const value = e.target.value;
    if (id !== null) {
      const routes = this.state.routes.map(route =>
        route._id === id ? { ...route, [field]: value } : route
      );
      this.setState({ routes });
    } else {
      this.setState({
        newRoute: { ...this.state.newRoute, [field]: value }
      });
    }
  };

  handleEdit = (id) => {
    this.setState({ isEditing: id });
  };

  handleSave = (id) => {
    this.setState({ isEditing: null });
    const updatedRoute = this.state.routes.find(route => route._id === id);

    // Send updated route with single stop and bus number
    const payload = {
      ...updatedRoute,
      stops: updatedRoute.stops,
      buses: updatedRoute.buses,
    };

    axios.put(`http://localhost:5000/api/routes/${id}`, payload)
      .then(response => {
        const updatedRoutes = this.state.routes.map(route =>
          route._id === id ? response.data : route
        );
        this.setState({ routes: updatedRoutes });
      })
      .catch(error => console.error('Error updating route:', error));
  };

  handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/routes/${id}`)
      .then(() => {
        const routes = this.state.routes.filter(route => route._id !== id);
        this.setState({ routes });
      })
      .catch(error => console.error('Error deleting route:', error));
  };

handleAddRoute = async () => {
  const { newRoute, routes } = this.state;

  // Check if all fields are filled
  if (
    newRoute.name.trim() === '' ||
    newRoute.stops === '' ||
    newRoute.buses === '' ||
    newRoute.status.trim() === ''
  ) {
    alert('Please fill in all fields before adding a route.');
    return;
  }

  const payload = {
    name: newRoute.name,
    stops: parseInt(newRoute.stops),
    buses: parseInt(newRoute.buses),
    status: newRoute.status
  };

  try {
    const response = await fetch('http://localhost:5000/api/routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to add route');
    }

    const createdRoute = await response.json();

    this.setState({
      // routes: [...routes, { ...createdRoute, id: createdRoute._id }],
      routes: [...routes, createdRoute],
      newRoute: { name: '', stops: '', buses: '', status: 'Active' }
    });
  } catch (error) {
    console.error('Error adding route:', error);
    alert('Error adding route. Please check backend.');
  }
};



  render() {
    const { routes, isEditing, newRoute } = this.state;

    return (
      <div>
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold">Route Management</h3>
          <button onClick={this.handleAddRoute} className="btn btn-primary flex items-center">
            <FiPlus className="mr-2" /> Add Route
          </button>
        </div>

        {/* New Route Input */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Route Name"
            className="form-input"
            value={newRoute.name}
            onChange={(e) => this.handleInputChange(e, 'name')}
          />
          <input
            type="number"
            placeholder="Stop Number"
            className="form-input"
            value={newRoute.stops}
            onChange={(e) => this.handleInputChange(e, 'stops')}
          />
          <input
            type="number"
            placeholder="Bus Number"
            className="form-input"
            value={newRoute.buses}
            onChange={(e) => this.handleInputChange(e, 'buses')}
          />
          <select
            className="form-input"
            value={newRoute.status}
            onChange={(e) => this.handleInputChange(e, 'status')}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stop</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bus</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {routes.map(route => (
                <tr key={route._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === route._id ? (
                      <input
                        type="text"
                        value={route.name}
                        onChange={(e) => this.handleInputChange(e, 'name', route._id)}
                        className="form-input"
                      />
                    ) : (
                      <span>{route.name}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === route._id ? (
                      <input
                        type="number"
                        value={route.stops}
                        onChange={(e) => this.handleInputChange(e, 'stops', route._id)}
                        className="form-input"
                      />
                    ) : (
                      <span>{route.stops}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === route._id ? (
                      <input
                        type="number"
                        value={route.buses}
                        onChange={(e) => this.handleInputChange(e, 'buses', route._id)}
                        className="form-input"
                      />
                    ) : (
                      <span>{route.buses}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === route._id ? (
                      <select
                        value={route.status}
                        onChange={(e) => this.handleInputChange(e, 'status', route._id)}
                        className="form-input"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    ) : (
                      <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${route.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {route.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {isEditing === route._id ? (
                        <>
                          <button onClick={() => this.handleSave(route._id)} className="text-green-600 hover:text-green-900"><FiCheck /></button>
                          <button onClick={() => this.setState({ isEditing: null })} className="text-gray-600 hover:text-gray-900"><FiX /></button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => this.handleEdit(route._id)} className="text-blue-600 hover:text-blue-900"><FiEdit2 /></button>
                          <button onClick={() => this.handleDelete(route._id)} className="text-red-600 hover:text-red-900"><FiTrash2 /></button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RouteManager;
