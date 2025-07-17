export type Client = {
  name: string;
  logo: string;
};

export type Project = {
  id: string;
  projectName: string;
  location: string;
  topDescription: string;
  bottomDescription: string;
  topImages: string; // Comma-separated string of image paths
  bottomImages: string; // Comma-separated string of image paths
  highlights: string;
  status: "ongoing" | "completed" | "upcoming"; // Assuming limited status options
  urlPrefix: string;
};

export type Service = {
  id: string;
  serviceName: string;
  logo: string;
  includes: string;
  image: string;
}
