const colorOnSizeService = require('../service/colorOnSizeService')

module.exports = colorOnSizeController = {
    getColor : async (req,res) => {
        const color = await colorOnSizeService.getColor(req.params.product_id)
        console.log(color)
        return res.status(200).send(color)
    }
}