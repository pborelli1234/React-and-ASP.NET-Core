import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {

    const nonSelectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}, {id: 2, name: 'Action'}];
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'Cradlestone'}, {id: 2, name: 'Cresta'}, {id: 3, name: 'Hyde Park'}, {id: 4, name: 'Fourways'}];

    return (
        <>
            <h3>Create Movie</h3>

            <MovieForm model={{title: '', inTheaters: false, trailer: ''}} 
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={[]}
                selectedActors={[]}
            />
        </>
    )
}