import { Rating } from "react-simple-star-rating";
import useStyles from "./RatingGame.style";

function RatingGame({ rating, nbVotes, noteMetacritic }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <h4 className={classes.title}>Note du public</h4>
        <div className={classes.metacritic}>
          <h4>( Metacritic</h4>
          <div className={classes.noteMetacritic}>{noteMetacritic}</div>
          <h4>)</h4>
        </div>
      </div>

      <Rating
        initialValue={rating}
        fillColor="orange"
        emptyColor="gray"
        size={30}
        readonly={true}
      />
      <span className={classes.labelRate}>
        {rating}/5 ({nbVotes} votes)
      </span>
    </div>
  );
}

export default RatingGame;
