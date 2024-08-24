import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CardItemSchema } from '../components/CardItem/CardItemSchema';
import { API_KEY, API_URL } from '../api/constants';
import axios, { AxiosError } from 'axios';


export interface BooksState {
  book: CardItemSchema | undefined,
  loading?: boolean,
  error?: string | undefined
}

const initialState: BooksState = {
	book: undefined,
	loading: false,
	error: undefined
};

export const getBookThunk = createAsyncThunk(
	'detail/getBook', 
	async (id: string ) => {
		try {
			const {data} = await axios.get(`${API_URL}/${id}`, {
				params: {					
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

export const detailSlice = createSlice({
	name: 'detail',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(getBookThunk.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getBookThunk.fulfilled, (state, action) => {
			state.loading = false;			
			state.book = action.payload;
			
		});
		builder.addCase(getBookThunk.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;

		});
	}
});

export const detailSliceActions = detailSlice.actions;

export const detailSliceReducer = detailSlice.reducer;