import { useContext } from "react";
import ExerciseContext from "../../../contexts/ExerciseContext";

export default function ExerciseDataFetcher() {
  const { exercisesInfo } = useContext(ExerciseContext);

  console.log(exercisesInfo);
}
