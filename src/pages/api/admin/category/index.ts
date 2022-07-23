import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import Category from "models/Category.model";
import { NextApiResponse } from "next";
import { Role } from "types/user";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  const allowed = ["POST", "PUT", "DELETE"];
  if (!allowed.includes(req.method as string))
    return res.status(405).json({ success: false, error: "Method not allowed" });

  if (req.method !== "POST" && !req.query.id)
    return res.status(400).json({ success: false, error: "Please provide a category id" });

  await connect();
  try {
    // Adding a new category
    if (req.method === "POST") {
      for (const name of req.body.subCategories) {
        const subCategory = await Category.findOne({ name });
        if (!subCategory)
          return res.status(404).json({ success: false, error: "Subcategory not found" });
      }
      const category = await Category.create({
        name: req.body.name,
        type: req.body.type,
        pet: req.body.pet,
        image: req.body.image,
        subCategories: req.body.subCategories,
        description: req.body.description,
      });
      return res.status(200).json({ success: true, category });
    }

    const category = await Category.findById(req.query.id);
    if (!category) return res.status(404).json({ success: false, error: "Category not found" });
    // Updating a category
    else if (req.method === "PUT") {
      for (const name of req.body.subCategories) {
        const subCategory = await Category.findOne({ name });
        if (!subCategory)
          return res.status(404).json({ success: false, error: "Subcategory not found" });
      }
      if (req.body.name !== undefined) category.name = req.body.name;
      if (req.body.description !== undefined) category.description = req.body.description;
      if (req.body.image !== undefined) category.image = req.body.image;
      if (req.body.pet !== undefined) category.pet = req.body.pet;
      if (req.body.type !== undefined) category.type = req.body.type;
      if (req.body.subCategories !== undefined) category.subCategories = req.body.subCategories;
      await category.save();
      return res.status(200).json({ success: true, category });
    }

    // Deleting a category
    else if (req.method === "DELETE") {
      await category.remove();
      return res.status(200).json({ success: true, category });
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

export default withProtect(withRoles(Role.ADMIN, Role.PRODUCT_ADMIN)(handler));
