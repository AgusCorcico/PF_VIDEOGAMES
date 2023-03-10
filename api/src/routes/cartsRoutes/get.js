const { Router } = require("express");
const router = Router();

const { User, Cart, Productcart } = require("../../db");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let cart = await Cart.findOne({
      include: [
        {
          model: User,
          where: { id: id },
        },
        {
          model: Productcart,
        },
      ],
      order: [[Productcart, "createdAt", "DESC"]],
    });
    /*    console.log(cart.total); */
    res.send(cart);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
