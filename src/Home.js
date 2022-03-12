import GameDetail from "./GameDetail";
import Header from "./Header";
import useStyles from "./Home.style";
import VerticalList from "./VerticalList";
import data from "./data.json";

function buildUrl() {
  return `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=50`;
}

function Home() {
  const classes = useStyles();
  /*const { data, isLoading, isFetching, error } = useQuery(["movies"], () =>
    fetch(buildUrl()).then((response) => response.json())
  );*/
  console.log(data);
  return (
    <div className={classes.root}>
      <VerticalList className={classes.list} data={data.results} />
    </div>
  );
}

export default Home;
