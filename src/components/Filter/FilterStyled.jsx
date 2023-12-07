import { styled } from 'styled-components';

export const Header = styled.header`
  background-color: #a8d8cd;
  width: 100vw;
  min-height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const Search = styled.input`
  height: 2rem;
  font-size: 16px;
  background-color: #f0e6d7;
  color: #213058;
  border: 2px solid #28696a;
  border-radius: 6px;
`;

export const SearchButton = styled.button`
  background-color: #28696a;
  color: #fff;
  border-radius: 6px;
  font-size: 18px;
`;
