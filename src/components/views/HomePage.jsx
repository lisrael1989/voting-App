import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <section className="home  ">
      <div>
        <h1 className="home-title">
          <span>Welcome</span> to <span> VOTE</span> App!
        </h1>
        <h2 className="sub-title-home">
          Let start the to Vote for your favorite Player
        </h2>
      </div>
      <div>
        <Link to="/book">
          <img
            className="home-img animate__animated animate__bounce"
            src="/public/images/vote3.png"
          ></img>
        </Link>
      </div>
    </section>
  );
}
