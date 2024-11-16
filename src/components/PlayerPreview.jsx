import { useState } from 'react';

export function PlayerPreview({ player }) {
  const [vote, setVotes] = useState(0);

  function handleVote() {
    setVotes(vote + 1);
  }

  return (
    <>
      <article className="player-preview">
        <p className="vote-txt">
          Votes: <span>{vote}</span>
        </p>
        <h3 className="player-name">{player.name}</h3>
        <img className="player-img" src={player.img} alt={player.name} />
      </article>
      <button className="vote-btn" onClick={handleVote}>
        Vote
      </button>
    </>
  );
}
