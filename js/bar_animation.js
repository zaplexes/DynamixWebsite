const button = document.querySelector('#show-features');
const media_features = document.querySelector('#media-features')

button.addEventListener('click', () => {
    button.classList.toggle('active');
    media_features.classList.toggle('active');
});