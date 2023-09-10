import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../../api/books/getBooks";
import { BookModel, GetBooksParams } from "../../api/books/types";
import { Status } from "../types";

export type BooksState = {
  items: BookModel[];
  totalItems: number;
  status: Status;
  orderBy: GetBooksParams["orderBy"];
  searchQuery: string;
  maxResults: GetBooksParams["maxResults"];
  startIndex: GetBooksParams["startIndex"];
  category: string;
};

const initialState: BooksState = {
  items: [],
  totalItems: 0,
  status: "idle",
  orderBy: "relevance",
  searchQuery: "",
  maxResults: 30,
  startIndex: 0,
  category: "All",
};

const booksSlice = createSlice({
  name: "booksState",
  initialState,
  reducers: {
    updateOrderBy(state, action: PayloadAction<GetBooksParams["orderBy"]>) {
      state.orderBy = action.payload;
    },
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    updateCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },

    updateStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.startIndex) {
          state.items = state.items.concat(action.payload?.items || []);
          return;
        }
        state.items = action.payload?.items ?? [];
        state.totalItems = action.payload?.totalItems ?? 0;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = "failed";
      }),
});

export const fetchBooks = createAsyncThunk("books/fetchBooks", getBooks);

export const {
  updateOrderBy,
  updateSearchQuery,
  updateCategory,
  updateStartIndex,
} = booksSlice.actions;

export default booksSlice.reducer;
