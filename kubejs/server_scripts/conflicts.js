//Priority: 6
/**
 * @file conflicts.js
 * @description Recipe Conflicts|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.tags('item', event => {

  event.add('blue_skies:planks', /blue_skies:.+?_planks/)

  let chestsMissingTags = ['ars_nouveau:archwood_chest']
  event.add('forge:chests', chestsMissingTags)
  event.add('forge:chests/wooden', chestsMissingTags)

})

ServerEvents.recipes(event => {

  //======= Fix Overlapping Recipes / polymorph conflicts =======
  //Structurize / Construction Wand
  event.remove({
    id: 'structurize:sceptergold'
  })
  event.shaped('structurize:sceptergold', ['A  ', ' B ', '  B'], {
    A: '#minecraft:stone_crafting_materials',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:structurize/sceptergold`)

  event.remove({
    id: 'constructionwand:stone_wand'
  })
  event.shaped('constructionwand:stone_wand', ['  A', ' B ', 'B  '], {
    A: '#minecraft:stone_crafting_materials',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:constructionwand/stone_wand`)

  event.remove({
    id: 'structurize:sceptersteel'
  })
  event.shaped('structurize:sceptersteel', ['A  ', ' B ', '  B'], {
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:structurize/sceptersteel`)

  event.remove({
    id: 'constructionwand:iron_wand'
  })
  event.shaped('constructionwand:iron_wand', ['  A', ' B ', 'B  '], {
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:constructionwand/iron_wand`)

  //Blue Skies Tools
  let planks = Ingredient.of('#minecraft:planks').subtract(Ingredient.of('#blue_skies:planks'))

  event.forEachRecipe({
    id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/
  }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })
  event.forEachRecipe({
    id: 'minecraft:stick'
  }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })

  let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))

  event.forEachRecipe({
    id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/
  }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', cobble.toJson())
    json.add('key', key)
    recipe.json = json
  })

  //Chisel / Croptopia Knife
  event.remove({
    id: 'chisel:chisel'
  })
  event.shaped('chisel:chisel', ['A ', ' B'], {
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:chisel/chisel`)

  event.remove({
    id: 'croptopia:knife'
  })
  event.shaped('croptopia:knife', [' A', 'B '], {
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:croptopia/knife`)

  //Yellorium
  event.remove({
    id: 'bigreactors:crafting/yellorium_component_to_storage'
  })
  event.remove({
    id: 'bigreactors:crafting/yellorium_ingot_to_nugget'
  })

  //Reborn Storage conflicts
  event.remove({
    id: 'rebornstorage:disks/small_item_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/small_item_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/small_item_disk_part'
  })
  event.remove({
    id: 'rebornstorage:disks/medium_item_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/medium_item_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/medium_item_disk_part'
  })
  event.remove({
    id: 'rebornstorage:disks/large_item_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/large_item_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/large_item_disk_part'
  })
  event.remove({
    id: 'rebornstorage:disks/larger_item_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/larger_item_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/larger_item_disk_part'
  })
  event.remove({
    id: 'rebornstorage:disks/small_fluid_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/small_fluid_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/small_fluid_disk_part'
  })
  event.remove({
    id: 'rebornstorage:disks/medium_fluid_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/medium_fluid_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/medium_fluid_disk_part'
  })
  event.remove({
    id: 'rebornstorage:disks/large_fluid_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/large_fluid_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/large_fluid_disk_part'
  })
  event.remove({
    id: 'rebornstorage:disks/larger_fluid_disk'
  })
  event.remove({
    id: 'rebornstorage:disks/larger_fluid_storage_disk_from_storage_housing'
  })
  event.remove({
    id: 'rebornstorage:parts/larger_fluid_disk_part'
  })

  //Extra Storage conflicts
  event.remove({
    id: 'extrastorage:advanced_importer'
  })
  event.remove({
    id: 'extrastorage:advanced_exporter'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_256k'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_1024k'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_4096k'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_16384k'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_16384k_fluid'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_65536k_fluid'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_262144k_fluid'
  })
  event.remove({
    id: 'extrastorage:storage_block/block_1048576k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_256k'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_256k'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_1024k'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_1024k'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_4096k'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_4096k'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_16384k'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_16384k'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_16384k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_16384k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_65536k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_65536k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_262144k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_262144k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shapeless/disk_1048576k_fluid'
  })
  event.remove({
    id: 'extrastorage:disk/shaped/disk_1048576k_fluid'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_256k'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_1024k'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_4096k'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_16384k'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_16384k_fluid'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_65536k_fluid'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_262144k_fluid'
  })
  event.remove({
    id: 'extrastorage:part/storagepart_1048576k_fluid'
  })

  //Quark's log to stick recipe
  event.remove({
    id: 'enderio:stick'
  })
  let logSticks = Ingredient.of('#minecraft:logs').subtract(Ingredient.of(['#botania:livingwood_logs', '#botania:dreamwood_logs']))
  event.shaped('16x minecraft:stick', ['s', 's'], {
    s: logSticks
  }).id(`kubejs:16xsticks`)

  //Bugs Fixes
  //Functional storage cheap drawers (1x technically conflicts with quark chest to vanilla chest)
  event.remove({
    id: 'functionalstorage:oak_drawer_alternate_x1'
  })
  event.remove({
    id: 'functionalstorage:oak_drawer_alternate_x2'
  })
  event.remove({
    id: 'functionalstorage:oak_drawer_alternate_x4'
  })

  //Incorrect ore smelting/blasting output, Supposed to be fixed in mc1.20 of DeeperDarker, not fixed in v1.2.1
  event.remove({
    id: 'deeperdarker:raw_iron_from_blasting_gloomslate_iron_ore'
  })
  event.remove({
    id: 'deeperdarker:raw_gold_from_blasting_gloomslate_gold_ore'
  })
  event.remove({
    id: 'deeperdarker:raw_copper_from_blasting_gloomslate_copper_ore'
  })
  event.remove({
    id: 'deeperdarker:raw_iron_from_smelting_gloomslate_iron_ore'
  })
  event.remove({
    id: 'deeperdarker:raw_gold_from_smelting_gloomslate_gold_ore'
  })
  event.remove({
    id: 'deeperdarker:raw_copper_from_smelting_gloomslate_copper_ore'
  })

  //Duplicate dust recipes, remove/fix/unify
  event.remove({
    id: 'thermal:signalum_dust_4'
  })
  event.remove({
    id: 'thermal:lumium_dust_4'
  })

  //Enderium
  event.remove({
    id: 'thermal:enderium_dust_2'
  })
  event.remove({
    id: 'alltheores:enderium_dust_from_alloy_blending'
  })
  event.shaped('4x #forge:dusts/enderium', ['LLL', 'DEE', "H  "], {
    L: '#forge:dusts/lead',
    D: '#forge:dusts/diamond',
    E: '#forge:ender_pearls',
    H: '#alltheores:ore_hammers'
  }).id(`kubejs:enderium_dust_handblend`)

})