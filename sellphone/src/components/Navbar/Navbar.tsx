import { Link } from 'react-router-dom';
import logo from '../../static/image/logo.png'
import styles from '../../App.module.scss';
import { FiSearch } from 'react-icons/fi';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <Link to='/'><img className={styles.logo} src={logo} alt="logo" /></Link>
            </div>
            <div className={styles.searchBox}>
                <button className={styles.btnSearch}><FiSearch></FiSearch></button>
                <input type="text" className={styles.inputSearch} placeholder="Type to Search..."></input>
            </div>
            <div>

                <button><Link to='/products' className={styles.link}>Products</Link></button>
                <button><Link to='/cart' className={styles.link}>Cart</Link></button>
                <button><Link to='/login' className={styles.link}>Login</Link></button>
            </div>
        </div >)
}

export default NavBar;