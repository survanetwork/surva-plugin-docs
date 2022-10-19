---
sidebar_position: 1
---

# Concepts of plugin features

Everything in the Worlds plugin is controlled by **flags**. Some flags are build, pvp, damage, fly, command, for example.

There are also different **types of flags**. Some flags like permission or game mode are set to a custom value. Most other flags are either set to true/false for enable or disable, or provide control list functionalty and can therefore be set to true/false/white/black (white for whitelist, black for blacklist behaviour of the control list).

**Flags** can be set on the **default** level (used when there is nothing set in a world) or in an individual world (overwriting the default value).

**Control lists** contain a set of things you want to control, e.g. block ID's at the build flag or command names at the command flag. When a flag is set to 'white', the control list will be used as a whitelist and only blocks which are added to the list may be placed/broken. When set to 'black', it will be used as a blacklist, so e.g. commands which are added to the list may not be executed in this world.
