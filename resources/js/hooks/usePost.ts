import { useQuery } from '@tanstack/react-query';

interface PokemonResult {
    name: string;
    url: string;
}

interface Pokemon {
    results: PokemonResult[];
}

const fetchPokemons = async (): Promise<PokemonResult[]> => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: Pokemon = await response.json();
    return data.results;
};

export const usePokemon = () => {
    const query = useQuery<PokemonResult[]>({
        queryKey: ['pokemon'],
        queryFn: fetchPokemons,
        initialData: [], 
    });
    
    return {
        data: query.data,
        isFetching: query.isFetching,
    };
};

