import { useEffect, useState } from "react";
import styles from "./About.module.scss";
import { calculatePeriod, startDate } from "../utils/date";

interface Props {}

export const About: React.FC<Props> = () => {
  const [counterYears, setCounterYears] = useState<string>("0 лет");

  useEffect(() => {
    const period = calculatePeriod(startDate);
    setCounterYears(period);
  }, []);

  return (
    <div className={styles.block}>
      <div className={styles.text}>
        <h1>Привет ⋆˚࿔</h1>
        <p>
          Меня зовут Оля, я фронтенд-разработчица из Карелии (г. Петрозаводск).
          Последние несколько лет я активно обучаюсь и специализируюсь в
          веб-разработке: создаю многостраничные и одностраничные лендинги,
          верстаю письма и баннеры, участвую в больших коммерческих проектах и
          практикуюсь на собственных. Кроме учебной практики на данный момент я
          официально работаю фронтендером уже {counterYears}!
        </p>
        <p>
          Я разрабатываю как на чистом JavaScript <span className={styles.span}>&#91; например, при использовании
            Django templates или нативных приложений &#93;</span>, так и на стеке Next.js /
          React с применением TypeScript. Подробнее о моём стеке можно прочитать 
          <a href="#stack" className={styles.link}> далее</a> ⋆˙⟡
        </p>
      </div>
      <div className={styles.image}>
        <img src="/myph.jpg" alt="Моя фотография" />
      </div>
    </div>
  );
};
