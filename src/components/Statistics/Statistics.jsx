import { List, Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <List>
        <Item className="blue">
          Good: <span>{good}</span>
        </Item>
        <Item className="yellow">
          Neutral: <span>{neutral}</span>
        </Item>
        <Item className="red">
          Bad: <span>{bad}</span>
        </Item>
        <Item className="grey">
          Total: <span>{countTotalFeedback}</span>
        </Item>
        <Item className="grey">
          Positive feedbacks:
          <span> {countPositiveFeedbackPercentage}%</span>
        </Item>
      </List>
    </>
  );
};
