(function () {
  'use strict';

  /**
   *  Check if the document is loaded completely
   */
  var domReady = function domReady(callback) {
    // if already rendered
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', callback) : callback();
  };

  /**
   * Nav
   *
   * https://stackoverflow.com/questions/3338642/updating-address-bar-with-new-url-without-hash-or-reloading-the-page
   */
  var main = document.getElementById('main');

  var Nav = function Nav() {
    // Nav
    var menuLink = document.querySelectorAll('.menu__link');

    if (menuLink) {
      menuLink.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          menuLink.forEach(function (el) {
            el.classList.remove('active');
          });
          el.classList.add('active');
          window.history.pushState('', el.textContent, el.pathname);
        });
      });
    } // Logo


    var headerLogo = document.querySelector('.header__logo');

    if (headerLogo) {
      headerLogo.addEventListener('click', function (e) {
        e.preventDefault();
        window.history.pushState('', headerLogo.textContent, headerLogo.pathname);

        if (menuLink) {
          menuLink.forEach(function (el) {
            el.classList.remove('active');
          });
        }

        location.reload();
      });
    } // Posts


    var postLink = document.querySelectorAll('.post-link');

    if (postLink) {
      postLink.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          if (menuLink) {
            menuLink.forEach(function (el) {
              el.classList.remove('active');
            });
          }

          window.history.pushState('', el.textContent, el.pathname); // Fetch Data

          fetch("/content/json/".concat(el.pathname, ".json")).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            main.innerHTML = "\n            <article class=\"article\">\n              <div class=\"container\">\n                <header class=\"article__header\">\n                  <h1 className=\"article__title\">".concat(data.title, "</h1>\n                </header>\n                <div className=\"post\">\n                  ").concat(data.body, "\n                </div>\n              </div>\n            </article>");
          });
        });
      });
    }
  };

  /**
   * Load methods, helpers, polyfills etc.
   *
   */
  /**
   * The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
   * without waiting for stylesheets, images, and subframes to finish loading.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
   */

  domReady(function () {
    Nav();
  });

}());
