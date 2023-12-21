const isMobile = () => {
    return window.innerHeight > window.innerWidth;
};

class ContactComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let contact = ``;

        if (isMobile()) {
            contact = `
                <table>
                    <tr>
                        <td><a target="_blank" style="font-size:30vw;" href="https://www.linkedin.com/in/luckysetiawan/"><i class="fa-brands fa-linkedin"></i></a></td>
                        <td><a target="_blank" style="font-size:30vw;" href="mailto:luckysetiawan0802@gmail.com"><i class="fa-brands fa-google"></i></a></td>
                    </tr>
                    <tr>
                        <td><a target="_blank" style="font-size:30vw;" href="https://github.com/luckysetiawan"><i class="fa-brands fa-github"></i></a></td>
                        <td><a target="_blank" style="font-size:30vw;" href="https://gitlab.com/luckysetiawan"><i class="fa-brands fa-gitlab"></i></a></td>
                    </tr>
                    <tr>
                        <td><a target="_blank" style="font-size:30vw;" href="https://www.youtube.com/@lucky_setiawan"><i class="fa-brands fa-youtube"></i></a></td>
                        <td><a target="_blank" style="font-size:30vw;" href="https://www.instagram.com/luckysetia77/"><i class="fa-brands fa-instagram"></i></a></td>
                    </tr>
                </table>
            `;
        } else {
            contact = `
                <a target="_blank" style="font-size:5vw;" href="https://www.linkedin.com/in/luckysetiawan/"><i class="fa-brands fa-linkedin"></i></a>
				<a target="_blank" style="font-size:5vw;" href="mailto:luckysetiawan0802@gmail.com"><i class="fa-brands fa-google"></i></a>
                <a target="_blank" style="font-size:5vw;" href="https://github.com/luckysetiawan"><i class="fa-brands fa-github"></i></a>
                <a target="_blank" style="font-size:5vw;" href="https://gitlab.com/luckysetiawan"><i class="fa-brands fa-gitlab"></i></a>
                <a target="_blank" style="font-size:5vw;" href="https://www.youtube.com/@lucky_setiawan"><i class="fa-brands fa-youtube"></i></a>
                <a target="_blank" style="font-size:5vw;" href="https://www.instagram.com/luckysetia77/"><i class="fa-brands fa-instagram"></i></a>
            `;
        }

        this.innerHTML = contact;
    }
}

customElements.define('contact-component', ContactComponent);
