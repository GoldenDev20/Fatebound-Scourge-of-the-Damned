//Priority: 100
/**
 * @file gears.js
 * @description Unify Gears script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Gears')
  }

  let gearCount = {
    ie: 0,
    thermal: 0
  }

  global.auTags.gears.forEach(material => {
    let gear = global.itemFromTag('gears', material)
    if (gear.isEmpty()) {
      console.log(`${material} does not have a gear tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    if (ingotTag.getFirst().isEmpty()) {
      //======= Check for gems =======
      ingotTag = Ingredient.of(`#forge:gems/${material}`)
    }
    if (!ingotTag.getFirst().isEmpty()) {

      if (global.loaded.IE_Loaded) {
        //======= Check if IE metal press recipe exists =======
        let count = event.recipeStream({
          type: 'immersiveengineering:metal_press'
        }).mapToInt(recipe => {
          let result = recipe.json.get('result')
          if (result.has('base_ingredient')) {
            if (gear.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) {
              return 1
            }
          } else if (gear.equalsIgnoringCount(Item.of(result))) {
            return 1
          }
          return 0
        }).sum()

        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_gear',
            input: {
              count: 4,
              base_ingredient: ingotTag.toJson()
            },
            result: gear.toJson(),
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/gear_${material}`)
          gearCount.ie++
        }
      }

      if (global.loaded.Thermal_Loaded) {
        //======= Check if Thermal multiservo press recipe exists =======
        let count = event.recipeStream({
          type: 'thermal:press'
        }).mapToInt(recipe => {
          let hasMatch = false
          recipe.json.get('result').forEach(item => {
            if (gear.specialEquals(Item.of(item), true)) {
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
              ingotTag.withCount(4).toJson(),
              Ingredient.of('thermal:press_gear_die').toJson(),
            ],
            result: [gear.toJson()],
          }).id(`kubejs:thermal/machines/press/press_${material}_ingot_to_gear`)
          gearCount.thermal++
        }
      }
    }

  })

  if (global.devLogging) {
    console.log(`Added Gear Recipes -  IE: ${gearCount.ie}, Thermal: ${gearCount.thermal}`)
    //Added Gear Recipes - IE: 17, Thermal: 15
  }

})