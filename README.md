# build-parcel

[![apm](https://flat.badgen.net/apm/license/build-parcel)](https://atom.io/packages/build-parcel)
[![apm](https://flat.badgen.net/apm/v/build-parcel)](https://atom.io/packages/build-parcel)
[![apm](https://flat.badgen.net/apm/dl/build-parcel)](https://atom.io/packages/build-parcel)
[![CI](https://img.shields.io/github/workflow/status/idleberg/atom-build-parcel/CI?style=flat-square)](https://github.com/idleberg/atom-build-parcel/actions)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-parcel)](https://david-dm.org/idleberg/atom-build-parcel?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `parcel`, the zero configuration build tool for the web.

## Installation

### apm

Install `build-parcel` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-parcel`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `build-parcel`:

```bash
$ git clone https://github.com/idleberg/atom-build-parcel build-parcel
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

You should now be setup to build the package:

```bash
$ yarn build || npm run build
```

## Usage

### Prerequisites

Make sure [Parcel](https://parceljs.org/) is installed properly and that `parcel` is in your PATH [environmental variable](http://superuser.com/a/284351/195953).

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

- Parcel: build
- Parcel: serve
- Parcel: watch

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Select active target**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Build script**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

**Jump to error**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> or <kbd>F4</kbd>

**Toggle build panel**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

## License

This work is licensed under the [The MIT License](LICENSE).
