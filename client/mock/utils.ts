export const wapper = (data?: any, status = 200) => {
  return (req: any, res: any) => {
    res.json({
      status,
      data
    })
  }
}