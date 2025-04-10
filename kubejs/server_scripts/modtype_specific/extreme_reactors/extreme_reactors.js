//Priority: 1000
/**
 * @file extream_reactors.js
 * @description Recipe Extream Reactors script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  event.replaceInput({}, '#forge:ingots/yellorium', '#forge:ingots/uranium')

  //======= Fluidizer Casing =======
  modifyShaped(event, 'bigreactors:fluidizercasing', 1, ['ABA', 'BCB', 'ABA'], {
    A: 'minecraft:iron_ingot',
    B: 'alltheores:uranium_ingot',
    C: 'minecraft:water_bucket'
  })

  //======= Fluidizer Solid Injector =======
  modifyShaped(event, 'bigreactors:fluidizersolidinjector', 1, ['ABA', 'CDC', 'ABA'], {
    A: 'bigreactors:fluidizercasing',
    B: 'alltheores:uranium_ingot',
    C: 'minecraft:redstone',
    D: 'minecraft:sticky_piston'
  })

  //======= Reactor Fuel Rod (Basic) =======
  modifyShaped(event, 'bigreactors:basic_reactorfuelrod', 1, ['ABA', 'ACA', 'ABA'], {
    A: '#forge:ingots/iron',
    B: '#forge:ingots/graphite',
    C: '#forge:ingots/uranium'
  })

  //======= Reactor Fuel Rod (Reinforced) =======
  modifyShaped(event, 'bigreactors:reinforced_reactorfuelrod', 1, ['ABA', 'ACA', 'ABA'], {
    A: '#forge:ingots/steel',
    B: '#forge:ingots/graphite',
    C: '#forge:ingots/uranium'
  })

  //======= Reprocessor Controller =======
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: {
      C: {
        item: 'bigreactors:reprocessorcasing'
      },
      E: {
        tag: 'forge:gems/emerald'
      },
      P: {
        tag: 'forge:dusts/prismarine'
      },
      X: {
        tag: 'forge:circuits/advanced'
      },
      Y: {
        tag: 'forge:ingots/cyanite'
      }
    },
    pattern: ['CXC', 'YEY', 'CPC'],
    result: {
      item: 'bigreactors:reprocessorcontroller'
    },
    show_notification: true
  }).id(`kubejs:bigreactors/reprocessorcontroller`)

  //======= Fluidizer Controller =======
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: {
      C: {
        item: 'bigreactors:fluidizercasing'
      },
      E: {
        tag: 'forge:gems/emerald'
      },
      P: {
        tag: 'forge:dusts/glowstone'
      },
      X: {
        tag: 'forge:circuits/advanced'
      },
      Y: {
        tag: 'forge:ingots/uranium'
      }
    },
    pattern: ['CXC', 'YEY', 'CPC'],
    result: {
      item: 'bigreactors:fluidizercontroller'
    },
    show_notification: true
  }).id(`kubejs:bigreactors/fluidizercontroller`)

  //======= Energizer Controller =======
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: {
      C: {
        item: 'bigreactors:energizercasing'
      },
      D: {
        item: 'minecraft:glowstone'
      },
      G: {
        tag: 'forge:ingots/gold'
      },
      R: {
        item: 'minecraft:redstone_torch'
      },
      X: {
        tag: 'forge:circuits/advanced'
      }
    },
    pattern: ['CXC', 'DRD', 'CGC'],
    result: {
      item: 'bigreactors:energizercontroller'
    },
    show_notification: true
  }).id(`kubejs:bigreactors/energizercontroller`)

  //======= Reactor Controller (Basic) =======
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: {
      C: {
        item: 'bigreactors:basic_reactorcasing'
      },
      D: {
        tag: 'forge:gems/diamond'
      },
      R: {
        tag: 'forge:dusts/redstone'
      },
      X: {
        tag: 'forge:circuits/elite'
      },
      Y: {
        tag: 'forge:ingots/uranium'
      }
    },
    pattern: ['CXC', 'YDY', 'CRC'],
    result: {
      item: 'bigreactors:basic_reactorcontroller'
    },
    show_notification: true
  }).id(`kubejs:bigreactors/basic_reactorcontroller`)

  //======= Turbine Controller (Basic) =======
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: {
      C: {
        item: 'bigreactors:basic_turbinecasing'
      },
      D: {
        tag: 'forge:gems/diamond'
      },
      R: {
        tag: 'forge:dusts/redstone'
      },
      X: {
        tag: 'forge:circuits/elite'
      },
      Y: {
        tag: 'forge:storage_blocks/cyanite'
      }
    },
    pattern: ['CXC', 'YDY', 'CRC'],
    result: {
      item: 'bigreactors:basic_turbinecontroller'
    },
    show_notification: true
  }).id(`kubejs:bigreactors/basic_turbinecontroller`)

  //======= Reactor Controller (Reinforced) =======
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: {
      C: {
        item: 'bigreactors:reinforced_reactorcasing'
      },
      D: {
        tag: 'forge:storage_blocks/diamond'
      },
      R: {
        tag: 'forge:storage_blocks/redstone'
      },
      X: {
        tag: 'forge:circuits/ultimate'
      },
      Y: {
        tag: 'forge:storage_blocks/uranium'
      }
    },
    pattern: ['CXC', 'YDY', 'CRC'],
    result: {
      item: 'bigreactors:reinforced_reactorcontroller'
    },
    show_notification: true
  }).id(`kubejs:bigreactors/reinforced_reactorcontroller`)

  //======= Turbine Controller (Reinforced) =======
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: {
      C: {
        item: 'bigreactors:reinforced_turbinecasing'
      },
      D: {
        tag: 'forge:storage_blocks/diamond'
      },
      R: {
        tag: 'forge:storage_blocks/redstone'
      },
      X: {
        tag: 'forge:circuits/ultimate'
      },
      Y: {
        tag: 'forge:storage_blocks/cyanite'
      }
    },
    pattern: ['CXC', 'YDY', 'CRC'],
    result: {
      item: 'bigreactors:reinforced_turbinecontroller'
    },
    show_notification: true
  }).id(`kubejs:bigreactors/reinforced_turbinecontroller`)

  removeRecipeByID(event, [
    'bigreactors:misc/book/erguide',
    'bigreactors:reactor/basic/controller_ingots_yellorium',
    'bigreactors:reactor/basic/controller_ingots_uranium',
    'bigreactors:reactor/reinforced/controller_ingots_yellorium',
    'bigreactors:reactor/reinforced/controller_ingots_uranium',
    'bigreactors:turbine/basic/controller',
    'bigreactors:turbine/reinforced/controller',
    'bigreactors:reprocessor/controller',
    'bigreactors:fluidizer/controller',
    'bigreactors:energizer/controller'
  ])

})