import { TechniqueDataFetcher } from "../../components/DataFetcher";
import NavigatePages from "../../components/NavigatePages";
import { TechniqueRegisterForm } from "../../components/RegisterForm";

export function TechniquePage() {
  return (
    <>
      <NavigatePages />
      <TechniqueRegisterForm />
      <TechniqueDataFetcher />
    </>
  );
}
