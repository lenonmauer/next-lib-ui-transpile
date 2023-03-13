module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['styled-jsx/babel', '@babel/plugin-transform-modules-commonjs'],
}
