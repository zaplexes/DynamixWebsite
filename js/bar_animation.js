const button = document.querySelector('#show-features');
const media_features = document.querySelector('#media-features')

const footer = document.querySelector('.footer');
const title = document.querySelector('#dynamix');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    media_features.classList.toggle('active');

    const isActive = media_features.classList.contains('active');

    if (isActive) {
        footer.style.display = 'none';
        title.style.display = 'none';
    } else {
        footer.style.display = 'block';
        title.style.display = 'block';
    }
});