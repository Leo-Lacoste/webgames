import useStyles from "./GameDetail.style";
import data from "./data.json";

function GameDetail() {
  const classes = useStyles();
  const dataCharacterExample = data.results[1];
  console.info(dataCharacterExample);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img
          className={classes.background}
          src={dataCharacterExample.background_image}
          alt="backgroundGame"
        />
        <h1>{dataCharacterExample.name}</h1>
        <button className={classes.biblioBtn}>
          <span className={classes.biblio} classrole="img" aria-label="star">
            ⭐
          </span>
        </button>
      </div>
    </div>
  );
}

export default GameDetail;
