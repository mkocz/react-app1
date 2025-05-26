import styles from './Article.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Article = props => {
    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

    const addCard = (newColumn, columnId) => {
        props.action(newColumn, columnId);
    }

    return (<article className={styles.column}>
        <h3 className={styles.title}><span className={styles.icon + " fa fa-" + props.icon}></span> {props.title}</h3>
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
        <CardForm columnId={props.id} action={addCard} />
    </article>);
};

export default Article;
