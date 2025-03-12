import { useQuery } from '@tanstack/react-query';

interface PokemonResult {
    name: string;
    url: string;
}

interface Pokemon {
    results: PokemonResult[];
}

const fetchPost = async (): Promise<PokemonResult[]> => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=50');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: Pokemon = await response.json();
    return data.results;
};

export const usePost = () => {
    return useQuery<PokemonResult[]>({
        queryKey: ['pokemon'],
        queryFn: fetchPost,
        initialData: [], 
    });
};
