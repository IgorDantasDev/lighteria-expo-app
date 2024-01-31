<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<h1 align="center">EasyPass</h1>

<p align="center">
  <a href="#warning-about">About</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#wrench-versions">Versions</a> &#xa0; | &#xa0;
  <a href="#floppy_disk-starting-our-api">API</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting-our-project">Starting</a> &#xa0; | &#xa0;
  <a href="#file_folder-folder-structure">Folder Structure</a> &#xa0; | &#xa0;
  <a href="#construction_worker-develops">Develops</a>
</p>
<h2 align="left"></h2>

###

<img align="right" height="325" src="https://vitejs.dev/logo-with-shadow.png"  />

###

### :rocket: Technologies

###

<div align="left">
  <a href="https://reactjs.org">
  <img width="50" title="React" alt="React logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
</a> &#xa0; &#xa0;
<a href="https://www.typescriptlang.org">
  <img width="50" title="Typescript" alt="Typescript Logo" src="https://raw.githubusercontent.com/maurodesouza/maurodesouza/master/assets/typescript-logo.svg">
</a> &#xa0; &#xa0;
<a href="https://www.javascript.com">
  <img width="50" title="Javascript" alt="Javascript logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
</a> &#xa0; &#xa0;
<a href="https://styled-components.com">
  <img width="50" title="Styled Components" alt="Styled Components Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/styled-components/styled-components.png">
</a> &#xa0; &#xa0;
<a href="https://html.com">
  <img width="50" title="HTML" alt="Html5 logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
</a> &#xa0; &#xa0;
<a href="mui.com">
  <img width="50" title="MaterialUI" alt="Materialui logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg">
</a> &#xa0; &#xa0;
<a href="mui.com">
  <img width="50" title="MaterialUI" alt="Tailwindcss logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg">
</a> &#xa0; &#xa0;
<a href="https://eslint.org">
  <img  width="50" title="Eslint" alt="Eslint Logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png">
</a> &#xa0; &#xa0;

<a href="https://prettier.io">
  <img width="50" title="Prettier" alt="Prettier Logo" src="https://prettier.io/icon.png">
</a>

</div>

###

### :wrench: Versions

###

- [VITE](vitejs.dev) - Version ~> "^3.0.7"
- [ReactJS](reactjs.org) - Version ~> "^18.2.0"
- [TailwindCSS](tailwindcss.com) - Version ~> "^3.1.8"
- [Styled Components](styled-components.com) - Version ~> "^5.3.5"
- [TailwindCSS Styled Components](github.com/MathiasGilson/tailwind-styled-component) - Version ~> "^2.1.8"
- [React Router Dom](reactrouter.com/) - Version ~> "^6.3.0"
- [MUI: Material UI](mui.com) - Version ~> "^5.10.3"
<h3 align="right">This project was created from VITE</h3>

###

## :warning: About

###

<p align="left">This project was developed to control administrators, owners, doormen and visitors of a condominium, it contains the features:<br>-Create accounts for all types of audiences.<br>-User management such as: create, delete, edit...<br>-Generate invitation links for guests or deliveries.</p>

###

## :floppy_disk: Starting our API

First clone the project API

```bash
  https://github.com/Easy-Pass/easy-pass-api
```

Enter the project directory

```bash
  cd easy-pass-api
```

Install the dependencies

```bash
  npm install
```

Generate a local env

```bash
  npm run env local
```

Add Localhost to API whitelist : "http://localhost:5173"

```javascript
const whitelist = [
  "http://localhost:5173",  <~~
];
```

Start the server

```bash
  npm run dev
```

###

## :checkered_flag: Starting our project

First clone the project

```bash
https://github.com/Easy-Pass/easy-pass-admin.git
```

Enter the project directory

```bash
  cd easy-pass-admin
```

Install the dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

## :file_folder: Folder Structure

```plaintext
.
├─ src                   # Source files
|  ├─ @types             # Contains all global definitions of types and interfaces
|  ├─ assets             # Contains Js bundles assets. e.g: icons, splash, images etc...
|  ├─ components         # Contains all global react components
|  ├─ constants          # Constants files
|  ├─ context            # Contains global context of the website
|  ├─ hooks              # Contains general hooks
|  ├─ pages              # Contains application pages
      ├─ SignedInPages      # Authenticated area pages
      ├─ SignInPages        # Public area pages
|  ├─ utils              #
|  ├─ services           # Contains external and api services
|  ├─ main.tsx              # Routes, context and react rendering
.
├─ index.html            # Aplication entry
.
├─ vite.config.ts        # Config VITE plugins and import configuration
.
├─ tailwind.config.json  # Tailwind styling theme
.
└─ README.md
```

## :construction_worker: Developers

| [<img src="https://avatars.githubusercontent.com/u/30023737?v=4" width=115><br><sub>Nahim Terrazas Parada</sub>](https://github.com/nahimdhaney) | [<img src="https://avatars.githubusercontent.com/u/43889996?v=4" width=115><br><sub>André Kraüss</sub>](https://github.com/Maverick5000) | [<img src="https://avatars.githubusercontent.com/u/73763375?v=4" width=115><br><sub>JeanSilvany</sub>](https://github.com/JeanSilvany) | [<img src="https://avatars.githubusercontent.com/u/75001910?v=4" width=115><br><sub>Ibrahim Dajani</sub>](https://github.com/IbraDajani) | [<img src="https://avatars.githubusercontent.com/u/106574167?v=4" width=115><br><sub>Leonardo Esteves</sub>](https://github.com/Leeosteves) |
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
