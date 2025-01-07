import { useParams } from "react-router-dom";
import ActorForm from "./ActorForm";

export default function EditActor() {
    const {id}: any = useParams();

    return (
        <>
            <h3>Edit Actor</h3>

            <ActorForm model={{name: 'Kevin Costner', 
                dateOfBirth: new Date('1975-07-01T00:00:00'),
                biography: `# Something
This person was born in **DR**`,
                pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kevin_Costner_at_81st_Venice_Film_Festival_%28cropped%29.jpg/220px-Kevin_Costner_at_81st_Venice_Film_Festival_%28cropped%29.jpg'
            }}
                onSubmit={values => console.log(values)}
             />
        </>
    )
}