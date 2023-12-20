import React, { useContext } from "react";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/Auth";

const Home: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <h1>
        Olá, {user?.name.toLowerCase()} {user?.last_name.toLowerCase()}
      </h1>
    </Container>
  );
};

export default Home;
