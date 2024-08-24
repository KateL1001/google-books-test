import { ChangeEvent } from 'react';
import { SelectSchema } from './SelectSchema';
import classNames from 'classnames';

const Select = <T extends string>(props: SelectSchema<T>) => {
	const {options, className, onChange, value, name} = props;

	const onChangeSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(evt.target.value as T);
	};

	return (
		<select className={classNames(className)} name={name}  onChange={onChangeSelect} value={value}>
			{options?.map((option) => <option key={option} value={option}>{option}</option>)}            
		</select>
	);
};

export default Select;