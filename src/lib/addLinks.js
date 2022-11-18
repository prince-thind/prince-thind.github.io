import links from '../configs/links.json'

export default function addLinks() {
    for (const [contact, link] of Object.entries(links)) {
        addLink(contact, link)
    }
}

function addLink(contact, link) {
    const contactAnchors = [...document.querySelectorAll(`[data-link=${contact}]`)];

    for (const contactAnchor of contactAnchors) {
        switch (contact) {
            case 'phone': contactAnchor.setAttribute('href', "tel:" + link); break
            case 'email': contactAnchor.setAttribute('href', "mailto: " + link); break;
            default: contactAnchor.setAttribute('href', link)
        }
    }

}

