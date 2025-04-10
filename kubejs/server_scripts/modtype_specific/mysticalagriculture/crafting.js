//Priority: 1000
/**
 * @file crafting.js
 * @description Crafting recipe Mystical Agriculture script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Essence crafting for custom seeds "Circle shape" =======
  function essenceCircle(result, essenceType) {
    event.shaped(result, ['AAA', 'A A', 'AAA'], {
      A: `mysticalagriculture:${essenceType}_essence`
    }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
  essenceCircle('4x industrialforegoing:plastic', 'plastic')
  essenceCircle('2x botania:manasteel_ingot', 'manasteel')
  essenceCircle('botania:terrasteel_ingot', 'terrasteel')
  essenceCircle('2x botania:elementium_ingot', 'elementium')
  essenceCircle('4x botania:livingwood', 'livingwood')
  essenceCircle('4x botania:livingrock', 'livingrock')
  essenceCircle('extendedcrafting:the_ultimate_nugget', 'ultimate_ingot')
  essenceCircle('2x bigreactors:cyanite_ingot', 'cyanite')

  //======= Essence crafting for custom seeds "Line shape" =======
  function essenceLine(result, essenceType) {
    event.shaped(result, ['   ', 'AAA', '   '], {
      A: `mysticalagriculture:${essenceType}_essence`
    }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceLine('2x industrialforegoing:pink_slime', 'pink_slime')
  essenceLine('2x minecraft:phantom_membrane', 'phantom')
  essenceLine('3x thermal:niter', 'niter')
  essenceLine('3x thermal:cured_rubber', 'rubber')
  essenceLine('3x refinedstorage:silicon', 'silicon')

  //======= Essence crafting for custom seeds "CirclePlus shape" =======
  function essenceCirclePlus(result, essenceType) {
    event.shaped(result, ['AAA', 'ABA', 'AAA'], {
      A: `mysticalagriculture:${essenceType}_essence`,
      B: 'minecraft:nether_star'
    }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceCirclePlus('powah:crystal_nitro', 'nitro_crystal')

  //======= FARMLANDS =======
  //=== Inferium Farmland ===
  event.shaped('mysticalagriculture:inferium_farmland', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagriculture:inferium_essence',
    B: 'minecraft:farmland'
  }).id(`kubejs:mysticalagriculture/inferium_farmland`)
  //=== Prudentium Farmland ===
  event.shaped('mysticalagriculture:prudentium_farmland', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagriculture:prudentium_essence',
    B: 'mysticalagriculture:inferium_farmland'
  }).id(`kubejs:mysticalagriculture/prudentium_farmland`)
  //=== Tertium Farmland ===
  event.shaped('mysticalagriculture:tertium_farmland', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagriculture:tertium_essence',
    B: 'mysticalagriculture:prudentium_farmland'
  }).id(`kubejs:mysticalagriculture/tertium_farmland`)
  //=== Imperium Farmland ===
  event.shaped('mysticalagriculture:imperium_farmland', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagriculture:imperium_essence',
    B: 'mysticalagriculture:tertium_farmland'
  }).id(`kubejs:mysticalagriculture/imperium_farmland`)
  //=== Supremium Farmland ===
  event.shaped('mysticalagriculture:supremium_farmland', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagriculture:supremium_essence',
    B: 'mysticalagriculture:imperium_farmland'
  }).id(`kubejs:mysticalagriculture/supremium_farmland`)
  //=== Insanium Farmland ===
  event.shaped('mysticalagradditions:insanium_farmland', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagradditions:insanium_essence',
    B: 'mysticalagriculture:supremium_farmland'
  }).id(`kubejs:mysticalagriculture/insanium_farmland`)
  //=== Magical Soil ===
  //=== Insanium Farmland ===
  event.shaped('kubejs:magical_soil', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagradditions:insanium_block',
    B: 'mysticalagradditions:insanium_farmland'
  }).id(`kubejs:mysticalagriculture/magical_soil`)

  //======= Nitro Crystal Seed =======
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: {
      item: 'mysticalagriculture:prosperity_seed_base'
    },
    ingredients: [
      { item: 'powah:nitro_crystal_block' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'powah:nitro_crystal_block' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'powah:nitro_crystal_block' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'powah:nitro_crystal_block' },
      { item: 'mysticalagradditions:insanium_block' }
    ],
    result: {
      item: 'mysticalagriculture:nitro_crystal_seeds'
    }
  }).id(`kubejs:mysticalagriculture/nitro_crystal_seeds`)

  //======= Silicon Seed =======
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: {
      item: 'mysticalagriculture:prosperity_seed_base'
    },
    ingredients: [
      { item: 'refinedstorage:silicon' },
      { item: 'mysticalagriculture:prudentium_essence' },
      { item: 'refinedstorage:silicon' },
      { item: 'mysticalagriculture:prudentium_essence' },
      { item: 'refinedstorage:silicon' },
      { item: 'mysticalagriculture:prudentium_essence' },
      { item: 'refinedstorage:silicon' },
      { item: 'mysticalagriculture:prudentium_essence' }
    ],
    result: {
      item: 'mysticalagriculture:silicon_seeds'
    }
  }).id(`kubejs:mysticalagriculture/silicon_seeds`)

  //======= MA EXP droplets to fluid EXP =======
  event.custom({
    type: "thermal:centrifuge",
    ingredient: { item: "mysticalagriculture:experience_droplet" },
    result: [{ fluid: "cofh_core:experience", amount: 250 }],
    energy: 400
  })

  //======= Infusion Altar & Pedestal =======
  event.recipes.extendedcrafting.shaped_table({
    pattern: [
      "KLEEELK",
      "LBAAABL",
      "GAADAAF",
      "GJDMDJF",
      "GCCDCCF",
      "LBCCCBL",
      "KLHHHLK",
    ],
    key: {
      A: { item: "minecraft:red_nether_bricks", },
      B: { item: "minecraft:gold_block", },
      C: { item: "minecraft:polished_deepslate", },
      D: { item: "minecraft:nether_star", },
      E: { item: "mysticalagriculture:air_agglomeratio", },
      F: { item: "mysticalagriculture:earth_agglomeratio", },
      G: { item: "mysticalagriculture:fire_agglomeratio", },
      H: { item: "mysticalagriculture:water_agglomeratio", },
      J: { item: "mysticalagriculture:master_infusion_crystal", },
      K: { item: "mysticalagriculture:prosperity_block", },
      L: { item: "mysticalagriculture:supremium_essence", },
      M: { item: "botania:runic_altar", }
    },
    result: { item: "mysticalagriculture:infusion_altar", },
  }).id(`kubejs:mysticalagriculture/infusion_altar`)

  event.shaped('2x mysticalagriculture:infusion_pedestal', ['ABA', ' C ', 'DCD'], {
    A: '#forge:ingots/flux',
    B: 'minecraft:red_nether_bricks',
    C: 'minecraft:polished_deepslate',
    D: 'minecraft:polished_blackstone_button'
  }).id(`kubejs:mysticalagriculture/infusion_pedestal`)

  //======= Awakening Altar, Pedestal & Vessel =======
  //=== Altar ===
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: "mysticalagriculture:awakening_altar" },
    pedestalItems: [
      { item: "mysticalagradditions:insanium_essence" },
      { item: "mysticalagriculture:supremium_upgrade" },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "mysticalagradditions:insanium_gemstone_block" },
      { item: "mysticalagradditions:insanium_essence" },
      { item: "mysticalagradditions:insanium_gemstone_block" },
      { item: "mysticalagriculture:supremium_upgrade" },
      { item: "mysticalagradditions:insanium_essence" }
    ],
    reagent: [{ item: "mysticalagriculture:infusion_altar" }],
    sourceCost: 9000
  }).id(`kubejs:mysticalagriculture/awakening_altar`)

  //=== Pedestal ===
  event.shaped('2x mysticalagriculture:awakening_pedestal', ['ABA', ' C ', 'DCD'], {
    A: '#forge:ingots/flux',
    B: 'mysticalagriculture:infusion_pedestal',
    C: 'mysticalagriculture:soulstone',
    D: 'minecraft:polished_blackstone_button'
  }).id(`kubejs:mysticalagriculture/awakening_pedestal`)

  //=== Vessel ===
  event.shaped('2x mysticalagriculture:essence_vessel', ['ABA', ' C ', 'DCD'], {
    A: '#forge:ingots/flux',
    B: 'mysticalagriculture:witherproof_glass',
    C: 'mysticalagriculture:soulstone',
    D: 'minecraft:polished_blackstone_button'
  }).id(`kubejs:mysticalagriculture/essence_vessel`)

  //======= Inferium Seed =======
  event.recipes.extendedcrafting.shaped_table({
    pattern: [
      "ABBBA",
      "BCCCB",
      "BCDCB",
      "BCCCB",
      "ABBBA",
    ],
    key: {
      A: { item: "mysticalagriculture:tertium_essence", },
      B: { item: "mysticalagriculture:prudentium_essence", },
      C: { item: "mysticalagriculture:inferium_essence", },
      D: { item: "minecraft:wheat_seeds", }
    },
    result: { item: "mysticalagriculture:inferium_seeds", },
  }).id(`kubejs:mysticalagriculture/inferium_seeds`)

  //======= Prosperity Seed Base =======
  event.shaped('mysticalagriculture:prosperity_seed_base', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagriculture:prosperity_shard',
    B: 'minecraft:wheat_seeds'
  }).id(`kubejs:mysticalagriculture/prosperity_seed_base`)

  //======= Soulium Seed Base =======
  event.shaped('mysticalagriculture:soulium_seed_base', [' A ', 'ABA', ' A '], {
    A: 'mysticalagriculture:soulium_dust',
    B: 'mysticalagriculture:prosperity_seed_base'
  }).id(`kubejs:mysticalagriculture/soulium_seed_base`)

  let fish = [
    'aquaculture:arapaima',
    'aquaculture:atlantic_cod',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:bayad',
    'aquaculture:blackfish',
    'aquaculture:bluegill',
    'aquaculture:boulti',
    'aquaculture:brown_shrooma',
    'aquaculture:brown_trout',
    'aquaculture:capitaine',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar',
    'aquaculture:minnow',
    'aquaculture:muskellunge',
    'aquaculture:pacific_halibut',
    'aquaculture:perch',
    'aquaculture:pink_salmon',
    'aquaculture:piranha',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:red_grouper',
    'aquaculture:red_shrooma',
    'aquaculture:smallmouth_bass',
    'aquaculture:synodontis',
    'aquaculture:tambaqui',
    'aquaculture:tuna',
  ]

  fish.forEach(name => {
    event.custom({
      type: 'mysticalagriculture:soul_extraction',
      input: {
        item: name
      },
      output: {
        type: 'mysticalagriculture:fish',
        souls: 0.5
      }
    })
  })

  removeRecipeByID(event, [
    'mysticalagriculture:essence/botania/manasteel_ingot',
    'mysticalagriculture:essence/botania/terrasteel_ingot',
    'mysticalagriculture:essence/botania/elementium_ingot',
    'mysticalagradditions:essence/nitro_crystal',
    'mysticalagriculture:seed/infusion/nitro_crystal',
    'mysticalagriculture:essence/common/rubber',
    'mysticalagriculture:essence/common/silicon',
    'mysticalagriculture:seed/infusion/silicon',
    'mysticalagriculture:infusion_altar',
    'mysticalagriculture:infusion_pedestal',
    'mysticalagriculture:awakening_altar',
    'mysticalagriculture:awakening_pedestal',
    'mysticalagriculture:essence_vessel',
    'mysticalagriculture:inferium_farmland',
    'mysticalagriculture:inferium_farmland_till',
    'mysticalagriculture:prudentium_farmland',
    'mysticalagriculture:prudentium_farmland_till',
    'mysticalagriculture:tertium_farmland',
    'mysticalagriculture:tertium_farmland_till',
    'mysticalagriculture:imperium_farmland',
    'mysticalagriculture:imperium_farmland_till',
    'mysticalagriculture:supremium_farmland',
    'mysticalagriculture:supremium_farmland_till',
    'mysticalagradditions:insanium_farmland',
    'mysticalagradditions:insanium_farmland_till',
    'mysticalagriculture:prosperity_seed_base',
    'mysticalagriculture:soulium_seed_base',
    'mysticalagriculture:inferium_seeds',
    'mysticalagriculture:seed/infusion/titanium',
    'mysticalagriculture:seed/infusion/tungsten'
  ])

})