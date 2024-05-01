---
sidebar_position: 3
---

# Create new world

## /worlds create &#60;worldname&#62;

Create a new world.

| Info          | Value                      |
| ------------- | -------------------------- |
| Permission    | worlds.admin.create        |
| Short command | /ws cr &#60;worldname&#62; |

Examples:

`/worlds create mycoolworld` - Create a world with the name "mycoolworld"

## /worlds create &#60;worldname&#62; &#60;type&#62;

Create a world with the given name and world generator type (can be `NORMAL`, `FLAT`, `NETHER`, or any other valid generator registered by a plugin).

| Info          | Value                                     |
| ------------- | ----------------------------------------- |
| Permission    | worlds.admin.create                       |
| Short command | /ws cr &#60;worldname&#62; &#60;type&#62; |

Examples:

`/worlds create netherworld NETHER` - Create a world with the name "netherworld" and the type `NETHER`
