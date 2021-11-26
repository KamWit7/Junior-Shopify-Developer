const create = (element) => document.createElement(element)
const qs = (query) => document.querySelector(query)
const qsa = (query) => document.querySelectorAll(query)

const images = qsa("img")
const lightbox = create("div")
const close = create("div")
const bigImg = create("img")
const wrapper = create("div")

lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const ifHaveChild = (selector) => selector.firstChild

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show")
    bigImg.classList.add("big-img")
    wrapper.classList.add("wrapper")
    close.classList.add("close")

    bigImg.src = "./src/images/main-meeting.jpg"
    bigImg.alt = img.alt

    while (ifHaveChild(lightbox)) {
      lightbox.firstElementChild.remove()
    }

    bigImg.appendChild(close)
    wrapper.appendChild(close)
    wrapper.appendChild(bigImg)
    lightbox.appendChild(wrapper)
  })
})

const closeLightbox = (e) => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove("show")
}

lightbox.addEventListener("click", closeLightbox)
close.addEventListener("click", closeLightbox)
