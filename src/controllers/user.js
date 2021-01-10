// controllers/users.js

/**
 * @desc 注册
 */
exports.signUp = async (ctx) => {
  const dataObj = ctx.request.body;

  await dbHelper.signUp(dataObj).then((res) => {
    const token = tokenHelper.createToken(res);
    const { password, ...restData } = res._doc;
    ctx.res.setHeader('Authorization', token);
    ctx.body = {
      token,
      ...restData,
    };
  }).catch((err) => {
    throw new ApiError(err.name, err.message);
  });
};

/**
 * @desc 登录
 */
exports.signIn = async (ctx) => {
  const dataObj = ctx.request.body;

  await dbHelper.signIn(dataObj).then((res) => {
    const token = tokenHelper.createToken(res);
    const { password, ...restData } = res;
    ctx.res.setHeader('Authorization', token);
    ctx.body = {
      token,
      ...restData,
    };
  }).catch((err) => {
    throw new ApiError(err.name, err.message);
  });
};
