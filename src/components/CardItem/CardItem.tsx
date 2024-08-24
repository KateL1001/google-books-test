import { FC } from 'react';
import { CardItemSchema } from './CardItemSchema';
import { NavLink } from 'react-router-dom';

import styles from './CardItem.module.scss';

const CardItem:FC<CardItemSchema> = (props) => {
	const {id,volumeInfo} = props;
	
	return (
		<NavLink className={styles.card} to={`/book/${id}`}>
			<img src={volumeInfo.imageLinks?.smallThumbnail} alt="" />
			<p>Categories: {volumeInfo.categories ? volumeInfo.categories[0] : 'no info'}</p>
			<div>Authors: {volumeInfo.authors?.length > 0 ? volumeInfo.authors.map(el =><span>{el}</span> ): 'no info'}</div> 
			<p>Title: {volumeInfo.title}</p>
		</NavLink>
	);
};

export default CardItem; 