import {
  Window,
  CloseButton,
  FormPost,
  Button,
  Input,
} from "../utils/styledComponents";
import { useState } from "react";

const Form = ({ handleOpenForm, addDishData }) => {
  const [dishes, setDishes] = useState([]);
  const [name, setName] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [type, setType] = useState("");
  const [numberOfSlices, setNumberOfSlices] = useState("");
  const [diameter, setDiameter] = useState("");

  const addNewDish = (event) => {
    event.preventDefault();
    const newDish = {
      name: name,
      preparation_time: preparationTime,
      type: type,
      no_of_slices: numberOfSlices,
      diameter: diameter,
    };
    setDishes([...dishes, newDish]);
    addDishData(name, preparationTime, type, numberOfSlices, diameter);
    console.log(dishes);
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
          type="text"
          placeholder="Time"
          value={preparationTime}
          onChange={(event) => setPreparationTime(event.target.value)}
        ></Input>
        <Input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        ></Input>
        <Input
          type="Number of slices"
          placeholder="Number"
          value={numberOfSlices}
          onChange={(event) => setNumberOfSlices(event.target.value)}
        ></Input>
        <Input
          type="Diameter"
          placeholder="Number"
          value={diameter}
          onChange={(event) => setDiameter(event.target.value)}
        ></Input>

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
