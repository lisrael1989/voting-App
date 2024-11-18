export function Admin({ users }) {
  const votes = JSON.parse(localStorage.getItem('votes')) || {};
  const players = JSON.parse(localStorage.getItem('players')) || [];

  const getPlayerNameById = (id) => {
    const player = players.find((p) => p.id === id);
    return player ? player.name : 'Unknown';
  };

  return (
    <section className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin dashboard. Here you can manage the app.</p>

      <table className="users-votes-table">
        <thead>
          <tr>
            <th> Name</th>
            <th> Email</th>
            <th> Admin</th>
            <th> Voted Player</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Yes' : 'No'}</td>
              <td>
                {votes[user.id] ? getPlayerNameById(votes[user.id]) : 'No vote'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
