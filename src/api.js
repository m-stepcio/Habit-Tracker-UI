const API_URL = "http://localhost:8080";
const token = ""


export async function getHabits() {
  const response = await fetch(`${API_URL}/me/habits`,{
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}