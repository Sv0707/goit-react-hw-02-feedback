import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={s.value}>Good: {good}</p>
      <p className={s.value}>Neutral: {neutral}</p>
      <p className={s.value}>Bad: {bad}</p>
      <p className={s.value}>Total: {total}</p>
      <p className={s.value}>Positive feedback: {positivePercentage}</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
