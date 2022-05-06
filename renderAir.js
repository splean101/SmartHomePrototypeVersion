import { myHouse } from './home.js';
import {AirConditioner} from './airCond.js';

export function renderAir(model) {
    var ac = new AirConditioner(model);
    myHouse.addConditioner(ac);

    var acDiv = document.createElement('div');
    acDiv.id = 'ac';

    var label1 = document.createElement('label');
    label1.id = 'model';
    label1.innerText = 'Model';

    var model = document.createElement('input');
    model.type = 'text';
    model.placeholder = 'Enter the model of Air Conditioner';
    model.value = ac.Model();
    model.addEventListener('change', function () {
        ac.Model(model.value);
    });

    var state = document.createElement('div');
    state.innerText = ac.getState();

    var onBtn = document.createElement('button');
    onBtn.type = 'button';
    onBtn.innerText = 'On';
    onBtn.addEventListener('click', function () {
        ac.on();
        return state.innerText = ac.getState();
    });

    var offBtn = document.createElement('button');
    offBtn.type = 'button';
    offBtn.innerText = 'Off';
    offBtn.addEventListener('click', function () {
        ac.off();
        return state.innerText = ac.getState();
    });

    var t = document.createElement('span');
    t.id = 'power';
    t.innerText = 'Temp:  ';

    var temp = document.createElement('span');
    temp.innerText = ac._temp;

    var increaseTemp = document.createElement('button');
    increaseTemp.type = 'button';
    increaseTemp.innerHTML = '<b>+</b>';
    increaseTemp.addEventListener('click', function () {
        ac.increaseTemp();
        return temp.innerText = ac._temp;
    });

    var decreaseTemp = document.createElement('button');
    decreaseTemp.type = 'button';
    decreaseTemp.innerHTML = '<b>-</b>';
    decreaseTemp.addEventListener('click', function () {
        ac.decreaseTemp();
        return temp.innerText = ac._temp;
    });

    var delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.id = 'del';
    delButton.innerHTML = '<b>Delete this Air Conditioner</b>';
    delButton.addEventListener('click', function(){
        document.body.removeChild(acDiv);
    });

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');
    
    acDiv.appendChild(label1);
    acDiv.appendChild(model);
    acDiv.appendChild(state);
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
};