import {FC, useEffect} from "react";
import {useAppDispatch} from "../../app/store";
import NotFoundPage from "../../pages/404";
import Preloader from "../mui-loader/Preloader";
import useLoader from "../mui-loader/useLoader";
import {authActions} from "./authSlice";
import useSession from "./useSession";

export type AuthLayoutProps = {children: JSX.Element, redirectIfGuest?: boolean | string};
const AuthLayout:FC<AuthLayoutProps> = ({children, redirectIfGuest = false}) => {
  const {isAuthorized, loading} = useSession();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    console.log("effect");
    dispatch(authActions.getSession())
  }, [])
  
  if(redirectIfGuest) {
    if(!loading && !isAuthorized) return <NotFoundPage />;
    return loading ? <Preloader /> : children;
  }
  return children;
}

export default AuthLayout;
