import { myHouse } from "./home.js";
import { TV } from "./tv.js";
export function renderTV(model) {
  var tv = new TV(model);
  myHouse.addTV(tv);

  var tvDiv = document.createElement("div");
  tvDiv.classList.add("tv");

  var label1 = document.createElement("label");
  label1.textContent = "Model";

  var model = document.createElement("input");
  model.type = "text";
  model.placeholder = "Enter the model of TV";
  model.value = tv.Model();
  model.addEventListener("change", function () {
    tv.Model(model.value);
  });

  var state = document.createElement("div");
  state.classList.add("half-left");
  state.textContent = tv.getState();

  var onBtn = document.createElement("button");
  onBtn.type = "button";
  onBtn.textContent = "On";
  onBtn.addEventListener("click", function () {
    tv.on();
    return (state.textContent = tv.getState());
  });

  var offBtn = document.createElement("button");
  offBtn.type = "button";
  offBtn.textContent = "Off";
  offBtn.addEventListener("click", function () {
    tv.off();
    return (state.textContent = tv.getState());
  });

  var volume = document.createElement("span");
  volume.textContent = "Volume ";

  var range = document.createElement("input");
  range.type = "range";
  range.name = "volume";
  range.value = 0;
  range.step = 5;

  var volumeValue = document.createElement("span");
  volumeValue.textContent = "0";

  range.addEventListener("change", function () {
    var vol = range.value;
    tv.changeVolume(vol);
    volumeValue.textContent = tv._volume;
  });

  var chanel = document.createElement("span");
  chanel.textContent = tv._chanel;

  var delButton = document.createElement("button");
  delButton.type = "button";
  delButton.className = "del";
  delButton.textContent = "Delete this Device";
  delButton.addEventListener("click", function () {
    document.body.removeChild(tvDiv);
  });

  var volumeWrapper = document.createElement("div");
  volumeWrapper.classList.add("half-left");
  volumeWrapper.appendChild(volume);
  volumeWrapper.appendChild(volumeValue);
  volumeWrapper.appendChild(range);

  var br1 = document.createElement("br");
  var br2 = document.createElement("br");

  tvDiv.appendChild(label1);
  tvDiv.appendChild(model);
  tvDiv.appendChild(state);
  tvDiv.appendChild(onBtn);
  tvDiv.appendChild(offBtn);
  tvDiv.appendChild(br1);
  tvDiv.appendChild(volumeWrapper);
  tvDiv.appendChild(chanel);
  tvDiv.appendChild(br2);
  tvDiv.appendChild(delButton);
  document.body.appendChild(tvDiv);
}
