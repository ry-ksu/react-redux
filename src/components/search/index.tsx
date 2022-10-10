import React, { Component } from 'react';
import { Cards } from '../cards';
import { gameList } from '../../data/gameList';

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
    const data = JSON.parse(localStorage.getItem('game-app') || '{}');
    if (Object.keys(data).length !== 0) {
      this.setState({ inputSearch: data.inputSearch });
    }
  }

  componentWillUnmount() {
    const data = {
      inputSearch: this.state.inputSearch,
    };
    localStorage.setItem('game-app', JSON.stringify(data));
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
        <h1 className={styles.pageName}>Games</h1>
        <div className={styles.search}>
          <form>
            <button disabled></button>
            <input
              data-testid="searchbox"
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
