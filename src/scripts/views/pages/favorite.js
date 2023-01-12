import FavRestaurantIdb from '../../data/therest-fav-idb';
import { createRestoFavItem, spinner } from '../templates/template-resto';

const Favorite = {
  async render() {
    return `
    <h1 class= "title-content">Your Favorite Restaurants</h1>
        <div id="loading"></div>
         <section class="content">
            <div id="fav-resto"></div>
        </section>
        `;
  },
  async afterRender() {
    const listContainer = document.querySelector('#fav-resto');
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.content');
    loading.innerHTML = spinner();
    main.style.display = 'none';

    try {
      const data = await FavRestaurantIdb.getAllRestaurants();
      if (data.length === 0) {
        listContainer.innerHTML = `
          You don't have any Favorite Cafe or Restaurant
        `;
      }
      data.forEach((restaurant) => {
        listContainer.innerHTML += createRestoFavItem(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
  },
};

export default Favorite;
