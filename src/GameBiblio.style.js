import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: 150,
    color: "white",
    backgroundColor: "rgb(217, 213, 212)",
    borderColor: "rgb(77, 73, 73)",
    border: "solid",
    listStyle: "none",

    flexWrap: "wrap",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    display: "flex",
  },
  background: {
    width: "100%",
    height: "92px",
  },
  btn: {
    margin: 5,
  },
});
export default useStyles;
