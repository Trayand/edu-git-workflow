class Controller {
    static register(request, response, next) {
        console.log("blabalbalaba'");
        const panjang = 3
        const lebar = 5
        const tinggi = 10
        const volume = lebar * panjang * tinggi

        response.status(200).json({volume})
    }
    
    static async login(req, res, next) {
        try {
            console.log("apakah kalian turu ges?");
            console.log("jawab di chat");
            console.log("Ngitung kecepatan mangga jatuh");
            res.status(200).json({message: "GAMAU"})
        } catch (error) {
            console.log(error);
            res.status(200).json({message: "GAMAU"})
        }
    }
    static coba(request, response, next) {
        console.log("blabalbalaba'");
        const lebar = 5
        const tinggi = 10
        const panjang = 3
        const volume = lebar * panjang * tinggi

        response.status(200).json({volume: volume})
    }
}

module.exports = Controller