import React, { Component } from "react";
import { FiPlus } from "react-icons/fi";

class BroadcastMessages extends Component {
  constructor(props) {
    super(props);
    const savedMessages = localStorage.getItem("broadcastMessages");
    this.state = {
      showForm: false,
      recipient: "All Users",
      type: "Informational",
      message: "",
      messages: savedMessages
        ? JSON.parse(savedMessages)
        : [
            {
              title: "Route 24 Schedule Change",
              time: "2 hours ago",
              body: "Route 24 will be delayed by 15 minutes tomorrow due to road construction.",
              recipient: "Route 24 Users",
              bgColor: "bg-blue-50",
            },
            {
              title: "Weather Alert",
              time: "Yesterday",
              body: "Due to expected heavy rain, please ensure students have appropriate rain gear.",
              recipient: "All Users",
              bgColor: "bg-yellow-50",
            },
            {
              title: "Holiday Schedule",
              time: "3 days ago",
              body: "No service on Monday, May 30th due to Memorial Day.",
              recipient: "All Users",
              bgColor: "bg-gray-50",
            },
          ],
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.messages !== this.state.messages) {
      localStorage.setItem("broadcastMessages", JSON.stringify(this.state.messages));
    }
  }

  handleToggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSendMessage = () => {
    const { recipient, type, message } = this.state;
    if (!message.trim()) return;

    const newMessage = {
      title: type,
      time: "Just now",
      body: message,
      recipient: recipient,
      bgColor:
        type === "Alert"
          ? "bg-yellow-50"
          : type === "Emergency"
          ? "bg-red-100"
          : "bg-blue-50",
    };

    this.setState((prevState) => ({
      messages: [newMessage, ...prevState.messages],
      message: "",
      type: "Informational",
      recipient: "All Users",
      showForm: false,
    }));
  };

  handleDeleteMessage = (index) => {
    this.setState((prevState) => {
      const updatedMessages = [...prevState.messages];
      updatedMessages.splice(index, 1);
      return { messages: updatedMessages };
    });
  };

  render() {
    const { showForm, recipient, type, message, messages } = this.state;

    return (
      <div>
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold">Notifications</h3>
          <button
            onClick={this.handleToggleForm}
            className="btn btn-primary flex items-center"
          >
            <FiPlus className="mr-2" /> New Message
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {showForm && (
            <div className="card">
              <h4 className="font-semibold mb-2">New Message</h4>
              <div className="space-y-4">
                <div>
                  <label className="form-label">Recipients</label>
                  <select
                    className="form-input"
                    name="recipient"
                    value={recipient}
                    onChange={this.handleChange}
                  >
                    <option>All Users</option>
                    <option>Students Only</option>
                    <option>Parents Only</option>
                    <option>Route 24 Users</option>
                    <option>Route 17 Users</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Message Type</label>
                  <select
                    className="form-input"
                    name="type"
                    value={type}
                    onChange={this.handleChange}
                  >
                    <option>Informational</option>
                    <option>Alert</option>
                    <option>Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input h-32"
                    name="message"
                    placeholder="Enter your message here..."
                    value={message}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button className="btn btn-primary" onClick={this.handleSendMessage}>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="card">
            <h4 className="font-semibold mb-4">Recent Notifications</h4>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`p-3 rounded-lg ${msg.bgColor}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{msg.title}</p>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <button
                      className="text-red-500 text-sm"
                      onClick={() => this.handleDeleteMessage(index)}
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{msg.body}</p>
                  <p className="text-xs text-gray-500 mt-1">Sent to: {msg.recipient}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BroadcastMessages;
