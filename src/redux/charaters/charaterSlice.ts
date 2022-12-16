import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CharaterInitialStateType,
  SingleCharaterCardProps,
  SingleInformationCardProps,
} from "@/types/models/charaters";
import { FetchStatus } from "@/types/enums";
import {
  fetchCharaterGroup,
  fetchCharaterGroupFilters,
  fetchCharaterInfo,
} from "./thunk";
import { RootState } from "../store";
import {
  persistLocalStorage,
  getLocalCharacterStorage,
} from "@/utilities/localStorage";

const initialState: CharaterInitialStateType = {
  status: FetchStatus.PENDING,
  pages: 1,
  charaters: [],
  singleCharater: {},
  charatersFavorite: getLocalCharacterStorage({ key: "charaterFavorites" }),
};

const charaterSlice = createSlice({
  name: "charaters",
  initialState,
  reducers: {
    previouspage: (state) => {
      state.pages = state.pages - 1;
    },
    nextPage: (state) => {
      state.pages = state.pages + 1;
    },
    addFavorite: (state, action: PayloadAction<SingleCharaterCardProps>) => {
      state.charatersFavorite = [...state.charatersFavorite, action.payload];
      persistLocalStorage("charaterFavorites", [
        action.payload,
        ...state.charatersFavorite,
      ]);
    },
    deleteFavorite: (state, action: PayloadAction<{ id: number }>) => {
      const newSetFavorite = state.charatersFavorite.filter(({ id }) => {
        return action.payload.id !== id;
      });
      state.charatersFavorite = newSetFavorite;
      persistLocalStorage("charaterFavorites", newSetFavorite);
    },
  },
  extraReducers: (builder) => {
    // get charaters
    builder
      .addCase(fetchCharaterGroup.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(fetchCharaterGroup.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.charaters = action.payload;
      })
      .addCase(fetchCharaterGroup.rejected, (state) => {
        state.status = FetchStatus.FAILED;
        state.charaters = [];
      });
    // get charaters filters
    builder
      .addCase(fetchCharaterGroupFilters.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(fetchCharaterGroupFilters.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.charaters = action.payload;
      })
      .addCase(fetchCharaterGroupFilters.rejected, (state) => {
        state.status = FetchStatus.FAILED;
        state.charaters = [];
      });
    // get charaters info
    builder
      .addCase(fetchCharaterInfo.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(fetchCharaterInfo.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.singleCharater = action.payload;
      })
      .addCase(fetchCharaterInfo.rejected, (state) => {
        state.status = FetchStatus.FAILED;
        state.singleCharater = {};
      });
  },
});

export const { previouspage, nextPage, addFavorite, deleteFavorite } =
  charaterSlice.actions;

export const getPages = (state: RootState): number => state.charaters.pages;
export const getCardStatus = (state: RootState): string =>
  state.charaters.status;
export const getCharaters = (state: RootState): SingleCharaterCardProps[] =>
  state.charaters.charaters;
export const getSingleCharater = (
  state: RootState
): SingleInformationCardProps | {} => state.charaters.singleCharater;
export const getCharaterFavorite = (
  state: RootState
): SingleCharaterCardProps[] => state.charaters.charatersFavorite;

export default charaterSlice.reducer;
