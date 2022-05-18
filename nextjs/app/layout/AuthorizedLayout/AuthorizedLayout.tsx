import React, {FC, useEffect} from 'react'
import useLoader from "../../../features/mui-loader/useLoader";
import apiAuth from "../../../api/apiAuth";

const AuthorizedLayout: FC<{
    enableBlockRendering?: boolean
    children: any
}> = ({enableBlockRendering = true, children}) => {
    const {start, stop, loading} = useLoader(true);
    useEffect(() => {
        apiAuth.profileGet()
            .then(response => {
                console.log("response", response.data);
            })
    }, [])
    return children;
};

export default AuthorizedLayout;
