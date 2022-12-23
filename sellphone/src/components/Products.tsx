import React from 'react';

import styles from '../App.module.scss';

import { mobileDetails } from '../static/data';
import Item from './Item';

const ProductItems = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.heading1}>Products</h1>
            <div className={styles.grid}>
                {mobileDetails.map((mobile, idx) => <Item mobile={mobile} idx={idx} />)}
            </div>
        </div>
    );
}

export default ProductItems;
