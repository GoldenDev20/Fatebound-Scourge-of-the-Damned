//Priority: 1
/**
 * @file jei_hide_items.js
 * @description Jei Hidden Items Script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
JEIEvents.hideItems(event => {

  event.hide(/extrastorage:(block|disk|storagepart)_.+/)
  event.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
  event.hide(/extrastorage:advanced_(importer|exporter)/)
  event.hide('twilightforest:uncrafting_table')
  event.hide('mysticalagradditions:awakened_draconium_crux')
  event.hide('allthecompressed:atm_star_block_1x')

  Color.DYE.forEach(color => {
    ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
      event.hide(`refinedstorage:${color}_${machine}`)
    })
  })

  const hide = [
    /ae2:facade/,
    /^gendustry:.+gene_$/,
    /^gendustry:.+potion$/,
    /^twilightforest:.*_force_field$/,
    'minecraft:wooden_sword',
    'minecraft:wooden_pickaxe',
    'minecraft:wooden_axe',
    'minecraft:wooden_shovel',
    'minecraft:wooden_hoe',
    'minecraft:stone_sword',
    'minecraft:stone_pickaxe',
    'minecraft:stone_axe',
    'minecraft:stone_shovel',
    'minecraft:stone_hoe',
    'vanillaaiots:wooden_aiot',
    'vanillaaiots:stone_aiot',
    'mekanismtools:wood_paxel',
    'mekanismtools:stone_paxel',
    'farmersdelight:carrot_crate',
    'farmersdelight:potato_crate',
    'farmersdelight:beetroot_crate',
    'farmersdelight:tomato_crate',
    'farmersdelight:onion_crate',
    'farmersdelight:rice_bag',
    'extendedcrafting:handheld_table',
    'thermal:cured_rubber',
    Item.of('mysticalagriculture:infusion_crystal', '{Damage:0}'),
    'hmag:ender_eye_block',
    'hmag:nether_star_block',
    'potionsmaster:bismuth_powder',
    'potionsmaster:calcinatedbismuth_powder',
    'cyclic:crafter',
    'cyclic:crafting_stick',
    'cyclic:crafting_bag',
    'relics:researching_table',
    'evilcraft:broom'
  ]

  hide.forEach((id) => {
    event.hide(id)
  })

})