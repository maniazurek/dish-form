import { MainLayout, Header, Button, Overlay } from "../utils/styledComponents";
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
      <Header></Header>

      {isFormOpen && (
        <Overlay>
          <Form
            handleOpenForm={handleOpenForm}
            addPizzaData={addPizzaData}
            addSoupData={addSoupData}
            addSandwichData={addSandwichData}
          />
        </Overlay>
      )}
      <Button
        onClick={(event) => handleOpenForm(event)}
        style={{
          borderRadius: "50%",
          position: "sticky",
          width: "60px",
          height: "60px",
          fontSize: "20px",
          margin: "0",
          bottom: "30px",
          marginLeft: "1180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <i className="fa fa-plus"></i>
      </Button>
    </MainLayout>
  );
};

export default Content;
