export default {
  'post /api/common/cities': (req: any, res: any) => {
    res.json({
      status: 200,
      data: [[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]]
    })
  }
}