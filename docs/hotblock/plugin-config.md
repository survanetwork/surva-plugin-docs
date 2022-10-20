---
sidebar_position: 2
---

# Configuring the plugin

After we've created the game world, we can set the config options of the plugin. Open the config.yml-file located in the PocketMine main folder > plugin_data > HotBlock.

We'll configure the most important options only. First, we need to set the name of the game world mentioned above:

```yaml
# Name of the world where the game is in
world: "world"
```

Optionally, you can limit the game area to two coordinates (pos1, pos2) between whose the game should be active. If you want to do so, uncomment or add (if it doesn't exist) the following part of your config file:

```yaml
# Area restriction, only enable the game between these two coordinate positions (uncomment to enable)
# If not uncommented, the whole world specified above will be used
area:
    pos1:
        x: -50
        y: 50
        z: -50
    pos2:
        x: 50
        y: 100
        z: 50
```

Also, you can configure other settings like how many players must be online that the block is active or how many coins the players get. They're all described in the config file.
