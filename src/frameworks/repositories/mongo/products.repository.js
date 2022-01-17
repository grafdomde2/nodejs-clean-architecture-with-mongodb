const mongoose = require('mongoose');

const entityName = "Product";

const {
    schemas: {
        product: productSchema
    }
} = require('../../database/mongo');

const repository = () => {
    
    // Schema
    const Product = mongoose.model(entityName, productSchema);
    
    // CRUD executables
    return {
        add: async product => {
            const mongoObject = new Product(product);
            return mongoObject.save();
        },
        update: async product => {
            const { 
                id 
            } = product;
            delete product.id;
            return Product.findByIdAndUpdate(id, {
                ...product,
                updatedAt: new Date()
            }, {
                new: true
            }).lean();
        },
        delete: async product => {
            const { 
                id 
            } = product;
            delete product.id;
            return Product.findByIdAndUpdate(id, {
                deletedAt: new Date()
            }, {
                new: true
            }).lean();
        },
        getById: async id => {
            return Product.findOne({
                _id: id,
                deletedAt: {
                    $exists: false
                }
            })
        }
    }
}

// Export the executions of repository model
module.exports = repository();