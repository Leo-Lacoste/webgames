import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  return <div className={classes.root}>🕹️ Video Games App 🕹️</div>;
}

export default Header;
