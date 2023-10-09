import Meta from 'gi://Meta';

export default class UnredirectExtension {
	enable() {
		Meta.disable_unredirect_for_display(global.display);
	}

	disable() {
		Meta.enable_unredirect_for_display(global.display);
	}
}
