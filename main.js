(function () {
    var seeMoreButton = document.querySelector('.ads__button');
    var advertisements = document.querySelectorAll('.ads__item');
  
    seeMoreButton.addEventListener('click', function () {
      for (let i = 0; i < advertisements.length; i++) {
        const currentAdvertisement = advertisements[i];

        if (currentAdvertisement.classList.contains('ads__item--hidden')) {
          currentAdvertisement.classList.remove('ads__item--hidden');
      }
      }
    });
  })();