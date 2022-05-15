import {useFormikContext} from "formik";
import {TextField, TextFieldProps} from "@mui/material";
import moment from "moment";

export default function FormikDateTime(props: Omit<TextFieldProps, 'name'> & {name: string}) {
    const formik = useFormikContext<any>();

    const value = moment(formik.values[props.name]).isValid() ? moment(formik.values[props.name]).format("YYYY-MM-DDTHH:MM") : null;
    const onChange = (e: any) => {
        formik.setFieldValue(props.name, moment(e.target.value).isValid() ? moment(e.target.value).format() : null)
    }

    return <TextField
        type="datetime-local"
        value={value}
        onChange={onChange}
        error={formik.touched[props.name] && Boolean(formik.errors[props.name])}
        helperText={formik.touched[props.name] && formik.errors[props.name]}
        margin={'normal'}
        variant={'standard'}
        fullWidth
        {...props}
    />
}

// import {useFormikContext} from "formik";
// import {TextField} from "@mui/material";
// import DateTimePicker, {DateTimePickerProps} from '@mui/lab/DateTimePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import moment from "moment";
//
// export default function FormikDateTime({value: _value, onChange, renderInput, ...props}: Omit<DateTimePickerProps<Date>, 'name'> & {name: string}) {
//     const formik = useFormikContext<any>();
//
//     const value = moment(formik.values[props.name]).isValid() ? moment(formik.values[props.name]).toDate() : null;
//
//     return <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DateTimePicker<Date>
//             value={value}
//             onChange={(newDate) => {
//                 formik.setFieldValue(props.name, moment(newDate).isValid() ? moment(newDate).format() : null)
//             }}
//             renderInput={(params) => <TextField
//                 error={formik.touched[props.name] && Boolean(formik.errors[props.name])}
//                 helperText={formik.touched[props.name] && formik.errors[props.name]}
//                 margin={'normal'}
//                 variant={'standard'}
//                 fullWidth
//                 {...params}
//             />}
//             {...props}
//         />
//     </LocalizationProvider>
// }