"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const userExist = app.middleware.userExist();
  router.get("/", controller.home.index);
  router.post("/api/user/register", controller.user.register);
  router.post("/api/user/login", controller.user.login);
  router.post("/api/user/logout", controller.user.logout);
  router.post("/api/user/detail", userExist, controller.user.detail);
  router.post("/api/user/edit", userExist, controller.user.edit);
  router.post("/api/house/hot", userExist, controller.house.hot);
  router.post("/api/house/search", userExist, controller.house.search);
  router.post("/api/house/detail", userExist, controller.house.detail);
  router.post("/api/commons/cities", userExist, controller.commons.cities);
  router.post("/api/comment/add", userExist, controller.comment.add);
  router.post("/api/comment/list", userExist, controller.comment.list);
};
