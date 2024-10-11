/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(mp3|wav|ogg)$/,
          type: 'asset/resource',
        });
        return config;
    },
};


  

export default nextConfig;
