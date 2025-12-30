import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.box}>
      <Container />
    </div>
  );
}

const Container = () => {
  return (
    <div className={style.profile__container}>
      <img
        src="/Profile Image.png"
        alt="Profile picture"
        className={style.profile__img}
      />
      <div className={style.profile__name}>
        <h4>Sophie Bennett</h4>
        <img
          src="/Verification Icon Container.png"
          alt="Check icon"
          className={style.profile__checkIcon}
        />
      </div>

      <p className={style.profile__text}>
        Product Designer who focuses on simplicity & usability.
      </p>

      <div className={style.profile__footer}>
        <div className={style.footer__icon}>
          <img
            src="/Followers Icon Container.png"
            alt="User Icon"
            className={style.icon}
          />
          <p>314</p>
        </div>

        <div className={style.footer__icon}>
          <img
            src="/Projects Icon Container.png"
            alt="Picture Icon"
            className={style.icon}
          />
          <p>48</p>
        </div>

        <button className={style.button}>Follow +</button>
      </div>
    </div>
  );
};
