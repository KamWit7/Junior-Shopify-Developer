import { qs, imgs } from "./utils.js"

const vector = qs(".wrapper--flex")
const imgMain = qs(".img-main")
let counter = 0

vector.addEventListener("click", () => {
  nextImg(imgMain)
})

const nextImg = (imgToChange) => {
  setTimeout(() => {
    imgToChange.classList.add("img-main--next-img")
  }, 0)

  setTimeout(() => {
    if (counter < imgs.length) imgToChange.src = imgs[counter].src
    else {
      imgToChange.src = imgs[0].src
      counter = 0
    }
  }, 450)

  setTimeout(() => {
    imgToChange.classList.remove("img-main--next-img")
    counter++
  }, 500)
}

export default nextImg
