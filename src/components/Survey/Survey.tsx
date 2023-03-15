import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Outlet, useParams, useLocation } from "react-router-dom";
import shuffleStatements from "./scripts/scripts";
import Statement from "./Statement";
import { StatementProps, EntryValues, IndexValues } from "./types/types";
import data from "../../server/statement.json";
const dataSurvey = shuffleStatements(data);



const Survey: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const nextQuestionValue = JSON.parse(localStorage.getItem('nextQuestion') || '{}');

  const [indexCurrent, setIndexCurrent] = useState<IndexValues>(nextQuestionValue);
  const [indexPrev, setIndexPrev] = useState<IndexValues>({ indexPath: nextQuestionValue["indexPath"], indexRender: nextQuestionValue["indexRender"] });
  const [indexNext, setIndexNext] = useState<IndexValues>({ indexPath: 1, indexRender: 1 });



  const currentQuestionValue = location.state?.entriesProps?.currentQuestion || {
    indexPath: nextQuestionValue["indexPath"],
    indexRender: nextQuestionValue["indexRender"],
  };



  function handleStatementChange() {
    // obtener el valor actual de nextQuestion del localStorage
    const nextQuestionValue = JSON.parse(localStorage.getItem('nextQuestion') || '{}');

    // actualizar la propiedad indexPath en 1
    nextQuestionValue.indexPath += 1;

    // guardar el valor actualizado de nextQuestion en el localStorage
    localStorage.setItem('nextQuestion', JSON.stringify(nextQuestionValue));

    // actualizar los estados de indexPrev, indexCurrent y indexNext
    setIndexPrev({
      indexPath: indexCurrent.indexPath,
      indexRender: indexCurrent.indexRender,
    });
    setIndexCurrent({
      indexPath: nextQuestionValue.indexPath,
      indexRender: nextQuestionValue.indexRender,
    });
    setIndexNext({
      indexPath: nextQuestionValue.indexPath + 1,
      indexRender: nextQuestionValue.indexRender + 1,
    });

    // navegar a la siguiente pregunta
    navigate(`/pregunta/${nextQuestionValue.indexPath}`);
  }

  function handlePrevChange() {
    const prevQuestionValue = JSON.parse(localStorage.getItem("prevQuestion") || "{}");

    // actualizar la propiedad indexPath en -1
    prevQuestionValue.indexPath -= 1;

    // guardar el valor actualizado de prevQuestion en el localStorage
    localStorage.setItem("prevQuestion", JSON.stringify(prevQuestionValue));

    // actualizar los estados de indexPrev, indexCurrent y indexNext
    setIndexPrev({
      indexPath: prevQuestionValue.indexPath-1,
      indexRender: prevQuestionValue.indexRender-1,
    });
    setIndexCurrent({
      indexPath: prevQuestionValue.indexPath,
      indexRender: prevQuestionValue.indexRender,
    });
    setIndexNext({
      indexPath: indexCurrent.indexPath,
      indexRender: indexCurrent.indexRender,
    });

    // navegar a la pregunta previa
    navigate(`/pregunta/${indexCurrent.indexPath}`);
  }

function handleSurveyConfirmation() {
  navigate(`/validar`);
}
  


  


  return (
    <div className="container__survey">
      <Routes>
        {dataSurvey[currentQuestionValue["indexPath"]] && (

          <Route

            path="/pregunta/:paramIndex"
            element={
              <>
                <div className="count__survey">{currentQuestionValue["indexPath"]}/{dataSurvey.length}</div>
                {/* {console.log('pregunta actual', dataSurvey)}    */}
                <Statement
                  key={dataSurvey[currentQuestionValue["indexPath"]].entrie}
                  entrie={dataSurvey[currentQuestionValue["indexPath"]].entrie}
                  description={dataSurvey[currentQuestionValue["indexPath"]].description}
                  number={dataSurvey[currentQuestionValue["indexPath"]].number}
                  newIndex={dataSurvey[currentQuestionValue["indexPath"]].newIndex}
                  options={dataSurvey[currentQuestionValue["indexPath"]].options}
                  answered={false}
                />
                {currentQuestionValue["indexPath"] > 1 && (
                  <button className="button-prev" onClick={handlePrevChange}>Anterior</button>
                )}
                {dataSurvey.length == currentQuestionValue["indexPath"]-2 ? (
                  <button className="button-next" onClick={handleSurveyConfirmation}>Validar</button>
                ) :
                  <button
                    className="button-next"
                    onClick={handleStatementChange}
                    // disabled={}
                  // disabled={!dataSurvey[indexCurrent.indexRender].answered>
                  >
                    Siguiente
                  </button>
                }
              </>
            }
            
            
          />
        )}
      </Routes>
    </div>
  );


};

export default Survey;