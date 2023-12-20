import React, { useContext, useState } from 'react';
import { Container } from './styles';
import { AuthContext } from '../../contexts/Auth';

const Signin: React.FC = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { singIn } = useContext(AuthContext);


  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    if (login && password) {
      return singIn(login, password);
    }
  }

  return (
    <Container>
          <div className="form">
            <input type="text" name="cpf" placeholder='CPF...' value={login} onChange={e => setLogin(e.target.value)}/>
            <input type="password" name="password" placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>LOGIN</button>
          </div>
    </Container>
  );
}

export default Signin;