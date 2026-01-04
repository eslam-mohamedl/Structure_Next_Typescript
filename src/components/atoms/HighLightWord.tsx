interface HighlightTextProps {
  text: string;
  highlight?: string;
  highlightClassName?: string;
}

export function HighlightText({
  text,
  highlight,
  highlightClassName = "text-primary",
}: HighlightTextProps) {
  if (!highlight) return <>{text}</>;

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className={highlightClassName}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
