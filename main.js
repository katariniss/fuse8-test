(function () {
  const seeMoreButton = document.querySelector('.ads__button');

  seeMoreButton.addEventListener('click', function () {
    const hiddenAds = document.querySelectorAll('.ads__item--hidden');
    const hiddenAdsArray = Array.from(hiddenAds);

    const firstSixHiddenAds = hiddenAdsArray.slice(0, 6);

    for (let i = 0; i < firstSixHiddenAds.length; i++) {
      const hiddenAd = firstSixHiddenAds[i];

      hiddenAd.classList.remove('ads__item--hidden');
    }
  });
})();