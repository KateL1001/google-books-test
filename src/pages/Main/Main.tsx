import React, { useState }  from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { RootState, useAppDispatch } from '../../store/store';
import { getBooksThunk, getMoreBooksThunk } from '../../store/booksSlice';
import { useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';

import styles from './Main.module.scss';

export type formProps = {
	search: {
		value: string
	},
	orderBy: {
		value: string
	},
	categories: {
		value: string
	},
	startIndex?: number
}

export type formDataProps = {
	search: string,
	orderBy: string,
	categories: string,
	startIndex?: number
}

const Main = () => {
	const dispatch = useAppDispatch();
	const [formDataParams, setFormDataParams] = useState<formDataProps>({});
	const {books,error,loading,errorMore,loadingMore} = useSelector((s: RootState) => s.books);

	const submitSearchForm = (e: React.FormEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & formProps;
		const formData = {
			search: target.search.value,
			categories: target.categories.value,
			orderBy: target.orderBy.value
		};
		setFormDataParams(formData);
		dispatch(getBooksThunk(formData));
	};

	const onLoadMore = () => {
		setFormDataParams({...formDataParams, startIndex: books.items?.length});
		dispatch(getMoreBooksThunk({...formDataParams, startIndex: books.items?.length}));
	};

	const renderBooks = () => {
		return  books.items?.map((book) => (
			<CardItem key={book.id} id={book.id} volumeInfo={book.volumeInfo} />
	        ));
	};

	return (
		<div>
			<SearchForm submitform={submitSearchForm}/>
			{error && <p>ERROR: {error}</p>}
			{loading && <p>Loading...</p>}
			  
			<>
			  	{books.totalItems && <p style={{marginBottom: '20px', textAlign: 'center'}}>{books.totalItems}</p>}
			  	<div className={styles.booksWrap}>
					{books.items?.length > 0 ? renderBooks() : 'no result'}						
				</div>
				{errorMore && <p>ErrorMore: {errorMore}</p>}
				{books.items?.length < books.totalItems && <button onClick={onLoadMore}>{loadingMore ? 'loading...': 'Load more'}</button>}
			</>
			
		</div>
	);
};

export default Main;