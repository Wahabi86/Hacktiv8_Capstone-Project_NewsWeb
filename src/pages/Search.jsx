import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";

function Search() {
  const { query } = useParams();
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center my-3 text-uppercase">
          <h1>{query} News</h1>
        </div>
      </div>
      <hr className="border-3" style={{ width: "80%", margin: "0 auto" }} />
      <div className="container">
        <div className="row justify-content-center mb-4" style={{ cursor: "pointer" }}>
          <MainLayout query={query} />
        </div>
      </div>
    </>
  );
}

export default Search;
