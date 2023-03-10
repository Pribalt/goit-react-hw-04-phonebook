import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 450px;
  height: auto;

  padding: 10px;
  margin-bottom: 20px;

  border: 2px solid black;
`;

export const Lable = styled.label`
  display: flex;

  gap: 5px;

  font-weight: 500;
  font-size: 20px;

  margin-bottom: 25px;

  flex-direction: column;
`;

export const Field = styled(FormikField)`
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

export const Button = styled.button`
  width: 120px;
  min-height: 30px;

  font-weight: 500;
  font-size: 18px;

  background-color: black;
  color: white;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  outline: rgba(0, 0, 0, 0);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    color: #2196f3;
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 18px;

  color: red;
`;
