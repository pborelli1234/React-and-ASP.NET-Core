import { useParams } from "react-router-dom";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
    const {id}: any = useParams();
    
    return (
        <>
            <h3>Edit Movie Theater</h3>

            <MovieTheaterForm
                model={{name: 'Ster-Kinekor', 
                    latitude: -26.061517628632803, 
                    longitude: 27.837166786193848}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}