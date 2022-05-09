import { Device } from "./device.js";

export function TV(model) {
  Device.call(this, model);
  this._volume = 0;
  this._chanel = 1;
}

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

TV.prototype.changeVolume = function (option) {
  if (this._state === "OFF") {
    alert("Turn the Device ON");
  } else if (option === "+" && this._volume < 100) {
    this._volume += 5;
  } else if (option === "-" && this._volume > 0) {
    this._volume -= 5;
  }
};

TV.prototype.changeChanel = function (chanel) {
  if (this._state === "OFF") {
    alert("Turn the Device ON");
  } else if (chanel === "^" && this._chanel <= 100) {
    this._chanel += 1;
  } else if (chanel === "v" && this._chanel >= 0) {
    this._chanel -= 1;
  }
};
