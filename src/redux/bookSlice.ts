import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { BookState } from "./bookType"
import { RootState } from "./store"

type initialState_BooksType = {
    bookList: BookState[]         // * BookState itu object of type
}

const bookList: BookState[] = JSON.parse(localStorage.getItem('userData') as string) ?? []

const initialState: initialState_BooksType = {
    bookList
}

export const bookSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addNewBook: (state, action: PayloadAction<BookState>) => {
            state.bookList?.push(action.payload)
        },
        updateBook: (state, action: PayloadAction<BookState>) => {
            const { payload: { title, id, author } } = action;

            state.bookList = state.bookList.map((book) => book.id === id ? { ...book, author, title } : book)

            localStorage.setItem('userData', JSON.stringify(state.bookList))
        },
        deleteBook: (state, action: PayloadAction<{ id: string }>) => {
            const newArr = state.bookList.filter(
              (book) => book.id !== action.payload
            );
             localStorage.setItem("userData", JSON.stringify(newArr));
            state.bookList = newArr;
          },
    }
})

export const { addNewBook, updateBook, deleteBook } = bookSlice.actions;
export const selectBookList = (state: RootState) => state.book.bookList;
export default bookSlice.reducer;