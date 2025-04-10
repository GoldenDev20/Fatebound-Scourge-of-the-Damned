//Priority: 100
/**
 * @file wires.js
 * @description Unify Wires script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Wires')
  }

  let wireCount = {
    create: 0,
    ie: 0,
    thermal: 0
  }

  global.auTags.wires.forEach(material => {
    let wire = global.itemFromTag('wires', material)
    if (wire.isEmpty()) {
      console.log(`${material} does not have a wire tag entry`)
      return
    }

    if (global.loaded.CreateAdd_Loaded) {
      let plate = global.itemFromTag('plates', material)
      if (!plate.isEmpty()) {
        //======= Check if Create Additions rolling recipe exists =======
        let count = event.recipeStream({
          type: 'createaddition:rolling'
        }).mapToInt(recipe => {
          if (wire.equalsIgnoringCount(Item.of(recipe.json.get('result')))) {
            return 1
          }
          return 0
        }).sum()

        if (count == 0) {
          event.custom({
            type: 'createaddition:rolling',
            input: Ingredient.of(`#forge:plates/${material}`).toJson(),
            result: wire.withCount(2).toJson()
          }).id(`kubejs:createaddition/rolling/${material}_plate`)
          wireCount.create++
        }
      }
    }

    if (global.loaded.IE_Loaded) {
      let ingot = global.itemFromTag('ingots', material)
      if (!ingot.isEmpty()) {
        //======= Check if IE metal press recipe exists =======
        let count = event.recipeStream({
          type: 'immersiveengineering:metal_press'
        }).mapToInt(recipe => {
          let result = recipe.json.get('result')
          if (result.has('base_ingredient')) {
            if (wire.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) {
              return 1
            }
          } else if (wire.equalsIgnoringCount(Item.of(result))) {
            return 1
          }
          return 0
        }).sum()

        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_wire',
            input: Ingredient.of(`#forge:ingots/${material}`).toJson(),
            result: {
              count: 2,
              base_ingredient: wire.toJson()
            },
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/wire_${material}`)
          wireCount.ie++
        }
      }
    }

  })

  if (global.devLogging) {
    console.log(`Added Wire Recipes - CreateAdditions: ${wireCount.create}, FTBIC: ${wireCount.ftbic}, IE: ${wireCount.ie}`)
    //Added Wire Recipes - CreateAdditions: 1, IE: 1
  }

})