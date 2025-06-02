import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchRedux';

const SearchForm = () => {
    const [searchString, setSearchString] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        setSearchString('')
        dispatch(updateSearchString( searchString ));
    }, []);

    const handleSearch = () => {
        dispatch(updateSearchString(searchString ));
    }

    const handleChange = (event) => {
        setSearchString(event.target.value)
    }

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder='Search...' onChange={handleChange} />
            <Button type='button' onClick={handleSearch} > <span className="fa fa-search" /></Button>
        </form >
    );
};

export default SearchForm;
