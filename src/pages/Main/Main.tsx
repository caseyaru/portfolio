import React from "react";
import styles from "./Main.module.scss";
import { Header } from "../../widgets/Header";
import { Footer } from "../../widgets/Footer";
import { About } from "../../widgets/About";
import { Stack } from "../../widgets/Stack";
import { Projects } from "../../widgets/Projects";

function Main() {
  return (
    <div className="App">
      <Header />
      <div className={styles.content_light}>
        <About />
      </div>
      <div className={styles.content_purple}>
        <Stack />
      </div>
      <div className={styles.content_light}>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
