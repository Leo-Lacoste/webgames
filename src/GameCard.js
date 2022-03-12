import useStyles from "./GameCard.style";

function GameCard({ id, background_image, name }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.background}
        src={background_image}
        alt="backround"
      />
      <div className={classes.textCard}>
        <h1 className={classes.titleCard}>{name}</h1>
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