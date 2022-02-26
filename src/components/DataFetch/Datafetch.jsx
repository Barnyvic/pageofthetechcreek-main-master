import Card from "react-bootstrap/Card";
import Learn from "../assets/logolearn.jpg";
import blog1 from "../assets/post2.jpg";
import blog2 from "../assets/post3.jpg";
import blog3 from "../assets/post4.jpg";
import blog4 from "../assets/post5.jpg";
import blog5 from "../assets/blogpost1.jpg";

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
            <h4>Blogs</h4>
            <div className="Blog_Container-content">
              <div className="Blog__content">
                <Card style={{ width: "25rem" }}>
                  <img className="Blog_img" src={blog1} alt="" />
                  <h4>Learning in the creek</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum itaque modi obcaecati enim et fuga porro? Nihil
                    cumque necessitatibus, qui adipisci recusandae quod odit
                    repellendus accusantium fugiat! Necessitatibus magni illum
                    asperiores ad, temporibus saepe earum amet suscipit
                    corporis,
                  </p>
                  <button variant="primary">More Details</button>
                </Card>
              </div>
              <div className="Blog__content">
                <Card style={{ width: "25rem" }}>
                  <img className="Blog_img" src={blog2} alt="" />
                  <h4>Come join us</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum itaque modi obcaecati enim et fuga porro? Nihil
                    cumque necessitatibus, qui adipisci recusandae quod odit
                    repellendus accusantium fugiat! Necessitatibus magni illum
                    asperiores ad, temporibus saepe earum amet suscipit
                    corporis,
                  </p>
                  <button variant="primary">More Details</button>
                </Card>
              </div>
              <div className="Blog__content">
                <Card style={{ width: "25rem" }}>
                  <img className="Blog_img" src={blog3} alt="" />
                  <h4>Doing is better than perfect</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum itaque modi obcaecati enim et fuga porro? Nihil
                    cumque necessitatibus, qui adipisci recusandae quod odit
                    repellendus accusantium fugiat! Necessitatibus magni illum
                    asperiores ad, temporibus saepe earum amet suscipit
                    corporis,
                  </p>
                  <button variant="primary">More Details</button>
                </Card>
              </div>
              <div className="Blog__content">
                <Card style={{ width: "25rem" }}>
                  <img className="Blog_img" src={blog4} alt="" />
                  <h4>Code Gaminator 10.0</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum itaque modi obcaecati enim et fuga porro? Nihil
                    cumque necessitatibus, qui adipisci recusandae quod odit
                    repellendus accusantium fugiat! Necessitatibus magni illum
                    asperiores ad, temporibus saepe earum amet suscipit
                    corporis,
                  </p>
                  <button variant="primary">More Details</button>
                </Card>
              </div>
              <div className="Blog__content">
                <Card style={{ width: "25rem" }}>
                  <img className="Blog_img" src={blog5} alt="" />
                  <h4>Code Gaminator 10.1</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum itaque modi obcaecati enim et fuga porro? Nihil
                    cumque necessitatibus, qui adipisci recusandae quod odit
                    repellendus accusantium fugiat! Necessitatibus magni illum
                    asperiores ad, temporibus saepe earum amet suscipit
                    corporis,
                  </p>
                  <button variant="primary">More Details</button>
                </Card>
              </div>
            </div>
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
