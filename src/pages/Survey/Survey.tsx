import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Outlet, useParams, useLocation } from "react-router-dom";
import Statement from "./components/Statement";
import { IndexValues } from "./types/types";
import Count from "./components/Count";
import ButtonReboot from "./components/ButtonReboot";
import ModalReboot from "./components/ModalReboot";
import ButtonPrev from "./components/ButtonPrev";
import ButtonNext from "./components/ButtonNext";





const Survey: React.FC = () => {
  const navigate = useNavigate();
  const param = useParams();

  const nextQuestionValue = JSON.parse(localStorage.getItem("nextQuestion") || "{}");
  const dataSurvey = JSON.parse(localStorage.getItem("data") || "[]");

  const [indexValue, setIndexValue] = useState<IndexValues>(nextQuestionValue);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  
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

  function handleModalReboot() {
    const modal = document.querySelector(".modal--reboot");
    modal?.classList.remove("modal--hidden");
  }

  function handleReboot() {
    localStorage.removeItem("entries");
    localStorage.removeItem("nextQuestion");
    localStorage.removeItem("data");
    navigate("/");
  }

  function handleNo() {
    const modal = document.querySelector(".modal--reboot");
    modal?.classList.add("modal--hidden");
  }

  return (
    <div className="survey">
      <Routes>
        <Route
          path="/"
          element={
            <div className="survey__container">
              <ModalReboot onClickSi={handleReboot} onClickNo={handleNo} />
              <div className="survey__header">
                <ButtonReboot onClick={handleModalReboot} />
                <Count count={indexValue.indexPath} total={dataSurvey.length} />
              </div>
              <Outlet />
              <div className="statement">
              <div className="container--buttonPrev">
                {indexValue.indexPath > 1 && <ButtonPrev onClick={handlePrevQuestion}></ButtonPrev>}
              </div> 

              <Statement
                key={dataSurvey[indexValue.indexRender].entrie}
                entrie={dataSurvey[indexValue.indexRender].entrie}
                description={dataSurvey[indexValue.indexRender].description}
                number={dataSurvey[indexValue.indexRender].number}
                newIndex={dataSurvey[indexValue.indexRender].newIndex}
                options={dataSurvey[indexValue.indexRender].options}
                answered={false}
              />
              
              <div className="container--buttons-bottom">
              {dataSurvey.length === indexValue.indexPath ? (
                <button className="button--next button--check" onClick={handleValidate}>
                  Validar
                </button>
              ) : (
                
                <>
                <ButtonNext onClick={handleNextQuestion} disabled={false} />
                </>
                

              )}
              </div>

              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};



export default Survey;