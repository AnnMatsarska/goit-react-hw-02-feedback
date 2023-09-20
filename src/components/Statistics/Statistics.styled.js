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
    background-color: rgb(49, 136, 194);
    color: white;
  }
  &.yellow {
    background-color: #f5ce13;
    color: white;
  }
  &.red {
    margin-bottom: 25px;
    background-color: brown;
    color: white;
  }
  &.grey {
    background-color: rgba(121, 121, 121, 0.581);
    color: black;
  }
`;
