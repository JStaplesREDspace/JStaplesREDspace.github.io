const inputEl = document.getElementById('url');
const submitEl = document.getElementById('submit');
const recentUrlsEl = document.getElementById('recent-urls');

const handleSubmit = () => {
    const url = inputEl.value;
    if (url) {
        const fullUrl = `https://${url}`;
        window.location.href = fullUrl;
    }
};

const handleDisableKeyNavigation = (e) => {
    const navigationKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (navigationKeys.includes(e.key)) {
        e.preventDefault();
    }
}

// Initialize the cast receiver
window.cast.framework.CastReceiverContext.getInstance().start();

// start our selector on the input
setTimeout(() => {
    inputEl.focus();
}, 100);

submitEl.addEventListener('click', handleSubmit);
window.addEventListener('keydown', handleDisableKeyNavigation);