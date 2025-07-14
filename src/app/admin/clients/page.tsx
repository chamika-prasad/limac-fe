"use client";

import React, { useState } from "react";
import "./page.scss";

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState("clients");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<{ name: string; logo: string } | null>(null);

  const clients = [
    { name: "Client A", logo: "logo-a.png" },
    { name: "Client B", logo: "logo-b.png" },
  ];

  const handleAdd = () => {
    console.log("Add client");
    setShowAddModal(false);
  };

  const handleEdit = () => {
    console.log("Edit client");
    setShowEditModal(false);
  };

  const handleDelete = () => {
    console.log("Delete client");
    setShowDeleteModal(false);
  };

  return (
    <div className="clients-page">
      <div className="top-nav">
        {["clients", "projects", "services"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="add-client-section">
        <button className="add-btn" onClick={() => setShowAddModal(true)}>
          Add Client
        </button>
      </div>

      <div className="client-list">
        {clients.map((client, index) => (
          <div key={index} className="client-row">
            <span className="client-name">{client.name}</span>
            <div className="client-actions">
              <button
                className="edit-btn"
                onClick={() => {
                  setSelectedClient(client);
                  setShowEditModal(true);
                }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  setSelectedClient(client);
                  setShowDeleteModal(true);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Client</h3>
            <input type="text" placeholder="Client Name" />
            <input type="file" accept="image/*" />
            <button onClick={handleAdd}>Submit</button>
            <button onClick={() => setShowAddModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedClient && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Client</h3>
            <input type="text" defaultValue={selectedClient.name} />
            <input type="file" accept="image/*" />
            <button onClick={handleEdit}>Update</button>
            <button onClick={() => setShowEditModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedClient && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete {selectedClient.name}?</h3>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}