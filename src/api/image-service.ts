
const API_KEY = "39748054-661ce6dcbfcd29be34566f829"

let URL = "https://pixabay.com/api/?key="+API_KEY;

export const getRandomImage = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.hits[Math.floor(Math.random() * data.hits.length)];
}

