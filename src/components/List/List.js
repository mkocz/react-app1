import styles from './List.module.scss';
import Article from '../Article/Article';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { Navigate, useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {
    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId))

    if (!listData || listData.length === 0) return <Navigate to="/" />

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    {listData.title}
                </h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <div className={styles.columns}>
                {columns.map(column => <Article key={column.id}  {...column} />)}
            </div>
            <ColumnForm listId={listId} />
        </div>
    );
};

export default List;
