import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className={classes.root}>
      🕹️ Video Games App 🕹️
      <Link className={classes.link} to="/favorites">
        {`Favorites (${favorites.length})`}
      </Link>
    </div>
  );
}

export default Header;
