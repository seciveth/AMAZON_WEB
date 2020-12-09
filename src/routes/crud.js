const express = require('express');
const router = express.Router();

const pool = require('../db');

router.get('/add', (req, res) =>{
    const articulo = pool.query('SELECT * FROM productos');
    res.render('partials/index', { articulo });  //Renderiza ah esta ubicacion
});

router.post('/addarticulo', async (req, res) =>{

    //
    const { nombre, img, categoria, descripcion} = req.body;
    const newArticulo = {
        nombre,
        img,
        categoria,
        descripcion
    };
    console.log(newArticulo);
    await pool.query('INSERT INTO productos set ?', [newArticulo]);
    res.redirect('/Glowplay/add');
});

router.get('/delete/:id', async (req, res) => {

    const { id } = req.params;
   await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    res.redirect('/Gowplay/add');
});

router.get('/edit/:id', async (req, res) => {

const {id} = req.params;
const productos = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
res.render('partials/edit', {articulo: productos[0]});

}); 
 
  
router.post('/edit/:id', async (req, res) =>{

    //
    const { nombre, img, categoria, descripcion} = req.body;
    const {id} = req.params; 
    const newArticulo = {
        nombre,
        img,
        categoria,
        descripcion
    };
    console.log(newArticulo);
    await pool.query('UPDATE productos set ? WHERE id =?' , [newArticulo, id]);
    res.redirect('/Glowplay/add');
});


module.exports = router;
