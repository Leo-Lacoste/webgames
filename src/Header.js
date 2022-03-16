import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  const bibliotheque = useSelector((state) => state.bibliotheque);
  return (
    <div className={classes.root}>
      <Link className={classes.linkHome} to="/">
        <span>🏠</span>
      </Link>
      Games App 🕹️
      <Link className={classes.link} to="/bibliotheque">
        {`Bibliothèque (${bibliotheque.length})`}
      </Link>
    </div>
  );
}

export default Header;
