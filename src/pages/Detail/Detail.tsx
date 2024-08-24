import React, { useEffect } from 'react';
import CardDetailItem from '../../components/CardDetailItem/CardDetailItem';
import { RootState, useAppDispatch } from '../../store/store';
import { getBookThunk } from '../../store/detailSlice';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
	const dispatch = useAppDispatch();
	const {book,error,loading} = useSelector((s: RootState) => s.book);
	const {id} = useParams();
	useEffect(() => {
		dispatch(getBookThunk(id!));
	},[]);
	if(error) {
		return <p>ERROR: {error}</p>;
	}
	
	return (
		<>		
			{loading && <p>Loading...</p>}
			{!loading && book && <CardDetailItem volumeInfo={book.volumeInfo} id={book.id} />}
		</>
	);
};

export default Detail;