import React from "react";

const Container = styled.div`
  height: 60px;
  background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Langauge = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langauge>En</Langauge>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
