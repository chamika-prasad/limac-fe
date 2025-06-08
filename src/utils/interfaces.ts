interface ImageData {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface ProjectInfoObject {
  id: string;
  name: string;
  highlights: string[];
  des1: string;
  des2: string;
  images: ImageData[];
  location: string;
}
