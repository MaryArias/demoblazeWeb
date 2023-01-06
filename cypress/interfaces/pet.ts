export interface pet {
    name: string;
    photoUrls: string[];
    tags: Tag[];
    status: string;
  }
  
  export interface Tag {
    id: number;
    name: string;
  }