import { NextApiResponse } from "next";
import withProtect, { ProtectedNextApiRequest } from "middlewares/withProtect";
import withRoles from "middlewares/withRoles";
import connect from "utils/connectDb";
import Brand from "models/Brand";
import Directory from "models/Directory";

const handler = async (req: ProtectedNextApiRequest, res: NextApiResponse) => {
  const allowed = ["POST", "PUT", "DELETE"];
  if (!allowed.includes(req.method as string))
    return res.status(405).json({ success: false, error: "Method not allowed" });

  if (req.method !== "POST" && !req.query.id)
    return res.status(400).json({ success: false, error: "Please provide a brand id" });

  await connect();
  try {
    // Adding a new brand
    if (req.method === "POST") {
      // Validating sellers
      if (req.body.sellers.length > 0)
        for (const seller of req.body.sellers)
          if (!(await Directory.findById(seller)))
            return res.status(404).json({ success: false, error: "Seller not found" });

      const brand = await Brand.create({
        name: req.body.name,
        logo: req.body.logo,
        images: req.body.images,
        description: req.body.description,
        sellers: req.body.sellers,
      });
      return res.status(200).json({ success: true, brand });
    }

    const brand = await Brand.findById(req.query.id);
    if (!brand) return res.status(404).json({ success: false, error: "Brand not found" });
    // Updating a brand
    else if (req.method === "PUT") {
      // Validating sellers
      if (req.body.sellers.length > 0)
        for (const seller of req.body.sellers)
          if (!(await Directory.findById(seller)))
            return res.status(404).json({ success: false, error: "Seller not found" });
      if (req.body.name !== undefined) brand.name = req.body.name;
      if (req.body.description !== undefined) brand.description = req.body.description;
      if (req.body.images !== undefined) brand.images = req.body.images;
      if (req.body.logo !== undefined) brand.logo = req.body.logo;
      if (req.body.sellers !== undefined) brand.sellers = req.body.sellers;
      await brand.save();
      return res.status(200).json({ success: true, brand });
    }

    // Deleting a brand
    else if (req.method === "DELETE") {
      await brand.remove();
      return res.status(200).json({ success: true, brand });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};
export default withProtect(withRoles("Admin", "Product Admin")(handler));
