# vuejs-webapp-sample

## Preface
This sample project uses [Vue.js](https://vuejs.org/index.html) and [Semantic UI](https://semantic-ui.com/). It provides only Web UI. So, I recommend using the [springboot-webapp-sample](https://github.com/ybkuroki/springboot-webapp-sample) project as Back End Application.

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
1. Perform [rails-webapp-sample](https://github.com/ybkuroki/rails-webapp-sample) project.
1. Start the development server.
    ```bash
    npm run serve
    ```
1. When startup is complete, the console shows the following message:
    ```
    DONE Compiled successfully in *****ms
    
    App running at:
    - Local:   http://localhost:3000/
    - Network: http://192.168.***.***:3000/
    
    Note that the development build is not optimized.
    To create a production build, run npm run build.
    ```
1. Access the follwing URL in the Chrome.  
[http://localhost:3000](http://localhost:3000)

1. Login userName and Password is ``test``.

## Creating a Production Build
Perform the following command:
```bash
npm run build
```

## Project Map
The follwing figure is the map of this sample project.

```
- vuejs-webapp-sample
  + public          … Contains resouces of this project.
  - src
    + assets        … Contains source codes that Webpack doesn't need to build.
    + components    … Contains components of Vue.
    + lib           … Implement the common library for Ajax.
    + model         … Define View Models.
    + router        … Define Vue Router.
    + store         … Define Vuex
    + views         … Define views of this project.
    - app.vue       … Define a base view of this project.
    - main.js       … Entry point.
  - babel.config    … Babel Configuration.
  - package.json    … Define npm packages.
  - vue.config.js   … Vue CLI Configuration.
```

## Views
There are the following views in this sample.

|View Name|File Name|Description|
|:---|:---|:---|
|Login View|``login.vue``|The view for session authentication with username and password.|
|Top View|``top.vue``|The view showing search results.|
|Regist View(Modal)|``regist.vue``|The view to register a new book data.|
|Edit View(Modal)|``edit.vue``|The view to edit a book data.|
|Detail View(Modal)|``detail.vue``|The view for showing a book data.|

## Components
There are the following components in this sample.

|Component Name|File Name|Description|
|:---|:---|:---|
|Button|``commandbutton.vue``|The component that shows a button|
|Input|``inputbox.vue``|The component that shows a item name and input box.|
|Label|``labelgroup.vue``|The component that shows a item name and data.|
|Message|``message.vue``|The component that shows messages.|
|Modal|``modal.vue``|The component that shows a modal dialog.|
|Navigation Bar|``navbar.vue``|The component that shows a navigation bar.|
|Pagenation|``paginate.vue``|The component that shows a pagenation.|
|Select Box|``selectbox.vue``|The component that shows a select box.|

The pagination component refer to [this project](https://github.com/lokyoung/vuejs-paginate/blob/master/src/components/Paginate.vue).

## Libraries
This sample uses the following library.

|Library Name|Version|Description|
|:---|:---:|:---|
|vue-cli|3.5.3|The tool for Vue.js Development.|
|Vue.js|2.6.10|JavaScript Framework|
|Vue Router|3.0.2|Library for Routing.|
|Vuex|3.1.0|Flux library for Vue.js|
|superagent|5.0.2|library for Ajax.|
|semantic-ui-css|2.4.1|CSS Framework|

## License
The License of this sample is *MIT License*.

