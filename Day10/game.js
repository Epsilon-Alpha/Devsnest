Array.prototype.swap = function(i,j) {
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
    return this;
}

const totalBoxes = 24;
let ar = [];
for(let i=0;i<totalBoxes;i++)
    ar.push(1 + Math.floor(i/2));

for(let i=totalBoxes-1;i>=0;i--){
    let r = Math.random() * i; //Value in [0,i)
    let j = Math.floor(r); //Some index smaller than i
    ar.swap(i,j);
}

for(let i=0;i<totalBoxes;i++){
    let card = document.createElement('div');
    let inner = document.createElement('div');
    let front = document.createElement('div');
    let back = document.createElement('div');
    card.classList.add('flip-card');
    inner.classList.add('flip-inner');
    front.classList.add('front');
    back.innerHTML = "<h1>" + ar[i] + "</h1>";
    back.classList.add('back');
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    document.getElementById('grid').appendChild(card);
}

let lastCard = undefined;
let matched = 0;
let active = true;
let cards = document.getElementsByClassName('flip-card');
for(let card of cards){
    card.addEventListener('click', () =>{
        if(!active)
            return;
        card.firstChild.classList.add('flipped');
        
        if(!lastCard){
            lastCard = card;
        }
        else if(lastCard !==card){
            active = false;
            setTimeout(() => {
                let backCurrent = card.firstChild.lastChild.innerHTML;
                let backOld = lastCard.firstChild.lastChild.innerHTML;
                if(backCurrent === backOld){
                    card.style.visibility = "hidden";
                    lastCard.style.visibility = "hidden";
                    matched++;
                    document.querySelector('span').innerHTML = matched;
                    if(matched*2==totalBoxes)
                    {
                        let prompt = window.alert("Congratulations! Play again?");
                        if(prompt)
                            widnow.reload;
                    }
                }
                else{
                    card.firstChild.classList.remove('flipped');
                    lastCard.firstChild.classList.remove('flipped');
                }
                lastCard = undefined;
                active = true;
            }, 1000);
        }
    });
}