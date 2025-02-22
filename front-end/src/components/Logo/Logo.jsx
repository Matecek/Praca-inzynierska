import { Link } from "react-router-dom";
import LOGO from "../../assets/Logo.png";

import styles from "./Logo.module.css";

export function Logo() {
    return (
        <Link to="/">
            <img className={styles.logo} src={LOGO} />
        </Link>
    );
}
