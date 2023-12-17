Disables unredirect fullscreen windows in gnome-shell to workaround https://bugzilla.redhat.com/show_bug.cgi?id=767397

(bug, when clicking on full screen windows goes through to windows underneath).

This also happens to fix screen tearing in full-screen windows.

# Install

## From Gnome extensions website

[extensions.gnome.org](https://extensions.gnome.org/extension/1873/disable-unredirect-fullscreen-windows/)

## From source

Download this extension from GitHub and extract it into the appropriate location:

```bash
ext=~/.local/share/gnome-shell/extensions; mkdir -p "$ext" && cd "$ext" && curl -LkSs https://api.github.com/repos/kazysmaster/gnome-shell-extension-disable-unredirect/tarball | tar -xvz --wildcards --strip 1 "kazysmaster-gnome-shell-extension-disable-unredirect-???????/unredirect@vaina.lt"
```

Then press ALT-F2 and enter ```r``` and press enter to restart gnome-shell.

Then in Firefox visit [extensions.gnome.org](https://extensions.gnome.org/) and enable the extension under "Installed Extensions".

If you don't see the extension you might have to add your version of GNOME shell to [this file](https://github.com/kazysmaster/gnome-shell-extension-disable-unredirect/blob/master/unredirect%40vaina.lt/metadata.json) (located at `~/.local/share/gnome-shell/extensions/unredirect@vaina.lt/metadata.json`).
