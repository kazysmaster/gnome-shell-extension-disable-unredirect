const Meta = imports.gi.Meta;

function init() {
}

function enable() {
	try {
		// >= 3.30
		Meta.disable_unredirect_for_display(global.display);
	} catch (_ex) {
		// < 3.30
		Meta.disable_unredirect_for_screen(global.screen);
	}
}

function disable() {
	try {
		// >= 3.30
		Meta.enable_unredirect_for_display(global.display);
	} catch (_ex) {
		// < 3.30
		Meta.enable_unredirect_for_screen(global.screen);
	}
}
