import { useState } from "react";
import { toast } from "react-toastify";
import usePostExercise from "../../hooks/api/usePostExercise";

export default function ExerciseRegisterForm() {
  const [dataExercise, setDataExercise] = useState({
    nameExerc: "",
    bodyPart: "",
    classification: "",
  });

  const { postExercise } = usePostExercise();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postExercise(dataExercise);
      setDataExercise({
        nameExerc: "",
        bodyPart: "",
        classification: "",
      });
      toast.success("Exercise created successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameExerc">
        Exercise Name:
        <input
          type="text"
          value={dataExercise.nameExerc}
          onChange={(event) =>
            setDataExercise({
              ...dataExercise,
              nameExerc: event.target.value,
            })
          }
        />
      </label>
      <label htmlFor="bodyPart">
        Body Part:
        <input
          type="text"
          value={dataExercise.bodyPart}
          onChange={(event) =>
            setDataExercise({
              ...dataExercise,
              bodyPart: event.target.value,
            })
          }
        />
      </label>
      <label htmlFor="classification">
        Classification:
        <input
          type="text"
          value={dataExercise?.classification}
          onChange={(event) =>
            setDataExercise({
              ...dataExercise,
              classification: event.target.value,
            })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
