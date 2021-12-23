import Config from './config';
import { EventEmitter } from 'events';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import Logger from './log';
import { name } from '../package.json';
import which from 'which';

const schema = Config.schema;
export { schema as config };

export function provideBuilder() {
  return class ParcelProvider extends EventEmitter {
    constructor(cwd) {
      super();
      this.cwd = cwd;
      atom.config.observe('build-parcel.customBuildArguments', () => this.emit('refresh'));
      atom.config.observe('build-parcel.customPreviewArguments', () => this.emit('refresh'));
      atom.config.observe('build-parcel.customServeArguments', () => this.emit('refresh'));
      atom.config.observe('build-parcel.alwayEligible', () => this.emit('refresh'));
    }

    getNiceName() {
      return 'Parcel';
    }

    isEligible() {
      if (Config.get('alwaysEligible') === true) {
        Logger.log('Always eligible');
        return true;
      }

      if (which.sync(this.getExec(), { nothrow: true })) {
        Logger.log('Build provider is eligible');
        return true;
      }

      Logger.error('Build provider isn\'t eligible');
      return false;
    }

    getExec() {
      const parcelLocation = Config.get('parcelLocation');
      return parcelLocation === 'local' ? 'npx' : 'parcel';
    }

    settings() {
      const parcelLocation = Config.get('parcelLocation');
      const exec = this.getExec();

      return [
        {
          name: 'Parcel: build',
          exec: exec,
          args: (parcelLocation === 'local'
            ? ['parcel-cli', 'build', Config.get('customBuildArguments')]
            : ['build', Config.get('customBuildArguments')]
          ),
          cwd: '{PROJECT_PATH}',
          sh: false,
          atomCommandName: 'parcel:build'
        },
        {
          name: 'Parcel: serve',
          exec: exec,
          args: (parcelLocation === 'local'
            ? ['parcel-cli', 'serve', Config.get('customServeArguments')]
            : ['serve', Config.get('customServeArguments')]
          ),
          cwd: '{PROJECT_PATH}',
          sh: false,
          atomCommandName: 'parcel:serve'
        },
        {
          name: 'Parcel: watch',
          exec: exec,
          args: (parcelLocation === 'local'
            ? ['parcel-cli', 'watch', Config.get('customWatchArguments')]
            : ['watch', Config.get('customServeArguments')]
          ),
          cwd: '{PROJECT_PATH}',
          sh: false,
          atomCommandName: 'parcel:watch'
        }
      ];
    }
  };
}

export function activate() {
  Logger.log('Activating package');

  // This package depends on preview, make sure it's installed
  if (Config.get('manageDependencies') === true) {
    satisfyDependencies(name);
  }
}

export function deactivate() {
  Logger.log('Deactivating package');
}
