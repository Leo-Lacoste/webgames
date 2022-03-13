import useStyles from "./GameCard.style";

function GameCard({ id, background_image, name }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.background}
        src={background_image}
        alt="background"
      />
      <div className={classes.textCard}>
        <div className={classes.titleCard}>
          <p>{name}</p>
        </div>
        <button className={classes.biblioBtn}>
          <span className={classes.biblio} classrole="img" aria-label="star">
            ⭐
          </span>
        </button>
      </div>
    </div>
  );
}

export default GameCard;
