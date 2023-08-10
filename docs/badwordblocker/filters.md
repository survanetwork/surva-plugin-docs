---
sidebar_position: 1
---

# Available filters

BadWordBlocker checks every message using different types of filters. They are described in detail on this page.

## Swear word filter

This filter checks if the message contains any forbidden word defined in the config file.

Example:

```
some swear word! -> blocked
```

## Duplicate filter

The duplicate filter blocks duplicate messages (classic spam) which are sent into the chat multiple times with the same text.

Example:

```
hi
hi -> blocked
hi -> blocked
```

## Speed filter

Another component to prevent spam messages is the speed filter, which introduces a time limit for sending messages
and prevents sending lots of spam messages in a short time.

Example:

```
join
my -> blocked (if sent immediately after the first one)
server -> blocked (if sent immediately after the first one)
```

## Caps lock filter

The caps lock filter blocks messages which consist mostly of uppercase letters.

Example:

```
HELLO I AM HERE!!!1! -> blocked
```

## Web address filter

The web address filter blocks web addresses like IP addresses, websites or domain names, or e-mail addresses from being sent into the chat.

Example:

```
join my server on 123.123.123.123:19132! -> blocked
go to mywebsite.com -> blocked
my friend's email address is johndoe@example.com -> blocked
```
