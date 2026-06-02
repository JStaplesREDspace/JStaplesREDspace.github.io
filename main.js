const urlEl = document.getElementById('url');

// Initialize the cast receiver
const options = {
    maxInactivity: 1000 * 60 * 60 * 24,
}
window.cast.framework.CastReceiverContext.getInstance().start(options);

let url = 'https://google.ca';

const handleNavigate = () => {
    window.location.href = url;
}


// // countdown
// const countdownEl = document.getElementById('countdown');
// let countdown = 5;
// const countdownInterval = setInterval(() => {
//     countdownEl.textContent = countdown;
//     countdown--;
//     if (countdown < 0) {
//         clearInterval(countdownInterval);
//         handleNavigate();
//     }
// }, 1000);


