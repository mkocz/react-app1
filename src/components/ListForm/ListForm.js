import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.label} >Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.label} >Descrition:</span> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button type='submit'>Add list</Button>
        </form>
    );
};

export default ListForm;
