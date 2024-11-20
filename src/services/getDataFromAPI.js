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

export async function getRandomImages({ page = 1 } = {}) {
  try {    
    const res = await fetch(`${process.env.API_URL}/photos?page=${page}&per_page=25`, {
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

export async function getTopicImages({ page = 1, slug } = {}) {
  try {    
    const res = await fetch(`${process.env.API_URL}/topics/${slug}/photos?page=${page}&per_page=25`, {
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

export async function getSearchImages({ page = 1, query } = {}) {
  try {    
    const res = await fetch(`${process.env.API_URL}/search/photos?query=${query}&page=${page}&per_page=25`, {
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`
      },
      cache: 'no-store'
    })
  
    const data = await res.json();
    
    return data.results;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getImagesCollection({ page = 1, id } = {}) {
  try {    
    const res = await fetch(`${process.env.API_URL}/collections/${id}/photos?page=${page}&per_page=25`, {
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

export async function getUserPhotos({ page = 1, id }) {
  try {    
    const res = await fetch(`${process.env.API_URL}/users/${id}/photos/?page=${page}&per_page=25`, {
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

export async function getUserDetail({ id }) {
  try {    
    const res = await fetch(`${process.env.API_URL}/users/${id}`, {
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