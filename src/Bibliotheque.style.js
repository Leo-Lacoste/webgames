import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: 8,
    marginTop: 10,
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    marginTop: 5,
    marginLeft: 15,
  },
});

export default useStyles;
