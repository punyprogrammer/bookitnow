/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://amardeepganguly:amardeep123@cluster0.keg5r.mongodb.net/bookitlatest?retryWrites=true&w=majority",
    CLOUDINARY_CLOUD_NAME: "dpnh21ffn",
    CLOUDINARY_API_KEY: "233262894323685",
    CLOUDINARY_SECRET_KEY: "6m_P59XbeuThwCj-39gs3TFhO0s",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
