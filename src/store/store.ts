import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { booksSliceReducer } from './booksSlice';
import { detailSliceReducer } from './detailSlice';

export const store = configureStore({
	reducer: {
		books: booksSliceReducer,
		book: detailSliceReducer
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;