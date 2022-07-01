class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="primary-header flex">
            <a class="logo-text text-white flex" href="index.html">
                luckysetiawan.github.io
            </a>

            <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                <span class="sr-only"> Menu</span>
            </button>

            <nav>
                <ul data-visible="false" id="primary-navigation" class="primary-navigation flex">
                    <li class="active">
                        <a class="text-white" href="index.html">
                            <span aria-hidden="true">01</span>Home
                        </a>
                    </li>
                    <li class="active">
                        <a class="text-white" href="about.html">
                                <span aria-hidden="true">02</span>About
                        </a>
                    </li>
                    <li class="active">
                        <a class="text-white" href="contact-me.html">
                                <span aria-hidden="true">03</span>Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('navbar-component', NavBar)