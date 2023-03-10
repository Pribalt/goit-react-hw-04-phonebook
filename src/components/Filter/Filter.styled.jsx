import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  width: 450px;

  gap: 5px;

  font-weight: 500;
  font-size: 20px;

  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;

  font-weight: 500;
  font-size: 16px;

  padding: 0 5px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: rgba(0, 0, 0, 0);

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    border: 3px solid #2196f3;
  }
`;
