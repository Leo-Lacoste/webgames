import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./GameCard.style";
import { favoritesSlice } from "./slices";

function GameCard({ id, background_image, name }) {
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const addToFavorite = (event) => {
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ id }));
  };
  return (
    <div className={classes.root}>
      <img
        className={classes.background}
        src={background_image}
        alt="background"
      />
      <div className={classes.textCard}>
        <div className={classes.titleCard}>
          <p>{name}</p>
        </div>
        <button
          className={classNames(classes.biblioBtn, {
            [classes.added]: favorites.includes(id),
          })}
          onClick={addToFavorite}
        >
          <span className={classes.biblio} classrole="img" aria-label="star">
            ⭐
          </span>
        </button>
      </div>
    </div>
  );
}

export default GameCard;
