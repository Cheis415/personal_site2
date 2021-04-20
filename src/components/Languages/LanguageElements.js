import styled from 'styled-components';

export const LanguagesContainer = styled.div`
  background-color: #010606;


  @media screen and (min-width: 768px) {
    padding: 100px 0;
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
  @media screen and (max-width: 280px) {
    height: 1500px;
  }

`

export const LanguageWrap = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

`

export const LanguageRow = styled.div`
  display: grid;
  grid-auto-comlumns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart 
    ? `'col2 col1'` 
    : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
      height: 1000px;
      grid-template-areas: ${({imgStart}) => (imgStart 
        ? `'col2' 'col1'` 
        : `'col2 col2' 'col1 col1'`)};
    }

   
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  display: flex;
  max-width: 440px;
  flex-wrap: wrap;

`

export const Column2 = styled.div`
  margin-bottom: 15px;
  display: flex;
  overflow: hidden;
  max-width: 440px;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 15px;
  grid-area: col2;
  
`

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
  align-items: center;

`

export const LanguageH1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    margin-top: 75px;
    font-size: 32px;
  }
`
export const LanguageTitle = styled.p`
  color: #fff;
  font-size: 10px;
`

export const LanguageP = styled.p`
  max-width: 440px;
  line-height: 20px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`