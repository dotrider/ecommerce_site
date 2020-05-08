

module.exports = {
    
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_products().then(products => {
            res.status(200).json(products);
        });
    },

    search: (req, res) => {
        const db = req.app.get('db');
        const {search} = req.query;

        console.log('search', req.query);
        if(search){
        db.search(`%${search}%`).then(product => {
            res.status(200).json(product);
        });
        }else{
        res.sendStatus(404)
        }

    },

    // filter: (req, res) => {
    //     const db = req.app.get('db')
    //     const {search} = req.params;
    //     console.log('filter', search)
    //     if(search){
    //         db.min_producs().then( products => {
    //             res.status(200).json(products)
    //         })
    //     }else{
    //         res.sendStatus(404)
    //     }
    // }

    // price: (req, res) => {
    //     const db = req.app.get('db')
    //     const {price} = req.query;
    //     console.log('price', req.query)
    //     if(price === 'min'){
    //         db.min_products().then( products => {
    //             res.status(200).json(products)
    //         })
    //     }else if(price === 'average'){
    //         db.ave_products().then( products => {
    //             res.status(200).json(products)
    //         })
    //     }
        
    //     else{
    //         res.sendStatus(404)
    //     }
    // }

    minPrice: (req, res) => {
        const db = req.app.get('db')
        const {minimum} = req.params;
        console.log('minimum', req.params);

        if(minimum){
            db.min_products().then( products => {
            res.status(200).json(products);
            });
        }else{
            res.sendStatus(404);
        }
    },

    avePrice: (req, res) => {
        const db = req.app.get('db')
        const {average} = req.params;
        console.log('average', req.params);

        if(average){
            db.ave_products().then( products => {
            res.status(200).json(products);
            });
        }else{
            res.sendStatus(404);
        }
    }

}