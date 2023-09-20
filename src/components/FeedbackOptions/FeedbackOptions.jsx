import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button onClick={onLeaveFeedback} name={option} key={option}>
          {option}
        </Button>
      ))}
    </>
  );
};
