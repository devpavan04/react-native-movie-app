import { VStack, Heading, AspectRatio, ScrollView, Text, Box, Image } from 'native-base';

export const SingleContainer = ({ route }) => {
  const item = route.params.item;

  return (
    <ScrollView>
      <Box width='full' paddingX={6} paddingY={10}>
        <VStack space={5}>
          <Heading textAlign='center'>{item.title ?? item.name}</Heading>
          <AspectRatio alignSelf='center' width='85%' ratio={{ base: 1 / 1 }}>
            <Image
              resizeMode='contain'
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              alt={item.title ?? item.name}
            />
          </AspectRatio>
          <Text>{item.overview}</Text>
          <Text fontSize='sm'>
            <Text fontWeight='bold'>Popularity:</Text> {item.popularity} | <Text fontWeight='bold'>Release Date:</Text>{' '}
            {item.release_date ?? item.first_air_date}
          </Text>
        </VStack>
      </Box>
    </ScrollView>
  );
};
