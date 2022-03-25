import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 5px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
    margin: 20px;
  }

  @media (max-width: 699px) {
    margin-top: 0;
    }

`;

export const Header = styled.header `

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  aline-align: center;
  height: 120px;
  background: #272b33;
  border-radius: 20px;

  image {
    margin: 20px;
  }

  ul {
  color: ${props => props.theme.colors.text};
  margin: 45px;
  aline-text: center;
  font-size: 24px;
  line-height: 32px;
  }

  button {
    margin-top: 35px;
    height: 50px;
    width: 150px;
    border-radius: 10px
  }

}
@media (max-width: 699px) {
  margin: 0.2rem;
  height: 110px;

  display: grid;
  justify-content: space-between;

  image {
    margin: 0.8rem;
    width: 10.5rem;
    height: 4.8rem;
  }

  ul {
    margin-top: 0;
    margin-left: 0;
  }

}

`;

