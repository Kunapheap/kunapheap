const itemService = require('../service/itemService')

module.exports = itemController = {
    getColorByItem : async (req,res) => {
        const color = await itemService.getColorByItem(req.params.product_id)
        return res.status(200).send(color)
    },
    getAllItem : async (req,res) => {
        const item = await itemService.getAllItem()
        res.status(200).send(item);
    }
}