let template = `
    <h1>Welcome this is the home page!!!!!</h1>
    <p>
    This is where we let you note all the information that is not worth noting.
    </p>
    If you want to see something really cool. Click on <strong>Register</strong>
    </p>
    <button id="register">Register</button>
    `;

class HomePage extends HTMLElement {
    createdCallback() {
        this.createShadowRoot();
        this.shadowRoot.innerHTML = template;
    }

    attachedCallback() {
        this.router = injector.get('router');
        this.registerButton = this.shadowRoot.getElementById('register');
        this.registerButton.addEventListener('click', () =>{
           this.register();
        });
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
    }

    register() {
        this.router.goto('/register/wizard/step1');
    }
}

export default HomePage;
