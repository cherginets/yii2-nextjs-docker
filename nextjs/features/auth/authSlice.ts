import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import authAPI from "../../api/authAPI";

import type {AppDispatch, AppState} from '../../app/store'

export interface AuthState {
  email: string
  user_id: number
  
  loading: boolean
  loaded: boolean
}

const initialState: AuthState = {
  email: null,
  user_id: null,
  
  loading: false,
  loaded: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setState: (state: AuthState, action: PayloadAction<Partial<AuthState>>) => {
      Object.keys(action.payload).forEach((key: keyof AuthState) => {
        // @ts-ignore
        state[key] = action.payload[key];
      })
    },
    setLoading:(state: AuthState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
})

const {setState, setLoading} = authSlice.actions;
export const authActions = {
  setState,
  clearState: () => (dispatch: AppDispatch, getState: () => AppState) => {
      dispatch(setState({...initialState}));
  },
  login:(login: string, password: string) => (dispatch: AppDispatch, getState: () => AppState) => {
    return authAPI.login(login, password)
      .then(() => {
        dispatch(authActions.clearState());
        return authActions.getSession()(dispatch, getState)
      })
  },
  logout:() => (dispatch: AppDispatch, getState: () => AppState) => {
    return authAPI.logout()
      .then(() => {
        authActions.clearState()(dispatch, getState);
      })
      .finally(() => window.location.href = '/')
  },
  getSession: () => (dispatch: AppDispatch, getState: () => AppState) => {
    console.log("getSession", getState().auth);
    if(getState().auth.loading) return Promise.resolve(); // Блокируем две одновременных загрузки
    if(getState().auth.loaded) return Promise.resolve(); // Блокируем две одновременных загрузки
    dispatch(setLoading(true))
    return authAPI.profileGet()
      .then((response) => {
        console.log("response.data", response.data);
        dispatch(setState(response.data))
      })
      .finally(() => dispatch(setState({loading: false, loaded: true})))
  },
}

export default authSlice.reducer
