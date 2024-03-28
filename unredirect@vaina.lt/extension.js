import Meta from 'gi://Meta';

export default class UnredirectExtension {
    constructor() {
        this.isEnabled = false;
    }

    enable() {
        if (!this.isEnabled) {
            Meta.disable_unredirect_for_display(global.display);
            this.isEnabled = true;
        }
    }

    disable() {
        if (this.isEnabled) {
            Meta.enable_unredirect_for_display(global.display);
            this.isEnabled = false;
        }
    }
}
