import data from './data/statement.json'
import shuffleStatements  from './scripts/scripts'

const dataSurvey = () => {

console.log('data', data);

const dataSurvey = shuffleStatements(data);
localStorage.setItem('data', JSON.stringify(dataSurvey))

}

export default dataSurvey;



