import React from 'react';
import { container, title, slogan } from './styles.css';

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Front End React.js Dashboard'}</p>
      <p className={slogan}>{`A collection of front end web development projects!`}</p>
    </div>
  );
}
