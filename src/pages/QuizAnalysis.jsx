import Layout from "../components/QuizAnalysis/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function QuizAnalysis(props) {
  return (
    <>
      <Layout quizId={props.match.params.id} />
    </>
  );
}

export default QuizAnalysis;
