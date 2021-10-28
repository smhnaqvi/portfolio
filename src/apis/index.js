import API from "./axios";

const Request = {
  getGitHubProfile: () => {
    return API.get("https://api.github.com/users/smhnaqvi");
  }
};

export default Request;
