import React, { useState } from "react";
import { useLocation, useNavigate, } from "react-router-dom";
import { handleKeyPress , isValidMail } from "./scripts/scripts";
import { EntryValues, IndexValues } from "./types/types";

const User: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate();

  const entries = location.state?.entriesProps?.entries || {
    "entry.1591421491": "",
    "entry.23723034": "",
  };

  const nextQuestion = location.state?.entriesProps?.nextQuestion || {
    indexPath: 0,
    indexRender: 0,
  };

  console.log(entries)


  const [entryValues, setEntryValues] = useState<EntryValues>(entries);
  const [indexValues, setIndexValues] = useState<IndexValues>(nextQuestion);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntryValues({
      ...entryValues,
      [event.target.name]: event.target.value,
    });
    setIndexValues({
      indexPath:1,
      indexRender:0,
    })
  };

  const isValid =
    entryValues["entry.1591421491"] !== "" &&
    isValidMail(entryValues["entry.1591421491"]) &&
    entryValues["entry.23723034"] !== "";

  const handleSaveEntries = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.setItem("entries", JSON.stringify(entryValues));
    localStorage.setItem("nextQuestion", JSON.stringify(indexValues));
    navigate("/pregunta/"+indexValues["indexPath"]);
  };

   return (
    <>
      <div className="container__datos" >
        <>
        <h2>Ingresa tus Datos</h2>
           {console.log("Siguiente Pregunta: ", indexValues["indexPath"])}
        <div className="dato__nombre">
          <input
            type="text"
            name="entry.23723034"
            value={entryValues["entry.23723034"]}
            onChange={handleInputChange}
            onKeyDown={(event) =>
              handleKeyPress(event, handleSaveEntries, isValid)
            }
            placeholder="Nombre Completo"
            required
          />
        </div>
          <div className="dato__correo-electronico dato__nombre">
          <input
            className="input-correo"
            type="email"
            name="entry.1591421491"
            value={entryValues["entry.1591421491"]}
            onChange={handleInputChange}
            onKeyDown={(event) =>
              handleKeyPress(event, handleSaveEntries, isValid)
            }
            placeholder="Correo Electrónico"
            required
          />
          {!isValidMail(entryValues["entry.1591421491"]) && (
            <div className="error-correo" >Ingresa un correo electrónico válido</div>
          )}
        </div>
        <div>
            <button onClick={handleSaveEntries} className="datos__button-empezar" disabled={!isValid}>
            Empieza!
          </button>
        </div>
        </>
      </div>
    </>
  );
};

export default User;