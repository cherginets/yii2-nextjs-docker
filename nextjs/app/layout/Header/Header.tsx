import React from "react";
import classes from './Header.module.scss';
import Container from "@mui/material/Container";
import {Box, Stack} from "@mui/material";
import Link from "../../../features/next-mui-link/Link";

export default function Header() {
    return <Box component={'header'} boxShadow={1} className={classes.header}>
        <Container className={classes.container}>
            <Stack direction={'row'} spacing={2}>
                <Link href={'/'}>Главная</Link>
                <Link href={'/auth/login'}>Вход</Link>
                <Link href={'/auth/reg'}>Регистрация</Link>
                <Link href={'/auth/forgot'}>Забыл пароль</Link>
                <Link href={'/ololo'}>404</Link>
            </Stack>
        </Container>
    </Box>
}
