import { useContext, useState } from "react";
import { toast } from "react-toastify";
import TechniqueContext from "../../../contexts/TechniqueContext";
import usePostTechnique from "../../../hooks/api/usePostTechnique";
import { InputData } from "../../GlobalComponentsStyles/styles";
import { ContainerLabel, Form } from "../formStyles";

export default function TechniqueRegisterForm() {
  const { getTechnique } = useContext(TechniqueContext);

  const [dataTechnique, setDataTechnique] = useState({
    nameTechnique: "",
    description: "",
    numberSeries: "",
    numberRep: "",
  });

  const { postTechnique } = usePostTechnique();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postTechnique(dataTechnique);
      getTechnique();
      setDataTechnique({
        nameTechnique: "",
        description: "",
        numberSeries: "",
        numberRep: "",
      });

      toast.success("Técnica criada com sucesso!");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Nome da técnica já foi cadastrado!");
      } else {
        toast.error("Por favor, tente novamente!");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerLabel>
        <label htmlFor="nameTechnique">
          <h1>Nome da Técnica:</h1>
          <InputData
            type="text"
            value={dataTechnique.nameTechnique}
            onChange={(event) =>
              setDataTechnique({
                ...dataTechnique,
                nameTechnique: event.target.value,
              })
            }
          />
        </label>
        <label htmlFor="description">
          <h1>Descrição:</h1>
          <InputData
            type="text"
            value={dataTechnique.description}
            onChange={(event) =>
              setDataTechnique({
                ...dataTechnique,
                description: event.target.value,
              })
            }
          />
        </label>
        <label htmlFor="numberSeries">
          <h1>Número de séries:</h1>
          <InputData
            type="text"
            value={dataTechnique.numberSeries}
            onChange={(event) =>
              setDataTechnique({
                ...dataTechnique,
                numberSeries: event.target.value,
              })
            }
          />
        </label>
        <label htmlFor="numberRep">
          <h1>Número de repetições:</h1>
          <InputData
            type="text"
            value={dataTechnique.numberRep}
            onChange={(event) =>
              setDataTechnique({
                ...dataTechnique,
                numberRep: event.target.value,
              })
            }
          />
        </label>
      </ContainerLabel>
      <button type="submit">Submit</button>
    </Form>
  );
}
