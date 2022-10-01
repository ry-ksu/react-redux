import React, { Component } from 'react';

type SearchState = {
  inputSearch: string;
};

type SearchProps = Record<string, never>;

export class Search extends Component<SearchProps, SearchState> {
  state = {
    inputSearch: '',
  };

  handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputSearch },
    } = e;
    this.setState({ inputSearch });
  };

  render() {
    const { inputSearch } = this.state;
    return (
      <form>
        <input type="search" value={inputSearch} onChange={this.handleInputSearch} />
      </form>
    );
  }
}
