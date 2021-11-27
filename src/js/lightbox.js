import nextImg from "./script.js"
import { create, qs, qsa } from "./utils.js"

const images = qsa("img")
const lightbox = create("div")
const close = create("div")
const closeWrapper = create("div")
const bigImg = create("img")
const wrapper = create("div")
const wrapperFlex = create("div")

const closeLightbox = (e) => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove("show")
}

const ifHaveChild = (selector) => selector.firstChild

lightbox.id = "lightbox"
document.body.appendChild(lightbox)

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show")
    bigImg.classList.add("big-img")
    wrapper.classList.add("wrapper")
    close.classList.add("close")
    closeWrapper.classList.add("close--wrapper")
    wrapperFlex.classList.add(
      "wrapper--flex",
      "wrapper--flex__lightbox",
      "wrapper--size-circle",
      "transition",
      "transition__list"
    )

    bigImg.src = "./src/images/main-meeting.jpg"
    bigImg.alt = img.alt

    while (ifHaveChild(lightbox)) {
      lightbox.firstElementChild.remove()
    }

    wrapperFlex.innerHTML = `<svg class="svg-vector transition transition__svg">
                              <use href="./src/svg/symbol-defs.svg#icon-vector"></use>
                            </svg>`

    closeWrapper.appendChild(close)
    wrapper.appendChild(wrapperFlex)
    wrapper.appendChild(closeWrapper)
    wrapper.appendChild(bigImg)
    lightbox.appendChild(wrapper)

    const vector = qs(".wrapper--flex__lightbox")
    vector.addEventListener("click", () => nextImg(bigImg))
  })
})

lightbox.addEventListener("click", closeLightbox)
close.addEventListener("click", closeLightbox)
