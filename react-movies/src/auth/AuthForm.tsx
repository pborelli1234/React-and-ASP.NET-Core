import { Form, Formik, FormikHelpers } from "formik";
import { userCredentials } from "./auth.models";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function AuthForm(props: authFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validation={Yup.object({
                email: Yup.string().required('This field is required')
                    .email('A valid email is required'),
                password: Yup.string().required('This field is required')
            })}
        >
            {formikProps => (
                <Form placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <TextField displayName="Email" field="email" />
                    <TextField displayName="Password" field="password" type="password" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Send</Button>
                    <Link className="btn btn-outline-secondary" to="/">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface authFormProps {
    model: userCredentials;
    onSubmit(values: userCredentials, actions: FormikHelpers<userCredentials>): void;
}