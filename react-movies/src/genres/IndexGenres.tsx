import { genreDTO } from "./genres.model";
import { urlGenres } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";

export default function IndexGenres() {
    const tdMain = {width: '70%'};
    const tdRight = {width: '30%', textAlign: 'right' as const};

    return (
        <>
            <IndexEntity<genreDTO>
                url={urlGenres} createURL="genres/create" 
                title="Genres" entityName="Genre"
            >
                {(genres, buttons) =>
                    <>
                        <thead>
                            <tr>
                               <th style={tdMain}>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {genres?.map(genre => 
                            <tr key={genre.id}>
                                <td style={tdMain}>
                                    {genre.name}
                                </td>
                                <td style={tdRight}>
                                    {buttons(`genres/edit/${genre.id}`, genre.id)}
                                </td>
                            </tr>)}
                        </tbody>
                    </>
                }
            </IndexEntity>  
        </>
    )
}