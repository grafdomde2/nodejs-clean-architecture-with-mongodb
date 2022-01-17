const {
    Response
} = require('../../frameworks/common');

module.exports = dependencies => {
    const {
        useCases: {
            product: {
                getProductByIdUseCase
            }
        }
    } = dependencies;

    return async (req, res, next) => {
        try {
            // http:domain/api/v1/products/:id
            const {
                params = {}
            } = req;
            const { id } = params;
            const getProductById = getProductByIdUseCase(dependencies);
            const response = await getProductById.execute({
                id
            })

            res.json(new Response({
                status: true,
                content: response
            }))

            next();

        } catch (err) {
            next(err);
        }
    }
}