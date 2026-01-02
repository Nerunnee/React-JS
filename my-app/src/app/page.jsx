import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.box}>
      <Container
        img="/Profile Image.png"
        name="Sophie Bennett"
        desc="Product Designer who focuses on simplicity & usability."
        num1={314}
        num2={48}
      />
    </div>
  );
}

const Container = (props) => {
  return (
    <div className={style.profile__container}>
      <img
        src={props.img}
        alt="Profile picture"
        className={style.profile__img}
      />
      <div className={style.profile__name}>
        <h4>{props.name}</h4>
        <img
          src="/Verification Icon Container.png"
          alt="Check icon"
          className={style.profile__checkIcon}
        />
      </div>

      <p className={style.profile__text}>{props.desc}</p>

      <div className={style.profile__footer}>
        <div className={style.footer__icon}>
          <img
            src="/Followers Icon Container.png"
            alt="User Icon"
            className={style.icon}
          />
          <p>{props.num1}</p>
        </div>

        <div className={style.footer__icon}>
          <img
            src="/Projects Icon Container.png"
            alt="Picture Icon"
            className={style.icon}
          />
          <p>{props.num2}</p>
        </div>

        <button className={style.button}>Follow +</button>
      </div>
    </div>
  );
};
