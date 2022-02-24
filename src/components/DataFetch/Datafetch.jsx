import Card from "react-bootstrap/Card";
const Datafetch = ({ blogs, loading }) => {
  if (loading) return <h>Loading...</h>;

  return (
    <div className="DataContainer">
      <div className="Blogcontainer">
        <p>
          Education doesn’t have to be expensive there are plenty of free
          courses to brush up on your IT skills that require nothing more than
          an internet connection and a laptop or smartphone.Whether you’re
          interested in changing the direction of your career, just starting
          out, trying to beef up your resume or just looking to stay on top of
          technology trends, any of these  online Course materials can
          help you without breaking the bank.
        </p>
      </div>
      <div className="Blogcontainer">
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
  );
};

export default Datafetch;
