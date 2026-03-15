class LottoBall extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const number = this.getAttribute('number');
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.textContent = number;
        const style = document.createElement('style');
        style.textContent = `
            .ball {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #f0f0f0;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-weight: bold;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(ball);
    }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersDiv = document.getElementById('lotto-numbers');

generateBtn.addEventListener('click', () => {
    lottoNumbersDiv.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    for (const number of numbers) {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoNumbersDiv.appendChild(lottoBall);
    }
});
