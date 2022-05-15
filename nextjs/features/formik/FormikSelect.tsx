import {useFormikContext} from "formik";
import {
    FormControl,
    InputLabel,
    MenuItem,
    NativeSelect,
    Select,
    SelectChangeEvent,
    SelectProps,
    TextField
} from "@mui/material";
import {USER_ROLE_OPTIONS, SelectOptions} from "constants/options";

type FormikSelectProps = Omit<SelectProps, 'name'> & { name: string, options: SelectOptions };

export default function FormikSelect({label, options, ...props}: FormikSelectProps) {
    const formik = useFormikContext<any>();

    return (<FormControl fullWidth margin={'normal'}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            {label}
        </InputLabel>
        <Select
            value={formik.values[props.name] || ''}
            onChange={(event: SelectChangeEvent) => formik.setFieldValue(props.name, event.target.value)}
            error={formik.touched[props.name] && Boolean(formik.errors[props.name])}
            fullWidth
            variant={'standard'}
            componentsProps={{
                input: {
                    helperText: formik.touched[props.name] && formik.errors[props.name]
                }
            }}
            {...props}
        >
            {options.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>)}
        </Select>
    </FormControl>)
}

export const FormikRoleSelect = (props: Omit<FormikSelectProps, 'options'>) => {
    return <FormikSelect
        label={'Уровень доступа'}
        options={USER_ROLE_OPTIONS}
        {...props}
    />
};