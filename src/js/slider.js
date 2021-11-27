import { qs, qsa, data } from "./utils.js"

const descriptions = [...qsa(".about__description")]
const titles = [...qsa(".about__title")]
const slider = [...qsa(".slider__indicator")]
const loading = qs(".about-list__loading")
const loadingCircle = qs(".loading-circle")

const ifHaveClass = (cls, selector) => selector.classList.contains(cls)

const resetBgColor = (curentIdx, slider) => {
  slider
    .filter((btn, idx, array) => array.indexOf(btn) != curentIdx)
    .forEach((btn) => (btn.style.backgroundColor = "#c4c4c4"))
}

slider.forEach((btn, index) => {
  index === 1 ? (btn.style.backgroundColor = "#000") : ""

  btn.addEventListener("click", () => {
    if (
      ifHaveClass("about-list__loading--bg-transparetn", loading) ||
      ifHaveClass("loading-circle--hide", loadingCircle)
    ) {
      loading.classList.remove("about-list__loading--bg-transparetn")
      loadingCircle.classList.remove("loading-circle--hide")
    }
    setTimeout(() => {
      loading.classList.add("about-list__loading--bg-transparetn")
      loadingCircle.classList.add("loading-circle--hide")
    }, 350)

    setTimeout(() => {
      descriptions.forEach((p, idx) => {
        p.innerText = data[index][idx].description
      })

      titles.forEach((title, idx) => {
        title.innerText = data[index][idx].title
      })

      btn.style.backgroundColor = "#000"

      resetBgColor(index, slider)
    }, 350)
  })
})
