const Meta = imports.gi.Meta;

function init() {	
}

function enable() {
	Meta.disable_unredirect_for_screen(global.screen);
}

function disable() {
	Meta.enable_unredirect_for_screen(global.screen);
}

