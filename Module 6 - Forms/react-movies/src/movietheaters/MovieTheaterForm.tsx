import { Form, Formik, FormikHandlers, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from 'yup';
import MapField from "../forms/MapField";
import { coordinateDTO } from "../utils/coordinates.model";

export default function MovieTheaterForm(props: movieTheaterFormProps) {

    function transformCoordinates() : coordinateDTO[] | undefined {
        if (props.model.latitude && props.model.longitude) {
            const response: coordinateDTO = {lat: props.model.latitude, lng: props.model.longitude}

            return [response];
        }

        return undefined;
    }

    return (
        <>
            <Formik
                initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required.').firstLetterUppercase()
                })}
            >
                {(formikProps) => (
                    <Form placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <TextField displayName="Name" field="name" />

                        <div style={{marginBottom: '1rem'}}>
                            <MapField latField="latitude" lngField="longitude" 
                                coordinates={transformCoordinates()}
                        />
                        </div>

                        <Button disabled={formikProps.isSubmitting} type="submit">
                            Save Changes
                        </Button>
                        <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface movieTheaterFormProps {
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, action: FormikHelpers<movieTheaterCreationDTO>): void;
}