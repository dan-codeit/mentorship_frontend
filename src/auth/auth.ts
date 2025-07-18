export interface User {
  id: number;
  email: string;
  role: "mentor" | "mentee" | "admin";
  firstName: string;
  lastName: string;
}

export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

export const getUser = (): User | null => {
  const user = localStorage.getItem("user");
  try {
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const isAuthorized = (allowedRoles: string[]): boolean => {
  const user = getUser();
    return !!user && allowedRoles.includes(user.role);
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};
