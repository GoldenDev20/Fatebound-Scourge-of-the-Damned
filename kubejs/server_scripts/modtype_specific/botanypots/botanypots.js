//Priority: 10
/**
 * @file botanypots.js
 * @description Recipe Botany Pots script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  BotanyPotMaterial.forEach((material) => {

    //======= Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["A A", "ABA", " A "],
      key: {
        A: {
          item: `minecraft:${material}`
        },
        B: {
          item: "supplementaries:planter"
        }
      },
      result: {
        item: `botanypots:${material}_botany_pot`,
        count: 1
      }
    }).id(`kubejs:basic/${material}_botany_pot`)

    //======= Hopper Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["ACA", "ABA", " A "],
      key: {
        A: {
          item: `minecraft:${material}`
        },
        B: {
          item: `botanypots:${material}_botany_pot`
        },
        C: {
          item: "create:chute"
        }
      },
      result: {
        item: `botanypots:${material}_hopper_botany_pot`,
        count: 1
      }
    }).id(`kubejs:basic/${material}_hopper_botany_pot`)

    //======= ELITE Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["ABA", "ACA", " A "],
      key: {
        A: {
          tag: "forge:storage_blocks/steel"
        },
        B: {
          tag: "forge:ender_pearls"
        },
        C: {
          item: `botanypots:${material}_botany_pot`
        }
      },
      result: {
        item: `botanypotstiers:elite_${material}_botany_pot`,
        count: 1
      }
    }).id(`kubejs:elite/${material}_botany_pot`)

    //======= ELITE Hopper Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["ABA", "ACA", "DED"],
      key: {
        A: {
          item: `minecraft:${material}`
        },
        B: {
          tag: "forge:ender_pearls"
        },
        C: {
          item: `botanypotstiers:elite_${material}_botany_pot`
        },
        D: {
          tag: "forge:storage_blocks/steel"
        },
        E: {
          item: "create:chute"
        }
      },
      result: {
        item: `botanypotstiers:elite_${material}_hopper_botany_pot`,
        count: 1
      }
    }).id(`kubejs:elite/${material}_hopper_botany_pot`)

    //======= ULTRA Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["ABA", "ACA", " A "],
      key: {
        A: {
          tag: "forge:storage_blocks/dragonsteel"
        },
        B: {
          tag: "forge:nether_stars"
        },
        C: {
          item: `botanypotstiers:elite_${material}_botany_pot`
        }
      },
      result: {
        item: `botanypotstiers:ultra_${material}_botany_pot`,
        count: 1
      }
    }).id(`kubejs:ultra/${material}_botany_pot`)

    //======= ULTRA Hopper Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["ABA", "ACA", "DED"],
      key: {
        A: {
          item: `minecraft:${material}`
        },
        B: {
          tag: "forge:nether_stars"
        },
        C: {
          item: `botanypotstiers:ultra_${material}_botany_pot`
        },
        D: {
          tag: "forge:storage_blocks/dragonsteel"
        },
        E: {
          item: "create:chute"
        }
      },
      result: {
        item: `botanypotstiers:ultra_${material}_hopper_botany_pot`,
        count: 1
      }
    }).id(`kubejs:ultra/${material}_hopper_botany_pot`)

    //

    //======= CREATIVE Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["ABA", "ACA", " A "],
      key: {
        A: {
          tag: "forge:storage_blocks/nether_star"
        },
        B: {
          item: "minecraft:enchanted_golden_apple"
        },
        C: {
          item: `botanypotstiers:ultra_${material}_botany_pot`
        }
      },
      result: {
        item: `botanypotstiers:creative_${material}_botany_pot`,
        count: 1
      }
    }).id(`kubejs:creative/${material}_botany_pot`)

    //======= CREATIVE Hopper Botany Pot =======
    event.custom({
      type: "crafting_shaped",
      pattern: ["ABA", "ACA", "DED"],
      key: {
        A: {
          item: `minecraft:${material}`
        },
        B: {
          item: "minecraft:enchanted_golden_apple"
        },
        C: {
          item: `botanypotstiers:creative_${material}_botany_pot`
        },
        D: {
          tag: "forge:storage_blocks/nether_star"
        },
        E: {
          item: "create:smart_chute"
        }
      },
      result: {
        item: `botanypotstiers:creative_${material}_hopper_botany_pot`,
        count: 1
      }
    }).id(`kubejs:creative/${material}_hopper_botany_pot`)

    //======= Remove recipe =======
    removeRecipeByID(event, [
      `botanypots:botanypots/crafting/${material}_compact_hopper_botany_pot`,
      `botanypots:botanypots/crafting/${material}_hopper_botany_pot`,
      `botanypots:botanypots/crafting/${material}_botany_pot`,
      `botanypots:botanypots/crafting/${material}_compact_hopper_botany_pot`,
      `botanypotstiers:crafting/elite_${material}_hopper_botany_pot`,
      `botanypotstiers:crafting/elite_${material}_compact_hopper_botany_pot`,
      `botanypotstiers:crafting/elite_${material}_compact_hopper_botany_pot_2`,
      `botanypotstiers:crafting/elite_${material}_compact_hopper_botany_pot_3`,
      `botanypotstiers:crafting/ultra_${material}_hopper_botany_pot`,
      `botanypotstiers:crafting/ultra_${material}_compact_hopper_botany_pot`,
      `botanypotstiers:crafting/ultra_${material}_compact_hopper_botany_pot_2`,
      `botanypotstiers:crafting/ultra_${material}_compact_hopper_botany_pot_3`,
      `botanypotstiers:crafting/creative_${material}_hopper_botany_pot`,
      `botanypotstiers:crafting/creative_${material}_compact_hopper_botany_pot`,
      `botanypotstiers:crafting/creative_${material}_compact_hopper_botany_pot_2`,
      `botanypotstiers:crafting/creative_${material}_compact_hopper_botany_pot_3`,
      `botanypotstiers:crafting/elite_${material}_botany_pot`,
      `botanypotstiers:crafting/elite_${material}_botany_pot_2`,
      `botanypotstiers:crafting/ultra_${material}_botany_pot`,
      `botanypotstiers:crafting/ultra_${material}_botany_pot_2`,
      `botanypotstiers:crafting/creative_${material}_botany_pot`,
      `botanypotstiers:crafting/creative_${material}_botany_pot_2`,
      'botanypots:botanypots/crafting/terracotta_hopper_botany_pot',
      'botanypotstiers:crafting/elite_terracotta_botany_pot_2',
      'botanypotstiers:crafting/ultra_terracotta_botany_pot_2',
      'botanypotstiers:crafting/creative_terracotta_botany_pot_2',
      'botanypotstiers:crafting/elite_terracotta_hopper_botany_pot',
      'botanypotstiers:crafting/elite_terracotta_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/elite_terracotta_compact_hopper_botany_pot_3',
      'botanypotstiers:crafting/ultra_terracotta_hopper_botany_pot',
      'botanypotstiers:crafting/ultra_terracotta_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/ultra_terracotta_compact_hopper_botany_pot_3',
      'botanypotstiers:crafting/creative_terracotta_hopper_botany_pot',
      'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_3',
    ])

  })

})