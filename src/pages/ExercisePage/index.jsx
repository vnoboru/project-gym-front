import { ExerciseDataFetcher } from "../../components/DataFetcher";
import NavigatePages from "../../components/NavigatePages";
import { ExerciseRegisterForm } from "../../components/RegisterForm";

export function ExercisePage() {
  return (
    <>
      <NavigatePages />
      <ExerciseRegisterForm />
      <ExerciseDataFetcher />
    </>
  );
}
