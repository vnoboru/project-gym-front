import styled from "styled-components";

export const ContainerNavbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #000000;

  img {
    margin-left: 20px;
    width: 130px;
  }

  button {
    margin: 8px;
    display: inline-block;
    text-align: center;
    border: 1px solid hsl(83, 29%, 37%);
    text-transform: uppercase;
    font-weight: normal;
    font-family: sans-serif;
    color: #ffffff;
    font-size: 12px;
    background: #73b10e;
    text-shadow: 1px 1px 1px #365207;
    border-radius: 10px;
    padding: 7px 18px;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    button {
      padding: 5.5px 5px;
      font-size: 8px;
    }
  }
`;

export const ContainerButtons = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 400px;
    flex-wrap: wrap;
  }
`;
