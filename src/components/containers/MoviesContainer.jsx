import { VStack, Center, Text } from 'native-base';
import { useState, useMemo } from 'react';
import { useAPI } from '../../hooks';
import { Cards, Dropdown } from '../common';
import { API_KEY } from '@env';

export const MoviesContainer = ({ navigation }) => {
  const [selected, setSelected] = useState('now_playing');

  const handleOnSelect = (option) => {
    setSelected(option);
  };

  const options = [
    {
      label: 'Now Playing',
      value: 'now_playing',
    },
    {
      label: 'Popular',
      value: 'popular',
    },
    {
      label: 'Top Rated',
      value: 'top_rated',
    },
    {
      label: 'Upcoming',
      value: 'upcoming',
    },
  ];

  const URL = useMemo(() => {
    let filterType;

    switch (selected) {
      case 'now_playing':
        filterType = 'movie/now_playing';
        break;
      case 'popular':
        filterType = 'movie/popular';
        break;
      case 'top_rated':
        filterType = 'movie/top_rated';
        break;
      case 'upcoming':
        filterType = 'movie/upcoming';
        break;
      default:
        filterType = 'movie/now_playing';
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
