import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content:  border
  align-items: center;
  flex-direction: column;
  margin: 10px;

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
      margin: 0;
      width: 100%;
      padding: 0.8 rem;
    }

`;

export const Header = styled.header `

  display: flex;
  justify-content: border;
  margin: 20px;

  ul {
  color: ${props => props.theme.colors.text};
  margin-left: 50px;
  margin-top: 20px;
  font-size: 24px;
  line-height: 32px;

}
@media (max-width: 699px) {
  margin: 0;
  width: 100%;
  padding: 0.8 rem;

  display: grid;
  justify-content: center;

  ul {
    margin-top: 0,6 rem;
    margin-left: 0;
  }
}

`;

