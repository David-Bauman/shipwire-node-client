module.exports = {
  GET: "GET",
  DELETE: "DELETE",
  PUT: "PUT",
  POST: "POST",
  replaceParams: function(route, replacements) {
    let newRoute = route.slice();
    let i = 0;
    return newRoute.replace(/(:[^\/]+)/g, val => {
      return replacements[i++];
    });
  }
}