import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteCard } from '../../redux/cardsRedux';

const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(props.cardId));
    }

    const handleDelete = () => {
        dispatch(deleteCard(props.cardId))
    }

    return (<li className={styles.card} >{props.title}
        <div className={styles.icons}>
            <i className="fa fa-trash" onClick={handleDelete}></i>
            <i className={props.isFavorite ? `fa fa-star-o ${styles.favorite}` : `fa fa-star-o`} onClick={handleToggleFavorite}></i>
        </div>

    </li>);
};

export default Card;

