/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    MONGO_URI: "mongodb+srv://prabh2508:prabh2508@cluster0.skvjeds.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
