import {useFormikContext} from "formik";
import {TextField, TextFieldProps} from "@mui/material";

export default function FormikText(props: Omit<TextFieldProps, 'name'> & {name: string}) {
    const formik = useFormikContext<any>();

    console.log('formik.values', formik.values);

    return <TextField
        value={formik.values[props.name]}
        onChange={formik.handleChange}
        error={formik.touched[props.name] && Boolean(formik.errors[props.name])}
        helperText={formik.touched[props.name] && formik.errors[props.name]}
        margin={'normal'}
        variant={'standard'}
        fullWidth
        {...props}
    />
}