import styled from "styled-components";

export const PortfolioContainer = styled.div`
  height: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 1120px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const PortfolioWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 25px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const PortfolioCard = styled.div`
  background: #e8e8e8;
  display: flex;
  flex-direction: column;
  will-change: transform, opacity;
  background-size: cover;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
 
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ProjectPic = styled.img`
  height: 160px;
  width: 200px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    height: 120px;
    width: 160px;
  }
`

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-top: 64px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`

export const ProjectH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
`

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`