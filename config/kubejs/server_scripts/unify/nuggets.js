//Priority: 100
/**
 * @file nuggets.js
 * @description Unify Nuggets script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
//======= Missing tags for unify =======
ServerEvents.tags('item', event => {

  ['falsite', 'ventium', 'horizonite'].forEach(metal => {
    event.add(`forge:nuggets/${metal}`, `blue_skies:${metal}_nugget`)
  })

})

ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Nuggets')
  }

  let nuggetCount = {
    ie: 0,
    thermal: 0
  }

  global.auTags.nuggets.forEach(material => {
    let nugget = global.itemFromTag('nuggets', material)
    if (nugget.isEmpty()) {
      console.log(`${material} does not have a nugget tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    if (ingotTag.getFirst().isEmpty()) {
      //======= Check for gems =======
      ingotTag = Ingredient.of(`#forge:gems/${material}`)
      if (ingotTag.getFirst().isEmpty()) {
        return
      }
    }

    if (global.loaded.IE_Loaded) {
      //======= Check if IE metal press recipe exists =======
      let count = event.recipeStream({
        type: 'immersiveengineering:metal_press'
      }).mapToInt(recipe => {
        let result = recipe.json.get('result')
        if (result.has('base_ingredient')) {
          if (nugget.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) {
            return 1
          }
        } else if (nugget.equalsIgnoringCount(Item.of(result))) {
          return 1
        }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'immersiveengineering:metal_press',
          mold: 'immersiveengineering:mold_unpacking',
          input: ingotTag.toJson(),
          result: nugget.withCount(9).toJson(),
          energy: 2400
        }).id(`kubejs:immersiveengineering/metalpress/unpacking/nugget_${material}`)
        nuggetCount.ie++
      }
    }

    if (global.loaded.Thermal_Loaded) {
      //======= Check if thermal multiservo press recipe exists =======
      let count = event.recipeStream({
        type: 'thermal:press'
      }).mapToInt(recipe => {
        let hasMatch = false
        recipe.json.get('result').forEach(item => {
          if (nugget.specialEquals(Item.of(item), true)) {
            hasMatch = true
          }
        })
        if (hasMatch) {
          return 1
        }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'thermal:press',
          ingredients: [
            ingotTag.toJson(),
            Ingredient.of('thermal:press_unpacking_die').toJson(),
          ],
          result: [nugget.withCount(9).toJson()],
        }).id(`kubejs:thermal/machines/press/unpacking/press_${material}_nugget_unpacking`)
        nuggetCount.thermal++
      }
    }

  })

  if (global.devLogging) {
    console.log(`Added Nugget Recipes - IE: ${nuggetCount.ie}, Thermal: ${nuggetCount.thermal}`)
    //Added Nugget Recipes - IE: 45, Thermal: 24
  }

})