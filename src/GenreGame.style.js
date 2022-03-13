import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: 90,
    height: 50,
    backgroundImage: ({ background }) => `url(${background})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: "black",
    fontSize: "20px",
    fontWeight: "250",
    textAlign: "center",
    lineHeight: "50px",
    border: "solid",
    borderColor: "black",
  },
  text: {
    backgroundColor: "rgba(209, 216, 222, 0.7)",
  },
});

export default useStyles;
