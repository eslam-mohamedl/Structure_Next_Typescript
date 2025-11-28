import React from "react";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}
export function Card({ title, description, buttonText }: CardProps) {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-light-primary dark:bg-dark-secondary flex flex-col gap-4">
      <Title size="md">{title}</Title>
      <p>{description}</p>
      <Button>{buttonText}</Button>
    </div>
  );
}

export default Card;
