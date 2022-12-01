import HeaderStyles from "../styles/Header.module.css";
export default function Header() {
  return (
    <div>
      <h1 className={HeaderStyles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={HeaderStyles.discription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores accusamus dicta
        doloribus alias nihil sed consequatur rerum atque, quisquam aperiam quos totam autem porro
        dolorem perferendis voluptas, magnam ipsum?
      </p>
    </div>
  );
}
