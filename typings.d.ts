interface SanityBody{
  _createdAt: string,
  _id: string,
  _rev: string,
  _updtedAt: string
}

interface Image{
  _type: "image";
  asset: {
    _ref: string,
    _type: "reference"
  } 
}

export interface PageInfo extends SanityBody{
  _type: "pageInfo";
  backgroundInfo: string;
  heroImage: Image;
  name: string;
  address: string;
  socials: Socials[]
  email: string;
  role: string;
  profilePic: Image;
  phoneNumber: string;
}

export interface Technology extends SanityBody{
  _type: "skills";
  image: Image;
  progress: number;
  title: string;  
}

export interface Skills extends SanityBody{
  _type: "skills";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody{
  _type: "project";
  projectImage: Image;
  title: string; 
  technologies: Technology[]
  githubLink: string;
  deployedLink: string;
  points: string[];
  completionDate: string;
}


export interface Socials extends SanityBody{
  _type: "socials";
  title: string;
  url: string;
}

