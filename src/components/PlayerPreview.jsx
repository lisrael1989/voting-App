export function PlayerPreview({ player }) {
  return (
    <article className="player-preview">
      <h3 className="player-name">{player.name}</h3>
      <img className="player-img" src={player.img} alt={player.name} />
    </article>
  );
}
