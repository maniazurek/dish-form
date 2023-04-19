import { useNavigate } from "react-router-dom";
import {
  MainLayout,
  MainTitle,
  Button,
  Title,
} from "../utils/styledComponents";

const Welcome = () => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/dishes");
  };
  return (
    <MainLayout style={{ margin: "0", paddingLeft: "80px" }}>
      <MainTitle style={{ marginTop: "100px" }}>Hello!</MainTitle>
      <MainTitle>Click the button below to add a new dish:</MainTitle>
      <Button
        onClick={onStart}
        style={{ fontSize: "25px", padding: "10px", marginTop: "35px" }}
      >
        <Title>Next</Title>
        <span
          class="fas fa-angle-double-right"
          style={{ fontSize: "23px" }}
        ></span>
      </Button>
    </MainLayout>
  );
};

export default Welcome;
