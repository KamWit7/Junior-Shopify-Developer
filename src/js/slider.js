const qs = (query) => document.querySelector(query)
const qsa = (query) => document.querySelectorAll(query)

const descriptions = [...qsa(".about__description")]
const titles = [...qsa(".about__title")]
const slider = [...qsa(".slider__indicator")]

slider.forEach((btn, index) => {
  index === 1 ? (btn.style.backgroundColor = "#000") : ""

    btn.addEventListener("click", (event) => {
      
    //  setTimeout()   
    descriptions.forEach((p, idx) => {
      p.innerText = data[index][idx].description
    })

    titles.forEach((title, idx) => {
      title.innerText = data[index][idx].title
    })

    btn.style.backgroundColor = "#000"

    resetColor(index, slider)
  })
})

const resetColor = (curentIdx, slider) => {
  slider
    .filter((btn, idx, array) => array.indexOf(btn) != curentIdx)
    .forEach((btn) => (btn.style.backgroundColor = "#c4c4c4"))
}

const data = [
  [
    {
      description:
        "👑 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum 🙂",
    },
    {
      description:
        "👑 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum 😄",
    },
    {
      description:
        "👑 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum 😂",
    },
  ],
  [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum ",
    },
  ],
  [
    {
      description:
        "🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum 😬",
    },
    {
      description:
        "🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum 🤨",
    },
    {
      description:
        "🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      title: "Lorem ipsum 🤓",
    },
  ],
]
