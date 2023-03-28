import { TechniqueDataFetcher } from "../../components/DataFetcher";
import { TechniqueRegisterForm } from "../../components/RegisterForm";

export function TechniquePage() {
  return (
    <>
      <TechniqueRegisterForm />
      <TechniqueDataFetcher />
    </>
  );
}

const techniqueDataPage = {
  TechniqueRegisterForm,
};

export { techniqueDataPage };
