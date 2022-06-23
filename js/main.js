'use strict';
window.onload = function () {
    function Card(suit, num) {
        this.suit = suit;
        this.num = num;
        //以下を追記
        this.front;
        this.setFront = function () {
            this.front = `${this.suit}${this.num < 10 ? '0' : ''}${this.num}.gif`;
        };
    }

    const cards = [];
    const suits = ['s', 'd', 'h', 'c'];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 1; j <= 13; j++) {
            let card = new Card(suits[i], j);
            //以下を追加
            card.setFront();
            cards.push(card);
        }
    }

    function shuffle(){
        let i=cards.length;
        while(i){
            let index=Math.floor(Math.random()*i--);
            var tmp=cards[index];
            cards[index]=cards[i];
            cards[i]=tmp;

        }
    }
    shuffle();
    const table = document.getElementById('table');
    for (let i = 0; i < suits.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 13; j++) {
            let td = document.createElement('td');
            let tempCard = cards[i * 13 + j];
            td.classList.add('card',"back");
            td.onclick=flip;
            td.num=tempCard.num;
            td.style.backgroundImage = `url(images/${tempCard.front})`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    let firstCard=null;
    let flipTimerId=NaN;
    function flip(e){
        let td=e.target;
        //td.classList.toggle("back");
        if(!td.classList.contains("back")||flipTimerId){
            return;
        }
        td.classList.remove("back");
        if(firstCard===null){
            firstCard=td;
        }else{
            if(firstCard.num===td.num){
                firstCard=null;
            }else{
                flipTimerId=setTimeout(function(){
                    firstCard.classList.add("back");
                    td.classList.add("back");
                    flipTimerId=NaN;
                    firstCard=null;
                },1200);
            }
        }
    }
}
