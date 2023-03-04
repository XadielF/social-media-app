const jsend = require("../utils/jsend");
const ProductModel = require("../../models/product.model");

exports.create = (req, res) => {
    const newProduct = new ProductModel(req.body);

    newProduct.save((err, product) => {
        if (err) {
            return res.status(500).send(
                jsend(500, {
                    message: "Some error occured and a new Product could not be created!",
                })
            );
        }

        res.status(201).send(
            jsend(201, {
                product._id,
            })
        );
    });
};