import React, { useRef, useState } from 'react';
import Input from '../Input/Input';

import styles from './Search.module.scss';

const Search = () => {
	const [inputVal, setInputVal] = useState<string>('');
	const btnRef = useRef<HTMLButtonElement>(null);
	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputVal(e.target.value);
	};

	return (
		<label className={styles.label} >
			<Input name='search' className={styles.input}  placeholder='search' onChange={inputChange} value={inputVal}/>
			<button className={styles.btn} ref={btnRef} type='submit'>⌕</button>
		</label>
	);
};

export default Search;