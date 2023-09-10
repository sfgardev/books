import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBookById } from "../../api/books/getBookById";
import { Status } from "../types";
import { VolumeInfo } from "../../api/books/types";

type BookByIdState = {
  item: VolumeInfo | undefined;
  status: Status;
};

const initialState: BookByIdState = {
  item: undefined,
  status: "idle",
};

const bookByIdSlice = createSlice({
  name: "bookByIdState",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchBookById.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.item = action.payload?.volumeInfo;
        state.status = "succeeded";
      })
      .addCase(fetchBookById.rejected, (state) => {
        state.status = "failed";
      }),
});

export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  getBookById
);

export default bookByIdSlice.reducer;
