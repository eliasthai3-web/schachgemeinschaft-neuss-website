module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/dokumente": "dokumente" });
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });

  eleventyConfig.addCollection("aktuelles", (collectionApi) => {
    const timestamp = (item) => {
      const value = item.data?.date ?? item.date;
      const parsed = new Date(value).getTime();
      return Number.isNaN(parsed) ? 0 : parsed;
    };

    return collectionApi
      .getFilteredByGlob("src/aktuelles/*.md")
      .sort((a, b) => timestamp(b) - timestamp(a));
  });

  eleventyConfig.addFilter("dateDe", (value) => {
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(value));
  });

  eleventyConfig.addFilter("dateIso", (value) => {
    return new Date(value).toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
