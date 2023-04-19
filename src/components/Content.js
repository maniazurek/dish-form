import {
  MainLayout,
  Header,
  Button,
  Overlay,
  Picture,
  PicturesContainer,
  Title,
} from "../utils/styledComponents";
import { useState } from "react";
import Form from "./Form";
import { BASE_API_URL } from "../utils/commons";

const Content = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [dishesData, setDishesData] = useState([]);

  const handleOpenForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const addPizzaData = (
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter
  ) => {
    fetch(`${BASE_API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        preparation_time,
        type,
        no_of_slices,
        diameter,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("pizza added"));
  };

  const addSoupData = (name, preparation_time, type, spiciness_scale) => {
    fetch(`${BASE_API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        preparation_time,
        type,
        spiciness_scale,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("added"));
  };

  const addSandwichData = (name, preparation_time, type, slices_of_bread) => {
    fetch(`${BASE_API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        preparation_time,
        type,
        slices_of_bread,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("added"));
  };

  return (
    <MainLayout>
      <Header>Click the button to add one of the dishes below:</Header>
      <PicturesContainer>
        <Picture
          alt="pizza"
          title="pizza"
          src="https://www.todis.it/wp-content/uploads/2021/01/giornata-mondiale-della-pizza-la-storia-di-un-piatto-unico.jpg"
        ></Picture>
        <Picture
          alt="soup"
          title="soup"
          src="https://staticsmaker.iplsc.com/smaker_production_2022_11_10/c3c3d6a52921a815f710a9eafa92f372-recipe_main.jpg"
        ></Picture>
        <Picture
          alt="sandwich"
          title="sandwich"
          src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/kanapka-wloska.jpg"
        ></Picture>
      </PicturesContainer>
      {isFormOpen && (
        <Overlay>
          <Form
            handleOpenForm={handleOpenForm}
            addPizzaData={addPizzaData}
            addSoupData={addSoupData}
            addSandwichData={addSandwichData}
            setIsFormOpen={setIsFormOpen}
          />
        </Overlay>
      )}
      <Button
        onClick={(event) => handleOpenForm(event)}
        style={{
          borderRadius: "10px",
          width: "200px",
          height: "60px",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          gap: "12px",
        }}
      >
        <i className="fa fa-plus" style={{ fontSize: "15px" }}></i>
        <Title>Open a dish form</Title>
      </Button>
    </MainLayout>
  );
};

export default Content;
