const colorOnSizeService = require('../service/colorOnSizeService')
const { imageService } = require('../service/imageService')
const itemService = require('../service/itemService')
const productService = require('../service/productService')

module.exports = itemController = {
    getColorByItem : async (req,res) => {
        const color = await itemService.getColorByItem(req.params.product_id)
        return res.status(200).send(color)
    },
    getAllItem : async (req,res) => {
        const item = await itemService.getAllItem()
        res.status(200).send(item);
    },
    getItemById : async (req,res) => {

      const item = await itemService.getItemById(req.params.id);
      return res.status(200).send(item);
    },

    getItemByCategory : async (req,res) => {
      const items = await itemService.getItemByCategory(req.params.category);
      return res.status(200).send(items);

    },

    createItemImage : async (req,res) =>  {
        try {
            console.log(req.body);
            console.log(req.file);
            const link = await itemService.createItemImage(
              req.file.originalname,
              req.file.buffer,
            );
            return res.status(200).send({
              link : link,
            });
          } catch (err) {
            console.log(err);
          }
    },

    createItem : async (req,res) => {

      
      (
        {
          size_name,
          color_name,
          item_amount,
          image_link,
          category_id,
          product : {
            product_id,
            product_name,
            product_price
          }
          
        } = req.body
      )

      console.log(item_amount)  



      
      //get color id
      const size_id = await colorOnSizeService.getSizeId(size_name);
      //get size id 
      let color_id = await colorOnSizeService.getColorId(color_name);

      //if size haven't exist create a color
      if(color_id === undefined) {
        color_id = await colorOnSizeService.createColor(color_name);
      }  

      //chcek if color and size is connected
      let colorSize = await colorOnSizeService.isConnectedColorOnSize(size_id,color_id);

      //if not create one 
      if(colorSize === null) {
        colorSize = await colorOnSizeService.connectColorOnSize(size_id,color_id) 
      }

       //cheack if product is existed
      //**
      //create item  by connecting to the product and its color and size
      if(product_id === undefined) {
        var product = await productService.createProduct({product_price,product_name},category_id);
        product_id = product.product_id;  
      }
        //if not create one and connect to its category
      const item = await itemService.createItem(product_id,colorSize,item_amount)
 
      const image = imageService.createImage(image_link,item.item_id);
      
      return res.status(201).send({
        item : item,
        image : image
      })
    },

    updateItem : async (req,res) => {
      (
        {
            product_id,
            product_name,
            product_price,
            product_discount

        } = req.body
      )

      const product = await itemService.updateItem(product_id,product_name,product_price,product_discount);

      return res.status(200).send(product);

    },
    itemDashboardData : async (req,res) => {

      const dashboardData = await itemService.itemDashboardData();
      res.status(200).send(dashboardData)
      
    },

    deleteItem : async (req,res) => {

      try{
        const item = await itemService.deleteItem(req.params.item_id);
      return res.status(204).send({
        msg : "success"
      });
      }catch(err) {
        return res.send(err)
      }
      
    }
    

} 