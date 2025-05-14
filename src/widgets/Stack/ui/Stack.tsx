import { stackFrontend, stackStyles, stackSettings } from "../utils";
import styles from "./Stack.module.scss";

interface Props {}

export const Stack: React.FC<Props> = () => {
  return (
    <div className={styles.block} id="stack">
      <h2>Мой стек</h2>
      <div className={styles.part}>
        <ul>
            {stackFrontend.map(item => {
                return (
                    <li className={styles.element}>
                        <img src={item.icon} alt={item.label}/>
                        <p>{item.label}</p>
                    </li>
                )
            })}
        </ul>
        <hr className={styles.line}/>
      </div>
      <div className={styles.part}>
        <ul>
            {stackStyles.map(item => {
                return (
                    <li className={styles.element}>
                        <img src={item.icon} alt={item.label}/>
                        <p>{item.label}</p>
                    </li>
                )
            })}
        </ul>
        <hr className={styles.line}/>
      </div>
      <div className={styles.part}>
        <ul>
            {stackSettings.map(item => {
                return (
                    <li className={styles.element}>
                        <img src={item.icon} alt={item.label}/>
                        <p>{item.label}</p>
                    </li>
                )
            })}
        </ul>
      </div>
    </div>
  );
};
