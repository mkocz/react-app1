import styles from './List.module.scss';
import Article from '../Article/Article';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';

const List = () => {
    const columns = useSelector(state => state.columns);

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    Things to do<span>soon</span>
                </h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <div className={styles.columns}>
                {columns.map(column => <Article key={column.id} {...column} />)}
            </div>
            <ColumnForm />
        </div>
    );
};

export default List;
