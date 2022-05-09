import { myHouse } from "./home.js";
import { AirConditioner } from "./airCond.js";

export function renderAir(model) {
  var ac = new AirConditioner(model);
  myHouse.addConditioner(ac);

  var acDiv = document.createElement("div");
  acDiv.classList.add("ac");

  var label1 = document.createElement("label");
  label1.id = "model";
  label1.textContent = "Model";

  var model = document.createElement("input");
  model.type = "text";
  model.placeholder = "unknown device";
  model.value = ac.Model();
  model.addEventListener("change", function () {
    ac.Model(model.value);
  });

  var state = document.createElement("span");
  state.textContent = ac.getState();
  state.classList.add("half-left");

  var onBtn = document.createElement("button");
  onBtn.type = "button";
  onBtn.textContent = "ON"; //ac.getState() ? 'ON' : 'OFF';
  onBtn.addEventListener("click", function () {
    ac.on();
    state.className = "on";
    state.textContent = ac.getState();
  });

  var offBtn = document.createElement("button");
  offBtn.type = "button";
  offBtn.textContent = "OFF";
  offBtn.addEventListener("click", function () {
    ac.off();
    state.className = "off";
    return (state.textContent = ac.getState());
  });

  var t = document.createElement("span");
  t.textContent = "Temp:  ";
  t.classList.add("label");

  var temp = document.createElement("span");
  temp.textContent = ac._temp;
  temp.classList.add("value");

  var increaseTemp = document.createElement("button");
  increaseTemp.type = "button";
  increaseTemp.textContent = "+";
  increaseTemp.addEventListener("click", function () {
    ac.changeTemp("+");
    return (temp.textContent = ac._temp);
  });

  var decreaseTemp = document.createElement("button");
  decreaseTemp.type = "button";
  decreaseTemp.textContent = "-";
  decreaseTemp.addEventListener("click", function () {
    ac.changeTemp("-");
    return (temp.textContent = ac._temp);
  });

  var delButton = document.createElement("button");
  delButton.type = "button";
  delButton.className = "del";
  delButton.textContent = "Delete";
  delButton.addEventListener("click", function () {
    document.body.removeChild(acDiv);
  });

  var br1 = document.createElement("br");
  var br2 = document.createElement("br");
  var br3 = document.createElement("br");

  acDiv.appendChild(label1);
  acDiv.appendChild(model);
  acDiv.appendChild(state);
  acDiv.appendChild(br3);
  acDiv.appendChild(onBtn);
  acDiv.appendChild(offBtn);
  acDiv.appendChild(br1);
  acDiv.appendChild(t);
  acDiv.appendChild(temp);
  acDiv.appendChild(br2);
  acDiv.appendChild(decreaseTemp);
  acDiv.appendChild(increaseTemp);
  acDiv.appendChild(delButton);
  document.body.appendChild(acDiv);
}
