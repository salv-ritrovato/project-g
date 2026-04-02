export default function GameList({ games }) {

    return (
        <ul className="list-group">
            {games?.map(game => (
                <li key={game.id} className="list-group-item d-flex align-items-center gap-3">
                    <img
                        src={game.background_image || "https://via.placeholder.com/120x67"}
                        alt={game.name}
                        width={120}
                        height={67}
                        style={{ objectFit: "cover" }}
                    />
                    <span className="flex-grow-1">{game.name || "N/A"}</span>
                    <span className="text-muted">{game.released || "N/A"}</span>
                    <span>⭐ {game.rating || "N/A"}</span>
                </li>
            ))}
        </ul>
    )
}