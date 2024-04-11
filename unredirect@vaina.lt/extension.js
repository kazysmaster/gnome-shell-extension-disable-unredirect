import Meta from 'gi://Meta';

export default class UnredirectExtension {
    constructor() {
        this.orig_enable_unredirect_for_display = null;
    }

    enable() {
        if (this.orig_enable_unredirect_for_display == null) {
            console.debug("Monkey patching Meta.enable_unredirect_for_display(display) function");
            this.orig_enable_unredirect_for_display = Meta.enable_unredirect_for_display;
            Meta.enable_unredirect_for_display = function(display) {
                // should I check for display?
                console.debug("Ignoring invocation of Meta.enable_unredirect_for_display(display)");
            };
            Meta.disable_unredirect_for_display(global.display);
        }
    }

    disable() {
        if (this.orig_enable_unredirect_for_display != null) {
            console.debug("Restoring Meta.enable_unredirect_for_display(display) function");
            Meta.enable_unredirect_for_display = this.orig_enable_unredirect_for_display;
            this.orig_enable_unredirect_for_display = null;
            console.debug("Invoking Meta.enable_unredirect_for_display(display)");
            Meta.enable_unredirect_for_display(global.display);
        }
    }
}
