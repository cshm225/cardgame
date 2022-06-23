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
            cards[i]=temp;

        }
    }
    const table = document.getElementById('table');
    for (let i = 0; i < suits.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 13; j++) {
            let td = document.createElement('td');
            let tempCard = cards[i * 13 + j];
            //以下を追記
            td.classList.add('card');
            td.style.backgroundImage = `url(images/${tempCard.front})`;
            //以下をコメントアウト(または削除)
            //td.textContent=`${tempCard.suit}:${tempCard.num}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
