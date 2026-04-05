export default function AdvancedSearch({ handleFilter, genres }) {

    return (
        <div>
            <select name="filter" id="filterSelect" onChange={handleFilter}>
                <option value="">All Games</option>

                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}

            </select>
        </div>
    );
}