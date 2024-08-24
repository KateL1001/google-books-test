import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CardBooksSchema } from '../components/CardItem/CardItemSchema';
import { API_KEY, API_URL } from '../api/constants';
import axios, { AxiosError } from 'axios';


export interface BooksState {
  books: CardBooksSchema,
  loading?: boolean,
  error?: string | undefined,
  loadingMore?: boolean,
  errorMore?: string | undefined
}

const initialState: BooksState = {
	books: {totalItems: 0, items: []},
	loading: false,
	error: undefined
};

export const getBooksThunk = createAsyncThunk(
	'books/getBooks', 
	async (params: {search:string, categories: string, orderBy: string, }) => {
		try {
			const {data} = await axios.get(`${API_URL}`, {
				params: {
					q: `${params.search}+subject:${params.categories !== 'all' ? params.categories : ''}`,
					maxResults: 30,
					orderBy: params.orderBy	,
					key: API_KEY		
				}
			});
			return data;
		} catch (err) {
			if(err instanceof AxiosError) {
				throw new Error(err.response?.data.message);
			}
		}
	}
);
export const getMoreBooksThunk = createAsyncThunk(
	'books/getBook', 
	async (params: {search:string, categories: string, orderBy: string, startIndex: number }) => {
		try {
			const {data} = await axios.get(`${API_URL}`, {
				params: {
					q: `${params.search}+subject:${params.categories !== 'all' ? params.categories : ''}`,
					maxResults: 30,
					orderBy: params.orderBy	,
					startIndex: params.startIndex ,
					key: API_KEY		
				}
			});
			return data;
		} catch (err) {
			if(err instanceof AxiosError) {
				throw new Error(err.response?.data.message);
			}
		}
	}
);


export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(getBooksThunk.pending, (state) => {
			state.loading = true;
			state.errorMore = undefined;
		});
		builder.addCase(getBooksThunk.fulfilled, (state, action) => {
			state.loading = false;			
			state.books = action.payload;
			
		});
		builder.addCase(getBooksThunk.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
		builder.addCase(getMoreBooksThunk.pending, (state) => {
			state.loadingMore = true;
		});
		builder.addCase(getMoreBooksThunk.fulfilled, (state, action) => {
			state.loadingMore = false;
				
			if(action.payload.items !== undefined) {
				state.books.items = [...state.books.items, ...action.payload.items];
			}else {
				state.loadingMore = false;
				state.errorMore = 'Error loading more items';				
			}		
						
		});
		builder.addCase(getMoreBooksThunk.rejected, (state, action) => {
			state.loadingMore = false;
			state.errorMore = action.error.message;
		});
	}
});

export const booksSliceActions = booksSlice.actions;

export const booksSliceReducer = booksSlice.reducer;