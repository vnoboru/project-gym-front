import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 10px;
    width: 200px;
    height: 30px;

    font-size: 14px;
    font-weight: 700;
  }
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    margin: 0 20px;
    margin-top: 10px;

    h1 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    input {
      border-color: #cccccc;
      border-style: solid;
      border-width: 2px;
      border-radius: 4px;
      font-size: 14px;
      padding: 4px;
      font-weight: bold;
    }
  }
`;
