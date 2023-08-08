/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

export default {
  output: 'standalone',
  compiler: {
    relay: {
      src: './src',
      language: 'typescript',
      artifactDirectory: './src/__generated__',
    },
  },
}
