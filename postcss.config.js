// postcss.config.js
module.exports = {
  plugins: [
    "tailwindcss",
    ...(process.env.NODE_ENV === "production"
      ? [
          [
            "@fullhuman/postcss-purgecss",
            {
              content: ["./src/**/*.{js,jsx,ts,tsx}"],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
              whitelist: ["html", "body"],
            },
          ],
        ]
      : []),
    "postcss-preset-env",
  ],
};
