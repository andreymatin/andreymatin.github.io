/**
 * Nav
 *
 * https://stackoverflow.com/questions/3338642/updating-address-bar-with-new-url-without-hash-or-reloading-the-page
 */

const main = document.getElementById('main')

const Nav = () => {
  // Nav
  const menuLink = document.querySelectorAll('.menu__link')
  if (menuLink) {
    menuLink.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault()

        menuLink.forEach((el) => {
          el.classList.remove('active')
        })

        el.classList.add('active')
        window.history.pushState('', el.textContent, el.pathname)
      })
    })
  }

  // Logo
  const headerLogo = document.querySelector('.header__logo')
  if (headerLogo) {
    headerLogo.addEventListener('click', (e) => {
      e.preventDefault()
      window.history.pushState('', headerLogo.textContent, headerLogo.pathname)

      if (menuLink) {
        menuLink.forEach((el) => {
          el.classList.remove('active')
        })
      }

      location.reload()
    })
  }

  // Posts
  const postLink = document.querySelectorAll('.post-link')
  if (postLink) {
    postLink.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault()

        if (menuLink) {
          menuLink.forEach((el) => {
            el.classList.remove('active')
          })
        }

        window.history.pushState('', el.textContent, el.pathname)

        // Fetch Data
        fetch(`/content/json/${el.pathname}.json`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)

            main.innerHTML = `
            <article class="article">
              <div class="container">
                <header class="article__header">
                  <h1 className="article__title">${data.title}</h1>
                </header>
                <div className="post">
                  ${data.body}
                </div>
              </div>
            </article>`
          })
      })
    })
  }
}

export default Nav
