import  { FC } from 'react';
import { InputSchema } from './InputSchema';

const Input: FC<InputSchema> = (props) => {
	return (
		<input {...props}/>
	);
};

export default Input;