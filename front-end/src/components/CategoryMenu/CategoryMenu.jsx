import { CATEGORIES } from "../../const/categories";
import { NavLink, useParams } from "react-router-dom";

import styles from "./CategoryMenu.module.css";

export function CategoryMenu() {
    const params = useParams();

    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map((category) => {
                    const path =
                        category.path === "nowosci" ? "" : category.path;
                    return (
                        <li key={category.path}>
                            <NavLink to={`/${params.gender}/${path}`}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
