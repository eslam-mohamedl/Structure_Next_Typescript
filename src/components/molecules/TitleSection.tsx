import Text from '../atoms/Text';
import Title from '../atoms/Title';

interface TitleSectionProps {
  title: string;
  text: string;
  titleVariant: 'primary' | 'secondary';
  TextVariant: 'primary' | 'secondary';
}
export default function TitleSection({
  title,
  text,
  titleVariant = 'primary',
  TextVariant = 'primary',
}: TitleSectionProps) {
  return (
    <div>
      <Title size="lg" variant={titleVariant}>
        {title}
      </Title>
      <Text size="md" variant={TextVariant}>
        {text}
      </Text>
    </div>
  );
}
