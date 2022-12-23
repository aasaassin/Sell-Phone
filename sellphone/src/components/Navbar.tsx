import React from 'react';

import { Link } from 'react-router-dom';

import styles from '../App.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div></div>
            <div>
                <button><Link to='/' className={styles.link}>Home</Link></button>
                <button><Link to='/products' className={styles.link}>Products</Link></button>

            </div>
        </div>)
}

export default NavBar;