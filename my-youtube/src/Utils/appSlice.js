import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{

        isMenuOpen:true,

    },
    reducers:{
        toogleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        openMenu:(state)=>{
            state.isMenuOpen=true;
        }
    }
});
export default appSlice.reducer;
export const {toogleMenu,closeMenu,openMenu} =appSlice.actions;