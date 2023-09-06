import Meta from 'gi://Meta';

export default class Extension {
	enable() {
		Meta.disable_unredirect_for_display(global.display);
	}

	disable() {
		Meta.enable_unredirect_for_display(global.display);
	}
}
