document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('itemInput');
  const addButton = document.getElementById('addButton');
  const shoppingList = document.getElementById('shoppingList');
  const alert = document.querySelector('.alert');
  const closeButton = document.querySelector('.close-btn');

  const addItem = () => {
    const itemText = input.value.trim();
    if (itemText !== '') {
      const li = document.createElement('li');
      li.className = 'shoppingItem';
      li.innerHTML = `
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <span>${itemText}</span>
        <button class="deleteButton" type="button">
          <svg class="trash-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 4.58325L15.7336 12.9375C15.6016 15.0719 15.5357 16.1392 15.0007 16.9065C14.7361 17.2858 14.3956 17.606 14.0006 17.8466C13.2017 18.3333 12.1325 18.3333 9.99392 18.3333C7.8526 18.3333 6.78192 18.3333 5.98254 17.8457C5.58733 17.6047 5.24667 17.2839 4.98223 16.9039C4.4474 16.1354 4.38287 15.0667 4.25384 12.9293L3.75 4.58325" stroke="" stroke-width="1.25" stroke-linecap="round"/>
            <path d="M2.5 4.58342H17.5M13.3797 4.58342L12.8109 3.40986C12.433 2.6303 12.244 2.24051 11.9181 1.99742C11.8458 1.9435 11.7693 1.89553 11.6892 1.854C11.3283 1.66675 10.8951 1.66675 10.0287 1.66675C9.14067 1.66675 8.69667 1.66675 8.32973 1.86185C8.24842 1.90509 8.17082 1.955 8.09774 2.01106C7.76803 2.264 7.58386 2.66804 7.21551 3.47613L6.71077 4.58342" stroke="" stroke-width="1.25" stroke-linecap="round"/>
            <path d="M7.91687 13.75V8.75" stroke="" stroke-width="1.25" stroke-linecap="round"/>
            <path d="M12.0831 13.75V8.75" stroke="" stroke-width="1.25" stroke-linecap="round"/>
          </svg>
        </button>
      `;
      shoppingList.appendChild(li);
      input.value = '';
      input.focus();
    }
  };

  addButton.addEventListener('click', addItem);

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addItem();
    }
  });

  const showAlert = () => {
    // Show the alert
    alert.style.transform = 'translateY(-100px)';

    // Hide the alert after 3 seconds
    setTimeout(() => {
      alert.style.transform = 'translateY(0)';
    }, 3000);
  };

  const hideAlert = () => {
    alert.style.transform = 'translateY(0)';
  }

  shoppingList.addEventListener('click', (event) => {
    if (event.target.closest('.deleteButton')) {
      const li = event.target.closest('li');
      if (li) {
        shoppingList.removeChild(li);

        showAlert();
      }
    }
  });

  closeButton.addEventListener('click', () => {
    hideAlert();
  });
});