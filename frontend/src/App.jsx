import { useState, useEffect } from "react";

import axios from "./utils/axios";
import { Quotes, Pagination } from "./components";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const pages = new Array(totalPages).fill(null).map((v, i) => i);
  useEffect(() => {
    (async () => {
      await axios
        .get(`quotes?page=${pageNumber}`)
        .then(({ data }) => {
          setQuotes(data.quotes);
          setTotalPages(data.pages);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [pageNumber]);
  return (
    <div className="hero is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              {quotes.map((el) => {
                return <Quotes key={el.id} quote={el} />;
              })}
              <Pagination
                pages={pages}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
