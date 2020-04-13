Disables unredirect fullscreen windows in gnome-shell to workaround https://bugzilla.redhat.com/show_bug.cgi?id=767397

(bug, when clicking on full screen windows goes through to windows underneath).

Install
-------

This command will grab this file from github:

```bash
ext=~/.local/share/gnome-shell/extensions; mkdir -p "$ext" && cd "$ext" && curl -LkSs https://api.github.com/repos/kazysmaster/gnome-shell-extension-disable-unredirect/tarball | tar -xvz --wildcards --strip 1 "kazysmaster-gnome-shell-extension-disable-unredirect-???????/unredirect@vaina.lt"
```

Then press ALT-F2 and enter ```r``` and press enter to restart gnome-shell.

In firefox visit extensions.gnome.org and enable the extension under "Installed Extensions".


