import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.navbar}>
                    <Link to="/" className="fa fa-tasks" style={{ color: 'white' }}></Link>
                    <ul className={styles.list}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.linkActive : undefined}>Home</NavLink></li>
                        <li><NavLink to="/favorite" className={({ isActive }) => isActive ? styles.linkActive : undefined}>Favorite</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.linkActive : undefined}>About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
