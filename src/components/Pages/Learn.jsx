import Datafetch from "../DataFetch/Datafetch";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/pages.scss";

const Learn = () => {
  const [blogs, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);

    const reqOne =
      "https://api.themoviedb.org/3/movie/popular?api_key=c4084f4ff50cb99442df8d12e1551bdc&language=en-US&page=16";

    axios
      .get(reqOne)
      .then((res) => {
        setBlog(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="Learn-Main-Container">
      <Datafetch
        blogs={blogs}
        loading={loading}
        err={err}
      />
    </div>
  );
};

export default Learn;
