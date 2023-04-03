import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StatementProps } from "../types/types";

interface EntryValues {
  [key: string]: string;
}

const Statement: React.FC<StatementProps> = ({
  entrie,
  description,
  number,
  newIndex,
  options,
  
}) => {
  const { paramIndex } = useParams<{ paramIndex: string }>();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [answered, setAnswered] = useState<boolean>(false);
  const [entryValues, setEntryValues] = useState<EntryValues>({});
  const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);

  useEffect(() => {
    // Cargar respuesta guardada del localStorage
    const savedEntryValues = JSON.parse(localStorage.getItem("entries") || "{}");
    setEntryValues(savedEntryValues);

    const savedValue = savedEntryValues[entrie];
    if (savedValue) {
      setSelectedOption(savedValue);
      setAnswered(true);
    }

       // Mostrar la descripción después de un pequeño retardo
      const timeoutId = setTimeout(() => {
        setDescriptionVisible(true);
      }, 200);
      return () => {
        clearTimeout(timeoutId);
      };




  }, [entrie]);

  function handleOptionChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
    const newValue = changeEvent.target.value;
    setSelectedOption(newValue);
    setAnswered(true);

    // Guardar respuesta en localStorage
    const newEntryValues = {
      ...entryValues,
      [entrie]: newValue,
    };





    localStorage.setItem("entries", JSON.stringify(newEntryValues));
    setEntryValues(newEntryValues);

      // Agregar la clase "selected" al label del option seleccionado
        // Agregar la clase "selected" al label del option seleccionado
  const selectedLabel = changeEvent.target.parentNode as HTMLLabelElement;
  const allLabels = document.querySelectorAll(`label.option-label`);
  allLabels.forEach((label) => label.classList.remove("selected"));
  selectedLabel.classList.add("selected");



  }

  return (
    <>
      <div className="container--statement" data-answered={answered}>
      <q className={`statement__description ${descriptionVisible ? "active" : "hidden"}`}>
          {description}
        </q>
        <div className="container__options">
          <div className="statement__options">
            {options.map((option) => {
              return (
                <div key={option.label} className="option">
                  <label className="option-label" htmlFor={option.label}>
                    <div className="option-square">
                      <span>{option.label}</span>
                    </div>
                    <input
                      type="radio"
                      name={entrie}
                      id={option.label}
                      value={option.label}
                      checked={selectedOption === option.label}
                      onChange={handleOptionChange}
                      hidden
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Statement;
