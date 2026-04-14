/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitir carga de imágenes externas (foto de perfil en Google Photos)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },
};

export default nextConfig;
