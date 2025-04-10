//Priority: 1000
/**
 * @file farmersdelight.js
 * @description Recipe Farmer's Delight script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  event.forEachRecipe({
    type: "farmersdelight:cutting"
  }, recipe => {

    let recipeJson = recipe.json
    let ingredients = recipeJson.getAsJsonArray('ingredients')

    //======= Deployer recipe can only have 2 inputs =======
    if (ingredients.size() > 1) {
      return;
    }
    let item = Ingredient.of(ingredients.get(0))
    let tool = Ingredient.of(recipeJson.get('tool'))
    let results = recipeJson.get('result')

    //======= Deployer can only have 4 different outputs =======
    if (results.size() > 4) {
      return;
    }
    event.custom({
      type: 'create:deploying',
      ingredients: [item.toJson(), tool.toJson()],
      results: results
    }).id(`kubejs:createcompat/${recipe.getId().replace(':','/')}`)

  })

  removeRecipeByID(event, [
    'delightful:food/berry_matcha_latte_neapolitan'
  ])

})