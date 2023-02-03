const imageService = require("../service/imageService");

module.exports = imageController = {
    connectImage : async (req,res) => {
        const image = imageService.imageService.createImage()
    },
    getImageByItemId : async (req,res) => {
        const image = await imageService.imageService.getImageByItemId(req.params.item_id);

        return res.status(200).json(image)
    }

}