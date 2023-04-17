const API_URL = "https://dev-cinemascope-api.azurewebsites.net/api/movies/";

export const AllMovies = async () => {
    return await fetch(`${API_URL}admin`);
}

export const CreateMovie = async () => {
    return await fetch(`${API_URL}admin`);
}

export const EditMovie = async (id) => {
    return await fetch(`${API_URL}admin/${id}`);
}

export const DeleteMovie = async (id) => {
    return await fetch(`${API_URL}admin/${id}`);
}
export const DetailsMovie = async (id) => {
    return await fetch(`${API_URL}/${id}`);
}