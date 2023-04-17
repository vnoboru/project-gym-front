import styled from "styled-components";

export const ContainerDataSelect = styled.div`
  width: 360px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  button {
    margin-top: 10px;
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
    padding: 5px 22px;
    cursor: pointer;
  }
`;

export const ContainerSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0px;

  select {
    border: 2px solid #cccccc;
    border-radius: 5px;
    width: 220px;
    height: 30px;
  }
`;
