
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions  = ({ options, onLeaveFeedback }) => (
  <div className={s.options}>
    {options.map(option => (
      <button
        className={s.button}
        type="button"
        data-feedback={option}
        onClick={onLeaveFeedback}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
           
                
                // <div className="Button__controls">
                //     <button type="button" onClick={this.handleGood}>Good</button>
                //     <button type="button"  onClick={this.handleNeutral}>Neutral</button>
                //     <button type="button"  onClick={this.handleBad}>Bad</button>
                // </div> 
           
        