import useStyles from "./GameCard.style";

function GameLikeCard({ id, background_image }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.background}
        src={background_image}
        alt="background"
      />
    </div>
  );
}

export default GameLikeCard;
