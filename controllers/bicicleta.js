import Bicicleta from "../models/bicicleta.js";

const bicicleta_list = (req, res) => {
    res.render("bicicletas/index", { bicis: Bicicleta.allBicis });
}

const bicicleta_create_get = (req, res) => {
    res.render("bicicletas/create");
}

const bicicleta_create_post = (req, res) => {
    var bici = new Bicicleta(req.body.id, req.body.marca, req.body.modelo, req.body.color, req.body.precio);
    bici.ubicacion = [req.body.lat, req.body.lng];
    bici.vendida = req.body.vendida === "true" ? true : false;
    Bicicleta.add(bici);

    res.redirect("/bicicletas");
}

export default {
    bicicleta_list,
    bicicleta_create_get,
    bicicleta_create_post
}