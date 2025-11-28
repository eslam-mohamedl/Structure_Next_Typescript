import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>){
    return(
        <input 
        className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary-600"
        {...props}
        />
    )
}