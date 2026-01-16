import { INVALID_GENRES_MESSAGE, VALID_GENRES } from '../../scripts/scratch/ex27_textConstants.js'

export class Movie {
  constructor({ imdbId, title, director, premiereYear, originMovie, genres, imdbRating }) {
    this.imdbId = imdbId
    this.title = title
    this.director = director
    this.premiereYear = premiereYear
    this.originMovie = originMovie
    this.genres = genres
    this.imdbRating = imdbRating

    this.imdbIdValidation()
    this.titleValidation()
    this.directorValidation()
    this.premiereYearValidation()
    this.originMovieValidation()
    this.genresValidation()
    this.imdbRatingValidation()
  }

  imdbIdValidation() {
    if (this.imdbId === null) throw new Error('Put a IMDb Id.')

    if (!/^tt\d{7,}$/i.test(this.imdbId)) throw new Error('Invalid IMDb Id.')
  }

  titleValidation() {
    if (this.title === null) throw new Error('Put a Movie Title.')

    if (this.title.length > 100) throw new Error('Movie Title must have less than 100 characters.')
  }

  directorValidation() {
    if (this.director === null) throw new Error('Put a Director Description.')

    if (this.director.length > 50) throw new Error('Director Description must have less than 50 characters.')
  }

  premiereYearValidation() {
    if (this.premiereYear === null) throw new Error('Put a Year.')

    if (this.premiereYear < 1888) throw new Error('Invalid Year.')

    if (this.premiereYear > new Date().getFullYear()) throw new Error('Invalid Year.')
  }

  originMovieValidation() {
    if (this.originMovie === null) throw new Error('Put a Origin Country|Countries. ')

    if (!Array.isArray(this.originMovie)) throw new Error('Invalid Origin Country|Countries Input.')
  }

  genresValidation() {
    if (!Array.isArray(this.genres)) throw new Error('Invalid Genre|Genres Input.')

    const normalizedGenres = this.genres.map((el) => el.trim().toLowerCase())

    const validGenres = VALID_GENRES.map((el) => el.toLowerCase())

    const allValid = normalizedGenres.every((el) => validGenres.includes(el))
    if (!allValid) throw new Error(INVALID_GENRES_MESSAGE)

    this.genres = normalizedGenres.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
  }

  imdbRatingValidation() {
    if (this.imdbRating <= 0 || this.imdbRating > 10) throw new Error('You must put a Valid IMDb Rating.')
    this.imdbRating.toFixed(1)
  }

  technicalSheet() {
    console.info(
      `Tecnnical Sheet:\nTitle: ${this.title}\nDirector: ${this.director}\nPremiere Year: ${
        this.premiereYear
      }\nOrigin: ${this.originMovie.join(' / ')}\nGenre: ${this.genres.join('-')}\nCalification: ${
        this.imdbRating
      }\n\n(IMDb Identificator: ${this.imdbId})\n\n`,
    )
  }
}

// import { Movie } from './exercises/jmircha/ex27.js'

// const myMovies = [
//   {
//     imdbId: 'tt0071562',
//     title: 'The Godfather: Part II',
//     director: 'Francis Ford Coppola',
//     premiereYear: 1974,
//     originMovie: ['United States'],
//     genres: ['Crime', 'Drama'],
//     imdbRating: 9.0,
//   },
//   {
//     imdbId: 'tt0099685',
//     title: 'Goodfellas',
//     director: 'Martin Scorsese',
//     premiereYear: 1990,
//     originMovie: ['United States'],
//     genres: ['Crime', 'Drama'],
//     imdbRating: 8.7,
//   },
//   {
//     imdbId: 'tt0086250',
//     title: 'Scarface',
//     director: 'Brian De Palma',
//     premiereYear: 1983,
//     originMovie: ['United States'],
//     genres: ['Crime', 'Drama'],
//     imdbRating: 8.3,
//   },
// ]

// myMovies.forEach((el) => new Movie(el).technicalSheet())
