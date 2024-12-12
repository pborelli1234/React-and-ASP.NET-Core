import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.module";

export default function LandingPage() {

    const[movies, setMovies] = useState<landingPageDTO>({});
  
    useEffect(() => {
      const timerId = setTimeout(() => {
        setMovies({
          inTheaters: [{
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          },
          {
            id: 2,
            title: 'Gladiator II',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Gladiator_II_%282024%29_poster.jpg/220px-Gladiator_II_%282024%29_poster.jpg'
          },
          {
            id: 3,
            title: 'Venom: The Last Dance',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Venom_The_Last_Dance_Poster.jpg/220px-Venom_The_Last_Dance_Poster.jpg'
          },
          {
            id: 4,
            title: 'Inside Out 2',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg'
          }
         ],
         upcomingReleases: [{
          id: 1,
          title: 'Superman',
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Superman_%282025_film%29_logo.jpg/220px-Superman_%282025_film%29_logo.jpg'
        },
        {
          id: 2,
          title: 'Karate Kid: Legends',
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Karate_Kid_Legends_Poster.jpg/220px-Karate_Kid_Legends_Poster.jpg'
        },
        {
          id: 3,
          title: 'Avatar: Fire and Ash',
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Avatar_Fire_and_Ash_logo.jpg/220px-Avatar_Fire_and_Ash_logo.jpg'
        },
        {
          id: 4,
          title: 'The Hunt for Gollum',
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Huntforgollumposter1.jpg/220px-Huntforgollumposter1.jpg'
        }
        ]
        })
      }, 1000);
  
      return () => clearTimeout(timerId);
    });
    
    return (
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />
        
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}