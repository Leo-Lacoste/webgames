import useStyles from "./GameDetail.style";
//import data from "./data.json";
import GenreGame from "./GenreGame";
import RatingGame from "./RatingGame";
import GameLikeList from "./GameLikeList";
//import dataLike from "./data_gamesLike.json";
import BackButton from "./BackButton";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//import { gamesSlice } from "./slices";

function buildUrlGameLike(value) {
  return `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page=10&page_size=10&genres=${value}`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function GameDetail() {
  const classes = useStyles();

  const idGameObject = useParams();
  const idGame = idGameObject.id;

  const games = useSelector((state) => state.games);
  const data = games.filter((game) => game.id == idGame)[0];

  //const dispatch = useDispatch();
  /*const addToGames = (game) => {
    dispatch(gamesSlice.actions.addGames({ game }));
  };*/

  let dataGame = data;

  const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateSortie;
  let valueGenre;
  //if (!isLoading && !error) {
  const dateChamps = dataGame.released.split("-");
  //console.log(dateChamps);
  const date = new Date(dateChamps[0], dateChamps[1] - 1, dateChamps[2]);
  dateSortie = date.toLocaleDateString(undefined, optionsDate);
  valueGenre = dataGame.genres[getRandomInt(dataGame.genres.length)].id;
  //console.log("value" + valueGenre);
  /* console.log(
      dataGame.genres.filter((genre) => genre.id === valueGenre)[0].name
    );*/
  //}

  //console.log(valueGenre);

  const {
    data: dataGameLike,
    isLoading: isLoadingGameLike,
    isFetching: isFetchingGameLike,
    error: errorGameLike,
  } = useQuery(["gameLike", valueGenre], () =>
    fetch(buildUrlGameLike(valueGenre)).then((response) => response.json())
  );

  /*if (!isLoadingGameLike && !errorGameLike) {
    //dataGameLike?.results.map((game) => addToGames(game));
    //addToGames(dataGameLike?.results);
    //console.log(Array.from(dataGameLike?.results));
    const tempo = {
      games: dataGameLike.results,
    };
    addToGames(tempo);
    //console.log(tempo);
  }*/

  //console.log(dataGameLike);

  //console.log(dataLike.results[0].genres.length);

  return (
    <div className={classes.root}>
      <div className={classes.back}>
        <BackButton />
      </div>

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
          {errorGameLike && (
            <div className={classes.error}>{errorGameLike}</div>
          )}
          {(isLoadingGameLike || isFetchingGameLike) && (
            <div>Loading movies...</div>
          )}
          {!isLoadingGameLike && !errorGameLike && (
            <div className={classes.gameLikeList}>
              <h4>
                {
                  dataGame.genres.filter((genre) => genre.id === valueGenre)[0]
                    .name
                }
              </h4>
              <GameLikeList data={dataGameLike?.results} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
