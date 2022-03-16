import { NextApiResponse } from "next";
import { ProtectedNextApiRequest } from "middlewares/withProtect";

const withRoles =
  (...roles: string[]) =>
  (handler: Function) =>
  (req: ProtectedNextApiRequest, res: NextApiResponse) => {
    // Chceking if user has the roles
    if (roles.includes(req.user.role)) return handler(req, res);
    return res.status(403).json({ success: false, error: "Forbidden" });
  };

export default withRoles;
