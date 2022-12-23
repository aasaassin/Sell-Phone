import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../App.module.scss';
import cx from 'classnames';


const Home = () => {
    return (<div className={cx(styles.grid, styles.margined)}>
        <h2 className={styles.headingMain}>
            Sell Phone
        </h2>
        <div className={styles.buttonGroup}>
            <button className={styles.buttonOutlined}>
                <Link to='/products' className={styles.link}>
                    Products
                </Link>
            </button>
            <button className={styles.buttonOutlined}>
                <a href="/cart" className={styles.link}>
                    My cart
                </a>
            </button>
        </div>
    </div>);
}

export default Home;
