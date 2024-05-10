export interface Todo {
    id?: number; // Optional as it will be assigned by the backend
    title: string;
    completed?: boolean; // Optional, depending on your application logic
  }
  