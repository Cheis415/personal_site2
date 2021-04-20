import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#00DAE8' : '#010606')};
  white-space: no-wrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#00DAE8')};
  }
`
export const ButtonR = styled(LinkR)`
  margin: 0 auto;
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#00DAE8' : '#010606')};
  white-space: no-wrap;
  padding: 8px 20px;
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: 14px;
  outline: none;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#00DAE8')};
  }
`

export const SubmitButton = styled.input`
  margin: 0 auto;
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#00DAE8' : '#010606')};
  white-space: no-wrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background: ${({primary}) => (primary ? '#fff' : '#00DAE8')};
  }
  `
  export const ButtonReg = styled.button`
  margin: 0 auto;
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#00DAE8' : '#010606')};
  white-space: no-wrap;
  padding: '12px 30px';
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#00DAE8')};
  }
`