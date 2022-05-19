import {Formik as OriginalFormik, FormikErrors, FormikProps} from "formik";
import {useEffect} from "react";
// import {FC, useEffect, useState} from "react";
// import { useTranslation } from 'react-i18next';


const Formik: (typeof OriginalFormik) = ({children, ...props}) => {
  return <OriginalFormik {...props}>
    {(params) => {
      return <WithTranslateFormErrors errors={params.errors} touched={params.touched} setFieldTouched={params.setFieldTouched}>
        {typeof children === 'function' ? children(params) : children}
      </WithTranslateFormErrors>
    }}
  </OriginalFormik>
};

export default Formik;

const useTranslateFormErrors = (errors, touched, setFieldTouched) => {
  useEffect(() => {
    console.log('errors', errors);
  }, [errors])
  // const { i18n } = useTranslation();
  // useEffect(() => {
  //   i18n.on('languageChanged', lng => {
  //     console.log('123', 123);
  //     Object.keys(errors).forEach(fieldName => {
  //       if (Object.keys(touched).includes(fieldName)) {
  //         setFieldTouched(fieldName);
  //       }
  //     });
  //   });
  //   return () => {
  //     i18n.off('languageChanged', lng => {});
  //   };
  // }, [errors]);
};


const WithTranslateFormErrors = ({ errors, touched, setFieldTouched,  children }) => {
  useTranslateFormErrors(errors, touched, setFieldTouched);
  return <>{children}</>;
};