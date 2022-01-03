export interface JobType {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export interface SearchFieldsType {
  queryString: string;
  location: string;
  fullTime: boolean;
}

export type SearchContextType = [
  SearchFieldsType,
  (args: SearchFieldsType) => void
];
