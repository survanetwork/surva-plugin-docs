---
sidebar_position: 10
---

# Default flags

For default flags, the commands are nearly identical to the ones to set flags for the current world. Just add `defaults` behind `/worlds` and use the commands from [set](./set), [control lists](./control-list) and [unset](./unset).

Permission: `worlds.admin.defaults`

Examples:

`/worlds defaults set pvp false` - Disable PvP by default  
`/worlds defaults set command black` - Allow executing commands except those which are added to the control list (blacklist mode) by default  
`/worlds defaults set command list add me` - Add the `me` command to default command control list  
`/worlds defaults unset fly` - Don't allow or forbid flying as default like the plugin wasn't there
