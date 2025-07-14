"use client";

import React, { useState } from "react";
import {
  useAddServiceMutation,
  useDeleteServiceMutation,
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} from "@/app/api/serviceApi";
import { Service } from "@/types";
import classNames from "classnames";
import "./page.scss";

export default function ServicesPage() {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [activeTab, setActiveTab] = useState("services");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceLogo, setNewServiceLogo] = useState<File | null>(null);
  const [newServiceImage, setNewServiceImage] = useState<File | null>(null);
  const [newServiceIncludes, setNewServiceIncludes] = useState("");

  const [updateServiceName, setUpdateServiceName] = useState("");
  const [updateLogo, setUpdateLogo] = useState<File | null>(null);
  const [updateImage, setUpdateImage] = useState<File | null>(null);
  const [updateIncludes, setUpdateIncludes] = useState("");

  const [addService, { isLoading: isAdding }] = useAddServiceMutation();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { data: servicesData, isLoading, isError } = useGetAllServicesQuery({});
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [deleteService, { isLoading: isDeleting }] = useDeleteServiceMutation();

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append("serviceName", newServiceName);
      if (newServiceLogo) formData.append("logo", newServiceLogo);
      if (newServiceImage) formData.append("image", newServiceImage);
      formData.append("includes", newServiceIncludes);

      const response = await addService(formData).unwrap();
      alert(response?.message || "Service added successfully");

      // Clear form & close modal
      setNewServiceName("");
      setNewServiceLogo(null);
      setNewServiceImage(null);
      setNewServiceIncludes("");
      setShowAddModal(false);
    } catch (error) {
      console.error("Failed to add service:", error);
      alert("Failed to add service");
    }
  };

  const handleEdit = async () => {
    if (!selectedService) return;
    setShowEditModal(false);

    const formData = new FormData();
    if (updateServiceName !== selectedService.serviceName) {
      formData.append("serviceName", updateServiceName);
    }
    if (updateIncludes !== selectedService.includes) {
      formData.append("includes", updateIncludes);
    }
    if (updateLogo) {
      formData.append("logo", updateLogo);
    }

    if (updateImage) {
      formData.append("image", updateImage);
    }

    try {
      const response = await updateService({
        id: selectedService.id,
        updateData: formData,
      }).unwrap();

      alert(response?.message || "Service updated successfully");
      setShowEditModal(false);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update service.");
    }
  };

  const handleEditModalOpen = (service: Service) => {
    setSelectedService(service);
    setUpdateServiceName(service.serviceName);
    setUpdateIncludes(service.includes);
    setUpdateLogo(null);
    setUpdateImage(null);
    setShowEditModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      try {
        const response = await deleteService(id).unwrap();
        alert(response?.message || "Service deleted successfully");
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Failed to delete service.");
      }
    }
  };

  const handleNavigation = (tab: string) => {
    if (tab === "projects") {
      window.location.href = "/admin/projects";
    }
  };

  const isAddDisabled =
    !newServiceName ||
    !newServiceLogo ||
    !newServiceImage ||
    !newServiceIncludes;

  return (
    <div className="services-page">
      <div className="top-nav">
        {["projects", "services"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "nav-btn active" : "nav-btn"}
            onClick={() => handleNavigation(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="add-service-section">
        <button className="add-btn" onClick={() => setShowAddModal(true)}>
          Add Service
        </button>
      </div>

      <div className="service-list">
        {servicesData &&
          servicesData.success &&
          servicesData.data &&
          servicesData.data.length > 0 &&
          servicesData.data.map((service: Service, index: number) => (
            <div key={index} className="service-row">
              <span className="service-name">{service.serviceName}</span>
              <div className="service-actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEditModalOpen(service)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(service.id)}
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
            <h3>Add Service</h3>
            <input
              type="text"
              placeholder="Service Name"
              value={newServiceName}
              onChange={(e) => setNewServiceName(e.target.value)}
            />
            <h5>Logo</h5>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewServiceLogo(e.target.files?.[0] || null)}
            />
            <h5>Image</h5>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewServiceImage(e.target.files?.[0] || null)}
            />
            <textarea
              placeholder="Includes (comma separated)"
              value={newServiceIncludes}
              onChange={(e) => setNewServiceIncludes(e.target.value)}
            ></textarea>
            <button
              onClick={handleAdd}
              disabled={isAdding || isAddDisabled}
              className={classNames("add-btn", isAddDisabled ? "disabled" : "")}
            >
              {isAdding ? "Submitting..." : "Submit"}
            </button>
            <button
              onClick={() => setShowAddModal(false)}
              className="delete-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedService && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Service</h3>
            <input
              type="text"
              value={updateServiceName}
              placeholder="Service Name"
              onChange={(e) => setUpdateServiceName(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              placeholder="Logo"
              onChange={(e) => setUpdateLogo(e.target.files?.[0] || null)}
            />
            <input
              type="file"
              accept="image/*"
              placeholder="Image"
              onChange={(e) => setUpdateImage(e.target.files?.[0] || null)}
            />
            <textarea
              placeholder="Includes (comma separated)"
              value={updateIncludes}
              onChange={(e) => setUpdateIncludes(e.target.value)}
            ></textarea>
            <button onClick={handleEdit} className="add-btn">
              Update
            </button>
            <button
              onClick={() => setShowEditModal(false)}
              className="delete-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
