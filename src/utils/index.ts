export default {
  respond(ctx, props) {
    ctx.body = {
      errCode: props.errCode || 200,
      errMsg: props.errMsg || 'ok',
      data: props.data || null,
    }
  },
  
}