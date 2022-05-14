import React from "react";
import classes from './Footer.module.scss';
import {Box} from "@mui/material";
import Container from "@mui/material/Container";

export default function Footer() {
    return <footer className={classes.footer}>
        <Box boxShadow={1}>
            <Container className={classes.container}>
                footer
            </Container>
        </Box>
    </footer>
}
