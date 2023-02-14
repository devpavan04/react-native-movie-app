import { VStack, Heading, View, Text, Box, Image, Button, HStack, Center } from 'native-base';

export const Card = ({ navigation, item }) => {
  return (
    <Center>
      <HStack width='full' space={2} padding={2} alignItems='center' justifyContent='center'>
        <Box>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            alt={item.title ?? item.name}
            size='xl'
            resizeMode='cover'
          />
        </Box>
        <Box>
          <VStack space={3}>
            <View>
              <Heading size='xs'>{item.title ?? item.name}</Heading>
            </View>
            <View>
              <Text>Popularity: {item.popularity}</Text>
              <Text>Release Date: {item.release_date ?? item.first_air_date}</Text>
            </View>
            <View>
              <Button
                variant='solid'
                width='full'
                size='md'
                colorScheme='darkBlue'
                fontWeight='bold'
                onPress={() => {
                  navigation.navigate('SingleScreen', { item });
                }}
              >
                More Details
              </Button>
            </View>
          </VStack>
        </Box>
      </HStack>
    </Center>
  );
};
