(function () {
  const NUMBER_OF_ADS_TO_SHOW = 6;

  const seeMoreButton = document.querySelector('.ads__button');

  seeMoreButton.addEventListener('click', onSeeMoreClick);

  function onSeeMoreClick() {
    const hiddenAds = document.querySelectorAll('.ads__item--hidden');
    const hiddenAdsArray = Array.from(hiddenAds);

    const firstSixHiddenAds = hiddenAdsArray.slice(0, NUMBER_OF_ADS_TO_SHOW);

    for (let i = 0; i < firstSixHiddenAds.length; i++) {
      const hiddenAd = firstSixHiddenAds[i];

      hiddenAd.classList.remove('ads__item--hidden');
    }

    if (hiddenAdsArray.length <= NUMBER_OF_ADS_TO_SHOW) {
      seeMoreButton.classList.add('ads__button--hidden');
    }
  }
})();