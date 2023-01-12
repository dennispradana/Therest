import TherestSource from '../../data/therest-source';
import {
  createRestoItem,
  spinner,
  createSkeletonItemTemplate,
} from '../templates/template-resto';

const Home = {
  async render() {
    return `
     <h1 class="title-content">Explore Restaurant</h1>
    <div class="list" id="loading"></div>
    <section class="content">
            <div class="list" id="listRest">
            </div>
        </section>
        `;
  },
  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.content');
    loading.innerHTML = createSkeletonItemTemplate(20);
    main.style.display = 'none';
    const listContainer = document.querySelector('#listRest');

    try {
      const data = await TherestSource.listRestaurant();
      data.forEach((restaurant) => {
        listContainer.innerHTML += createRestoItem(restaurant);
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
export default Home;
