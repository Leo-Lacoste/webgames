import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    justifyContent: "center",
    padding: 16,
  },
  background: {
    width: 150,
  },
  biblioBtn: {
    background: "black",
    border: "none",
  },
  biblio: {
    filter: "grayscale(100%)",
  },
});

export default useStyles;
