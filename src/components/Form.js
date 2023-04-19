import {
  Window,
  CloseButton,
  FormPost,
  Button,
  Input,
} from "../utils/styledComponents";
import { useState } from "react";
import { types } from "../utils/types";

const Form = ({
  handleOpenForm,
  addPizzaData,
  addSoupData,
  addSandwichData,
}) => {
  const [dishes, setDishes] = useState([]);
  const [name, setName] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [type, setType] = useState("");
  const [numberOfSlices, setNumberOfSlices] = useState("");
  const [diameter, setDiameter] = useState("");
  const [spiciness, setSpiciness] = useState("");
  const [slices, setSlices] = useState("");

  //   const addNewDish = (event) => {
  //     event.preventDefault();
  //     const newDish = {
  //       name: name,
  //       preparation_time: preparationTime,
  //       type: type,
  //       no_of_slices: numberOfSlices,
  //       diameter: diameter,
  //       spiciness_scale: spiciness,
  //       slices_of_bread: slices,
  //     };
  //     setDishes([...dishes, newDish]);
  //     addDishData(
  //       name,
  //       preparationTime,
  //       type,
  //       numberOfSlices,
  //       diameter,
  //       spiciness,
  //       slices
  //     );
  //   };

  const addNewDish = (event) => {
    event.preventDefault();
    if (type === "pizza") {
      addPizzaData(name, preparationTime, type, numberOfSlices, diameter);
    } else if (type === "soup") {
      addSoupData(name, preparationTime, type, spiciness);
    } else if (type === "sandwich") {
      addSandwichData(name, preparationTime, type, slices);
    }
  };

  return (
    <Window>
      <FormPost onSubmit={addNewDish}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></Input>
        <Input
          step="3"
          type="time"
          placeholder="Time"
          value={preparationTime}
          onChange={(event) => setPreparationTime(event.target.value)}
        ></Input>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          {types.map((type) => {
            return <option value={type.name}>{type.name}</option>;
          })}
        </select>
        {type === "pizza" && (
          <div>
            <Input
              type="Number of slices"
              placeholder="Number"
              value={numberOfSlices}
              onChange={(event) => setNumberOfSlices(event.target.value)}
            ></Input>
            <Input
              type="number"
              step="any"
              placeholder="Number"
              value={diameter}
              onChange={(event) => setDiameter(event.target.value)}
            ></Input>
          </div>
        )}
        {type === "soup" && (
          <Input
            type="number"
            max={10}
            min={0}
            value={spiciness}
            onChange={(event) => setSpiciness(event.target.value)}
          ></Input>
        )}
        {type === "sandwich" && (
          <Input
            type="number"
            value={slices}
            onChange={(event) => setSlices(event.target.value)}
          ></Input>
        )}

        <CloseButton style={{ top: "18px", right: "-18px" }}>
          <i
            onClick={handleOpenForm}
            class="fa fa-close"
            style={{ width: "60px", height: "60px" }}
          ></i>
        </CloseButton>
        <Button>Add</Button>
      </FormPost>
    </Window>
  );
};

export default Form;
