

module.exports = {
    
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_products().then(products => {
            res.status(200).json(products)
        })
    },

    search: (req, res) => {
        const db = req.app.get('db');
        const {search} = req.query;
        console.log('search', req.query)
        if(search){
        db.search(`%${search}%`).then(product => {
            res.status(200).json(product)
        })}else{
        res.sendStatus(404)
        }

    }
}