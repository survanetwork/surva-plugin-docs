---
sidebar_position: 8
---

# Control lists

Learn more about control lists [here](./set#control-list-flags).

## /worlds set &#60;flag&#62; list add &#60;item&#62;

Add an item to a control list

Examples:

`/worlds set build list add 5` - Add block ID 5 (wood planks) to build/break control list of this world

## /worlds set &#60;flag&#62; list remove &#60;item&#62;

Remove an item from a control list

Examples:

`/worlds set command list remove me` - Remove the `me` command from the commands control list in this world

## /worlds set &#60;flag&#62; list reset

Reset a control list (remove all items)

Examples:

`/worlds set build list reset` - Reset build control list (remove all block ID's) for this world

## /worlds set &#60;flag&#62; list show

Show items of a control list

Examples:

`/worlds set command list show` - List commands which are on the command control list
