import React from "react";
import classes from './Footer.module.scss';
import {Box} from "@mui/material";
import Container from "@mui/material/Container";

export default function Footer() {
    return <Box component={'footer'}  boxShadow={1} className={classes.footer}>
            <Container className={classes.container}>
                footer
            </Container>
    </Box>
}
