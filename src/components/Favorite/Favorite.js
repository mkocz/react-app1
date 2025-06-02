import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

const Favorite = () => {
    const cards = useSelector(getFavoriteCards);

    return (
        <>
            <PageTitle>Favorite</PageTitle>
            {cards.length === 0 ? <span className={styles.info}>No Cards</span> :
                <article className={styles.column}>
                    <ul className={styles.cards}>
                        {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} isFavorite={card.isFavorite} />)}
                    </ul>
                </article>};
        </>
    );
};

export default Favorite;
