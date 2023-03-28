import { TrainingDataFetcher } from "../../components/DataFetcher";
import { TrainingRegisterForm } from "../../components/RegisterForm";

export function TrainingPage() {
  return (
    <>
      <TrainingRegisterForm />
      <TrainingDataFetcher />
    </>
  );
}

const trainingDataPage = {
  TrainingRegisterForm,
};

export { trainingDataPage };
