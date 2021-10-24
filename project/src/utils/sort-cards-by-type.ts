import { SortOptions } from '../const';
import { OfferFullType } from '../types/offer';

export const sortCardsByType = (currentSortType: string, cardItems: OfferFullType[]): OfferFullType[] => {
  const sortedByDefault = [...cardItems];

  switch (currentSortType) {
    case SortOptions.ByPopular:
      return sortedByDefault;

    case SortOptions.ByPriceToHight:
      return [...cardItems].sort((a, b) => a.price - b.price);

    case SortOptions.ByPriceToLow:
      return [...cardItems].sort((a, b) => b.price - a.price);

    case SortOptions.ByRating:
      return [...cardItems].sort((a, b) => b.rating - a.rating);

    default:
      return sortedByDefault;
  }
};
