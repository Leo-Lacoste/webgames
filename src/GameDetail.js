import useStyles from "./GameDetail.style";
import data from "./data.json";
import GenreGame from "./GenreGame";
import RatingGame from "./RatingGame";
import GameLikeList from "./GameLikeList";
import dataLike from "./data_gamesLike.json";
import BackButton from "./BackButton";

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
        <BackButton />
      </div>
      <div className={classes.main}>
        <div className={classes.header}>
          <img
            className={classes.background}
            src={dataCharacterExample.background_image}
            alt="backgroundGame"
          />
        </div>
        <div className={classes.bodyGame}>
          <h2>{dataCharacterExample.name}</h2>
          <h3>Sortie le {dateSortie}</h3>
          <div className={classes.genreList}>
            {dataCharacterExample.genres.map((genre) => {
              return (
                <div className={classes.genreListItem} key={genre.id}>
                  <GenreGame
                    name={genre.name}
                    background={genre.image_background}
                  />
                </div>
              );
            })}
          </div>
          <RatingGame
            rating={dataCharacterExample.rating}
            nbVotes={dataCharacterExample.ratings_count}
            noteMetacritic={dataCharacterExample.metacritic}
          />
          <div className={classes.gameLikeList}>
            <GameLikeList data={dataLike.results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
