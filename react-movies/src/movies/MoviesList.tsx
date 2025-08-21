import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.module";
import css from "./MoviesList.module.css";
import Loading from './../utils/Loading';
import GenericList from "../utils/GenericList";

export default function MoviesList(props: moviesListProps) {

    return ( 
    <>
        <GenericList list={props.movies}>
            <div className={css.divList}>
                {props.movies?.map(movie => <IndividualMovie {...movie} key={movie.id} />)}
            </div>
        </GenericList>
    </>
    )
}

interface moviesListProps {
    movies?: movieDTO[]
}