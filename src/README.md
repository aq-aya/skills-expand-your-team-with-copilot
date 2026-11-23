# Mergington High School Activities

A super simple website application that allows students to view and sign up for extracurricular activities.

## Features

- View all available extracurricular activities
- Sign up for activities
- Share activities with friends

Activities can optionally have a `difficulty` field set to `Beginner`,
`Intermediate`, or `Advanced`. Leave it out for activities suitable for all
levels. The difficulty filter's **All** option shows only those activities;
**Any difficulty** shows activities regardless of level.

## Sharing Activities

Every activity card has a row of **Share** buttons near the bottom:

- **f** – share on Facebook
- **𝕏** – share on X (Twitter)
- **💬** – share on WhatsApp
- **✉** – send an email to a friend
- **🔗** – copy a message and link so you can paste it anywhere (a ✔ appears when copied)

To add or remove a sharing site, edit the list at the top of `src/static/share.js`.

## Development Guide

For detailed setup and development instructions, please refer to our [Development Guide](../docs/how-to-develop.md).
