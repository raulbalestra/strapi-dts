module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.request.url.startsWith("/upload") && ctx.request.method === "POST") {
      const file =JSON.parse(ctx.request.body.fileInfo);
        if (!file.alternativeText || file.alternativeText.trim() === "") {
          return ctx.badRequest("Alternative text is required,Try Again...");
        }
      }
    await next();
  };
};
