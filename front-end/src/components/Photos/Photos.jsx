import { useState } from "react";
import { FlexContainer } from "../FlexContainer/FlexContainer";

import styles from "./Photos.module.css";

export function Photos({ product }) {
    const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
    return (
        <FlexContainer>
            <div className={styles.photos}>
                <div className={styles.thumbnails}>
                    {/*mapowanie zdjęć produktu*/}
                    {product.photos.map((photo) => {
                        return (
                            <img
                                className={
                                    currentPhoto === photo ? styles.active : ""
                                }
                                onClick={() => {
                                    setCurrentPhoto(photo);
                                }}
                                key={photo}
                                src={photo}
                            />
                        );
                    })}
                </div>
                <img className={styles.main} src={currentPhoto} />
            </div>
        </FlexContainer>
    );
}
