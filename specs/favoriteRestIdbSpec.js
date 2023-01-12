import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestContract";
import FavRestaurantIdb from '../src/scripts/data/therest-fav-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestaurantIdb.getAllRestaurants()).forEach(async (data) => {
      await FavRestaurantIdb.deleteRestaurant(data.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavRestaurantIdb);
});