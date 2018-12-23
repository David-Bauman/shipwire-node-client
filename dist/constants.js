"use strict";

module.exports = {
  GET: "GET",
  DELETE: "DELETE",
  PUT: "PUT",
  POST: "POST",
  replaceParams: function replaceParams(route, replacements) {
    var newRoute = route.slice();
    var i = 0;
    return newRoute.replace(/(:[^\/]+)/g, function (val) {
      return replacements[i++];
    });
  }
};