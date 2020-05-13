import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import { IMovie } from '../models/movie';
import api from '../api/api';

class Store {
	@observable movies: IMovie[] = [];
	@observable selectedMovie: IMovie | undefined;
	@observable isEdit = false;

	@computed get moviesByTitle() {
		return this.movies.slice().sort((a, b) => a.title.localeCompare(b.title))
	}

	@action loadMovies = async () => {
		try {
			const movies = await api.Movies.list()
			movies.forEach((movie) => {
				this.movies.push(movie)
			});	
		} catch (error) {
			console.log(error);
		}
	};

	@action selectMovie = (id: string) => {
		this.selectedMovie = this.movies.find(m => m.id === id);
		this.isEdit = true;
	}

	@action createMovie = async (movie: IMovie) => {
		try {
			await api.Movies.create(movie);
			this.movies.push(movie);
			this.isEdit = false;
		} catch (error) {
			console.log(error);
		}
	}

	@action editMovie = async (movie: IMovie) => {
		try {
			await api.Movies.update(movie)
			this.isEdit = false
		} catch (error) {
			console.log(error);
		}
	}

	@action deleteMovie = async (id: string) => {
		try {
			await api.Movies.delete(id)
		} catch (error) {
			console.log(error)
		}
	}

	@action handleCreateForm = () => {
		this.isEdit = true;
		this.selectedMovie = undefined;
	}

	@action handleCancel = () => {
		this.isEdit = false;
		this.selectedMovie = undefined;
	}
}

export default createContext(new Store())