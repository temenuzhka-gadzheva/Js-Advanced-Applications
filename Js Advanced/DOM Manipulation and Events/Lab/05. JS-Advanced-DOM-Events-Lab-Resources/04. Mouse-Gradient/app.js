function attachGradientEvents() {
    let gradientBoxEl = document.getElementById('gradient-box');
    let resultEl = document.getElementById('result');

    gradientBoxEl.addEventListener('mousemove', (e) => {

        let percent = Math.floor((e.offsetX /  e.target.clientWidth)  * 100);
    resultEl.textContent = `${percent}%`
    })
}