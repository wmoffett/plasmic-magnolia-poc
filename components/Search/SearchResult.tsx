import {
  Box,
  Heading,
  Icon,
  LinkBox,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { MdStar } from 'react-icons/md';
import { SearchResultProps } from './SearchResultType';

const dollarUSLocale = Intl.NumberFormat('en-US');

export const formatNumberLocale = (num: number): string => {
  return dollarUSLocale.format(num);
};

// Round to 1 decimal place
// Reference https://stackoverflow.com/a/7343013
export const formatRating = (rating: number) =>
  (Math.round(rating * 10) / 10).toFixed(1);

const SearchResult: React.FC<SearchResultProps> = ({
  images,
  title,
  address,
  reviewCount,
  averageRating,
  price,
  onClick,
}) => {
  const rating = formatRating(averageRating);
  return (
    <LinkBox as="article" maxW="sm" onClick={onClick}>
      <VStack
        alignItems={'left'}
        p="3"
        boxShadow="lg"
        rounded="md"
        minHeight="md"
        justifyContent="space-between"
      >
        <VStack alignItems="left">
          <Box rounded="md">
            <Box
              height="130"
              rounded="md"
              overflow="hidden"
              bg="gray.200"
              position="relative"
            >
              {images?.length > 0 && (
                <Image
                  src={images[0]}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </Box>
          </Box>

          <Heading size={{ base: 'sm', md: 'md' }}>{title}</Heading>
          <Text size={{ base: 'xs', md: 'sm' }}>{address}</Text>
          <Stack
            direction="row"
            color="caringRed.400"
            alignItems="center"
          >
            <Box alignSelf="center">
              <Icon
                as={MdStar}
                boxSize={3}
                color="caringRed.400"
                role="presentation"
              />
            </Box>
            <Heading
              as="p"
              size="xs"
              aria-label={`${rating} star rating`}
            >
              {rating}
            </Heading>
            <Text color="gray.800" fontSize="xs">
              ({reviewCount})
            </Text>
          </Stack>
        </VStack>
        {price > 0 ? (
          <Heading as="p" size={{ base: 'sm', md: 'md' }}>
            ${formatNumberLocale(price / 100)}
          </Heading>
        ) : (
          <Text color="gray.600">Pricing not available</Text>
        )}
      </VStack>
    </LinkBox>
  );
};

export default SearchResult;
