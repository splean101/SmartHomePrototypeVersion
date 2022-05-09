import { myHouse } from './home.js';
import {TV} from './tv.js';
export function renderTV(model) {
    var tv = new TV(model);
    myHouse.addTV(tv);

    var tvDiv = document.createElement('div');
    tvDiv.classList.add('tv');

    var label1 = document.createElement('label');
    //label1.id = 'model';
    label1.textContent = 'Model';

    var model = document.createElement('input');
    model.type = 'text';
    model.placeholder = 'Enter the model of TV';
    model.value = tv.Model();
    model.addEventListener('change', function () {
        tv.Model(model.value);
    });

    var state = document.createElement('div');
    state.textContent = tv.getState();

    var onBtn = document.createElement('button');
    onBtn.type = 'button';
    onBtn.textContent = 'On';
    onBtn.addEventListener('click', function () {
        tv.on();
        return state.textContent = tv.getState();
    });

    var offBtn = document.createElement('button');
    offBtn.type = 'button';
    offBtn.innerText = 'Off';
    offBtn.addEventListener('click', function () {
        tv.off();
        return state.textContent = tv.getState();
    });

    var volume = document.createElement('span');
    //volume.id = 'volume';
    volume.innerText = 'Volume ';

    var volumeValue = document.createElement('span');
    //volumeValue.id = 'volumeValue';
    volumeValue.innerText = '0';

    var chanel = document.createElement('span');
    chanel.textContent = tv._chanel;

    var increaseVolume = document.createElement('button');
    increaseVolume.type = 'button';
    increaseVolume.textContent = '+';
    increaseVolume.addEventListener('click', function () {
        tv.changeVolume('+');
        return volumeValue.innerText = tv._volume;
    });

    var decreaseVolume = document.createElement('button');
    decreaseVolume.type = 'button';
    decreaseVolume.textContent = '-';
    decreaseVolume.addEventListener('click', function () {
        tv.changeVolume('-');
        return volumeValue.innerText = tv._volume;
    });

    var delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.className = 'del';
    delButton.textContent = 'Delete this Device';
    delButton.addEventListener('click', function(){
        document.body.removeChild(tvDiv);
    });

    var volumeWrapper = document.createElement('div')
    volumeWrapper.appendChild(volume);
    volumeWrapper.appendChild(decreaseVolume);
    volumeWrapper.appendChild(volumeValue);
    volumeWrapper.appendChild(increaseVolume);
    
    var br1 = document.createElement('br');
    var br2 = document.createElement('br');
    
    //console.log(myHouse);
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
};