const baseUrl = process.env.NEXT_PUBLIC_CANARIO_HOST

// shamlessly taken from canario and altered slightly for this POC
// was LocationPromotion
type Promotion = {
  id: string;
  promotionText: string;
  startsAt: string;
  endsAt: string;
  visibleOnlyToFa: boolean;
};

// LocationReview
type Review = {
  id: string;
  createdAt: string;
  rating: number;
  title: string;
  content: string;
  authorUrl: string;
  authorName: string;
  providerResponse: string;
};

// GetLocationByParamLocationAccommodationsResponse
type Accommodations = {
  id: string;
  accommodationType: {
    name: string;
  };
  title: string | null;
  description: string | null;
  startingPriceCents: number | null;
  priceCurrency: string | null;
  bedCount: number;
  bathroomCount: number;
  squareFeetSize: string | null;
  features: string[];
  images: { position: number; url: string; description: string | null }[];
};
export type Provider = {
  id: string;
  legacyId: string;
  slug: string;
  enhancedListing: boolean;
  hidePricing: boolean;
  averageRating?: number;
  name: string;
  description: string;
  phoneNumber: string;
  websiteURL: string;
  photos: {
    url: string;
  }[];
  category: {
    name: string;
  };
  address: {
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
  };
  services: {
    id: string;
    costs: {
      currency: string;
      startingPriceCents: number;
    };
    category: {
      name: string;
      description: string;
      imageURL: string;
    };
    // accommodations: GetLocationByParamLocationAccommodationsResponse[];
    // amenities: GetLocationByParamLocationAmenitiesResponse[];
  }[];
  // amenities: GetLocationByParamLocationAmenitiesResponse[];
  accommodations: Accommodations[];
  reviews: Review[];
  totalReviewCount: number;
  caringStars: Record<string, number>[];
  starsBySection: {
    overall: number;
    health: number;
    quality: number;
    staff: number;
  };
  promotions: Promotion[];
};

export interface GetProviderProps {
  slug: string;
 }

export async function getProvider(
  props: GetProviderProps
): Promise<Provider | null > {

  const { slug } = props;

  const response = await fetch(`${baseUrl}/api/locations/${slug}`);

  if (response.status >= 400) {
    return null;
  }

  return await response.json();
}