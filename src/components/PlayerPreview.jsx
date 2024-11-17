export function PlayerPreview({
  player,
  isVotedFor,
  isVotingDisabled,
  onVote,
}) {
  return (
    <>
      <article className="player-preview">
        <p className="vote-txt">
          Votes: <span>{player.vote}</span>
        </p>
        <h3 className="player-name">{player.name}</h3>
        <img className="player-img" src={player.img} alt={player.name} />
      </article>
      <button
        className={`vote-btn ${isVotedFor ? 'voted' : ''}`}
        onClick={() => onVote(player.id)}
        disabled={isVotingDisabled}
      >
        {isVotedFor ? 'Voted' : 'Vote'}
      </button>
    </>
  );
}
