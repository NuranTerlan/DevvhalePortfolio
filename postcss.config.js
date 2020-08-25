module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--t": "(max-width: 1000px)" },
        },
        {
          customMedia: { "--m": "(max-width: 700px)" },
        },
        {
          customMedia: { "--d": "(min-width: 1270px)" },
        },
      ],
    },
  },
};
