import styled from 'styled-components';

export const Button = styled.button`
  margin-right: 12px;
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12),
    0px 2px 1px 0px rgba(0, 0, 0, 0.08), 0px 3px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &[name='good']:hover {
    background-color: rgb(49, 136, 194);
  }
  &[name='neutral']:hover {
    background-color: rgba(232, 220, 59);
  }
  &[name='bad']:hover {
    background-color: brown;
  }
`;
