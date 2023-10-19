const isMobile = () => {
    return window.innerHeight > window.innerWidth;
};

class NavigationComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let navigation = ``;

        if (!isMobile()) {
            navigation = `
                <div class="navigation-component">
                    <div class="toggle-component"></div>
                    <ul class="ul-component">
                        <li class="li-component">
                            <a class="a-component" href="#/0">
                                <span class="icon-component"><i class="fa fa-home" aria-hidden="true"></i>
                                </span>
                                <span class="title-component">Home</span>
                            </a>
                        </li>
                        <li class="li-component">
                            <a class="a-component" href="#/1">
                                <span class="icon-component"><i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                                <span class="title-component">About Me</span>
                            </a>
                        </li>
                        <li class="li-component">
                            <a class="a-component" href="#/2">
                                <span class="icon-component"><i class="fa fa-book" aria-hidden="true"></i>
                                </span>
                                <span class="title-component">Portofolios</span>
                            </a>
                        </li>
                        <li class="li-component">
                            <a class="a-component" href="#/3">
                                <span class="icon-component"><i class="fa fa-wrench" aria-hidden="true"></i>
                                </span>
                                <span class="title-component">Tools</span>
                            </a>
                        </li>
                        <li class="li-component">
                            <a class="a-component" href="#/4">
                                <span class="icon-component"><i class="fa fa-address-book" aria-hidden="true"></i>
                                </span>
                                <span class="title-component">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            `;
        }

        this.innerHTML = navigation;
    }
}

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

customElements.define('navigation-component', NavigationComponent);
customElements.define('contact-component', ContactComponent);
