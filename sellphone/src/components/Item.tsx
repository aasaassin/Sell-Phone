import React from 'react';
import { IMobileDetails } from '../static/data';
import styles from '../App.module.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Item: React.FC<{ mobile: IMobileDetails, idx: number }> = ({ mobile, idx }) => {
    return (
        <Link to={`/products/${idx}`} className={styles.link} key={idx}>
            <div className={styles.item}>
                <LazyLoadImage className={styles.img} src={mobile.img} alt={mobile.name} effect="blur" />
                <p>{mobile.name}</p>
                <p className={styles.bolded}>{mobile.cost}</p>
            </div>
        </Link>
    );

}
export default Item;