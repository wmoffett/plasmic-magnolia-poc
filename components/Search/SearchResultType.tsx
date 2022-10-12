interface result {
  value: string;
  matchLevel: string;
  matchedWords?: string[];
}
export interface SearchResultProps {
  images: Array<string>;
  title: string;
  address: string;
  reviewCount: number;
  averageRating: number;
  price: number;
  onClick?: () => void;
}

export interface SearchResultInterface {
  id: string;
  legacyId: string;
  slug: string;
  name: string;
  enhancedListing: boolean;
  reviewCount: number;
  hidePricing: boolean;
  averageRating: number;
  images: string[];
  locationCategory: string;
  phoneNumber: string;
  description: string;
  address: {
    id: string;
    locationId: string;
    legacyId: string;
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
    formattedAddress: string;
    zipCode: string;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
  };
  _geoloc: {
    lat: number;
    lng: number;
  };
  services: {
    costs: {
      currency: string;
      startingPriceCents: number;
    };
    category: {
      id: number;
      name: string;
    };
  }[];
  _tags: string[];
  objectID: number;
  _snippetResult: {
    id: result;
    legacyId: result;
    slug: result;
    name: result;
    reviewCount: result;
    averageRating: result;
    images: result[];
    locationCategory: result;
    phoneNumber: result;
    description: result;
    address: {
      id: result;
      locationId: result;
      legacyId: result;
      street: result;
      number: result;
      city: result;
      state: result;
      country: result;
      latitude: result;
      longitude: result;
      formattedAddress: result;
      zipCode: result;
      createdAt: result;
    };
    _geoloc: {
      lat: result;
      lng: result;
    };
    services: {
      costs: {
        currency: result;
        startingPriceCents: result;
      };
      category: {
        id: result;
        name: result;
      };
    }[];
    _tags: result[];
  };
  _highlightResult: {
    id: result;
    slug: result;
    name: result;
    locationCategory: result;
    address: {
      city: result;
      state: result;
      country: result;
    };
    services: {
      category: {
        id: result;
        name: result;
      };
    }[];
  };
  _rankingInfo: {
    nbTypos: number;
    firstMatchedWord: number;
    proximityDistance: number;
    userScore: number;
    geoDistance: number;
    geoPrecision: number;
    nbExactWords: number;
    words: number;
    filters: number;
  };
}
