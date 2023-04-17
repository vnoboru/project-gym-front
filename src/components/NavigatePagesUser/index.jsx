import styled from "styled-components";
import logo from "../../assets/images/logo.png";

export default function NavigatePagesUser() {
  return (
    <ContainerNavbarUser>
      <img src={logo} alt="logo" />
      <button type="button">Sair</button>
    </ContainerNavbarUser>
  );
}

const ContainerNavbarUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`;
