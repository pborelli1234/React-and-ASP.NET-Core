import { useParams } from "react-router-dom";
import MovieForm from "./MovieForm";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import { actorMovieDTO } from "../actors/actors.model";

export default function EditMovie() {
    const {id}: any = useParams();

    const nonSelectedGenres: genreDTO[] = [{id: 2, name: 'Action'}]
    const selectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]    
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'Cradlestone'},{id: 3, name: 'Hyde Park'}];
    const selectedMovieTheaters: movieTheaterDTO[] = [{id: 2, name: 'Cresta'},{id: 4, name: 'Fourways'}];

    const selectedActors: actorMovieDTO[] = [
        {id: 1, name: 'Felipe', character: 'Geralt', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'}
    ]
    
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
                selectedActors={selectedActors}
            />
        </>
    )
}