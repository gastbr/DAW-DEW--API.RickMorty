export default function Characters({ characters }) {
    // const { characters, setCharacters } = props;
    // const resetCharacters = () => {
    //     setCharacters(null);
    // };

    return (

        // <h1>Characters</h1>

        <div className="characters">
            <h2>Characters</h2>
            <span className="back-home"
            // onClick={resetCharacters}
            >Volver a la home</span>
            <div className="container characters">
                {characters.results.map((character, index) => (
                    //return implicito
                    <div className="character-container" key={index}>

                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive"></span>
                                        <p>Alive</p>
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"></span>
                                        <p>Dead</p>
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-gray">Episodios:</span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-gray">Especie:</span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}