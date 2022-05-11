import { myHouse } from '../home.js';
import { MicrowaveOven } from '../microwave.js';

export function renderMO(model) {
  var mo = new MicrowaveOven(model);
  myHouse.addMO(mo);

  var moDiv = document.createElement('div');
  moDiv.classList.add('mo');

  var label1 = document.createElement('label');
  label1.textContent = 'Model';

  var model = document.createElement('input');
  model.type = 'text';
  model.placeholder = 'unknown device';
  model.value = mo.Model();
  model.addEventListener('change', function () {
    mo.Model(model.value);
  });

  var state = document.createElement('span');
  state.textContent = mo.getState();
  //state.classList.add("half-left");
  state.classList.add('value');

  var onBtn = document.createElement('button');
  onBtn.type = 'button';
  onBtn.textContent = 'ON';
  onBtn.addEventListener('click', function () {
    mo.on();
    state.classList.remove('off');
    state.classList.add('on');
    return (state.textContent = mo.getState());
  });

  var offBtn = document.createElement('button');
  offBtn.type = 'button';
  offBtn.textContent = 'OFF';
  offBtn.addEventListener('click', function () {
    mo.off();
    state.classList.remove('on');
    state.classList.add('off');
    return (state.textContent = mo.getState());
  });

  var p = document.createElement('span');
  p.textContent = 'Power: ';
  p.classList.add('label');

  var power = document.createElement('span');
  power.textContent = mo._power;
  power.classList.add('value');

  var increasePower = document.createElement('button');
  increasePower.type = 'button';
  increasePower.textContent = '+';
  increasePower.addEventListener('click', function () {
    mo.increasePower();
    return (power.textContent = mo._power);
  });

  var decreasePower = document.createElement('button');
  decreasePower.type = 'button';
  decreasePower.textContent = '-';
  decreasePower.addEventListener('click', function () {
    mo.decreasePower();
    return (power.textContent = mo._power);
  });

  var delButton = document.createElement('button');
  delButton.type = 'button';
  delButton.className = 'del';
  delButton.textContent = 'Delete';
  delButton.addEventListener('click', function () {
    document.body.removeChild(moDiv);
  });

  var br1 = document.createElement('br');
  var br2 = document.createElement('br');

  moDiv.appendChild(label1);
  moDiv.appendChild(model);
  moDiv.appendChild(state);
  moDiv.appendChild(onBtn);
  moDiv.appendChild(offBtn);
  moDiv.appendChild(br1);
  moDiv.appendChild(p);
  moDiv.appendChild(power);
  moDiv.appendChild(br2);
  moDiv.appendChild(decreasePower);
  moDiv.appendChild(increasePower);
  moDiv.appendChild(delButton);
  moDiv.insertAdjacentElement('afterend', document.querySelector('script') );
}
