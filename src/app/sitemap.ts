import { MetadataRoute } from "next";
import { Project } from "@/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all projects using the API query
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/get-all`
  );
  const projects = await res.json();

  if (!projects.success) {
    return [];
  }

  const projectUrls = projects.data.map((project: Project) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${project.urlPrefix}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
