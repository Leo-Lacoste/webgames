import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: 150,
    color: "white",
    backgroundColor: "rgb(77, 73, 73)",
    borderColor: "rgb(77, 73, 73)",
    border: "solid",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    height: "100%",
  },
  background: {
    width: "100%",
  },
  titleCard: {
    fontSize: "10px",
  },
  textCard: {
    width: "100%",
    display: "flex",
    padding: 0,
    margin: 0,
    right: 0,
    justifyContent: "right",
    paddingLeft: 10,
    verticalAlign: "baseline",
  },
  biblioBtn: {
    backgroundColor: "rgb(77, 73, 73)",
    border: "none",
    marginLeft: 10,
  },
});
export default useStyles;