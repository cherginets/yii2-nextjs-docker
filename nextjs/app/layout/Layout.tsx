import {ReactNode} from "react";
import classes from './Layout.module.scss';
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Flip, ToastContainer, Zoom} from "react-toastify";
import * as React from "react";
// import toastClasses from '../../styles/modules/toastify.module.scss';
import clsx from "clsx";
import AuthorizedLayout from "./AuthorizedLayout/AuthorizedLayout";

export type LayoutProps = {
    title: string,
    children: ReactNode
    contentClassName?: string
};

const Layout = ({title, children, contentClassName}: LayoutProps) => {
    return (<>
        <Head>
            <title>{title} | GetProxy.io</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className={classes.layout}>
            <Header />
            <div className={clsx(classes.content, contentClassName)}>
                <AuthorizedLayout>
                    {children}
                </AuthorizedLayout>
            </div>
            <Footer />
            <ToastContainer
                position={'bottom-center'}
                theme={'colored'}
                // toastClassName={toastClasses.toast}
                hideProgressBar
                // className={toastClasses.toastify}
                autoClose={3000}
                transition={Flip}
                // transition={}
            />
        </div>
    </>)
};

export default Layout;
