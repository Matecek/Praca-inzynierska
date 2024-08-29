import styles from "./MenuIcon.module.css";
import { Link } from "react-router-dom";

import BAG from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";

export function MenuIcon() {
    return (
        <ul className={styles.menuIcon}>
            <li>
                <Link to="/ulubione">
                    <img src={HEART} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk">
                    <img src={BAG} />
                </Link>
            </li>
        </ul>
    );
}