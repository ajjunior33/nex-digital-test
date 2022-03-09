import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiCornerDownLeft } from "react-icons/fi";

import HeaderComponent from "../../components/HeaderComponent";
import { ButtonDanger } from "../../styles/button";
import { Section, Article } from "./styled";

import api from "../../services/api";

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [item, setItem] = useState({});
  useEffect(() => {
    async function loadItem() {
      const { id } = params;

      const response = await api.get(`/products/${id}`);
      setItem(response.data.data);
    }
    loadItem();
  }, [params]);
  function handleBack() {
    navigate(`/`);
  }

  return (
    <div id="Details">
      <HeaderComponent />
      <Section>
        <img src={item.imageUrl} alt={item.id} />
        <Article>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <ButtonDanger onClick={() => handleBack()}>
            <FiCornerDownLeft /> Voltar
          </ButtonDanger>
        </Article>
      </Section>
    </div>
  );
};
export default Details;
