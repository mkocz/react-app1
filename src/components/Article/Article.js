import styles from './Article.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Article = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (<article className={styles.column}>
        <h3 className={styles.title}><span className={styles.icon + " fa fa-" + props.icon}></span>{props.title}</h3>
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} isFavorite={card.isFavorite} />)}
        </ul>
        <CardForm columnId={props.id} />
    </article>);
};

export default Article;
