const create = (element) => document.createElement(element)
const qs = (query) => document.querySelector(query)
const qsa = (query) => document.querySelectorAll(query)
const log = (data) => console.log(data)

const imgs = [
  { src: "./src/images/cat-with-glasses.jpg" },
  { src: "./src/images/main-meeting.jpg" },
  { src: "./src/images/cat-with-glasses.jpg" },
  { src: "./src/images/main-meeting.jpg" },
  { src: "https://pethealth.vn/wp-content/uploads/2020/02/shiba_1.jpg" },
]

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

export { create, qs, qsa, log, imgs, data }
