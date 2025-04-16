import React from 'react';
import styles from './Main.module.scss';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';

function Main() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default Main;