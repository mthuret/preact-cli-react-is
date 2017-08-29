import { DefinePlugin } from 'webpack';

export default function(config, env, helpers) {
  config.node = {
    process: 'mock',
  };
}
