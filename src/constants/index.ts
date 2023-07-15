export const errorType = {
  USERNAME_OR_PASSWORD_IS_INCORRECT: '用户名或密码错误',
  SIGNIN_IS_REQUIRED: '需要登录',
  USER_NOT_EXISTS: '用户不存在',
  Token_Expired_Error: '登录失效，需要重新登录',
}

export const authError = {
  10031: '登录失效，需要重新登录', // token 失效
  10032: '您太久没登录，请重新登录~', // token 过期
  10033: '账户未绑定角色，请联系管理员绑定角色',
  10034: '该用户未注册，请联系管理员注册用户',
  10035: 'code无法获取对应第三方平台用户',
  10036: '该账户未关联员工，请联系管理员做关联',
  10037: '账号已无效',
  10038: '账号未找到',
}