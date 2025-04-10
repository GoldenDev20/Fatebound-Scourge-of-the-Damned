//Priority: 100
/**
 * @file storage_blocks.js
 * @description Unify Storage Blocks script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
//======= Missing tags for unify =======
ServerEvents.tags('item', event => {

  event.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')
  event.add('forge:storage_blocks/valkyrum', 'aether_treasure_reforging:valkyrum_block')
  event.add('forge:ingots/valkyrum', 'aether_treasure_reforging:valkyrum_ingot')
  event.add('forge:storage_blocks/raw_redstone', 'regions_unexplored:raw_redstone_block')
  global.blueskies.forEach(metal => {
    event.add(`forge:storage_blocks/raw_${metal}`, `blue_skies:raw_${metal}_block`)
    event.add(`forge:storage_blocks/${metal}`, `blue_skies:${metal}_block`)
  })

  event.add('forge:gems/charoite', '#blue_skies:gems/charoite')
  event.add('forge:gems/aquite', '#blue_skies:gems/aquite')

})

ServerEvents.recipes(event => {

  const rawBlockMetals = [
    'copper',
    'iron',
    'gold',
    'froststeel',
    'cloggrum',
    'elementium',
    'horizonite',
    'ventium',
    'falsite',
    'iridium',
    'zinc',
    'uranium',
    'tin',
    'silver',
    'platinum',
    'osmium',
    'nickel',
    'aluminum',
    'lead',
    'allthemodium',
    'vibranium',
    'unobtainium',
  ]

  const rawBlockGems = [
    'charoite',
    'aquite'
  ]

  rawBlockMetals.forEach((material) => {
    event.smelting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_block`)
  })

  rawBlockMetals.forEach((material) => {
    event.smelting(`9x #forge:ingots/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_ingots`)
  })

  rawBlockMetals.forEach((material) => {
    event.blasting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_block`)
  })

  rawBlockMetals.forEach((material) => {
    event.blasting(`9x #forge:ingots/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_ingots`)
  })

  rawBlockGems.forEach((material) => {
    event.smelting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_block_2`)
  })

  rawBlockGems.forEach((material) => {
    event.smelting(`9x #forge:gems/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_gems`)
  })

  rawBlockGems.forEach((material) => {
    event.blasting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_block_2`)
  })

  rawBlockGems.forEach((material) => {
    event.blasting(`9x #forge:gems/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_gems`)
  })

  //======= Redstone =======
  event.blasting('4x minecraft:redstone', '#forge:storage_blocks/raw_redstone', 0.7).id(`kubejs:blasting/raw_redstone_to_redstone`)
  event.smelting('4x minecraft:redstone', '#forge:storage_blocks/raw_redstone', 0.7).id(`kubejs:smelting/raw_redstone_to_redstone`)

})