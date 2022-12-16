import { createAsyncThunk } from "@reduxjs/toolkit";
import getCharaters from "@/adapters/getCharaters";
import getCharatersFilters from "@/adapters/getCharaterFilters";

export const fetchCharaterGroup = createAsyncThunk(
  "charater/fetchCharaterGroup",
  async ({ pages }: { pages: number }, { rejectWithValue }) => {
    try {
      return await getCharaters({ pages });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchCharaterGroupFilters = createAsyncThunk(
  "charater/fetchCharaterGroupFilters",
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
