"use client";

import React, { useEffect, useState } from "react";
import {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} from "@/app/api/projectApi";
import { Project } from "@/types";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "./page.scss";

export default function ProjectsPage() {
  const router = useRouter();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [activeTab, setActiveTab] = useState("projects");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [projectName, setProjectName] = useState("");
  const [location, setLocation] = useState("");
  const [topDescription, setTopDescription] = useState("");
  const [bottomDescription, setBottomDescription] = useState("");
  const [topImages, setTopImages] = useState<File[]>([]);
  const [bottomImages, setBottomImages] = useState<File[]>([]);
  const [highlights, setHighlights] = useState("");

  const [updateProjectName, setUpdateProjectName] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");
  const [updateTopDescription, setUpdateTopDescription] = useState("");
  const [updateBottomDescription, setUpdateBottomDescription] = useState("");
  const [updateTopImages, setUpdateTopImages] = useState<File[]>([]);
  const [updateBottomImages, setUpdateBottomImages] = useState<File[]>([]);
  const [updateHighlights, setUpdateHighlights] = useState("");
  const [updateStatus, setUpdateStatus] = useState<string>("incomplete");
  const [updateExistingTopImages, setUpdateExistingTopImages] = useState<
    string[]
  >([]);
  const [updateExistingBottomImages, setUpdateExistingBottomImages] = useState<
    string[]
  >([]);
  const [updateRemovedExistingTopImages, setUpdateRemovedExistingTopImages] =
    useState<string[]>([]);
  const [
    updateRemovedExistingBottomImages,
    setUpdateRemovedExistingBottomImages,
  ] = useState<string[]>([]);

  const {
    data: fetchedProjectsData,
    isLoading,
    isError,
  } = useGetAllProjectsQuery({});

  const [addProject] = useAddProjectMutation();
  const [updateProject] = useUpdateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();

  const handleTopImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (topImages.length + files.length > 5) {
      // alert("Maximum 5 top images allowed");
      toast.error("Maximum 5 top images allowed");
      return;
    }
    setTopImages((prev) => [...prev, ...files]);
  };

  const handleBottomImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setBottomImages((prev) => [...prev, ...files]);
  };

  const handleUpdateTopImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    if (
      updateTopImages.length + files.length + updateExistingTopImages.length >
      5
    ) {
      // alert("Maximum 5 top images allowed");
      toast.error("Maximum 5 top images allowed");
      return;
    }
    setUpdateTopImages((prev) => [...prev, ...files]);
  };

  const handleUpdateBottomImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    setUpdateBottomImages((prev) => [...prev, ...files]);
  };

  const removeUpdateTopImage = (index: number) => {
    setUpdateTopImages(topImages.filter((_, i) => i !== index));
  };

  const removeUpdateBottomImage = (index: number) => {
    setUpdateBottomImages(bottomImages.filter((_, i) => i !== index));
  };

  const handleRemoveExistingTopImage = (index: number) => {
    setUpdateExistingTopImages((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(index, 1);
      setUpdateRemovedExistingTopImages((removedPrev) => [
        ...removedPrev,
        removed,
      ]);
      return updated;
    });
  };

  const handleRemoveExistingBottomImage = (index: number) => {
    setUpdateExistingBottomImages((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(index, 1);
      setUpdateRemovedExistingBottomImages((removedPrev) => [
        ...removedPrev,
        removed,
      ]);
      return updated;
    });
  };

  const removeTopImage = (index: number) => {
    setTopImages(topImages.filter((_, i) => i !== index));
  };

  const removeBottomImage = (index: number) => {
    setBottomImages(bottomImages.filter((_, i) => i !== index));
  };

  const handleAdd = async () => {
    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("location", location);
    formData.append("topDescription", topDescription);
    formData.append("bottomDescription", bottomDescription);

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    topImages.forEach((file, index) => {
      formData.append(`topImages`, file);
    });

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    bottomImages.forEach((file, index) => {
      formData.append(`bottomImages`, file);
    });
    formData.append("highlights", highlights);
    formData.append("status", "ongoing");

    try {
      const response = await addProject(formData).unwrap();
      // alert(response?.message);
      toast.success(response?.message);
      setShowAddModal(false);
    } catch (error) {
      console.error("Failed to add project:", error);
      if (
        error &&
        typeof error === "object" &&
        "data" in error &&
        error.data &&
        typeof error.data === "object" &&
        "message" in error.data &&
        typeof error.data.message === "string"
      ) {
        toast.error(error.data.message || "Failed to add project");
      }
      if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        ((error as { status: number }).status === 401 ||
          (error as { status: number }).status === 403)
      ) {
        toast.error("Please login first ");
        // window.location.href = "/admin";
        router.push("/admin");
      }
    }
  };

  const handleEdit = async () => {
    if (!selectedProject) {
      return;
    }

    if (updateTopImages.length !== updateRemovedExistingTopImages.length) {
      // alert("Top images count should 5");
      toast.error("Top images count should 5");
      return;
    }
    const formData = new FormData();
    if (
      updateProjectName &&
      updateProjectName !== selectedProject?.projectName
    ) {
      formData.append("projectName", updateProjectName);
    }
    if (updateLocation && updateLocation !== selectedProject?.location) {
      formData.append("location", updateLocation);
    }
    if (
      updateTopDescription &&
      updateTopDescription !== selectedProject?.topDescription
    ) {
      formData.append("topDescription", updateTopDescription);
    }
    if (
      updateBottomDescription &&
      updateBottomDescription !== selectedProject?.bottomDescription
    ) {
      formData.append("bottomDescription", updateBottomDescription);
    }
    if (updateTopImages.length > 0) {
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      updateTopImages.forEach((file, index) => {
        formData.append("topImages", file);
      });
    }
    if (updateBottomImages.length > 0) {
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      updateBottomImages.forEach((file, index) => {
        formData.append("bottomImages", file);
      });
    }

    if (updateHighlights && updateHighlights !== selectedProject?.highlights) {
      formData.append("highlights", updateHighlights);
    }

    if (updateRemovedExistingTopImages.length > 0) {
      formData.append(
        "removeTopImages",
        updateRemovedExistingTopImages.join(",")
      );
    }

    if (updateRemovedExistingBottomImages.length > 0) {
      formData.append(
        "removeBottomImages",
        updateRemovedExistingBottomImages.join(",")
      );
    }

    if (updateStatus === "completed") {
      formData.append("status", "completed");
    }

    try {
      const response = await updateProject({
        id: selectedProject.id,
        updateData: formData,
      }).unwrap();
      // alert(response?.message);
      toast.success(response?.message);
      setShowEditModal(false);
    } catch (error) {
      console.error("Failed to update project:", error);
      // alert("Failed to update project");
      if (
        error &&
        typeof error === "object" &&
        "data" in error &&
        error.data &&
        typeof error.data === "object" &&
        "message" in error.data &&
        typeof error.data.message === "string"
      ) {
        toast.error(error.data.message || "Failed to update project");
      }
      if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        ((error as { status: number }).status === 401 ||
          (error as { status: number }).status === 403)
      ) {
        // window.location.href = "/admin";
        toast.error("Please login first ");
        router.push("/admin");
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await deleteProject(id).unwrap();
        // alert("Project deleted successfully");
        toast.success("Project deleted successfully");
        console.log("Delete response:", response);
      } catch (error) {
        console.error("Failed to delete project:", error);

        if (
          error &&
          typeof error === "object" &&
          "data" in error &&
          error.data &&
          typeof error.data === "object" &&
          "message" in error.data &&
          typeof error.data.message === "string"
        ) {
          toast.error(error.data.message || "Failed to delete project");
        }
        
        if (
          error &&
          typeof error === "object" &&
          "status" in error &&
          ((error as { status: number }).status === 401 ||
            (error as { status: number }).status === 403)
        ) {
          // window.location.href = "/admin";
          toast.error("Please login first ");
          router.push("/admin");
        }
      }
    }
  };

  const openAddModal = () => {
    setProjectName("");
    setLocation("");
    setTopDescription("");
    setBottomDescription("");
    setTopImages([]);
    setBottomImages([]);
    setHighlights("");
    setShowAddModal(true);
  };

  const openEditModal = (project: Project) => {
    setSelectedProject(project);
    setUpdateProjectName(project.projectName);
    setUpdateLocation(project.location);
    setUpdateTopDescription(project.topDescription);
    setUpdateBottomDescription(project.bottomDescription);
    setUpdateExistingTopImages(
      project.topImages ? project.topImages.split(",") : []
    );
    setUpdateExistingBottomImages(
      project.bottomImages ? project.bottomImages.split(",") : []
    );
    setUpdateTopImages([]);
    setUpdateBottomImages([]);
    setUpdateHighlights(project.highlights);
    setShowEditModal(true);
    setUpdateRemovedExistingBottomImages([]);
    setUpdateRemovedExistingTopImages([]);
    if (project.status === "ongoing") {
      setUpdateStatus("ongoing");
    } else {
      setUpdateStatus("completed");
    }
  };

  const handleNavigation = (tab: string) => {
    if (tab === "services") {
      // window.location.href = "/admin/services";
      router.push("/admin/services");
    }
  };

  const isAddDisabled =
    !highlights.trim() ||
    !projectName.trim() ||
    !location.trim() ||
    !topDescription.trim() ||
    !bottomDescription.trim() ||
    topImages.length !== 5 ||
    bottomImages.length === 0;

  const isEditDisabled = selectedProject
    ? updateProjectName === selectedProject.projectName &&
      updateLocation === selectedProject.location &&
      updateTopDescription === selectedProject.topDescription &&
      updateBottomDescription === selectedProject.bottomDescription &&
      updateHighlights === selectedProject.highlights &&
      updateStatus === selectedProject.status &&
      updateTopImages.length === 0
    : true; // Disable if selectedProject is null

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Token not found, redirect to admin route
      router.push("/admin");
      return;
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching projects</div>;
  }

  return (
    <div className="projects-page">
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

      <div className="add-project-section">
        <button className="add-btn" onClick={openAddModal}>
          Add Project
        </button>
      </div>

      {fetchedProjectsData &&
      fetchedProjectsData.success &&
      fetchedProjectsData.data.length > 0 ? (
        <div className="project-list">
          {fetchedProjectsData.data.map((project: Project, index: number) => (
            <div key={index} className="project-row">
              <span className="project-name">{project.projectName}</span>
              <div className="project-actions">
                <button
                  className="edit-btn"
                  onClick={() => openEditModal(project)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* Add Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Project</h3>
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <textarea
              placeholder="Top Description"
              value={topDescription}
              onChange={(e) => setTopDescription(e.target.value)}
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleTopImagesChange}
            />
            {topImages.length > 0 ? (
              <div className="image-preview">
                {topImages.map((img, idx) => (
                  <div key={idx} className="preview-item">
                    <img src={URL.createObjectURL(img)} alt="Top preview" />
                    <button onClick={() => removeTopImage(idx)}>🗑</button>
                  </div>
                ))}
              </div>
            ) : null}
            <textarea
              placeholder="Bottom Description"
              value={bottomDescription}
              onChange={(e) => setBottomDescription(e.target.value)}
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleBottomImagesChange}
            />
            {bottomImages.length > 0 ? (
              <div className="image-preview">
                {bottomImages.map((img, idx) => (
                  <div key={idx} className="preview-item">
                    <img src={URL.createObjectURL(img)} alt="Bottom preview" />
                    <button onClick={() => removeBottomImage(idx)}>🗑</button>
                  </div>
                ))}
              </div>
            ) : null}
            <textarea
              placeholder="Highlights (comma separated)"
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
            />
            <button
              className={classNames("add-btn", isAddDisabled ? "disabled" : "")}
              onClick={handleAdd}
              disabled={isAddDisabled}
            >
              Submit
            </button>
            <button
              className="delete-btn"
              onClick={() => setShowAddModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Project</h3>
            <input
              type="text"
              placeholder="Project Name"
              value={updateProjectName}
              onChange={(e) => setUpdateProjectName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={updateLocation}
              onChange={(e) => setUpdateLocation(e.target.value)}
            />
            <textarea
              placeholder="Top Description"
              value={updateTopDescription}
              onChange={(e) => setUpdateTopDescription(e.target.value)}
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpdateTopImagesChange}
            />
            {updateTopImages.length > 0 ? <h5>New Top Images</h5> : null}
            {updateTopImages.length > 0 ? (
              <div className="image-preview">
                {updateTopImages.map((img, idx) => (
                  <div key={idx} className="preview-item">
                    <img src={URL.createObjectURL(img)} alt="Top preview" />
                    <button onClick={() => removeUpdateTopImage(idx)}>🗑</button>
                  </div>
                ))}
              </div>
            ) : null}
            {updateExistingTopImages.length > 0 ? (
              <h5>Existing Top Images</h5>
            ) : null}
            {updateExistingTopImages.length > 0 ? (
              <div className="image-preview">
                {updateExistingTopImages.map((img, idx) => (
                  <div key={idx} className="preview-item">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`}
                      alt="Top preview"
                    />
                    <button onClick={() => handleRemoveExistingTopImage(idx)}>
                      🗑
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
            <textarea
              placeholder="Bottom Description"
              value={updateBottomDescription}
              onChange={(e) => setUpdateBottomDescription(e.target.value)}
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpdateBottomImagesChange}
            />
            {updateBottomImages.length > 0 ? <h5>New Bottom Images</h5> : null}
            {updateBottomImages.length > 0 ? (
              <div className="image-preview">
                {updateBottomImages.map((img, idx) => (
                  <div key={idx} className="preview-item">
                    <img src={URL.createObjectURL(img)} alt="Bottom preview" />
                    <button onClick={() => removeUpdateBottomImage(idx)}>
                      🗑
                    </button>
                  </div>
                ))}
              </div>
            ) : null}

            {updateExistingBottomImages.length > 0 ? (
              <h5>Existing Bottom Images</h5>
            ) : null}
            {updateExistingBottomImages.length > 0 ? (
              <div className="image-preview">
                {updateExistingBottomImages.map((img, idx) => (
                  <div key={idx} className="preview-item">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`}
                      alt="Top preview"
                    />
                    <button
                      onClick={() => handleRemoveExistingBottomImage(idx)}
                    >
                      🗑
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
            <textarea
              placeholder="Highlights (comma separated)"
              value={updateHighlights}
              onChange={(e) => setUpdateHighlights(e.target.value)}
            />

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="completed"
                  checked={updateStatus === "completed"}
                  onChange={(e) => setUpdateStatus(e.target.value)}
                />
                Completed
              </label>
              <label>
                <input
                  type="radio"
                  value="ongoing"
                  checked={updateStatus === "ongoing"}
                  onChange={(e) => setUpdateStatus(e.target.value)}
                />
                Ongoing
              </label>
            </div>

            <button
              className={classNames(
                "add-btn",
                isEditDisabled ? "disabled" : ""
              )}
              onClick={handleEdit}
              disabled={isEditDisabled}
            >
              Update
            </button>
            <button
              className="delete-btn"
              onClick={() => setShowEditModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
