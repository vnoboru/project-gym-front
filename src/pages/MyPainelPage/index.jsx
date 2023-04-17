import { useState } from "react";
import useList from "../../hooks/api/useList";

export default function MyPainelPage() {
  const [days, setDays] = useState("");
  const { list, getList } = useList();
  const [selectedTraining, setSelectedTraining] = useState("");

  const handleSubmit = () => {
    getList(days);
    setDays("");
  };

  return (
    <>
      <h1>Selecione número de dias:</h1>
      <input value={days} onChange={(event) => setDays(event.target.value)} />
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
      {list !== null && list !== undefined && list.length > 0 ? (
        <>
          <h1>Selecione o treino:</h1>
          <select value={selectedTraining} onChange={(event) => setSelectedTraining(event.target.value)}>
            <option value="">Selecione um treino</option>
            {[...new Set(list.map((item) => item.training.nameTraining))].map((nameTraining) => (
              <option key={nameTraining} value={nameTraining}>
                {nameTraining}
              </option>
            ))}
          </select>
          <h1>Exercícios:</h1>
          <ul>
            {list.map((item) => {
              if (item.training.nameTraining === selectedTraining) {
                return (
                  <li key={item.id}>
                    {item.exercices && item.exercices.nameExerc} - {item.technique && item.technique.nameTechnique}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
}
