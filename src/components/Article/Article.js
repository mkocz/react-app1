import styles from './Article.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Article = props => {

    const addCard = (newColumn, columnId) => {
        props.action(newColumn, columnId);
    }

    return (<article className={styles.column}>
        <h3 className={styles.title}><span className={styles.icon + " fa fa-" + props.icon}></span> {props.title}</h3>
        <ul className={styles.cards}>
            {props.cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
        <CardForm columnId={props.id} action={addCard} />
    </article>);
};

export default Article;