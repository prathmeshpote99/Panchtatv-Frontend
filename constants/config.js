const baseURLApi = process.env.NEXT_PUBLIC_API_URL;

export default {
  baseURLApi,
  hostApi: baseURLApi,
  remote: baseURLApi,
  isBackend: process.env.NEXT_PUBLIC_BACKEND,
  app: {
    colors: {
      dark: "#002B49",
      light: "#FFFFFF",
      sea: "#004472",
      sky: "#E9EBEF",
      wave: "#D1E7F6",
      rain: "#CCDDE9",
      middle: "#D7DFE6",
      black: "#13191D",
      salat: "#21AE8C",
    },
  },
};
