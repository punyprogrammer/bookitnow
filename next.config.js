/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
MONGO_URI:'mongodb+srv://amardeepganguly:amardeep123@cluster0.keg5r.mongodb.net/bookit?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig