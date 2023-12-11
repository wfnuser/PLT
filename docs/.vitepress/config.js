import mathjax3 from "markdown-it-mathjax3";

module.exports = {
  title: "编程语言理论完全笔记",
  base: "/plt/",
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  themeConfig: {
    nav: [
      {
        text: "类型系统",
        link: "/type-systems/the-language-of-type-systems",
      },
      { text: "软件基础", link: "/software-foundation/" },
      { text: "编程语言", link: "/programming-languages/" },
      { text: "Github", link: "https://github.com/wfnuser/plt" },
    ],
    sidebar: {
      "/": [
        {
          text: "类型系统 - Luca Cardelli",
          link: "/type-systems/the-language-of-type-systems",
        },
        { text: "软件基础(idris)", link: "/software-foundation/" },
        { text: "编程语言 - UW", link: "/programming-languages/" },
      ],
      "/software-foundation/": [
        {
          text: "软件基础",
          link: "/software-foundation/index",
        },
      ],
      "/programming-languages/": [
        {
          text: "编程语言 - UW",
          link: "/programming-languages/index",
        },
      ],
      "/type-systems/": [
        {
          text: "类型系统的语言",
          link: "/type-systems/the-language-of-type-systems",
        },
      ],
    },
  },
};
