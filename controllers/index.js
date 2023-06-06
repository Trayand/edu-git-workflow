class Controller {
    static register(request, response, next) {
        console.log("blabalbalaba'");
        const panjang = 3
        const lebar = 5
        const tinggi = 10
        const volume = lebar * panjang * tinggi

        response.status(200).json({volume})
    }
}

module.exports = Controller