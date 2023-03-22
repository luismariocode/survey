import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Outlet, useParams, useLocation } from "react-router-dom";
// import shuffleStatements from "./scripts/scripts";
import Statement from "./components/Statement";
import { StatementProps, EntryValues, IndexValues } from "./types/types";
import  dataSurvey  from "../../server/server";
// import data from "../../server/statement.json";
// const dataSurvey = shuffleStatements(data);



const Survey: React.FC = () => {
  const navigate = useNavigate();
  const param = useParams();

  const nextQuestionValue = JSON.parse(localStorage.getItem("nextQuestion") || "{}");
  const dataSurvey = JSON.parse(localStorage.getItem("data") || "[]");

  const [indexValue, setIndexValue] = useState<IndexValues>(nextQuestionValue);


  function handlePrevQuestion() {
    const newIndex = indexValue.indexPath - 1;
    localStorage.setItem("nextQuestion", JSON.stringify({ indexPath: newIndex, indexRender: newIndex - 1 }));
    navigate(`/pregunta/${newIndex}`);
    setIndexValue({ indexPath: newIndex, indexRender: newIndex - 1 });
  }


  function handleNextQuestion() {
    const newIndex = indexValue.indexPath + 1;
    localStorage.setItem("nextQuestion", JSON.stringify({ indexPath: newIndex, indexRender: newIndex - 1 }));
    navigate(`/pregunta/${newIndex}`);
    setIndexValue({ indexPath: newIndex, indexRender: newIndex - 1 });
  }

  function handleValidate() {
    const entries = JSON.parse(localStorage.getItem("entries") || "{}");
    const nextQuestion = JSON.parse(localStorage.getItem("nextQuestion") || "{}");
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    const entriesProps = {
      entries,
      nextQuestion,
      data,
    };
    navigate("/validar", { state: { entriesProps } });
  }

  

  return (
    <div className="container__survey">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="count__survey">{indexValue.indexPath}/{dataSurvey.length}</div>
              <Outlet />
            
              <Statement
                key={dataSurvey[indexValue.indexRender].entrie}
                entrie={dataSurvey[indexValue.indexRender].entrie}
                description={dataSurvey[indexValue.indexRender].description}
                number={dataSurvey[indexValue.indexRender].number}
                newIndex={dataSurvey[indexValue.indexRender].newIndex}
                options={dataSurvey[indexValue.indexRender].options}
                answered={false}
              />




              {indexValue.indexPath > 1 && <button className="button-prev" onClick={handlePrevQuestion}>Anterior</button>}
              {dataSurvey.length === indexValue.indexPath ? (
                <button className="button-next" onClick={handleValidate}>
                  Validar
                </button>
              ) : (
                  <button className="button-next" onClick={handleNextQuestion} disabled={!dataSurvey[indexValue.indexRender].entrie}>

                  Siguiente
                </button>
              )}
            </>
          }
        />
      </Routes>
    </div>
  );
};



export default Survey;