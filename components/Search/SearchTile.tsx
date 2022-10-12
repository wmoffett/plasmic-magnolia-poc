import React, { useEffect, useState } from 'react';
import AlgoliaClient from '~/services/algolia';
import SearchResult from './SearchResult';
import SearchResultSkeleton from './SearchResultSkeleton';
import { SearchResultInterface } from './SearchResultType';

interface Props {
  providerId: string;
}
const SearchTile: React.FC<Props> = ({ providerId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SearchResultInterface>();

  //TODO: move to a shared file
  const getData = (keyword: string) => {
    setIsLoading(true);
    AlgoliaClient.search('provider_poc_dev', keyword ?? '', {
      ...{ tagFilters: ['Independent Living'] },
      hitsPerPage: 1,
      page: 0,
    }).then((data) => {
      setIsLoading(false);
      setResult(data?.hits[0] as unknown as SearchResultInterface);
    });
  };

  useEffect(() => {
    if (providerId) {
      getData(providerId);
    }
  }, [providerId]);

  if (!result || isLoading) return <SearchResultSkeleton />;
  const minPrice = Math.min(
    ...result.services.map((o) => o.costs.startingPriceCents)
  );

  return (
    <SearchResult
      title={result.name}
      address={result.address.formattedAddress}
      images={result.images}
      averageRating={result.averageRating}
      reviewCount={result.reviewCount}
      price={minPrice}
      onClick={() => {}}
    />
  );
};

export default SearchTile;
