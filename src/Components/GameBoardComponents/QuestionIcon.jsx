import React, {useContext} from 'react'
import AppContext from '../../AppContext'

function QuestionIcon(props) {
  const { setQuestionString, setCorrectAnswerString, setAllAnswersArray } = useContext(AppContext);
  
  const randomNum = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  const scrambleAnswers = (allAnswers) => {
    for(let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
      return allAnswers;
    }
  }
  
  const SelectAPICatNum = (category) => {
    /*
      categories to choose from
      -------------------------
        Any Category --> 0
        General Knowledge --> 9
        Entertainment (Films,Music,TV,Video Games,Celebs,Cartoons & Animations) --> 11,12,14,15,26,32
        Science (Chem/Nature, Computers, Math, Gadgets) --> 17, 18, 19, 30
        Sports --> 21
        Geography --> 22
        History & Politics --> 23, 24
        Humanities & Arts (Books, Mythology & Art) --> 10, 20, 25
        -------------------------
        */
       
       const entertainmentCats = [11, 12, 14, 15, 26, 32];
       const scienceCats = [17, 18, 19, 30];
       const historyPoliticsCats = [23, 24];
       const humanitiesArtsCats = [10, 20, 25];
       
    switch (category) {
      case "Entertainment":
        return randomNum(entertainmentCats);
      case "Science":
        return randomNum(scienceCats);
      case "History & Politics":
        return randomNum(historyPoliticsCats);
      case "Humanities & Arts":
        return randomNum(humanitiesArtsCats);
      case "Any Category":
        return 0;
      case "General Knowledge":
        return 9;
      case "Sports":
        return 21;
      case "Geography":
          return 22;
      default:
        return 9;
    }
  }

  const handleClick = () => {
    var APICategoryNum = SelectAPICatNum(props.category);

    fetch(`https://opentdb.com/api.php?amount=1&category=${APICategoryNum}&difficulty=${props.difficulty}&type=multiple`)
      .then(response => response.json())
      .then(data => {
        var allAnswersArray = [...data.results[0].incorrect_answers, data.results[0].correct_answer];
        allAnswersArray = scrambleAnswers(allAnswersArray);

        setQuestionString(data.results[0].question);
        setCorrectAnswerString(data.results[0].correct_answer);
        setAllAnswersArray(allAnswersArray);
        props.handleClick();
      });
  }

  return (
    <>
      <td className={`game-board-question-${props.difficulty}`} onClick={handleClick}>?</td>
    </>
  )
}

export default QuestionIcon