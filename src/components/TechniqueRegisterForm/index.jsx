import { useState } from "react";
import { toast } from "react-toastify";
import usePostTechnique from "../../hooks/api/usePostTechnique";

export default function TechniqueRegisterForm() {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameTechnique">
        Nome da Técnica:
        <input
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
        Descrição:
        <input
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
        Número de séries:
        <input
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
        Número de repetições:
        <input
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
      <button type="submit">Submit</button>
    </form>
  );
}
