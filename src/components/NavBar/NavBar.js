import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.navbar}>
                    <i className="fa fa-tasks"></i>
                    <ul className={styles.list}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
