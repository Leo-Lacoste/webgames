import useStyles from "./GameDetail.style";
import data from "./data.json";
import GenreGame from "./GenreGame";
import RatingGame from "./RatingGame";
import GameLikeList from "./GameLikeList";
import dataLike from "./data_gamesLike.json";
import BackButton from "./BackButton";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function buildUrl(value) {
  return `${process.env.REACT_APP_API_URL}/games/${value}?key=${process.env.REACT_APP_API_KEY}`;
}

function GameDetail() {
  const classes = useStyles();

  const idGameObject = useParams();
  const idGame = idGameObject.id;

  const { data, isLoading, isFetching, error } = useQuery(
    ["game", idGame],
    () => fetch(buildUrl(idGame)).then((response) => response.json())
  );

  let dataGame = data;
  console.log(dataGame);
  //const dataGame = data.results[1];

  const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateSortie;
  if (!isLoading && !error) {
    const dateChamps = dataGame.released.split("-");
    //console.log(dateChamps);
    const date = new Date(dateChamps[0], dateChamps[1] - 1, dateChamps[2]);
    dateSortie = date.toLocaleDateString(undefined, optionsDate);
  }

  return (
    <div className={classes.root}>
      <div className={classes.back}>
        <BackButton />
      </div>
      {error && <div className={classes.error}>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <div className={classes.main}>
          <div className={classes.header}>
            <img
              className={classes.background}
              src={dataGame.background_image}
              alt="backgroundGame"
            />
          </div>
          <div className={classes.bodyGame}>
            <h2>{dataGame.name}</h2>
            <h3>Sortie le {dateSortie}</h3>
            <div className={classes.genreList}>
              {dataGame.genres.map((genre) => {
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
              rating={dataGame.rating}
              nbVotes={dataGame.ratings_count}
              noteMetacritic={dataGame.metacritic}
            />
            <div className={classes.gameLikeList}>
              <GameLikeList data={dataLike.results} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameDetail;
