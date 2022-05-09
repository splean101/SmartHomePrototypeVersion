import { Device } from "./device.js";

export function TV(model) {
  Device.call(this, model);
  this._volume = 0;
  this._chanel = 1;
  this._source = "TV";
}

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

TV.prototype.changeVolume = function (option) {
  if (!this._state) {
    alert("Turn the Device ON");
  } else {
    this._volume = option;
  }
};

TV.prototype.changeChanel = function (chanel) {
  if (!this._state) {
    alert("Turn the Device ON");
  } else if (chanel === "+" && this._chanel < 12) {
    this._chanel += 1;
  } else if (chanel === "-" && this._chanel > 1) {
    this._chanel -= 1;
  }
};

TV.prototype.selectSource = function (source) {
  if (!source) {
    return this._source;
  } else if (source === "HDMI") {
    this._source = "HDMI";
  } else if (source === "TV") {
    this._source = "TV";
  } else if (source && (source !== "HDMI" || source !== "TV")) {
    alert("Please, choose the source - TV or HDMI");
  }
};

TV.prototype.muteVolume = function () {
  this._volume = 0;
};
