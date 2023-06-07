import { InputResults } from "../input_results.js";

export class RegistrationView {
    constructor() {
        const inputResults  = new InputResults();

        this.showError      = inputResults.showError;
        this.showSuccess    = inputResults.showSuccess;
    }
}
