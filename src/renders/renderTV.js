import { myHouse } from "../home.js";
import { TV } from "../tv.js";
export function renderTV(model) {
  var tv = new TV(model);
  myHouse.addTV(tv);

  var tvDiv = document.createElement("div");
  tvDiv.classList.add("tv");

  var label1 = document.createElement("label");
  label1.textContent = "Model";

  var model = document.createElement("input");
  model.type = "text";
  model.placeholder = "unknown device";
  model.value = tv.Model();
  model.addEventListener("change", function () {
    tv.Model(model.value);
  });

  var state = document.createElement("span");
  state.classList.add("value");
  state.textContent = tv.getState();

  var onBtn = document.createElement("button");
  onBtn.type = "button";
  onBtn.textContent = "ON";
  onBtn.addEventListener("click", function () {
    tv.on();
    state.classList.remove("off");
    state.classList.add("on");
    return (state.textContent = tv.getState());
  });
  var offBtn = document.createElement("button");
  offBtn.type = "button";
  offBtn.textContent = "OFF";
  offBtn.addEventListener("click", function () {
    tv.off();
    state.classList.remove("on");
    state.classList.add("off");
    return (state.textContent = tv.getState());
  });

  var volume = document.createElement("label");
  volume.setAttribute("for", "volume");
  volume.textContent = "Volume ";
  var range = document.createElement("input");
  range.type = "range";
  range.name = "volume";
  range.value = 0;
  range.step = 5;
  var volumeValue = document.createElement("span");
  volumeValue.textContent = "0";
  range.addEventListener("input", function () {
    var vol = range.value;
    tv.changeVolume(vol);
    volumeValue.textContent = tv._volume;
  });

  var muteButton = document.createElement("button");
  muteButton.textContent = "Mute";
  muteButton.addEventListener("click", function () {
    tv.muteVolume();
    volumeValue.textContent = tv._volume;
    range.value = 0;
  });

  var chanelLabel = document.createElement("label");
  chanelLabel.for = "chanel";
  chanelLabel.textContent = "Chanel: ";
  var chanel = document.createElement("input");
  chanel.type = "text";
  chanel.name = "chanel";
  chanel.value = tv._chanel;
  var increaseChanel = document.createElement("button");
  increaseChanel.type = "button";
  increaseChanel.textContent = "^";
  increaseChanel.addEventListener("click", function () {
    tv.changeChanel("+");
    chanel.value = tv._chanel;
  });
  var decreaseChanel = document.createElement("button");
  decreaseChanel.type = "button";
  decreaseChanel.textContent = "v";
  decreaseChanel.addEventListener("click", function () {
    tv.changeChanel("-");
    chanel.value = tv._chanel;
  });

  var delButton = document.createElement("button");
  delButton.type = "button";
  delButton.className = "del";
  delButton.textContent = "Delete";
  delButton.addEventListener("click", function () {
    document.body.removeChild(tvDiv);
  });

  var volumeWrapper = document.createElement("div");
  volumeWrapper.classList.add("half-left");
  volumeWrapper.appendChild(volume);
  volumeWrapper.appendChild(volumeValue);
  volumeWrapper.appendChild(range);
  volumeWrapper.appendChild(muteButton);

  var chanelWrapper = document.createElement("div");
  chanelWrapper.classList.add("half-left");
  chanelWrapper.appendChild(chanelLabel);
  chanelWrapper.appendChild(chanel);
  chanelWrapper.appendChild(increaseChanel);
  chanelWrapper.appendChild(decreaseChanel);

  var br1 = document.createElement("br");
  var br2 = document.createElement("br");

  tvDiv.appendChild(label1);
  tvDiv.appendChild(model);
  tvDiv.appendChild(state);
  tvDiv.appendChild(onBtn);
  tvDiv.appendChild(offBtn);
  tvDiv.appendChild(br1);
  tvDiv.appendChild(volumeWrapper);
  tvDiv.appendChild(chanelWrapper);
  tvDiv.appendChild(br2);
  tvDiv.appendChild(delButton);
  document.body.appendChild(tvDiv);
}
