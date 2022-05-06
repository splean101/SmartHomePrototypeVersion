import { Device } from './device.js'

export function AirConditioner (model) {
    Device.call(this, model);
    this._temp = 20;
};

AirConditioner.prototype = Object.create(Device.prototype);
AirConditioner.prototype.constructor = AirConditioner;

AirConditioner.prototype.increaseTemp = function () {
    if (this._temp >= 15 && this._temp < 28) {
        if (this._state === 'OFF') {
            alert('Turn on the Air Conditioner');
        } else {
            ++this._temp;
        };
    };
};

AirConditioner.prototype.decreaseTemp = function () {
    if (this._temp > 15 && this._temp <= 28) {
        if (this._state === 'OFF') {
            alert('Turn on the Air Conditioner');
        } else {
            --this._temp;
        };
    };
};