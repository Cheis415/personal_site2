import styled from "styled-components";

import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {
    background: #000;
    display: flex;
    margin-top: 20px;
    border: 1px solid #fff;
  }
  .Toastify__toast {
    background: #000;
    border: 2px solid #fff;
  }
  .Toastify__toast--error {}
  .Toastify__toast--warn {
    color: red !important;
  }
  .Toastify__toast--success {}
  .Toastify__toast-body {
    background: #000;
    color: #fff;
    font-weight: bold;
  }
  .Toastify__progress-bar {
    background: #00DAE8;
  }
`;

export const ContactContainer = styled.div`
  height: 100vh;
  max-height: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

`


export const ContactName = styled.input`
  height: 24px;
  margin: 20px;
  padding: 5px;
  outline: none;
  border-width: 0;
  border-radius: 5px;
  width: 80%
`

export const ContactSubject = styled.input`
  height: 24px;
  padding: 5px;
  border-radius: 5px;
  border-width: 0;
  outline: none;
  margin: 20px;
  width: 80%
`
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
`

export const ContactBody = styled.textarea`
  height: 200px;
  border-radius: 10px;
  border-width: 0;
  outline: none;
  resize: none;
  padding: 5px;
  margin: 20px;
  width: 80%;

`

export const ContactForm = styled.form`
  align-items: center;
  
`