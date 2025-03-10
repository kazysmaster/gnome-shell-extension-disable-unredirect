export default class UnredirectExtension {
    constructor() {
        this.orig_enable_unredirect = null;
    }

    enable() {
        if (this.orig_enable_unredirect == null) {
            console.debug("Monkey patching global.compositor.enable_unredirect() function");
            this.orig_enable_unredirect = global.compositor.enable_unredirect;
            global.compositor.enable_unredirect_for_display = function () {
                console.debug("Ignoring invocation of global.compositor.enable_unredirect()");
            };
            global.compositor.disable_unredirect();
        }
    }

    disable() {
        if (this.orig_enable_unredirect != null) {
            console.debug("Restoring global.compositor.enable_unredirect() function");
            global.compositor.enable_unredirect = this.orig_enable_unredirect;
            this.orig_enable_unredirect = null;
            console.debug("Invoking global.compositor.enable_unredirect()");
            global.compositor.enable_unredirect();
        }
    }
}
