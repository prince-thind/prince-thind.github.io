import pfp1 from "../assets/misc/pfp.jpg"
import pfp2 from "../assets/misc/pfp2.jpg"

export default async function startImageAnimation() {
    const imageElement = document.querySelector('#profile-picture');
    const images = [pfp1, pfp2];

    let i = 0;
    while ( i <= images.length) {
        const newSrc=images[i]
        imageElement.src=newSrc;

        await sleep(2);

        i++;
        if (i >= images.length) i = 0; //restart looping
    }

    imageElement.src = images[1];

}

function sleep(n) {
    return new Promise(r => setTimeout(r, n * 1000))
}