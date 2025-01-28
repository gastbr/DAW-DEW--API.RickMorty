import { useParams, Link } from "react-router";
import { useContext } from "react";
import { CharactersContext } from "../App";

export default function BlogCharacter() {
    const params = useParams();
    const { charactersList } = useContext(CharactersContext);
    if (charactersList == null) {
        return <p>Buscando en el multiverso...</p>;
    }
    const character = charactersList.find((character) => character.id == params.id);;

    return (
        <div className="card">
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.species}</p>
                <Link to="/blog" className="btn btn-primary">Volver</Link>
            </div>
        </div>
    )
}