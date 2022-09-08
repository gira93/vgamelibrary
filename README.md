# VGameLibrary

VueJS Games Library PWA with IndexedDB (DexieJS) as local database; it supports CSV/JSON export and import.

## Why
Made this mainly for myself since it happens that I'm out and about buying retrogames and I need to quickly check if I have that GameBoy cartridge at home or not.

Also I have fun making small and simple PWAs with VueJS.

## What can you do with this
This is a PWA hosted on GH Pages so you can visit [https://gira93.github.io/vgamelibrary/](https://gira93.github.io/vgamelibrary/) to launch it, it can be installed on your phone if you follow the prompt by Chrome (or Safari?).

Once installed you have your personal game library on your phone, it's offline ready since there's no server, everything is saved in IndexedDB (local site storage).

Just add your platform and then your games, for a first massive import I recommend using the CSV import feature; create a CSV using this format:

```csv
name,platform
"Game 1","GameBoy"
"Game 2","GameBoyColor"
"Game 3","GameBoy"
```

If you've previously used to store your library in Excel files you can easily export them in this format.

After the first import I advise to use the JSON export / import feature to keep the DB backed up and synced to other devices; it's way faster and stable than CSV.

Once in a while you can tap the "Export JSON" button and save the resulting file on Drive or wherever you want.

You can browse your library and search for games by name and platform.

## Development
This application has been developed using VueJS 3 and Typescript, the database is stored on IndexedDB and DexieJS is used as a wrapper.
It's built using Vite.

Following is the standard Readme for Vue + Vite projects

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
