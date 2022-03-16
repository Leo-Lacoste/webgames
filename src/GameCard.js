import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./GameCard.style";
import { bibliothequeSlice } from "./slices";

function GameCard({ id, background_image, name }) {
  const classes = useStyles();
  const bibliotheque = useSelector((state) => state.bibliotheque);
  const dispatch = useDispatch();
  const addToBibliotheque = (event) => {
    event.preventDefault();
    dispatch(bibliothequeSlice.actions.toggle({ id }));
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
            [classes.added]: bibliotheque.includes(id),
          })}
          onClick={addToBibliotheque}
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
