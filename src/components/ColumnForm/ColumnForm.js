import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        setTitle('');
        setIcon('');
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.label} >Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.label} >Icon:</span> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button type='submit'>Add column</Button>
        </form>
    );
};

export default ColumnForm;
