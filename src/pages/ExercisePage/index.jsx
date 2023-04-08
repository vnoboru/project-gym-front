import { ExerciseDataFetcher } from "../../components/DataFetcher";
import { ExerciseRegisterForm } from "../../components/RegisterForm";

export function ExercisePage() {
  return (
    <>
      <ExerciseRegisterForm />
      <ExerciseDataFetcher />
    </>
  );
}
