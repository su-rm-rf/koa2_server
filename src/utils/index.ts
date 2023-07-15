export default {
  respond(props) {
    return {
      errCode: props.errCode || 200,
      errMsg: props.errMsg || 'ok',
      data: props.data || null,
    }
  },
  
}