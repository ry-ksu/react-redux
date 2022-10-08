import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cards } from '.';
import { gameList } from 'data/gameList';

describe('Cards component', () => {
  it('Cards renders with all data', () => {
    render(<Cards gameList={gameList} />);

    //

    expect(screen.getByText(/The Witcher/i)).toBeInTheDocument();
    expect(screen.getByText(/mass effect 2/i)).toBeInTheDocument();
    expect(screen.getByText(/NFS:/i)).toBeInTheDocument();
    expect(screen.getByText(/this war of mine/i)).toBeInTheDocument();
  });

  it('Cards renders with one data', () => {
    const card = [
      {
        key: 10,
        img: 'warOfMine',
        title: 'This War of Mine',
        creator: '11 bit studios',
        year: 2014,
        rating: 8.7,
      },
    ];

    render(<Cards gameList={card} />);

    expect(screen.getByText(/This War of Mine/i)).toBeInTheDocument();
    expect(screen.getByText(/11 bit/i)).toBeInTheDocument();
    expect(screen.getByText(/2014/)).toBeInTheDocument();
    expect(screen.getByText('8.7')).toBeInTheDocument();
  });

  it('Cards renders without data', () => {
    render(<Cards gameList={[]} />);

    expect(screen.queryByText(/The Witcher/i)).toBeNull();
  });
});
