export async function getTopics() {
  try {    
    const res = await fetch(`${process.env.API_URL}/topics?per_page=12`, {
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`
      }
    })
  
    const data = await res.json();
    
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}