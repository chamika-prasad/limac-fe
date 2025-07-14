import { baseApi } from "./baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all projects
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects/get-all",
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
      providesTags: ["Projects"],
    }),

    // Get project by ID
    getProjectById: builder.query({
      query: (id: string) => ({
        url: `/projects/get/${id}`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
      //   providesTags: (result, error, id) => [{ type: 'Projects', id }],
    }),

    // Add new project
    addProject: builder.mutation({
      query: (projectData: FormData) => ({
        url: "/projects/add",
        method: "POST",
        body: projectData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        // FormData is automatically handled by fetchBaseQuery
      }),
      invalidatesTags: ["Projects"],
    }),

    updateProject: builder.mutation({
      query: ({ id, updateData }: { id: string; updateData: FormData }) => {
        return {
          url: `/projects/update/${id}`,
          method: "PUT",
          body: updateData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        };
      },
      invalidatesTags: ["Projects"],
    }),

    // Delete project
    deleteProject: builder.mutation({
      query: (id: string) => ({
        url: `/projects/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
