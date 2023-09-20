export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <ul>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{countTotalFeedback}</span>
        </li>
        <li>
          Positive feedbacks:
          <span> {countPositiveFeedbackPercentage}%</span>
        </li>
      </ul>
    </>
  );
};
