import { name } from '../package.json';

export default {
  schema: {
    parcelLocation: {
      title: 'Parcel Location',
      description: 'Specify whether to use global or local `parcel` installation',
      type: 'string',
      default: 'local',
      enum: [
        {
          value: 'local',
          description: 'Local Parcel'
        },
        {
          value: 'global',
          description: 'Global Parcel'
        }
      ],
      order: 0
    },
    customBuildArguments: {
      title: 'Build Arguments',
      description: 'Set custom arguments for `parcel build`',
      type: 'array',
      default: [],
      items: {
        type: [
          'string',
          'integer'
        ]
      },
      order: 1
    },
    customServeArguments: {
      title: 'Serve Arguments',
      description: 'Set custom arguments for `parcel serve`',
      type: 'array',
      default: [],
      items: {
        type: [
          'string',
          'integer'
        ]
      },
      order: 2
    },
    customWatchArguments: {
      title: 'Watch Arguments',
      description: 'Set custom arguments for `parcel watch`',
      type: 'array',
      default: [],
      items: {
        type: [
          'string',
          'integer'
        ]
      },
      order: 3
    },
    manageDependencies: {
      title: 'Manage Dependencies',
      description: 'When enabled, third-party dependencies will be installed automatically',
      type: 'boolean',
      default: true,
      order: 4
    },
    alwaysEligible: {
      title: 'Always Eligible',
      description: 'The build provider will be available in your project, even when not eligible',
      type: 'boolean',
      default: false,
      order: 5
    }
  },

  get(key = '') {
    return key?.length ? atom.config.get(`${name}.${key}`) : atom.config.get(`${name}`);
  },

  migrate(oldKey, newKey) {
    if (!atom.config.get(`${name}.${oldKey}`) || atom.config.get(`${name}.${newKey}`)) {
      return;
    }

    try {
      atom.config.set(`${name}.${newKey}`, atom.config.get(`${name}.${oldKey}`));
    } catch (error) {
      atom.notifications.addWarning(`Failed to migrate configuration, see console for details`);

      return;
    }

    atom.config.unset(`${name}.${oldKey}`);
  },

  unset(key = '') {
    const unsetKey = key?.length ? `${name}.${key}` : name;

    atom.config.unset(unsetKey);
  },

  async open(options = {}) {
    options = {
      pending: true,
      searchAllPanes: true,
      ...options,
    };

    await atom.workspace.open(`atom://config/packages/${name}`, options);
  }
}
