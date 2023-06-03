export const AppInfo = {
  AppName: "vuejs-webapp-sample",
  AppDeveloper: "ybkuroki",
  GithubLink: "https://github.com/ybkuroki/vuejs-webapp-sample"
};

const api = "/api"
const apiAuthBase = api + "/auth"

export const ApiBook = api + "/books"
export const ApiCategory = api + "/categories"
export const ApiFormat = api + "/formats"

export const apiAuth = {
  LoginStatus: apiAuthBase + "/loginStatus",
  LoginAccount: apiAuthBase + "/loginAccount",
  Login: apiAuthBase + "/login",
  Logout: apiAuthBase + "/logout"
}