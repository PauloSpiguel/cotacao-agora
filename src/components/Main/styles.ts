import styled from "styled-components";

type Props = {
  bgImage: string;
};

export const Wrapper = styled.main`
  background-image: ${(props: Props) => `url(${props.bgImage})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 100px);
`;
