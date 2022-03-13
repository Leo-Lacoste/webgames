import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    textAlign: "left",
    paddingLeft: 30,
  },
  text: {
    display: "flex",
  },
  labelRate: { marginLeft: 10 },
  metacritic: { marginLeft: 30, display: "flex" },
  noteMetacritic: {
    display: "block",
    border: "solid",
    borderColor: "black",
    backgroundColor: "red",
    padding: 2,
    paddingTop: 3,
    paddingBottom: 3,
    height: 20,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default useStyles;
