import Title from "../atom/Title";
import Button from "../atom/Button";
import type { CardProps } from "../../types/api";
export function Card({ title, description, buttonText }: CardProps) {
  return (
    <div className="bg-light-primary dark:bg-dark-secondary flex flex-col gap-4 rounded-lg p-6 shadow-lg">
      <Title size="md">{title}</Title>
      <p>{description}</p>
      <Button>{buttonText}</Button>
    </div>
  );
}

export default Card;
