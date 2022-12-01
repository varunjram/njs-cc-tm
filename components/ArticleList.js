import ArticleStyles from "../styles/article.module.css";
import ArticleItem from "./ArticleItem";

export default function ArticleList({articles}) {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </div>
  );
}
