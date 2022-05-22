import React from "react";
import {authActions} from "../../../features/auth/authSlice";
import useSession from "../../../features/auth/useSession";
import Preloader from "../../../features/mui-loader/Preloader";
import {useAppDispatch} from "../../store";
import classes from './Header.module.scss';
import Container from "@mui/material/Container";
import {Box, Stack, Toolbar, Typography} from "@mui/material";
import Link, {MuiLink} from "../../../features/next-mui-link/Link";

export default function Header() {
    const dispatch = useAppDispatch();
    
    const {isAuthorized, email, loading: sessionLoading} = useSession();
    
    return <Box component={'header'} boxShadow={1} className={classes.header}>
        <Container className={classes.container}>
            <Toolbar className={classes.toolbar}>
                <Link href={'/'}>Главная</Link>
                <Link href={'/ololo'}>404</Link>
                <Link href={'/test'}>test</Link>
                <Box sx={{m: 'auto'}} />
    
                {sessionLoading ? "Загрузка..." : (isAuthorized ? <>
                    <Typography>{email}</Typography>
                    <Link href={'/auth/profile'}>Профиль</Link>
                    <MuiLink onClick={() => dispatch(authActions.logout())}>Выйти</MuiLink>
                </> : <>
                    <Link href={'/auth/reg'}>Регистрация</Link>
                    <Link href={'/auth/forgot'}>Забыл пароль</Link>
                    <Link href={'/auth/login'} sx={{ml: 'auto'}}>Вход</Link>
                </>)}
            </Toolbar>
        </Container>
    </Box>
}
