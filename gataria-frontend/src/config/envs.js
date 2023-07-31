const prod = {
  catalogAPIurl: "http://gataria.example/catalog",
  imagesAPIurl: "http://gataria.example/images",
};

const dev = {
  catalogAPIurl: "http://localhost:3010/catalog",
  imagesAPIurl: "http://localhost:3020/images",
};

const config =
  process.env.REACT_APP_STAGE === "prod"
    ? prod
    : process.env.REACT_APP_STAGE === "dev"
    ? dev
    : dev;

export default {
  ...config,
};
