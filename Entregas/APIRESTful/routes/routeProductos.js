const express = require('express');
const { Router } = express; //importamos el router
const routeProductos = Router() //instanciamos el router
const classAPI = require('../controllers/classAPI')

routeProductos.route('/')
    .get((req, res) => {

        const enviar = classAPI.getAll()
        res.send(enviar)
    })

    .post((req, res) => {
        const { title, price, url } = req.body
        const added = classAPI.addProduct(title, price, url)
        res.json({ agregado: added })
    })

routeProductos.route('/:id')
    .get((req, res) => {
        const { id } = req.params

        const getById = classAPI.filterId(id)
        res.json({ Producto: getById })
    })

    .put((req, res) => {
        const { id } = req.params;

        const { title, price, url } = req.body
        const change = classAPI.update(id, title, price, url)
        res.json({ newProduct: change })
    })

    .delete((req, res) => {
        const { id } = req.params;
        const borrar = classAPI.delete(id);
        res.json({ arraySubsistente: borrar })
    })














module.exports = routeProductos 