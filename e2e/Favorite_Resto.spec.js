
const assert = require('assert');

Feature('Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant',  ({ I }) => {
     I.seeElement('#fav-resto');
     I.see("You don't have any Favorite Cafe or Restaurant", '#fav-resto');
});

Scenario('liking one restaurant', async ({ I }) =>{
    I.see("You don't have any Favorite Cafe or Restaurant", '#fav-resto');

    I.amOnPage('/');
    I.wait(5);

    I.seeElement('.card a');

    const firstCard = locate('.restaurant-name').first();
    const firstCardTitle = await I.grabTextFrom(firstCard);
    I.click(firstCard);

    I.wait(5);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-fav');
    const likedCardTitle = await I.grabTextFrom('.restaurant-name');

    assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) =>{
    I.amOnPage('/');
    I.wait(5);

    I.seeElement('.card a');

    const firstCard = locate('.restaurant-name').first();
    const firstCardTitle = await I.grabTextFrom(firstCard);
    I.click(firstCard);
    I.wait(5);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-fav');
    const likedCard = locate('.card-fav').first();
    const likedCardTitle = await I.grabTextFrom('.restaurant-name');

    assert.strictEqual(firstCardTitle, likedCardTitle);

    I.click(likedCard);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('#fav-resto');
    I.see("You don't have any Favorite Cafe or Restaurant", '#fav-resto');
});


Scenario('Customer review', async ({ I }) =>{
    I.amOnPage('/');
    I.wait(5);

    I.seeElement('.card a');

    I.seeElement('.card a');
    I.click(locate('.card a').first());

    I.seeElement('.rev-form form');
    I.wait(5);

    const textReview = 'Review from E2E testing';
    I.fillField('inputName', 'Dennis Pradana');
    I.fillField('inputReview', textReview);

    I.click('#submit-review');

    const lastReview = locate('.review-body').last();
    const textLastReview = await I.grabTextFrom(lastReview);

    assert.strictEqual(textReview, textLastReview);
});
