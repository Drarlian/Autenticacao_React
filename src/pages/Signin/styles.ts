import styled from 'styled-components';

export const Container = styled.div`
  
    height: 100vh;
    background: #DDD;

    display: flex;
    align-items: center;
    justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 1rem;

    input {
        padding: 10px 3px;
        border-radius: 4px;
        border: none;
        outline: none;
        font-size: 1.3em;
    }

    button {
        padding: 10px;
        background: #444aaa;
        border: none;
        border-radius: 4px;

        transition: .5s ease-in-out;
        cursor: pointer;
        color: #EEE;
        font-size: 1.4em;

        &:hover {
            opacity: 0.89;
        }
    }
  }
`;
