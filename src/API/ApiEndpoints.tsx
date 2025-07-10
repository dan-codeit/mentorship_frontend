import api from "./API";

export const getDashboardData = async () => {
  const response = await api.get("/mentee/dashboard");
  return response.data;
};

export const bookSession = async (mentorId: number, date: string) => {
  const response = await api.post("/sessions/book", {
    mentorId,
    date,
  });
  return response.data;
};

export const getMentorsList = async () => {
  const response = await api.get("/users/view/mentors");
  return response.data;
};


export const handleLogin = async (email: string, password: string) => { 
  const response = await api.post("/users/auth/login", { 
    email, 
    password, 
  });
  return response.data;
};