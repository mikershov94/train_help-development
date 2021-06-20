class App {
    public run: () => void;

    constructor() {
        this.run = (name = 'Michael') => {

            console.log(`Hello ${name}`);
        }
    }
}

const app = new App();
app.run();