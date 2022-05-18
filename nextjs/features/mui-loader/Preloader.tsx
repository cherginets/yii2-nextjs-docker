import {CircularProgress, CircularProgressProps} from "@mui/material";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export type PreloaderLoadingType = boolean;
export type PreloaderPositionType = null | undefined | 'absolute' | 'fixed';

const Preloader = ({loading = true, position, overlayProps, progressProps}: {
    loading?: PreloaderLoadingType
    position?: PreloaderPositionType
    overlayProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    progressProps?: CircularProgressProps
}) => {
    if (!loading) return null;

    const progress = <CircularProgress {...progressProps} />;

    if (!position) return progress;

    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        background: '#ffffff7d',
        position,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }} {...overlayProps}>
        {progress}
    </div>
}

export default Preloader;
