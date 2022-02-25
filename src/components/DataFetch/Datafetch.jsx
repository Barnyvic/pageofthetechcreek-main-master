import Card from "react-bootstrap/Card";
import Learn from "../assets/logolearn.jpg";
const Datafetch = ({ blogs, loading }) => {
  if (loading) return <h>Loading...</h>;

  return (
    <div className="DataContainer">
      <div className="container">
        <img src={Learn} />
        <h3>TechCreek NG</h3>
        <h5>@Techcreek Blogs and Videos</h5>
      </div>
      <div className="Grid-learn">
        <div className="learngridcontainer">
          <div className="BlogContent">
            <h4>Blog</h4>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                 <p>    </p>
                </Card.Text>
                <button variant="primary">Go somewhere</button>
              </Card.Body>
            </Card>
          </div>
          <div className="videoContent">
            <div className="Blogcontainer">
              <h4>Tutorial Videos</h4>
              {blogs &&
                blogs.map((blog) => {
                  return (
                    <div className="Card--Container" key={blog.id}>
                      <div className="card__container" key={blog.id}>
                        <div className="card__img">
                          <img
                            src={`http://image.tmdb.org/t/p/w200${blog.poster_path}`}
                            alt=""
                          />
                        </div>
                        <div className="Card_content">
                          <div className="card__body">
                            <p className="Title">Coursetitle: {blog.title}</p>
                            <p className="description"> Description</p>
                            <p>{blog.overview}</p>
                          </div>
                          <div className="btn__container">
                            <p>
                              <span>Rating:</span>
                              {blog.vote_average}
                            </p>
                            <p className="date">
                              <span>Date:</span> {blog.release_date}
                            </p>
                          </div>
                          <button> View</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datafetch;
