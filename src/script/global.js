document.querySelectorAll('a').forEach((tagA) => {
    if (!tagA.hasAttribute('rel')) {
        tagA.setAttribute('rel', 'noopener noreferrer');
    }
});

document.querySelectorAll('img').forEach((tagImg) => {
    if (!tagImg.hasAttribute('loading')) {
        tagImg.setAttribute('loading', 'lazy');
    }
});