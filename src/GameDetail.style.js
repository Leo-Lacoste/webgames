import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    justifyContent: "center",
  },
  main: {
    marginTop: 10,
  },
  bodyGame: {
    padding: 16,
    textAlign: "center",
  },
  background: {
    width: "100%",
  },
  biblioBtn: {
    background: "black",
    border: "none",
  },
  biblio: {
    filter: "grayscale(100%)",
  },
  genreList: {
    display: "flex",
    flexWrap: "wrap",
  },
  genreListItem: { marginLeft: 20 },
});

export default useStyles;
