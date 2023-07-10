import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    UserLogin: {
        email: string
        password: string,
    },
    UserInfo: {
        from: string,
        to: string,
        date: string,
        formatDate: string,
        hours: string,
        price: number
        seat: any
    },
}

const initialState: UserState = {
    UserLogin: {
        email: "",
        password: "",
    },
    UserInfo: {
        from: "",
        to: "",
        date: "",
        formatDate: "",
        hours: "",
        price: 0,
        seat: []
    }
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addEmail: (state, action: PayloadAction<string>) => {
            state.UserLogin.email = action.payload
        },
        addPassword: (state, action: PayloadAction<string>) => {
            state.UserLogin.password = action.payload
        },
        addFromCity: (state, action: PayloadAction<string>) => {
            state.UserInfo.from = action.payload
        },
        addToCity: (state, action: PayloadAction<string>) => {
            state.UserInfo.to = action.payload
        },
        addToDate: (state, action: PayloadAction<string>) => {
            state.UserInfo.date = action.payload
        },
        addToFormatDate: (state, action: PayloadAction<string>) => {
            state.UserInfo.formatDate = action.payload
        },
        addToHours: (state, action: PayloadAction<string>) => {
            state.UserInfo.hours = action.payload
        },
        addToPrice: (state, action: PayloadAction<number>) => {
            state.UserInfo.price = action.payload
        },
        addToSeat: (state, action) => {
            state.UserInfo.seat.push(action.payload)
        },
    },
})

export const { addEmail, addPassword, addFromCity, addToCity, addToDate, addToHours, addToPrice, addToSeat, addToFormatDate } = userSlice.actions

export default userSlice.reducer