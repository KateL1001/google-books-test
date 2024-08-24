import  { FC } from 'react';

import { CardItemSchema } from '../CardItem/CardItemSchema';
import { NavLink } from 'react-router-dom';

import styles from './CardDetailItem.module.scss';

const CardDetailItem: FC<CardItemSchema> = (props) => {
	const { volumeInfo} = props;
	return (
		<div>
			<NavLink className={styles.btnBack} to={'/'}>🔙</NavLink>
			<div>
				<img className={styles.item} src={volumeInfo.imageLinks?.smallThumbnail} alt="" />
				<p className={styles.item}><span className={styles.itemDeskr}>Title:</span> {volumeInfo.title}</p>
				<p className={styles.item}><span className={styles.itemDeskr}>Description:</span> {volumeInfo.description}</p>
				<p className={styles.item}><span className={styles.itemDeskr}>Categories:</span> {volumeInfo.categories ? volumeInfo.categories.map((categorie) => categorie) : 'no info'}</p>
				<div><span className={styles.itemDeskr}>Authors:</span> {volumeInfo.authors?.length > 0 ? volumeInfo.authors.map(el =><span>{el}</span> ): 'no info'}</div> 	
			</div>		
		</div>
	);
};

export default CardDetailItem;