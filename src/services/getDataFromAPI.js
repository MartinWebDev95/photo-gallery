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

export async function getRandomImages() {
  try {    
    const res = await fetch(`${process.env.API_URL}/photos/random?count=25`, {
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

export async function getTopicImages({ slug }) {
  try {    
    const res = await fetch(`${process.env.API_URL}/topics/${slug}/photos?per_page=25`, {
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

export async function getImage({ id }) {
  try {    
    const res = await fetch(`${process.env.API_URL}/photos/${id}`, {
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

export async function getSearchImages({ query }) {
  try {    
    const res = await fetch(`${process.env.API_URL}/search/photos?query=${query}&per_page=25`, {
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