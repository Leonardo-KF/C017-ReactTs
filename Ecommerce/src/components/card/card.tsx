import { Product } from "../../utils/types/product.type";
import { CardSection } from "./styles";

export function Card({ description, id, imageURL, name, price }: Product) {
  return (
    <CardSection>
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <span>{price}</span>
      <h3>{description}</h3>
    </CardSection>
  );
}
