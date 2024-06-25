import fs from 'node:fs';
import { Pangu } from './core';

class NodePangu extends Pangu {
  spacingFile(path, callback = () => {}) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err);
          return callback(err);
        }

        const spacingData = this.spacing(data);
        resolve(spacingData);
        return callback(null, spacingData);
      });
    });
  }

  spacingFileSync(path) {
    return this.spacing(fs.readFileSync(path, 'utf8'));
  }
}

const pangu = new NodePangu();

export { pangu, NodePangu as Pangu };
export default pangu;
