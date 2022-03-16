import { useSelector } from "react-redux";
import useStyles from "./Bibliotheque.style";
import GameBiblio from "./GameBiblio";

function Bibliotheque() {
  const classes = useStyles();
  const bibliotheque = useSelector((state) => state.bibliotheque);
  const games = useSelector((state) => state.games);

  console.log(bibliotheque);
  return (
    <div className={classes.root}>
      {bibliotheque.map((idGame) => {
        console.log(idGame);
        const dataGame = games.filter((game) => game.id == idGame)[0];
        console.log(dataGame);
        return (
          <div className={classes.item} key={idGame}>
            <GameBiblio
              id={idGame}
              background_image={dataGame.background_image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Bibliotheque;
