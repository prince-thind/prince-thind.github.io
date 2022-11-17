const weburl = 'https://script.google.com/macros/s/AKfycbwE8pVi0ioOXZ7j_-t6G6P0rnlkLsemiMOOwYSKvpcyJik4MbYgyMKuDNHN2Kp0Sjo3ZQ/exec'


let submiitedAlready = false;


export default function LinkFormWithGoogleSheet() {
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', handleFormSubmit)
}

async function handleFormSubmit(e) {
    e.preventDefault();
    if (submiitedAlready) {
        displayFormResult({ style: 'error', message: 'You have already filled this form once!', });
        return;
    }
    submiitedAlready = true;

    displayFormResult({ message: 'Submitting Response...', style: null })


    const data = Object.fromEntries(new FormData(e.target));
    const success = await postData(data);

    if (success) {
        displayFormResult({ message: 'Data Submitted Successfully!', style: 'success' })
    }
    else {
        displayFormResult({ message: 'Some Unknown Error Occured, please contact me via other means', style: 'error' })

    }
}

function displayFormResult(data) {
    const formResultDiv = document.querySelector('#form-result');
    formResultDiv.textContent = data.message;

    if (data.style == 'error') {
        formResultDiv.classList.add('error');
    }
    else if (data.style == 'success') {
        formResultDiv.classList.add('success');
    }
}

async function postData(data) {
    const rawRes = await fetch(weburl, {
        method: 'POST',
        body: new URLSearchParams(data)
    })

    const res = await rawRes.json();

    if (res.result == 'success') {
        return true;
    }

    return false;


}