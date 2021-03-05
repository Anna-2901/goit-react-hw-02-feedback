
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from '../Notification/Notification'

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positiveFeedbackPercentage,
}) => (
    <>
    {total ? (
    <ul className={s.Counter__controls}>
        <li className={s.options}>Good: {good}</li>
        <li className={s.options}>Neutral: {neutral}</li>
        <li className={s.options}>Bad: {bad}</li>
        <li className={s.options}>Total: {total}</li>
        <li className={s.options}>Positive Feedback: {positiveFeedbackPercentage}%</li>
    </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};


export default Statistics;