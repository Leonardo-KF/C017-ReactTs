import { api } from "../../utils/api/api";
import { Product } from "../../utils/types/product.type";
import { CardSection, ButtonsDiv, Buttons } from "./styles";
import swal from "sweetalert";

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

  return (
    <CardSection>
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <span>{price}</span>
      <h3>{description}</h3>
      <ButtonsDiv>
        <Buttons color="blue">Editar</Buttons>
        <Buttons color="red" onClick={DeleteCard}>
          Deletar
        </Buttons>
      </ButtonsDiv>
    </CardSection>
  );
}
