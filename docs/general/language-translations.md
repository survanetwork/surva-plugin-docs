---
sidebar_position: 3
---

# Language and translations

## Changing the default language

To change the default language of the plugin, open the "config.yml" file in the plugin config folder, located unter `plugin_data`. It should contain those lines:

```yaml
# Language of the plugin messages
# Possible options are: en (English), de (German), fr (French), ...
language: "en"
```

Change the value in quotes after "language:" into the language you want to use. For example, to set the plugin on German, it should look like this:

```yaml
# Language of the plugin messages
# Possible options are: en (English), de (German), fr (French), ...
language: "de"
```

## Player language detection

In the latest version, all of our plugins support automated detection of the player's language set in Minecraft: Bedrock Edition. It is enabled by default.

If the player's language can be detected and translations are available, they will be used instead of the default language.

To disable this behaviour and always use the default language, change this config option to `false`:

```yaml
# Try to automatically detect the player's language and send translated messages for each player
# (language set above is used if player's language can't be detected)
autodetectlanguage: true
```

## Contributing to translations

You're always welcome to translate the plugin into languages which don't exist yet or correct translations which already exist.

We use [Transifex](https://explore.transifex.com/surva/) for translating our open source plugin projects, you're able login with your existing GitHub account there. You can contribute to the translations on the [translation project page](https://explore.transifex.com/surva/)!

If you want to create translations for a language we haven't added to the project yet, please [send an e-mail 📫 to our open source team](mailto:opensource@surva.net). We'll add the additional language as soon as possible, so you can begin translating the plugin.
