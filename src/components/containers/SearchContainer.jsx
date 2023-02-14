import { VStack, Center, Text, Heading } from 'native-base';
import { useState, useMemo } from 'react';
import { useAPI } from '../../hooks';
import { Cards, SearchForm } from '../common';
import { API_KEY } from '@env';

export const SearchContainer = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selected, setSelected] = useState('movie');

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  const handleOnSelect = (option) => {
    setSelected(option);
  };

  const options = [
    {
      label: 'Movies',
      value: 'movie',
    },
    {
      label: 'TV Shows',
      value: 'tv',
    },
    {
      label: 'Multi',
      value: 'multi',
    },
  ];

  const URL = useMemo(() => {
    let filterType;

    switch (selected) {
      case 'movie':
        filterType = 'search/movie';
        break;
      case 'tv':
        filterType = 'search/tv';
        break;
      case 'multi':
        filterType = 'search/multi';
        break;
      default:
        filterType = 'search/movie';
    }

    return `https://api.themoviedb.org/3/${filterType}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      searchText
    )}&page=1&include_adult=false`;
  }, [selected, searchText]);

  const { results, loading, error } = useAPI(URL);

  return (
    <VStack space={3}>
      <Center>
        <SearchForm options={options} selected={selected} onSearchSelect={handleSearchText} onSelect={handleOnSelect} />
      </Center>

      {!searchText ? (
        <Heading mt={20} textAlign='center'>
          Please initiate a search
        </Heading>
      ) : loading ? (
        <Center marginTop={10}>
          <Text>Loading...</Text>
        </Center>
      ) : error ? (
        <Center marginTop={10}>
          <Text>{error}</Text>
        </Center>
      ) : (
        <Cards navigation={navigation} items={results.filter((result) => result.poster_path !== null)} />
      )}
    </VStack>
  );
};
