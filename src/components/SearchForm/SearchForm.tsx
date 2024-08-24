import { useState } from 'react';
import Search from '../Search/Search';
import Select from '../Select/Select';

import styles from './SearchForm.module.scss';

enum SelectSort {
    RELEVANCE = 'relevance',
    NEWEST = 'newest',
}

const selectSortList = ['relevance','newest'];

enum SelectCategory {
    ALL = 'all',
    ART = 'art',
    BIOGRAPHY = 'biography',
    COMPUTERS = 'computers',
    HISTORY = 'history',
    MEDICAL = 'medical',
    POETRY = 'poetry',
}
const selectCategoryList = [ 'all','art','biography','computers','history','medical','poetry'];



interface SearchFormProps {
	submitform: (ev: React.FormEvent) => void,
}

const SearchForm = (props: SearchFormProps) => {
	const { submitform } = props;
	const [sortVal,setSortVal] = useState<string>(SelectSort.RELEVANCE);
	const [categoryVal,setcategoryVal] = useState<string>(SelectCategory.ALL);

	const sortOnChange = (val: string) => {
		setSortVal(val);
	};
	const categoryOnChange = (val:string) => {
		setcategoryVal(val);
	};

	return (
		<form onSubmit={submitform} className={styles.form}>
			<Search />
			<div>
				<Select name={'orderBy'} value={sortVal} onChange={sortOnChange} options={selectSortList} />
				<Select name={'categories'} value={categoryVal} onChange={categoryOnChange} options={selectCategoryList} />
			</div>
		</form>
	);
};

export default SearchForm;