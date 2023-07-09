export default {
  respond(props) {
    return {
      errCode: 200,
      errMsg: props.errMsg || 'ok',
      data: props.data || null,
    }
  },
  
}