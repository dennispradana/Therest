import UrlParser from '../../routes/url-parser';
import FavRestaurantIdb from '../../data/therest-fav-idb';
import TherestSource from '../../data/therest-source';
import {
  createRestoDetail,
  createRestoReview,
  spinner,
} from '../templates/template-resto';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewPost from '../../utils/review';

const Detail = {
  async render() {
    return `
    <h1 class= "title-content">Detail Restaurant</h1>
    <div id="loading"></div>
      <section class="content">
        <div id="DatailRestaurant"></div>
        <div class="rev-form">
        <h3>Review</h3>
        <div id="CustReviews"></div>
        <div class="like" id="likeButtonContainer"></div>
        <form>
          <div class="rev-item">
            <label for="inputName">Name</label>
            <input name="inputName" type="text" class="form-input" id="inputName" />
          </div>
          <div class="rev-item">
            <label for="inputReview">Review</label>
            <input name="inputReview" type="text" class="form-input" id="inputReview" />
          </div>
          <button id="submit-review" type="submit" class="btn">Submit</button>
        </form>
        </div>
      </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#DatailRestaurant');
    const detailReview = document.querySelector('#CustReviews');
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.content');
    loading.innerHTML = spinner();
    main.style.display = 'none';

    try {
      const data = await TherestSource.detailRestaurant(url.id);
      detailContainer.innerHTML += createRestoDetail(data);
      detailReview.innerHTML += createRestoReview(data);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavRestaurantIdb,
        data: {
          id: data.id,
          name: data.name,
          city: data.city,
          rating: data.rating,
          pictureId: data.pictureId,
          description: data.description,
        },
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      detailContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
      main.style.display = 'block';
      loading.style.display = 'none';
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        ReviewPost(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
