import {ReactNode} from "react";
import AuthLayout, {AuthLayoutProps} from "../../features/auth/AuthLayout";
import classes from './Layout.module.scss';
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Flip, ToastContainer, Zoom} from "react-toastify";
import * as React from "react";
// import toastClasses from '../../styles/modules/toastify.module.scss';
import clsx from "clsx";

export type LayoutProps = {
    title: string,
    children: ReactNode
    contentClassName?: string
    redirectIfGuest?: AuthLayoutProps['redirectIfGuest']
};

const Layout = ({title, children, contentClassName, redirectIfGuest}: LayoutProps) => {
    return (<>
        <Head>
            <title>{title} | GetProxy.io</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <AuthLayout redirectIfGuest={redirectIfGuest}>
            <div className={classes.layout}>
                <Header />
                <div className={clsx(classes.content, contentClassName)}>
                    {children}
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
        </AuthLayout>
    </>)
};

export default Layout;
