const { Router } = require("express");
const { getMeal, saveMeals, deleteMeal, editMeal, deleteAll } = require('./MealController');
const router = Router();

//GET

//router.get('/', (req,res) => {
   // res.json({test: "WE GOT HERE!"})
//})

router.get("/", getMeal);

//POST

router.post('/saveMeals', saveMeals);

//DELETE

router.post('/deleteMeal', deleteMeal);

//EDIT

router.put('/editMeal', editMeal);

//DELETE ALL

router.post('/deleteAll', deleteAll);


module.exports = router;