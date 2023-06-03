# vuejs-webapp-sample

[![license](https://img.shields.io/github/license/ybkuroki/vuejs-webapp-sample?style=for-the-badge)](https://github.com/ybkuroki/vuejs-webapp-sample/blob/master/LICENSE)
[![workflow](https://img.shields.io/github/actions/workflow/status/ybkuroki/vuejs-webapp-sample/check.yml?label=check&logo=github&style=for-the-badge)](https://github.com/ybkuroki/vuejs-webapp-sample/actions?query=workflow%3Acheck)
[![release](https://img.shields.io/github/release/ybkuroki/vuejs-webapp-sample?style=for-the-badge&logo=github)](https://github.com/ybkuroki/vuejs-webapp-sample/releases)

## Preface
This sample project uses [Vue.js](https://vuejs.org/index.html) and [Quasar Framework](https://quasar.dev/). It provides only Web UI. So, I recommend using the [golang-webapp-sample](https://github.com/ybkuroki/golang-webapp-sample) project as Back End Application.

## Install
Perform the following steps:
1. Download and install [Node.js](https://nodejs.org/en/).
1. Download and install [Visual Studio Code(VS Code)](https://code.visualstudio.com/).
1. Install [vetur](https://github.com/vuejs/vetur) extension for VS Code.
1. Clone this repository.
1. Download and install npm packages.
    ```bash
    npm install
    ```

## Starting Server
Perform the following steps:
1. Perform [golang-webapp-sample](https://github.com/ybkuroki/golang-webapp-sample) project.
1. Start the development server.
    ```bash
    npm run dev
    ```
1. When startup is complete, the console shows the following message:
    ```
    > vuejs-webapp-sample@3.0.0 dev
    > vite --mode development
    
    
    VITE v4.2.1  ready in 1362 ms
    
    ➜  Local:   http://localhost:3000/
    ➜  press h to show help
    ```
1. Access the following URL in the Chrome.  
[http://localhost:3000](http://localhost:3000)

## Creating a Production Build
Perform the following command:
```bash
npm run build
```

## Project Map
The following figure is the map of this sample project.

```
- vuejs-webapp-sample
  + public          … Contains resouces of this project.
  - src
    + assets        … Contains source codes that Webpack doesn't need to build.
    + components    … Contains components of Vue.
    + api           … Implement the common library for Ajax.
    + router        … Define Vue Router.
    + store         … Define Vuex
    + types         … Define types of the view models.
    + views         … Define views of this project.
    - App.vue       … Define a base view of this project.
    - main.js       … Entry point.
  - package.json    … Define npm packages.
```

## Views
There are the following views in this sample.

| View Name  | File Name         | Description                                                     |
| :--------- | :---------------- | :-------------------------------------------------------------- |
| Login View | ``LoginView.vue`` | The view for session authentication with username and password. |
| Home View  | ``HomeView.vue``  | The view showing search results.                                |
| About View | ``AboutView.vue`` | The view showing this application information.                  |

## Libraries
This sample uses the following library.

| Library Name     | Version | Description                      |
| :--------------- | :-----: | :------------------------------- |
| vite             |  4.1.4  | The tool for Vue.js Development. |
| Vue.js           | 3.2.47  | JavaScript Framework             |
| Vue Router       |  4.1.6  | Library for Routing.             |
| Pinia            | 2.0.32  | Flux library for Vue.js          |
| Aixos            |  1.4.0  | library for Ajax.                |
| Quasar Framework | 2.11.9  | CSS Framework                    |

## Contribution
Please read CONTRIBUTING.md for proposing new functions, reporting bugs and submitting pull requests before contributing to this repository.

## License
The License of this sample is *MIT License*.

