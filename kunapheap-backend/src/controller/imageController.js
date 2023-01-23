const imageService = require("../service/imageService");

module.exports = imageController = {
    connectImage : async (req,res) => {
        const image = imageService.imageService.createImage()
    }
}