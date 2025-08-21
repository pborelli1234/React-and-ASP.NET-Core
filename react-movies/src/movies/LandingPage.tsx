import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.module";
import { urlMovies } from "../endpoints";
import axios, { AxiosResponse } from "axios";
import AlertContext from "../utils/AlertContext";

export default function LandingPage() {

    const[movies, setMovies] = useState<landingPageDTO>({});
  
    useEffect(() => {
      loadData();
    }, []);

    function loadData() {
        axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
            setMovies(response.data);
          })
    }
    
    return (
        <>      
            <AlertContext.Provider value={() => {
                loadData();
            }}>
                <h3>In Theaters</h3>
                <MoviesList movies={movies.inTheaters} />
        
                <h3>Upcoming Releases</h3>
                <MoviesList movies={movies.upcomingReleases} />
            </AlertContext.Provider>
        </>
    )
}