import { myHouse } from './home.js';
import {MicrowaveOven} from './microwave.js';
export function renderMO(model) {
    var mo = new MicrowaveOven(model);
    myHouse.addMO(mo);

    var moDiv = document.createElement('div');
    moDiv.id = 'mo';

    var label1 = document.createElement('label');
    label1.id = 'model';
    label1.innerText = 'Model';

    var model = document.createElement('input');
    model.type = 'text';
    model.placeholder = 'Enter the model of Microwave Owen';
    model.value = mo.Model();
    model.addEventListener('change', function () {
        mo.Model(model.value);
    });

    var state = document.createElement('div');
    state.innerText = mo.getState();

    var onBtn = document.createElement('button');
    onBtn.type = 'button';
    onBtn.innerText = 'On';
    onBtn.addEventListener('click', function () {
        mo.on();
        return state.innerText = mo.getState();
    });

    var offBtn = document.createElement('button');
    offBtn.type = 'button';
    offBtn.innerText = 'Off';
    offBtn.addEventListener('click', function () {
        mo.off();
        return state.innerText = mo.getState();
    });

    var p = document.createElement('span');
    p.id = 'power';
    p.innerText = 'Power';

    var power = document.createElement('span');
    power.innerText = mo._power;

    var increasePower = document.createElement('button');
    increasePower.type = 'button';
    increasePower.innerHTML = '<b>+</b>';
    increasePower.addEventListener('click', function () {
        mo.increasePower();
        return power.innerText = mo._power;
    });

    var decreasePower = document.createElement('button');
    decreasePower.type = 'button';
    decreasePower.innerHTML = '<b>-</b>';
    decreasePower.addEventListener('click', function () {
        mo.decreasePower();
        return power.innerText = mo._power;
    });

    var delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.id = 'del';
    delButton.innerHTML = '<b>Delete this Microvawe Owen</b>';
    delButton.addEventListener('click', function(){
        document.body.removeChild(moDiv);
    });

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');
    
    console.log(myHouse);
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
    document.body.appendChild(moDiv);
};