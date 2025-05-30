import * as migration_20250530_214108 from './20250530_214108';

export const migrations = [
  {
    up: migration_20250530_214108.up,
    down: migration_20250530_214108.down,
    name: '20250530_214108'
  },
];
