import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerScreen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  height: 100px;
  width: 100%;
  background-color: #000000;
  display: none;

  @media (max-width: 1024px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 130px;
    }
  }
`;

export const ContainerData = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  padding: 50px 0 100px 0;

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  input {
    width: 80%;
    height: 10%;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 2.5em;
    color: #000000;
    padding: 1em;
    margin: 4px auto;
  }

  button {
    width: 80%;
    height: 45px;
    left: 36px;
    top: 381px;
    background: #1c9e32;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    border: #52b6ff solid 1px;
    color: #ffffff;
    margin: 4px auto;
  }

  @media (max-width: 1024px) {
    width: 100vw;

    form {
      width: 50%;
    }

    input,
    button {
      width: 70%;
      margin: 4px auto;
    }
  }

  @media (max-width: 640px) {
    width: 100vw;

    form {
      width: 80%;
    }

    input,
    button {
      width: 70%;
      margin: 4px auto;
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: none;
  color: #000000;
`;

export const SidebarLogo = styled.div`
  width: 60vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 350px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
