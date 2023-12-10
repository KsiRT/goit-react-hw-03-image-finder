import React from 'react';
import { Form, Header, Icon, Search, SearchButton } from './FilterStyled';

export class Filter extends React.Component {
  handleSearchSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Header>
        <Form>
          <Icon size={20} />
          <Search type="search" placeholder="Search" />
          <SearchButton
            onSubmit={() => this.handleSearchSubmit()}
            type="submit"
          >
            Find Images
          </SearchButton>
        </Form>
      </Header>
    );
  }
}
