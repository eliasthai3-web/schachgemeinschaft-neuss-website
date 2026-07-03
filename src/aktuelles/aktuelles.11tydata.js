const path = require("node:path");

module.exports = {
  layout: "layouts/news.njk",
  eleventyComputed: {
    permalink: (data) => {
      const filename = path.basename(data.page.inputPath, path.extname(data.page.inputPath));
      return `/aktuelles/${filename}/index.html`;
    }
  }
};
