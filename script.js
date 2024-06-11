document.getElementById('loadMore').addEventListener('click', function() {
    let hiddenCards = document.querySelectorAll('.card.hidden');
    for (let i = 0; i < 6 && i < hiddenCards.length; i++) {
        hiddenCards[i].classList.remove('hidden');
    }
    if (document.querySelectorAll('.card.hidden').length === 0) {
        this.style.display = 'none';
        document.getElementById('showLess').classList.remove('hidden');
    }
});

document.getElementById('showLess').addEventListener('click', function() {
    let allCards = document.querySelectorAll('.card');
    for (let i = 6; i < allCards.length; i++) {
        allCards[i].classList.add('hidden');
    }
    this.classList.add('hidden');
    document.getElementById('loadMore').style.display = 'block';
});

document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)) {
        message.textContent = 'Subscription successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid email address. Please try again.';
        message.style.color = 'red';
    }
});

