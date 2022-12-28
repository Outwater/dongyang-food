interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Role {
  id: number;
  name: "Admin" | "Authenticated" | "Public";
  description: string;
  type: "admin" | "authenticated" | "public";
  createdAt: string;
  updatedAt: string;
}

export interface UserCheckResponse extends User {
  role: Role;
}

export interface LoginResponse {
  jwt: string;
  user: User;
}
