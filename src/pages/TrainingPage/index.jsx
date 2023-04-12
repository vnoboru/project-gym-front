import { TrainingDataFetcher } from "../../components/DataFetcher";
import NavigatePages from "../../components/NavigatePages";
import { TrainingRegisterForm } from "../../components/RegisterForm";

export function TrainingPage() {
  return (
    <>
      <NavigatePages />
      <TrainingRegisterForm />
      <TrainingDataFetcher />
    </>
  );
}
