//Priority: 7
/**
 * @file constants.js
 * @description Global Constants script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
const colors = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
]

let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({
    output: result,
    type: 'minecraft:crafting_shaped'
  })
  event.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}

let modifyShapeless = (event, result, count, ingredients) => {
  event.remove({
    output: result,
    type: 'minecraft:crafting_shapeless'
  })
  event.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}

let modifySmelt = (event, result, ingredients) => {
  event.remove({
    output: result,
    type: 'minecraft:smelting'
  })
  event.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}

let removeRecipeByID = (event, recipes) => {
  recipes.forEach(recipe => {
    event.remove({
      id: recipe
    })
  })
}

let removeRecipeByOutput = (event, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      event.remove({
        type: recipe[1],
        output: recipe[0]
      })
    } else {
      event.remove({
        output: recipe
      })
    }
  })
}

let maInfusion = (event, output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
  event.recipes.mysticalagriculture.infusion({
    input: {
      item: middle
    },
    ingredients: [{
        item: item1
      },
      {
        item: item2
      },
      {
        item: item3
      },
      {
        item: item4
      },
      {
        item: item5
      },
      {
        item: item6
      },
      {
        item: item7
      },
      {
        item: item8
      }
    ],
    result: {
      item: output
    }
  }).id(`kubejs:mainfusion/${output.replace(':', '/')}`)
}

let energize = (event, ingredient, result, power, count) => {
  event.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
  }).id(`kubejs:energizing/${result.replace(':', '/')}`)

}

let draconicFusion = (event, output, craftingTier, energy, middleItem, ingredientList) => {
  //crafting tier: 1.draconium, 2.wyvern, 3.draconic, 4.chaotic
  let tiers = ['WYVERN', 'DRACONIC', 'CHAOTIC']
  event.custom({
    type: 'draconicevolution:fusion_crafting',
    result: {
      item: output
    },
    catalyst: {
      item: middleItem
    },
    total_energy: energy,
    tier: (craftingTier > 4 && craftingTier <= 1) ? 'DRACONIUM' : tiers[craftingTier - 2],
    ingredients: ingredientList.map(item => (item.charAt(0) === '#') ? {
      tag: item.substring(1)
    } : {
      item: item
    })
  }).id(`kubejs:fusion_crafting/${output.replace(':', '/')}`)
}

const VanillaWoodTypes = [
  'acacia',
  'birch',
  'crimson',
  'dark_oak',
  'jungle',
  'mangrove',
  'cherry',
  'oak',
  'spruce',
  'warped',
]

const BYGWoodTypes = [
  'aspen',
  'baobab',
  'blue_enchanted',
  'cika',
  'cypress',
  'ebony',
  'fir',
  'green_enchanted',
  'holly',
  'jacaranda',
  'mahogany',
  'white_mangrove',
  'maple',
  'palm',
  'pine',
  'rainbow_eucalyptus',
  'redwood',
  'skyris',
  'willow',
  'witch_hazel',
  'zelkova',
  'florus',
  'ironwood',
  'sakura'
]

const RUWoodTypes = [
  'alpha',
  'baobab',
  'blackwood',
  'blue_bioshroom',
  'brimwood',
  'cobalt',
  'cypress',
  'dead',
  'eucalyptus',
  'green_bioshroom',
  'joshua',
  'kapok',
  'larch',
  'magnolia',
  'maple',
  'mauve',
  'palm',
  'pine',
  'pink_bioshroom',
  'redwood',
  'socotra',
  'willow',
  'yellow_bioshroom'
]

const QuarkWoodTypes = [
  'ancient',
  'blossom',
  'azalea'
]

const BotaniaWoodTypes = [
  'livingwood',
  'dreamwood'
]

const BlueSkiesWoodTypes = [
  'bluebright',
  'starlit',
  'frostbright',
  'lunar',
  'dusk',
  'maple',
  'crystallized',
  'comet'
]

const TwilightForestWoodTypes = [
  'twilight_oak',
  'canopy',
  'mangrove',
  'dark',
  'time',
  'transformation',
  'mining',
  'sorting'
]

const UndergadenWoodTypes = [
  'smogstem',
  'wigglewood',
  'grongle'
]

const HexereiWoodType = [
  'mahogany',
  'willow',
  'witch_hazel'
]

const DeepAetherWoodType = [
  'roseroot',
  'yagroot',
  'cruderoot',
  'conberry',
  'sunroot'
]

const EcologicsWoodTypes = [
  'coconut',
  'walnut',
  'azalea'
]

const MidnightWoodTypes = [
  'shadowroot',
  'dark_willow',
  'manglewood',
  'nightshroom',
  'dewshroom',
  'viridshroom',
  'moonshroom',
  'bogshroom'
]

const sandstones = [
  'biomeswevegone:black_sandstone',
  'biomeswevegone:blue_sandstone',
  'biomeswevegone:purple_sandstone',
  'biomeswevegone:windswept_sandstone',
  'biomeswevegone:pink_sandstone',
  'biomeswevegone:white_sandstone',
  'minecraft:red_sandstone',
  'minecraft:sandstone',
  'quark:soul_sandstone'
]

const BotanyPotMaterial = [
  'terracotta',
  'white_terracotta',
  'orange_terracotta',
  'magenta_terracotta',
  'light_blue_terracotta',
  'yellow_terracotta',
  'lime_terracotta',
  'pink_terracotta',
  'gray_terracotta',
  'light_gray_terracotta',
  'cyan_terracotta',
  'purple_terracotta',
  'blue_terracotta',
  'brown_terracotta',
  'green_terracotta',
  'red_terracotta',
  'black_terracotta',
  'white_concrete',
  'orange_concrete',
  'magenta_concrete',
  'light_blue_concrete',
  'yellow_concrete',
  'lime_concrete',
  'pink_concrete',
  'gray_concrete',
  'light_gray_concrete',
  'cyan_concrete',
  'purple_concrete',
  'blue_concrete',
  'brown_concrete',
  'green_concrete',
  'red_concrete',
  'black_concrete',
  'white_glazed_terracotta',
  'orange_glazed_terracotta',
  'magenta_glazed_terracotta',
  'light_blue_glazed_terracotta',
  'yellow_glazed_terracotta',
  'lime_glazed_terracotta',
  'pink_glazed_terracotta',
  'gray_glazed_terracotta',
  'light_gray_glazed_terracotta',
  'cyan_glazed_terracotta',
  'purple_glazed_terracotta',
  'blue_glazed_terracotta',
  'brown_glazed_terracotta',
  'green_glazed_terracotta',
  'red_glazed_terracotta',
  'black_glazed_terracotta',
]

const sandstone_colors = ['colorless', 'red', 'black', 'white', 'blue', 'purple', 'windswept']

const xnet_colors = ['red', 'yellow', 'green', 'blue']

const air = 'minecraft:air'