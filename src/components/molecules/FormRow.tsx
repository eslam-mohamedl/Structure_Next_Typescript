import Input from "../atoms/Input";
import Title from "../atoms/Title";

interface FormProps{
    label:string;
    placeholder?:string;
}

export default function FormRow({label, placeholder}: FormProps){
    return (
        <div className="flex flex-col gap-1">
            <Title size="sm">{label}</Title>
            <Input placeholder={placeholder} />
        </div>
    );
}