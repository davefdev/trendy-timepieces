import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

const Container = styled.div`
  height: 60px;
  background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Langauge = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.75px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langauge>En</Langauge>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DAVEFDEV</Logo>
        </Center>
        <Right>
          <MenuItem>
          REGISTER</MenuItem>
          <MenuItem>
          SIGNIN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
    <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
