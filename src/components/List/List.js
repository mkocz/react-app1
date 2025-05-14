import styles from './List.module.scss';
import Article from '../Article/Article';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    Things to do<span>soon</span>
                </h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <div className={styles.columns}>
                <Article title="Books" icon="book" />
                <Article title="Movies" icon="film" />
                <Article title="Games" icon="gamepad" />
            </div>
        </div>
    );
};

export default List;