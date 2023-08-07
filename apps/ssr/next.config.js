/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  compiler: {
    relay: {
      src: './',
      language: 'typescript',
      artifactDirectory: './__generated__',
    },
  },
}
