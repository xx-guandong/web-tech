/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

export default {
  output: 'standalone',
  compiler: {
    relay: {
      src: './',
      language: 'typescript',
      artifactDirectory: './__generated__',
    },
  },
}
