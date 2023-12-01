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
                <a target="_blank" href="https://www.linkedin.com/in/luckysetiawan/"><img class="mobile-contact" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a><br>
				<a target="_blank" href="mailto:luckysetiawan0802@gmail.com"><img class="mobile-contact" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a><br>
                <a target="_blank" href="https://github.com/luckysetiawan"><img class="mobile-contact" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a><br>
                <a target="_blank" href="https://gitlab.com/luckysetiawan"><img class="mobile-contact" src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white"></a><br>
                <a target="_blank" href="https://www.youtube.com/@lucky_setiawan"><img class="mobile-contact" src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"></a><br>
                <a target="_blank" href="https://www.instagram.com/luckysetia77/"><img class="mobile-contact" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
            `;
        } else {
            contact = `
                <a target="_blank" href="https://www.linkedin.com/in/luckysetiawan/"><img class="desktop-contact" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
				<a target="_blank" href="mailto:luckysetiawan0802@gmail.com"><img class="desktop-contact" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
                <a target="_blank" href="https://github.com/luckysetiawan"><img class="desktop-contact" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
                <a target="_blank" href="https://gitlab.com/luckysetiawan"><img class="desktop-contact" src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white"></a>
                <a target="_blank" href="https://www.youtube.com/@lucky_setiawan"><img class="desktop-contact" src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"></a>
                <a target="_blank" href="https://www.instagram.com/luckysetia77/"><img class="desktop-contact" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
            `;
        }

        this.innerHTML = contact;
    }
}

customElements.define('contact-component', ContactComponent);
