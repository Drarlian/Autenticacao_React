import React, { useContext } from "react";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/Auth";

const Private: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <h1>
        Olá, {user?.name.toLowerCase()} {user?.last_name.toLowerCase()}
      </h1>
      <p>{user?.role}</p>
    </Container>
  );
};

export default Private;
