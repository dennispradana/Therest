import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavRestaurantIdb from '../../src/scripts/data/therest-fav-idb';

const createLikeButtonPresenterWithRestaurant = async (data) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavRestaurantIdb,
        data
    });
};

export {createLikeButtonPresenterWithRestaurant};