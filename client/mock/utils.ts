export const wapper = (data?: any, options?: {
  status?: number,
  delay?: number
}) => {
  return (req: any, res: any) => {
    setTimeout(() => {
      res.json({
        status: options?.status || 200,
        data
      })
    }, options?.delay || 0)
  }
}