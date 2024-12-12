import { useParams } from "react-router-dom";

export default function EditActor() {
    const {id}: any = useParams();

    return (
        <>
            <h3>Edit Actor</h3>
        </>
    )
}