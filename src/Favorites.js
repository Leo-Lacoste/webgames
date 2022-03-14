import { useSelector } from "react-redux";
import useStyles from "./Favorites.style";

function Favorites() {
  const classes = useStyles;
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  return <div className={classes.root}></div>;
}

export default Favorites;
