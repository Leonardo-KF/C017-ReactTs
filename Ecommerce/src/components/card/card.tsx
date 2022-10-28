import { Product } from "../../utils/types/product.type";
import {
  CardSection,
  ButtonsDiv,
  Buttons,
  BuySection,
  CardFooter,
} from "./styles";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/products";

export function Card({ description, id, imageURL, name, price }: Product) {
  const navigate = useNavigate();

  const { deleteProduct, addToCart } = useProducts();
  async function DeleteCard() {
    swal({
      title: "Deletar Produto?",
      text: "Tem certeza que deseja deletar este produto?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "Cancelar",
          value: null,
          visible: true,
          closeModal: true,
          className: "",
        },
        confirm: {
          text: "Confirmar",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      if (res) {
        deleteProduct(id);
      }
    });
  }

  const desconto = 40;

  return (
    <CardSection>
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      {desconto ? (
        <>
          <span
            style={{ textDecorationLine: "underline" }}
          >{`R$ ${price.toFixed(2)}`}</span>
          <span>{`R$ ${(price * ((100 - 40) / 100)).toFixed(2)}`}</span>
        </>
      ) : (
        <span>{`R$ ${price.toFixed(2)}`}</span>
      )}
      <h3>{description}</h3>
      <CardFooter>
        <ButtonsDiv>
          <Buttons
            color="blue"
            width="60px"
            onClick={() => {
              navigate("/update/" + id);
            }}
          >
            Editar
          </Buttons>
          <Buttons color="red" width="60px" onClick={DeleteCard}>
            Deletar
          </Buttons>
        </ButtonsDiv>
        <BuySection>
          <Buttons
            color="green"
            width="120px"
            onClick={() => {
              addToCart({ description, id, imageURL, name, price });
            }}
          >
            Comprar Produto
          </Buttons>
        </BuySection>
      </CardFooter>
    </CardSection>
  );
}
