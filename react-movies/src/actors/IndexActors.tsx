import IndexEntity from "../utils/IndexEntity";
import { actorDTO } from "./actors.model";
import { urlActors } from "../endpoints";

export default function IndexActors() {
    const tdMain = {width: '70%'};
    const tdRight = {width: '30%', textAlign: 'right' as const};

    return (
        <>
            <IndexEntity<actorDTO>
                url={urlActors} createURL="actors/create"
                title="Actors" entityName="Actor"
            >  
                {(actors, buttons) => <>
                    <thead>
                        <tr>
                            <th style={tdMain}>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {actors?.map(actor => 
                        <tr key={actor.id}>                            
                            <td style={tdMain}>
                                {actor.name}
                            </td>
                            <td style={tdRight}>
                                {buttons(`actors/edit/${actor.id}`, actor.id)}
                            </td>
                        </tr>
                        )}
                    </tbody>
                </>}
            </IndexEntity>
        </>
    )
}