import { configureStore } from "@reduxjs/toolkit";
import charaterSlice from "./charaters/charaterSlice";

export const store = configureStore({
  reducer: {
    charaters: charaterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
