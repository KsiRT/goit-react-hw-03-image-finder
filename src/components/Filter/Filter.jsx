import React from 'react';
import { Form, Header, Icon, Search, SearchButton } from './FilterStyled';

export const Filter = () => {
  return (
    <Header>
      <Form>
        <Icon size={20} />
        <Search type="search" placeholder="Search" />
        <SearchButton type="submit">Find Images</SearchButton>
      </Form>
    </Header>
  );
};
