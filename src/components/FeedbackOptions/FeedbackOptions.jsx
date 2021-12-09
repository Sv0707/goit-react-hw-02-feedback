import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => {
      return (
        <button
          key={option}
          type="button"
          className={s.button}
          onClick={(e) => onLeaveFeedback(option)}
        >
          {option}
        </button>
      );
    })}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
