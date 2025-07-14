import { baseApi } from "./baseApi";

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all services
    getAllServices: builder.query({
      query: () => ({
        url: "/services/get-all",
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
      providesTags: ["Services"],
    }),

    // Add new service
    addService: builder.mutation({
      query: (serviceData: FormData) => ({
        url: "/services/add",
        method: "POST",
        body: serviceData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Services"],
    }),

    // Update service
    updateService: builder.mutation({
      query: ({ id, updateData }: { id: string; updateData: FormData }) => {
        return {
          url: `/services/update/${id}`,
          method: "PUT",
          body: updateData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
      },
      invalidatesTags: ["Services"],
    }),

    // Delete service
    deleteService: builder.mutation({
      query: (id: string) => ({
        url: `/services/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Services"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = servicesApi;
