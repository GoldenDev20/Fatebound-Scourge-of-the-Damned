//Ppriority: 100
/**
 * @file raw_materials.js
 * @description Unify Raw Materials script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
//======= Missing tags for unify =======
ServerEvents.tags('item', event => {

  global.blueskies.forEach(metal => {
    event.add(`forge:raw_materials/${metal}`, `blue_skies:raw_${metal}`)
  })

})

ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Raw Materials')
  }

  let raw_materialCount = {
    ie: 0,
    thermal: 0
  }

  global.auTags.raw_materials.forEach(material => {
    let raw_material = global.itemFromTag('raw_materials', material)
    if (raw_material.isEmpty()) {
      console.log(`${material} does not have a raw_material tag entry`)
      return
    }

    let rawblockTag = Ingredient.of(`#forge:storage_blocks/raw_${material}`)
    if (rawblockTag.getFirst().isEmpty()) {
      return
    }

    if (global.loaded.IE_Loaded) {
      //======= Check if IE metal press recipe exists =======
      let count = event.recipeStream({
        type: 'immersiveengineering:metal_press'
      }).mapToInt(recipe => {
        let result = recipe.json.get('result')
        if (result.has('base_ingredient')) {
          if (raw_material.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) {
            return 1
          }
        } else if (raw_material.equalsIgnoringCount(Item.of(result))) {
          return 1
        }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'immersiveengineering:metal_press',
          mold: 'immersiveengineering:mold_unpacking',
          input: rawblockTag.toJson(),
          result: raw_material.withCount(9).toJson(),
          energy: 2400
        }).id(`kubejs:immersiveengineering/metalpress/raw_material_${material}`)
        raw_materialCount.ie++
      }
    }

    if (global.loaded.Thermal_Loaded) {
      //======= Check if Thermal multiservo press recipe exists =======
      let count = event.recipeStream({
        type: 'thermal:press'
      }).mapToInt(recipe => {
        let hasMatch = false
        recipe.json.get('result').forEach(item => {
          if (raw_material.specialEquals(Item.of(item), true)) {
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
            rawblockTag.toJson(),
            Ingredient.of('thermal:press_unpacking_die').toJson(),
          ],
          result: [raw_material.withCount(9).toJson()],
        }).id(`kubejs:thermal/machines/press/unpacking/press_raw_${material}_unpacking`)
        raw_materialCount.thermal++
      }
    }

  })

  if (global.devLogging) {
    console.log(`Added Raw Material Recipes - IE: ${raw_materialCount.ie}, Thermal: ${raw_materialCount.thermal}`)
    //Added Raw Material Recipes - IE: 26, Thermal: 16
  }

})