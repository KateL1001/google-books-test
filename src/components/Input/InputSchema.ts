import { InputHTMLAttributes } from 'react';

export interface InputSchema extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}