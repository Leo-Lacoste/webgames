import useStyles from "./GenreGame.style";

function GenreGame({ name, background }) {
  const classes = useStyles({ background });
  return (
    <div className={classes.root}>
      <div className={classes.text}>{name}</div>
    </div>
  );
}

export default GenreGame;
