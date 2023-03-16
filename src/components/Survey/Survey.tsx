import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Outlet, useParams, useLocation } from "react-router-dom";
// import shuffleStatements from "./scripts/scripts";
import Statement from "./Statement";
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

  function handleStatementChange() {
    const newIndex = indexValue.indexPath + 1;
    localStorage.setItem("nextQuestion", JSON.stringify({ indexPath: newIndex, indexRender: newIndex - 1 }));
    navigate(`/pregunta/${newIndex}`);
    setIndexValue({ indexPath: newIndex, indexRender: newIndex - 1 });
  }

  return (
    <div className="container__survey">
      <Routes>
        {dataSurvey[indexValue.indexRender] && (
          <Route
            path={`/pregunta/${indexValue.indexPath}`}
            element={
              <>
                <div className="count__survey">{indexValue.indexPath}/{dataSurvey.length}</div>
                <Statement
                  key={dataSurvey[indexValue.indexRender].entrie}
                  entrie={dataSurvey[indexValue.indexRender].entrie}
                  description={dataSurvey[indexValue.indexRender].description}
                  number={dataSurvey[indexValue.indexRender].number}
                  newIndex={dataSurvey[indexValue.indexRender].newIndex}
                  options={dataSurvey[indexValue.indexRender].options}
                  answered={false}
                />
                {Number(param.id) > 1 && <button className="button-prev">Anterior</button>}
                {dataSurvey.length === indexValue.indexPath ? (
                  <button className="button-next" onClick={handleStatementChange}>
                    Validar
                  </button>
                ) : (
                  <button className="button-next" onClick={handleStatementChange}>
                    Siguiente
                  </button>
                )}
              </>
            }
          />
        )}
      </Routes>
    </div>
  );
};


export default Survey;