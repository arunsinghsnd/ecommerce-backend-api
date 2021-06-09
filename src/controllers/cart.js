const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
  Cart.findOne({ userId: req.user.id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      // if cart already exists then update cart by quantity
      Cart.findOneAndUpdate(
        { user: req.user._id },
        {
          $push: {
            cartItems: req.body.cartItems,
          },
        }
      ).exec((error, _cart) => {
        if (error) return res.status(400).json({ error });
        if (_cart) return res.status(201).json({ _cart });
      });
      //res.status(200).json({ message: cart });
    } else {
      // if cart does not exists then create a new cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });

        if (cart) return res.status(201).json({ cart });
      });
    }
  });
};
