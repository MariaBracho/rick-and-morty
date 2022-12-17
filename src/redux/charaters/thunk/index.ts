import { createAsyncThunk } from "@reduxjs/toolkit";
import getCharaters from "@/adapters/getCharacters";
import getCharatersFilters from "@/adapters/getCharacterFilters";
import getCharacterDetail from "@/adapters/getCharacterDetail";

export const fetchCharaterGroup = createAsyncThunk(
  "character/fetchCharaterGroup",
  async ({ pages }: { pages: number }, { rejectWithValue }) => {
    try {
      return await getCharaters({ pages });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchCharaterGroupFilters = createAsyncThunk(
  "character/fetchCharaterGroupFilters",
  async (
    { pages, name }: { pages: number; name: string },
    { rejectWithValue }
  ) => {
    try {
      return await getCharatersFilters({ pages, name });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchCharaterInfo = createAsyncThunk(
  "character/fetchCharaterInfo",
  async ({ id }: { id: number }, { rejectWithValue }) => {
    try {
      return await getCharacterDetail({ id });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
