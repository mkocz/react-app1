import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [searchString, setSearchString] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSearchString({ searchString: '' }));
    }, [dispatch]);

    const handleSearch = () => {
        dispatch(updateSearchString({ searchString }));
    }

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder='Search...' onChange={e => setSearchString(e.target.value)} />
            <Button type='button' onClick={e => handleSearch()} > <span className="fa fa-search" /></Button>
        </form >
    );
};

export default SearchForm;
