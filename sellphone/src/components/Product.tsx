import React from 'react';

import { useParams } from 'react-router-dom';
import cx from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from '../App.module.scss';

import { mobileDetails } from '../static/data';

const Product = () => {

    const { id } = useParams();

    const mobile = mobileDetails[Number(id)]

    if (!mobile) {
        return <h2>Product not found....</h2>
    }

    return (<div className={cx(styles.grid, styles.margined)}>
        <div className={styles.item}>
            <h2>{mobile.name}</h2>
            <LazyLoadImage className={styles.img} src={mobile.img} alt={mobile.name} effect="blur" />
        </div>
        <div>
            <p className={styles.paragraph}>{mobile.description}</p>
            <p className={cx(styles.paragraph, styles.bolded)}>{mobile.cost}</p>
        </div>
    </div>);
}

export default Product;
