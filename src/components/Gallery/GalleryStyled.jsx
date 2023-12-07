import { styled } from 'styled-components';

export const Container = styled.div`
  padding-top: 60px;
  background-color: #eee7dd;
  width: 100vw;
  height: 100vh;
`;

export const Cards = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.li`
  max-width: 20vw;
  min-width: 20vw;
  min-height: 11vw;
`;

export const LoadBtn = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #28696a;
  color: #fff;
  border-radius: 6px;
  font-size: 20px;
  height: 35px;
  width: 130px;
`;
