import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: { textAlign: "center" },
  link: {
    textDecoration: "none",
    backgroundColor: "white",
    color: "black",
    border: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: "5px",
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 8,
  },
  linkHome: {
    textDecoration: "none",
    backgroundColor: "white",
    color: "black",
    border: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: "5px",
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 8,
    marginRight: 10,
  },
});

export default useStyles;
