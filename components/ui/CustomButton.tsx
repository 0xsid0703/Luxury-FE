import React from 'react'
import { ArrowRight } from './icons';
import clsx from 'clsx';

type Props = {
    text: string;
    className?: string;
    onClick?: () => void;
}

const CustomButton = ({ text, className, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`flex flex-row justify-center gap-2 items-center rounded-full ${className} hover:-translate-y-2 transition-all`}>
            {text}
            <div className={clsx('bg-white rounded-full p-2 hidden sm:block', text == 'Sign Up' && 'ml-3')}>
                <ArrowRight color='#000000' />
            </div>
        </button>
    )
}

export default CustomButton