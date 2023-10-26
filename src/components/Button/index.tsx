import {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['rounded-lg', 'w-full', 'justify-center', 'text-title-small', 'text-greyscale-500', 'py-2'],{
    variants:{
        variant:{
            primary:[
                'bg-secondary-500',
                'hover:bg-secondary-600'
            ],
            secondary:[
                'bg-white border border-secondary-500',
                'hover:bg-secondary-400'
            ],
        }
    },
    defaultVariants:{
        variant:'primary'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{

}

const Button = ({variant, name}:ButtonProps) => {
    return <button className={buttonVariant({ variant })}>{name}</button>;
}

export default Button
