import React, { Component } from 'react';
import { Cards } from '../cards';
import { gameList } from '../gameList';

import styles from './index.module.css';

type SearchState = {
  inputSearch: string;
};

type SearchProps = Record<string, never>;

export class Search extends Component<SearchProps, SearchState> {
  state = {
    inputSearch: '',
  };

  componentDidMount() {
    this.setState({ inputSearch: JSON.parse(localStorage.getItem('search-value') || '') });
  }

  componentWillUnmount() {
    localStorage.setItem('search-value', JSON.stringify(this.state.inputSearch));
  }

  handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: inputSearch },
    } = e;
    this.setState({ inputSearch });
  };

  filteredGames = (inputSearch: string) => {
    if (inputSearch === '') {
      return gameList;
    }

    const lowerCaseInputSearch = inputSearch.toLowerCase();
    return gameList.filter((game) => {
      return (
        game.creator.toLowerCase().includes(lowerCaseInputSearch) ||
        game.description.toLowerCase().includes(lowerCaseInputSearch) ||
        game.rating.toString().includes(lowerCaseInputSearch) ||
        game.title.toLowerCase().includes(lowerCaseInputSearch) ||
        game.year.toString().includes(lowerCaseInputSearch)
      );
    });
  };

  render() {
    const { inputSearch } = this.state;
    return (
      <>
        <div className={styles.search}>
          <form>
            <button disabled></button>
            <input
              type="search"
              value={inputSearch}
              placeholder="Найти игру..."
              onChange={this.handleInputSearch}
            />
          </form>
        </div>
        <Cards gameList={this.filteredGames(inputSearch)} />
      </>
    );
  }
}
