import { useParams } from "react-router-dom";
import MovieForm from "./MovieForm";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

export default function EditMovie() {
    const {id}: any = useParams();

    const nonSelectedGenres: genreDTO[] = [{id: 2, name: 'Action'}]
    const selectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]    
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'Cradlestone'},{id: 3, name: 'Hyde Park'}];
    const selectedMovieTheaters: movieTheaterDTO[] = [{id: 2, name: 'Cresta'},{id: 4, name: 'Fourways'}];
    
    return (
        <>
            <h3>Edit Movie</h3>

            <MovieForm model={{title: 'Gladiator II', inTheaters: true, trailer: 'https://www.youtube.com/watch?v=4rgYUipGJNo',
                releaseDate: new Date('2024-11-01T00:00:00')
            }} 
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={selectedMovieTheaters}
            />
        </>
    )
}