const container = document.querySelector('.container');
for(let i=0;i<36;i++)
    container.innerHTML += '<div class="box"></div>';

const box = document.querySelectorAll('.box');

for(let i=0;i<36;i++)
{
    box[i].addEventListener('click', () =>{
        let button1 = document.getElementById('booked');
        let currValue1 = Number(button1.innerHTML);
        let button2 = document.getElementById('remaining');
        let currValue2 = Number(button2.innerHTML);
        if(box[i].classList.contains('boxClicked'))
        {
            box[i].classList.remove('boxClicked');
            button1.innerHTML = currValue1 - 1;
            button2.innerHTML = currValue2 + 1;
        }
        else{
            box[i].classList.add('boxClicked');
            button1.innerHTML = currValue1 + 1;
            button2.innerHTML = currValue2 - 1;
        }
    })
}