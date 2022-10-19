---
sidebar_position: 5
---

# Teleporting

## /worlds teleport <worldname\>

Teleport into a world

| Info          | Value                      |
| ------------- | -------------------------- |
| Permission    | worlds.admin.teleport.self |
| Short command | /worlds tp <worldname\>    |

Examples:

`/worlds teleport mycoolworld` - Teleport into the world with the name "mycoolworld"

While the permission `worlds.admin.teleport.self` is usually used for admins, allowing them to teleport into any world, you can also allow players to teleport themself into specific worlds. To allow teleporting into the world "MyCoolWorld", e.g., assign the permission `worlds.teleport.world.mycoolworld` (world name must be written lowercase!) to your players.

## /worlds teleport <player\> <worldname\>

Teleport another player into a world

| Info          | Value                             |
| ------------- | --------------------------------- |
| Permission    | worlds.admin.teleport.self        |
| Short command | /worlds tp <player\> <worldname\> |

Examples:

`/worlds teleport coolplayer mycoolworld` - Teleport player "coolplayer" into the world with the name "mycoolworld"

:::tip

This command is useful if you want to teleport players using plugins like Slapper or AllSigns. For Slapper, e.g., the command `/worlds teleport {player} testworld` can be used to teleport the hitting player to "testworld".

:::
