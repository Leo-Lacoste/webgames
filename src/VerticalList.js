import classNames from "classnames";
import { Link } from "react-router-dom";

import GameCard from "./GameCard";
import useStyles from "./VerticalList.style";

function VerticalList({ data, className }) {
  const classes = useStyles();
  return (
    <ul className={classNames([classes.root, className])}>
      {data.map((entry) => (
        <li key={entry.id} className={classes.item}>
          <GameCard {...entry} />
        </li>
      ))}
    </ul>
  );
}

VerticalList.defaultProps = {
  data: [],
};

export default VerticalList;
