import React, { useContext, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import { CharactersContext } from '../App';

export default function Blog() {
    const { setCharactersList } = useContext(CharactersContext);
    let [searchParams, setSearchParams] = useSearchParams();
    const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');

    useEffect(() => {
        if (data) {
            setCharactersList(data.results);
        }
    }, [data, setCharactersList]);

    if (loading) return <p>Buscando el Morty adecuado...</p>;
    if (error) return <p>La pistola de portales no funciona...: {error}</p>;
    //console.log(data?.results);
    const handleChange = (e) => {
        setSearchParams({ filter: e.target.value });
    };
    return (
        <>
            <h1>Blog - Elige tu personaje favorito</h1>
            <input
                type="text"
                name=''
                onChange={handleChange}
                className='form-control my-3'
                alt='Buscar'
                value={searchParams.get('filter') || ''}
            />
            <ul className='list-group'>
                {

                    data?.results.filter(item => item.name.toLowerCase().includes(searchParams.get('filter') || '')).map(item => {
                        return (
                            <Link
                                to={`/blog/${item.id}`}
                                key={item.id}>
                                <li className='list-group-item'>{item.name}</li>
                            </Link>
                        )
                    })}
            </ul>
        </>
    );
}
