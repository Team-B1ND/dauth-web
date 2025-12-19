import * as S from "./style";

export interface ServiceCardProps {
  title: string;
  url: string;
  description: string;
  date: string;
  author: string;
}

const ServiceCard = ({
  title,
  url,
  description,
  date,
  author,
} : ServiceCardProps) => {
  return (
    <S.Card>
      <h1>{title}</h1>
      <S.CardUrl>{url}</S.CardUrl>
      <S.CardDescription>{description}</S.CardDescription>
      <S.CardFooter>
        <span>{date}</span>
        <span>{author}</span>
      </S.CardFooter>
    </S.Card>
  );
};

export default ServiceCard;
