import { api } from "../../utils/api/api";
import { Product } from "../../utils/types/product.type";
import { CardSection, ButtonsDiv, Buttons, Line } from "./styles";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

interface CardProps extends Product {
  updatePage: () => void;
}

export function Card({
  description,
  id,
  imageURL,
  name,
  price,
  updatePage,
}: CardProps) {
  const navigate = useNavigate();

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
      console.log(res);
      if (res) {
        const isDeleted = await api.deleteProduct(id);
        if (isDeleted) {
          updatePage();
        }
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
      <ButtonsDiv>
        <Buttons
          color="blue"
          onClick={() => {
            navigate("/update/" + id);
          }}
        >
          Editar
        </Buttons>
        <Buttons color="red" onClick={DeleteCard}>
          Deletar
        </Buttons>
      </ButtonsDiv>
    </CardSection>
  );
}
