import Input from "../atom/Input";
import Title from "../atom/Title";
import type { FormProps } from "../../types/api";
export default function FormRow({ label, placeholder }: FormProps) {
  return (
    <div className="flex flex-col gap-1">
      <Title size="sm">{label}</Title>
      <Input type="text" placeholder={placeholder} />
    </div>
  );
}
