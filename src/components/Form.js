import {
  Window,
  CloseButton,
  FormPost,
  Button,
  Input,
  Header,
  TextContainer,
  Title,
  Error,
} from "../utils/styledComponents";
import { useState } from "react";
import { types } from "../utils/types";

const Form = ({
  handleOpenForm,
  addPizzaData,
  addSoupData,
  addSandwichData,
  setIsFormOpen,
}) => {
  const [name, setName] = useState("");
  const [preparationTime, setPreparationTime] = useState("null");
  const [type, setType] = useState("");
  const [numberOfSlices, setNumberOfSlices] = useState("");
  const [diameter, setDiameter] = useState("");
  const [spiciness, setSpiciness] = useState("");
  const [slices, setSlices] = useState("");
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const addNewDish = (event) => {
    event.preventDefault();
    if (name.length < 3) {
      setNameError(true);
    } else {
      if (type === "pizza") {
        if (numberOfSlices.length < 1 || diameter.length < 1) {
          setError(true);
        } else {
          addPizzaData(name, preparationTime, type, numberOfSlices, diameter);
          setIsFormOpen(false);
        }
      } else if (type === "soup") {
        if (!spiciness) {
          setError(true);
        } else {
          addSoupData(name, preparationTime, type, spiciness);
          setIsFormOpen(false);
        }
      } else if (type === "sandwich") {
        if (slices < 1) {
          setError(true);
        } else {
          addSandwichData(name, preparationTime, type, slices);
          setIsFormOpen(false);
        }
      }
    }
  };

  return (
    <>
      <Window>
        {nameError && <Error>Name has to have at least 3 characters</Error>}
        {error && <Error>All fields are required</Error>}
        <TextContainer style={{ display: "flex", flexDirection: "column" }}>
          <Header>Add a new dish:</Header>
          <FormPost onSubmit={addNewDish}>
            <TextContainer>
              <Title>1. Name:</Title>
              <Input
                type="text"
                placeholder="Name a dish..."
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></Input>
            </TextContainer>
            <TextContainer>
              <Title>2. Preparation time:</Title>
              <Input
                step="3"
                type="time"
                placeholder="Time"
                value={preparationTime}
                onChange={(event) => setPreparationTime(event.target.value)}
              ></Input>
            </TextContainer>
            <TextContainer>
              <Title>3. Type:</Title>
              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value="" disabled hidden></option>
                {types.map((type) => {
                  return (
                    <option value={type.name} key={type.name}>
                      {type.name}
                    </option>
                  );
                })}
              </select>
            </TextContainer>
            <TextContainer>
              {type === "pizza" && (
                <TextContainer
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "start",
                  }}
                >
                  <TextContainer>
                    <Title>4. Number of slices:</Title>
                    <Input
                      type="Number of slices"
                      placeholder="Number"
                      value={numberOfSlices}
                      onChange={(event) =>
                        setNumberOfSlices(event.target.value)
                      }
                    ></Input>
                  </TextContainer>
                  <TextContainer>
                    <Title>5. Diameter:</Title>
                    <Input
                      type="number"
                      min={0}
                      step="any"
                      placeholder="Number"
                      value={diameter}
                      onChange={(event) => setDiameter(event.target.value)}
                    ></Input>
                  </TextContainer>
                </TextContainer>
              )}
            </TextContainer>
            <TextContainer>
              {type === "soup" && (
                <TextContainer>
                  <Title>4. Spiceness level:</Title>
                  <Input
                    type="number"
                    max={10}
                    min={0}
                    value={spiciness}
                    onChange={(event) => setSpiciness(event.target.value)}
                  ></Input>
                </TextContainer>
              )}
            </TextContainer>
            {type === "sandwich" && (
              <TextContainer>
                <Title>4. Number of slices of bread:</Title>
                <Input
                  type="number"
                  min={0}
                  value={slices}
                  onChange={(event) => setSlices(event.target.value)}
                ></Input>
              </TextContainer>
            )}

            <TextContainer
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button>Add</Button>
            </TextContainer>
          </FormPost>
        </TextContainer>
        <CloseButton style={{ top: "18px", right: "-18px" }}>
          <i
            onClick={handleOpenForm}
            className="fa fa-close"
            style={{ width: "60px", height: "60px" }}
          ></i>
        </CloseButton>
      </Window>
    </>
  );
};

export default Form;
