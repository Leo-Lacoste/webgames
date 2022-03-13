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
    height: "92px",
  },
});
export default useStyles;
