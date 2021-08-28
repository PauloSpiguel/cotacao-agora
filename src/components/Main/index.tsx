import * as Styles from "./styles";

const Main = () => {
  return (
    <Styles.Wrapper>
      <Styles.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <Styles.Title>React avançado</Styles.Title>
      <Styles.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </Styles.Description>
      <Styles.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </Styles.Wrapper>
  );
};

export default Main;
