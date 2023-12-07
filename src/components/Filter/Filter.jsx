import React from 'react';
import { Form, Header, Search, SearchButton } from './FilterStyled';

export const Filter = () => {
  return (
    <Header>
      <Form>
        <Search type="search" placeholder="Search" />
        <SearchButton type="submit">Find Images</SearchButton>
      </Form>
    </Header>
  );
};
