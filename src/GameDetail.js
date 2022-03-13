import useStyles from "./GameDetail.style";
import data from "./data.json";
import GenreGame from "./GenreGame";

function GameDetail() {
  const classes = useStyles();
  const dataCharacterExample = data.results[1];
  console.info(dataCharacterExample);

  const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateChamps = dataCharacterExample.released.split("-");
  //console.log(dateChamps);
  const date = new Date(dateChamps[0], dateChamps[1] - 1, dateChamps[2]);
  const dateSortie = date.toLocaleDateString(undefined, optionsDate);

  return (
    <div className={classes.root}>
      <div className={classes.back}>
        <button>Back</button>
      </div>
      <div className={classes.main}>
        <div className={classes.header}>
          <img
            className={classes.background}
            src={dataCharacterExample.background_image}
            alt="backgroundGame"
          />
        </div>
        <div className={classes.body}>
          <h2>{dataCharacterExample.name}</h2>
          <h3>Sortie le {dateSortie}</h3>
          <div className={classes.genreList}>
            {dataCharacterExample.genres.map((genre) => {
              return (
                <div key={genre.id}>
                  <GenreGame
                    name={genre.name}
                    background={genre.image_background}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
