// Function to toggle Read More / Read Less
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.btn-read-more').forEach(button => {
    button.addEventListener('click', function () {
      const cardText = this.previousElementSibling;
      if (this.innerText === 'Read More') {
        cardText.innerText = cardText.getAttribute('data-full');
        this.innerText = 'Read Less';
      } else {
        cardText.innerText = cardText.getAttribute('data-short');
        this.innerText = 'Read More';
      }
    });
  });
});
