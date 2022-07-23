import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import Pet from "models/Pet.model";
import { NextApiResponse } from "next";
import { Role } from "types/user";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  const allowed = ["POST", "PUT", "DELETE"];
  if (!allowed.includes(req.method as string))
    return res.status(405).json({ success: false, error: "Method not allowed" });

  if (req.method !== "POST" && !req.query.id)
    return res.status(400).json({ success: false, error: "Please provide a pet id" });

  await connect();
  try {
    // Adding a new pet
    if (req.method === "POST") {
      const pet = await Pet.create({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        breeds: req.body.breeds,
      });
      return res.status(200).json({ success: true, pet });
    }

    const pet = await Pet.findById(req.query.id);
    if (!pet) return res.status(404).json({ success: false, error: "Pet not found" });
    // Updating a pet
    else if (req.method === "PUT") {
      if (req.body.name !== undefined) pet.name = req.body.name;
      if (req.body.description !== undefined) pet.description = req.body.description;
      if (req.body.image !== undefined) pet.image = req.body.image;
      if (req.body.breeds !== undefined) pet.breeds = req.body.breeds;
      await pet.save();
      return res.status(200).json({ success: true, pet });
    }

    // Deleting a pet
    else if (req.method === "DELETE") {
      await pet.remove();
      return res.status(200).json({ success: true, pet });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(withRoles(Role.ADMIN, Role.PRODUCT_ADMIN)(handler));
