import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonPrimary } from "../../styles/button";

import api from "../../services/api";
import HeaderComponent from "../../components/HeaderComponent";
import { Section, Element } from "./styled";

const Dashboard = () => {
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    async function loadListItems() {
      const response = await api.get("/products");
      setListItems(response.data.data);
    }
    loadListItems();
  }, []);
  const navigate = useNavigate();
  function handleNavigation(id) {
    navigate(`/details/${id}`);
  }
  return (
    <div id="dashboard">
      <HeaderComponent />
      <Section>
        {listItems.map((item) => (
          <Element>
            <img src={item.imageUrl} alt={item.id} />
            <div className="content">
              <strong>{item.name}</strong>
              <p>{item.description.substr(0, 80)}...</p>
              <ButtonPrimary onClick={() => handleNavigation(item.id)}>
                Saiba Mais
              </ButtonPrimary>
            </div>
          </Element>
        ))}
      </Section>
    </div>
  );
};

export default Dashboard;
