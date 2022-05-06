import { Device } from './device.js'

export function TV (model) {
    Device.call(this, model);
    this._power = 0;
};

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;