import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <section className="home  ">
      <div>
        <h1 className="home-title">
          <span>Welcome</span> to <span> VOTE</span> App!
        </h1>
        <h2 className="sub-title-home">
          Let start the to Vote for your favorite <span> NBA</span> Player
        </h2>
      </div>
      <div>
        <Link to="/players">
          <img
            className="home-img animate__animated animate__bounce"
            src="public/hero.png"
          ></img>
        </Link>
      </div>
    </section>
  );
}
