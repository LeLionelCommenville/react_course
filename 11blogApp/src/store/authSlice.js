import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reducers: {
            login: (state, action) => {
                state.status = true;
                state.userdata = action.payload.userData
            },
            lougout: (state) => {
                state.status = false;
                state.userData = null;
            }
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer