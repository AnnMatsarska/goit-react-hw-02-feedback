import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  font-weight: 700;
  width: 300px;
  height: 30px;
  padding: 8px 5px 0px 5px;

  border-radius: 4px;

  &.blue {
    background-color: rgb(49, 136, 194, 0.581);
    color: black;
  }
  &.yellow {
    background-color: rgba(232, 220, 59, 0.729);
    color: black;
  }
  &.red {
    margin-bottom: 25px;
    background-color: rgba(187, 52, 52, 0.483);
    color: black;
  }
  &.grey {
    background-color: rgb(203, 203, 203);
    color: black;
  }
`;
