import styles from './Article.module.scss';

const Article = props => {
    return (<article className={styles.column}>
        <h3 className={styles.title}><span className={styles.icon + " fa fa-" + props.icon}></span> {props.title}</h3>
    </article>);
};

export default Article;