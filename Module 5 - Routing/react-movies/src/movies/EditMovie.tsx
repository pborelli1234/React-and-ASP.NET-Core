import { useParams } from "react-router-dom";

export default function EditMovie() {
    const {id}: any = useParams();
    
    return (
        <>
            <h3>Edit Movie</h3>

        </>
    )
}