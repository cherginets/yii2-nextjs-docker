import {ComponentsOverrides, createTheme} from '@mui/material/styles';
import {
    AlertClassKey,
    ButtonClassKey,
    DialogClassKey,
    DividerClassKey,
    LinkClassKey,
    PaperClassKey,
    SelectClassKey,
    SvgIconClassKey,
    Typography,
    TypographyProps
} from "@mui/material";
import {CSSProperties} from "@mui/material/styles/createMixins";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {TypographyTypeMap} from "@mui/material/Typography/Typography";
import {PaletteColorOptions} from "@mui/material/styles/createPalette";

declare module '@mui/material/styles' {
    interface Theme {
        // status: {
        //     danger: string;
        // };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        // status?: {
        //     danger?: string;
        // };
    }

    interface Overrides extends ComponentsOverrides {
        MuiButton?: Partial<Record<ButtonClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
        MuiPaper?: Partial<Record<PaperClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
        MuiDivider?: Partial<Record<DividerClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
        MuiLink?: Partial<Record<LinkClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
        MuiAlert?: Partial<Record<AlertClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
        MuiSvgIcon?: Partial<Record<SvgIconClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
        MuiSelect?: Partial<Record<SelectClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
        MuiDialog?: Partial<Record<DialogClassKey, CSSProperties | (() => CSSProperties)>> | undefined;
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        green: string;
    }
    interface PaletteOptions {
        green: PaletteColorOptions;
    }
}
declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        block: true;
    }
}
declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsSizeOverrides {
        xsmall: true;
        xlarge: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        interest: true,
    }
    interface ButtonPropsColorOverrides {
        green: true
    }
    interface ButtonPropsSizeOverrides {
        icon: true
        'small-icon': true
    }
}

const paperPadding = 32;
// Create a theme instance.
const theme = createTheme({

});

export default theme;
