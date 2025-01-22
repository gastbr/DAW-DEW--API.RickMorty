import useFetch from '../hooks/useFetch';

export default function Blog() {
    const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');
    console.log(data?.results);

    return (
        <>
            <h1>Blog - Elige tu personaje favorito</h1>
            <ul className='list-group'>
                {
                    data?.results.map(item => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })}
            </ul>
        </>
    );
}
