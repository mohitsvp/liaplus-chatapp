

export abstract class BaseController {
    protected sendResponse<T>(res:any, status: number, data:T, message: string) {
        return res.status(status).json({
            "success" : true,
            message,
            data,
          });
    }

    protected sendError(res: any, status: number, error: Error) {
        return res.status(status).json({
          "success" : false,
          error : error.message,
          stack : error.stack
        });
    }
}