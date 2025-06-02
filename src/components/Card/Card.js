import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log(props.cardId)
        dispatch(toggleFavorite(props.cardId));
    }

    return (<li className={styles.card} >{props.title}<span className={props.isFavorite ? `fa fa-star-o ${styles.favorite}` : `fa fa-star-o`} onClick={handleClick}></span></li>);
};

export default Card;

