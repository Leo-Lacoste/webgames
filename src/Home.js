import useStyles from "./Home.style";
import VerticalList from "./VerticalList";
//import data from "./data.json";
import Input from "./Input";

import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

function buildUrl() {
  return `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=50`;
}

function Home() {
  const classes = useStyles();
  const { data, isLoading, isFetching, error } = useQuery(["movies"], () =>
    fetch(buildUrl()).then((response) => response.json())
  );
  console.log(data);
  let dataSend = data?.results;
  const [params, setParams] = useSearchParams();
  const [value, setValue] = useState(params.get("q") || "");
  const onChange = (event) => {
    const q = event.target.value;

    if (q) {
      setParams({ q });
    } else {
      setParams({});
    }
  };

  useEffect(() => {
    setValue(params.get("q") || "");
  }, [params]);

  if (value) {
    dataSend = dataSend.filter((game) =>
      game.name.match(new RegExp(value, "i"))
    );
  }

  //console.log(dataSend.filter((game) => game.name.match("Grand")));

  return (
    <div className={classes.root}>
      <Input value={value} onChange={onChange} />
      {error && <div className={classes.error}>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <VerticalList className={classes.list} data={dataSend} />
      )}
    </div>
  );
}

export default Home;
