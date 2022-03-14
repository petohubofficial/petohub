import { NextApiResponse } from "next";
import { ProtectedNextApiRequest } from "middlewares/withProtect";

const withRoles =
  (...roles: string[]) =>
  (handler: Function) =>
  (req: ProtectedNextApiRequest, res: NextApiResponse) => {
    if (roles.some((role) => req.user.roles.includes(role))) {
      return handler(req, res);
    }
    return res.status(403).json({ message: "Forbidden" });
  };

export default withRoles;
