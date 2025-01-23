import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

export default function BlogCharacter() {
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    const { data, loading, error } = useFetch(url);
    if (loading) return <p>Buscando en el multiverso...</p>;
    if (error) return <p>Este personaje ya no existe...: {error}</p>;

    return (
        <div className="card">
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.species}</p>
            </div>
        </div>
    )
}