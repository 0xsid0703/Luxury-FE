import React from 'react'
import clsx from 'clsx';
import { Plus } from 'lucide-react';

type Props = {
    text: string;
    className?: string;
    onClick?: () => void;
}

const PurchaseButton = ({ text, className, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`flex flex-row justify-center gap-2 items-center rounded-full ${className} hover:-translate-y-2 transition-all`}>
            {text}
            <div className={clsx('bg-white rounded-full p-2 hidden sm:block', text == 'Sign Up' && 'ml-3')}>
                <Plus color='#000000' />
            </div>
        </button>
    )
}

export default PurchaseButton