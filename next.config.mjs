/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repositoryBasePath = "/pangasinan-heritage-showcase";

const nextConfig = {
  // GitHub Pages hosts this project as /<repository-name>.
  basePath: isProduction ? repositoryBasePath : "",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
