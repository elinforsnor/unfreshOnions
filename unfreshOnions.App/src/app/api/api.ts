import axios, { AxiosResponse } from 'axios';
import { IMovie } from '../models/movie';

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response : AxiosResponse) => response.data;

const requests = {
	get: (url: string) => axios.get(url).then(responseBody),
	post: (url: string, body: {}) => axios.post(url,body).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
	del: (url: string) => axios.delete(url).then(responseBody)
}

const Movies = {
	list: (): Promise<IMovie[]> => requests.get('/movies'),
	details: (id: string) => requests.get(`/movies/${id}`),
	create: (movie: IMovie) => requests.post('/movies', movie),
	update: (movie: IMovie) => requests.put(`/movies/${movie.id}`, movie),
	delete: (id: string) => requests.del(`/movies/${id}`)
}

export default {
	Movies
}