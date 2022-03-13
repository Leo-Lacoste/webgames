import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    justifyContent: "center",
  },
  main: {
    marginTop: 10,
  },
  body: {
    padding: 16,
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
});

export default useStyles;
