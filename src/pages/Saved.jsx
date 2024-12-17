import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { unsaveNews } from "../store/newsSaved";

function Saved() {
  const savedNews = useSelector((state) => state.news.data);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(unsaveNews(item));
  };

  return (
    <div style={{ minHeight: "77.2vh" }}>
      <div className="container">
        <div className="d-flex justify-content-center my-3 text-uppercase">
          <h1>List Saved</h1>
        </div>
      </div>
      <hr className="border-3" style={{ width: "80%", margin: "0 auto" }} />

      <div className="container my-5">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" style={{ width: "400px" }}>
                Title
              </th>
              <th scope="col" style={{ width: "450px" }}>
                Description
              </th>
              <th scope="col">Source</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider border-1">
            {savedNews.map((item) => (
              <tr key={item._id}>
                <td>{item.headline.main}</td>
                <td>{item.abstract}</td>
                <td>
                  <a href={item.web_url} target="_blank">
                    Read More
                  </a>
                </td>
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-danger rounded" onClick={() => handleDelete(item)}>
                      <FontAwesomeIcon icon={faTrashCan} className="fa-sm" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saved;
