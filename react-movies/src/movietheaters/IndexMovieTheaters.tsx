import IndexEntity from "../utils/IndexEntity";
import { movieTheaterDTO } from "./movieTheater.model";
import { urlMovieTheaters } from "../endpoints";

export default function IndexMovieTheaters() {
    const tdMain = {width: '70%'};
    const tdRight = {width: '30%', textAlign: 'right' as const};

    return (
        <IndexEntity<movieTheaterDTO>
            url={urlMovieTheaters} createURL="movietheaters/create"
            title="Movie Theaters" entityName="Movie Theater"
        >     
            {(entities, buttons) => <>
                <thead>
                    <tr>
                        <th style={tdMain}>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {entities?.map(entity => 
                        <tr key={entity.id}>
                            <td style={tdMain}>
                                {entity.name}
                            </td>
                            <td style={tdRight}>
                                {buttons(`movietheaters/edit/${entity.id}`, entity.id)}
                            </td>
                        </tr>
                    )}
                </tbody>
            </>}
        </IndexEntity>
    )
}