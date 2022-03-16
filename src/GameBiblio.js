import useStyles from "./GameBiblio.style";
import { useDispatch } from "react-redux";

import { bibliothequeSlice } from "./slices";
import { Link } from "react-router-dom";

function GameBiblio({ id, background_image }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const removeBibliotheque = (event) => {
    event.preventDefault();
    dispatch(bibliothequeSlice.actions.remove({ id }));
  };
  return (
    <div className={classes.root}>
      <Link to={`/games/${id}`} className={classes.link}>
        <img
          className={classes.background}
          src={background_image}
          alt="background"
        />
      </Link>

      <div>
        <button className={classes.btn} onClick={removeBibliotheque}>
          <span>❌</span>
        </button>
      </div>
    </div>
  );
}

export default GameBiblio;
