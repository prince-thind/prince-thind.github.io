import pfp1 from "../assets/profile-pictures/pfp1.jpg"
import pfp2 from "../assets/profile-pictures/pfp2.jpg"
import pfp3 from "../assets/profile-pictures/pfp3.jpg"
import pfp4 from "../assets/profile-pictures/pfp4.jpg"
import pfp5 from "../assets/profile-pictures/pfp5.jpg"

export default async function startImageAnimation() {
    const imagesContainer = document.querySelector('#profile-picture-container');
    const images = [pfp1, pfp2, pfp3, pfp4, pfp5];
    const imageElements = [];

    for (const image of images) {
        const imageElement = document.createElement('img');
        imageElement.classList.add('profile-picture');
        imageElement.setAttribute('alt', 'profile');
        imageElement.setAttribute('src', image);
        imagesContainer.appendChild(imageElement)
        imageElements.push(imageElement)
    }



    let i = 0;
    while (i <= images.length) {

        imageElements[i].classList.toggle('current-picture');

        await sleep(3);

        imageElements[i].classList.toggle('current-picture')


        i++;
        if (i >= images.length) i = 0; //restart looping
    }
}

function sleep(n) {
    return new Promise(r => setTimeout(r, n * 1000))
}