import CONFIG from '../../global/config';

const spinner = () => `
<div class="spinner-container">
  <div class="load-container">
    <div class="linespinner"></div>
  </div>
</div>
`;

const createRestoItem = (restaurant) => `
             <div class="card">
              <a href="#/detail/${restaurant.id}">
                <div class="ribbon">
                  <div class="ribbon-title">
                    <p>${restaurant.city}</p>
                    <p><i class="fa fa-star"></i><span>${
                      restaurant.rating
                    }</span></p>
                  </div>
                </div>
                <div class="card-head">  
                  <img class="card-img lazyload" src="./images/loading-300.jpg" alt="${
                    restaurant.name
                  }" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" />
                </div>
                <div class="card-content">
                  <h2 class="restaurant-name">${restaurant.name}</h2>
                  <p class="truncate">
                    ${restaurant.description}
                  </p>
                </div>
                </a>
              </div>
        `;

const createSkeletonItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card">
      <div class="card-head">
        <img class="card-img skeleton" />
      </div>
      <div class="card-content">
        <h2 class="skeleton skeleton-title"></h2>
        <p class="skeleton skeleton-text"></p>
        <p class="skeleton skeleton-text"></p>
        <p class="skeleton skeleton-text"></p>
      </div>
    </div>
    `;
  }
  return template;
};

const createRestoDetail = (detail) => `
      <div class="detail">
        <div class="detail-img" >
          <img src="./images/loading-400.jpg" data-src="${
            CONFIG.BASE_IMAGE_URL + detail.pictureId
          }" class="card-img lazyload" alt="${detail.name}" />
        </div>
        <div class="detail-desc">
          <li><i class="fa-solid fa-shop"></i>${detail.name}</li>
          <li><i class="fa fa-location-dot"></i>${detail.address}, ${
  detail.city
}</li>
          <li><i class="fa fa-star"></i>${detail.rating}</li>
           <li><p class="truncate2">Description: <br> ${
             detail.description
           }</p></li>
      <li>${detail.categories
        .map(
          (category) => `
            <span class="category">${category.name}</span>
          `
        )
        .join('')}
      </li>
        </div>
        <div class="detail-menu">
        <h2>Menu</h2>
        <div class="menus">
        <div class="food">
          <h3>Foods</h3>
          <ul>
            ${detail.menus.foods
              .map(
                (food) => `
                <li><p>${food.name}</p></li>
              `
              )
              .join('')}
          </ul>
        </div>
        <div class="drink">
          <h3>Drinks</h3>
          <ul>
             ${detail.menus.drinks
               .map(
                 (drink) => `
                <li><p>${drink.name}</p></li>
              `
               )
               .join('')}
          </ul>
        </div>
        </div>
      </div>
      </div>
     
    `;

const createRestoReview = (reviews) => `
     <div class="detail-review">
   ${reviews.customerReviews
     .map(
       (review) => `
         <div class="detail-review-item">
           <div class="review-header">
             <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
             <p class="review-date">${review.date}</p>
           </div>
           <div class="review-body">
             ${review.review}
           </div>
         </div>
       `
     )
     .join('')}
   </div>
    `;

const createLikeRestButtonTemp = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestButtonTemp = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestoFavItem = (favorite) => `
<a class="card-fav" href="#/detail/${favorite.id}">
<div class="favorite">
          <div class="favorite-img">
          <img class="card-img lazyload" alt="${
            favorite.name
          }" rc="./images/loading-300.jpg" data-src="${
  CONFIG.BASE_IMAGE_URL + favorite.pictureId
}" />
          </div>
          <div class="favorite-desc">
            <li><i class="fa-solid fa-shop"></i><span class="restaurant-name">${
              favorite.name
            }</span></li>
            <li>
              <i class="fa fa-location-dot"></i>${favorite.city}
            </li>
            <li><i class="fa fa-star"></i>${favorite.rating}</li>
            <li>
              <p class="truncate3">
                Description: <br />
                ${favorite.description}
              </p>
            </li>
          </div>
          </div>
          </a>
          `;

export {
  spinner,
  createRestoItem,
  createRestoDetail,
  createRestoReview,
  createLikeRestButtonTemp,
  createUnlikeRestButtonTemp,
  createRestoFavItem,
  createSkeletonItemTemplate,
};
