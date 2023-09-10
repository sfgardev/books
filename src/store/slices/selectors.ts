import { RootState } from "../../store/store";

export function selectBooksState(state: RootState) {
  return state.booksState;
}

export function selectBooksCategory(state: RootState) {
  return state.booksState.category;
} 

export function selectBooksOrderBy(state: RootState) {
  return state.booksState.orderBy;
}

export function selectBookByIdState(state: RootState) {
  return state.bookByIdState;
}
