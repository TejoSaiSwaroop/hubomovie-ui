import {configureStore,
    createAsyncThunk,
    createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { TMBD_BASE_URL } from "../utils/constants";

    const initialState = {
        popularanime : [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading : false,
       
    };

    export const getGenres = createAsyncThunk("hubomovie/genres",async() => {
        const {data} = await axios.get(`${TMBD_BASE_URL}/top/anime?filter=bypopularity`);
        console.log(data);
       // return data
    });
    const HubomovieSlice = createSlice({
        name: "Hubomovie",
        initialState,
        extraReducers:(builder) => {
            builder.addCase(getGenres.fulfilled,(state,action) => {
                state.genres = action.payload;
                state.genresLoaded = true;
            })
        },
    });

export const store = configureStore({
    reducer:{
        hubomovie : HubomovieSlice.reducer,
    }
});