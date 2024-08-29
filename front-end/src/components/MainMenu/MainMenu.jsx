import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDERS } from "../../const/categories";

export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            {GENDERS.map((category) => {
                return (
                    <li key={category.path}>
                        <NavLink to={category.path}>
                            {category.categoryName}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}