export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button onClick={onLeaveFeedback} name={option} key={option}>
          {option}
        </button>
      ))}
    </>
  );
};
