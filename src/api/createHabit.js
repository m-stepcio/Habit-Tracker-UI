const API_URL = "http://localhost:8080";
const token="";
const createHabit = async (formData) => {
    console.log("Executed")
    const response = await fetch(`${API_URL}/me/habits`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,
        },
            body: JSON.stringify(formData)
        });

    if(!response.ok){
        throw new Error("Failed to create new habit");
    }

    return response.json();

}

export default createHabit;