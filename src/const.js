
export const AppInfo = {
  AppName: "vuejs-webapp-sample",
  AppDeveloper: "ybkuroki",
  GithubLink: "https://github.com/ybkuroki/vuejs-webapp-sample"
};

const api = "/api"
const apiBookBase = api + "/book"
const apiMasterBase = api + "/master"
const apiAccountBase = api + "/account"

export const ApiBook = {
  Base: apiBookBase + "/get",
  List: apiBookBase + "/list",
  Search: apiBookBase + "/search",
  Create: apiBookBase + "/new",
  Edit: apiBookBase + "/edit",
  Delete: apiBookBase + "/delete"
}

export const ApiMaster = {
  Category: apiMasterBase + "/category",
  Format: apiMasterBase + "/format"
}

export const ApiAccount = {
  LoginStatus: apiAccountBase + "/loginStatus",
  LoginAccount: apiAccountBase + "/loginAccount",
  Login: apiAccountBase + "/login",
  Logout: apiAccountBase + "/logout"
}