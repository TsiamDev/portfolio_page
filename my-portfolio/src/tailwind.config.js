// tailwind.config.js
{
  theme: {
    clipPath: {
        mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem))",
    },
    plugins: [
        require('tailwind-clip-path'),
    ],
}