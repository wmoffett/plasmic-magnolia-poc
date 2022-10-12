import { SearchOptions } from '@algolia/client-search';
import { RequestOptions } from '@algolia/transporter';
import algoliasearch, {
  SearchClient,
  SearchIndex,
} from 'algoliasearch';

class _AlgoliaClient {
  client: SearchClient;

  constructor() {
    if (
      !process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ||
      !process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID.length
    ) {
      throw new Error(
        'NEXT_PUBLIC_ALGOLIA_APPLICATION_ID is not set'
      );
    }

    if (
      !process.env.NEXT_PUBLIC_ALGOLIA_API_KEY ||
      !process.env.NEXT_PUBLIC_ALGOLIA_API_KEY.length
    ) {
      throw new Error('NEXT_PUBLIC_ALGOLIA_API_KEY is not set');
    }

    this.client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
      process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
    );
  }

  createIndex(indexName: string): SearchIndex {
    return this.client.initIndex(indexName);
  }

  async search<T>(
    indexName: string,
    query: string,
    requestOptions?: (RequestOptions & SearchOptions) | undefined
  ) {
    const index = this.createIndex(indexName);
    return index.search<T>(query, requestOptions);
  }

  async getObjects<T>(indexName: string, objectIDs: string[]) {
    const index = this.createIndex(indexName);
    return index.getObjects<T>(objectIDs);
  }
}

export const AlgoliaClient = new _AlgoliaClient();
export default AlgoliaClient;
