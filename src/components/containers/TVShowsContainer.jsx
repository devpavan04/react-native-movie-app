import { VStack, Center, Text } from 'native-base';
import { useState, useMemo } from 'react';
import { useAPI } from '../../hooks';
import { Cards, Dropdown } from '../common';
import { API_KEY } from '@env';

export const TVShowsContainer = ({ navigation }) => {
  const [selected, setSelected] = useState('airing_today');

  const handleOnSelect = (option) => {
    setSelected(option);
  };

  const options = [
    {
      label: 'Airing Today',
      value: 'airing_today',
    },
    {
      label: 'On Air',
      value: 'on_the_air',
    },
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },
  ];

  const URL = useMemo(() => {
    let filterType;

    switch (selected) {
      case 'airing_today':
        filterType = 'tv/airing_today';
        break;
      case 'on_the_air':
        filterType = 'tv/on_the_air';
        break;
      case 'popular':
        filterType = 'tv/popular';
        break;
      case 'top_rated':
        filterType = 'tv/top_rated';
        break;
      default:
        filterType = 'tv/airing_today';
    }

    return `https://api.themoviedb.org/3/${filterType}?api_key=${API_KEY}&language=en-US&page=1`;
  }, [selected]);

  const { results, loading, error } = useAPI(URL);

  return (
    <VStack space={3}>
      <Center marginTop={4}>
        <Dropdown options={options} selected={selected} onSelect={handleOnSelect} />
      </Center>

      {loading ? (
        <Center marginTop={10}>
          <Text>Loading...</Text>
        </Center>
      ) : error ? (
        <Center marginTop={10}>
          <Text>{error}</Text>
        </Center>
      ) : (
        <Cards navigation={navigation} items={results} />
      )}
    </VStack>
  );
};
