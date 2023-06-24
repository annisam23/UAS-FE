import {createSlice} from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const covidSlice = createSlice({
    name :"Covid slice",
    initialState : {
        covid: data.provinces
    },
    reducers:{
        updateCovid(state,action) {
            const {covid} =state;
            const {kota,jumlah,status} = action.payload;
            const updateStatus = covid.findIndex((index)=> index.kota === kota)
            covid[updateStatus][status] = parseInt(covid[updateStatus][status] + parseInt(jumlah))

            }
        },
    },
)

//generate action and reducers
const {updateCovid} = covidSlice.actions;
const covidReducer = covidSlice.reducer;

export {updateCovid};
export default covidReducer;