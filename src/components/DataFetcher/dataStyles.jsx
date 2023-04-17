import styled from "styled-components";

export const ContainerExercise = styled.div`
  width: 100%;
`;

export const ContainerTechnique = styled.div`
  width: 100%;
`;

export const ContainerTraining = styled.div`
  width: 100%;
`;

export const ContainerMain = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 20px;

  h1 {
    width: 242px;
    font-size: 22px;
    font-weight: 700;
  }
`;

export const ContainerData = styled.div`
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin-right: 5px;
    margin-bottom: 2px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 5px;

  input {
    margin-right: 10px;
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
