import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

export default {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    dir: path.join('dist', 'esm'),
  },
  plugins: [
    peerDepsExternal(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /node_modules/,
      presets: [
        ['@babel/preset-env', { targets: 'defaults' }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    }),
  ],
};
