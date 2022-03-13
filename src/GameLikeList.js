import { Link } from "react-router-dom";
import GameLikeCard from "./GameLikeCard";
import useStyles from "./GameLikeList.style";

function GameLikeList({ data }) {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {data.map((entry) => (
        <li key={entry.id} className={classes.item}>
          <Link to={`/games/${entry.id}`} className={classes.link}>
            <GameLikeCard {...entry} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GameLikeList;
