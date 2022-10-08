const baseUrl = process.env.NEXT_PUBLIC_CANARIO_HOST

// shamlessly taken from canario and altered slightly for this POC
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
  // accommodations: GetLocationByParamLocationAccommodationsResponse[];
  // reviews: LocationReview[];
  totalReviewCount: number;
  caringStars: Record<string, number>[];
  starsBySection: {
    overall: number;
    health: number;
    quality: number;
    staff: number;
  };
  // promotions: LocationPromotion[];
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