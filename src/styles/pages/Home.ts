import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 699px) {
    margin-top: 0;
    justify-content: center;
    aline-align: auto;
    }
`;

export const Header = styled.header `

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  height: 120px;
  background: #272b33;
  border-radius: 20px;

  image {
    margin-top: 20px;
    margin-left: 20px;
  }

  ul {
  color: ${props => props.theme.colors.text};
  margin: 45px;
  justify-items: center;
  font-size: 24px;
  line-height: 32px;
  }

  button {
    color: ${props => props.theme.colors.text};
    margin-top: 35px;
    height: 50px;
    width: 150px;
    border: 3px solid green;
    background: #272b33;
    font-size: 18px;
    border-radius: 10px
  }

}
@media (max-width: 699px) {
  height: 13rem;

  display: grid;
  grid-template-columns: auto;

  image {
    justify-content: center;
    aline-items: center;
  }

  ul {
    margin: 0;
  }
  button {
    margin: 0;
    height: 2.5rem;
    width: 10rem;
  }

}
`;

export const Main = styled.main `

  display: grid;
  justify-items: center;

  h1 {
    font-size: 34px;
    color: ${props => props.theme.colors.primary};
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    font-size: 24px;
    line-height: 32px;
  }
`;