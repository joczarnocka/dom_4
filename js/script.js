console.log("WARSZTAT - Obsługa formularza 'Imię i nazwisko'");

const submitForm = (event) => {
    event.preventDefault();
    console.log('Submit forms');
    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imię: ${firstName.value}, Nazwisko: ${lastName.value}`);
}

let form = document.getElementById('form');
form.addEventListener('submit', submitForm);

