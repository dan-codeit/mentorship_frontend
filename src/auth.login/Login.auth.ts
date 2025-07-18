export interface LoginResponse {
  message: string;
  token?: string;
  user?: {
    id: number;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
  };
}

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const baseUrl =
      import.meta.env.VITE_CLOUD_URL || import.meta.env.VITE_LOCAL_URL;

    const response = await fetch(`${baseUrl}/users/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error: unknown) {
    let message = "An error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return { message };
  }
}
