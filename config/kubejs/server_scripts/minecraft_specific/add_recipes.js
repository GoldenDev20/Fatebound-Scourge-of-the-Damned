//Priority: 100
/**
 * @file add_recipes.js
 * @description Vanilla Minecraft recipe script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']

    const water = '#forge:water';
    const planks = ['#minecraft:planks', '#aether:planks_crafting'];
    const iron = ['#forge:ingots/iron', '#blue_skies:ingots/ventium'];
    const slime = ['#forge:slimeballs', '#aether:swet_balls'];

    //======= Furnace =======
    event.shaped('minecraft:furnace', ['ABA', 'B B', 'ABA'], {
        A: ['allthecompressed:cobblestone_1x', 'cyclic:compressed_cobblestone'],
        B: '#forge:cobblestone'
    }).id(`kubejs:minecraft/furnace`)

    //======= Crafting Table =======
    event.shaped('minecraft:crafting_table', ['AB ', 'BA '], {
        A: '#minecraft:planks',
        B: '#minecraft:logs'
    }).id(`kubejs:minecraft/crafting/table`)

    //======= Chest =======
    event.shaped('4x minecraft:chest', ['AAA', 'A A', 'AAA'], {
        A: '#minecraft:logs'
    }).id(`kubejs:minecraft/chest_from_logs`)

    event.shaped('minecraft:chest', ['AAA', 'A A', 'AAA'], {
        A: '#minecraft:planks'
    }).id(`kubejs:minecraft/chest_from_planks`)

    //======= Trapped Chest =======
    event.shaped('minecraft:trapped_chest', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:planks',
        B: 'minecraft:tripwire_hook'
    }).id(`kubejs:minecraft/trapped_chest`)

    //======= Name Tag =======
    event.shaped('minecraft:name_tag', ['  A', ' B ', 'B  '], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:paper'
    }).id(`kubejs:minecraft/name_tag`)

    //======= Gravel =======
    event.shaped('minecraft:gravel', ['AA ', 'AA '], {
        A: 'minecraft:flint'
    }).id(`kubejs:minecraft/gravel`)

    //======= Sponge =======
    event.shaped('minecraft:sponge', ['CAC', 'ABA', 'CAC'], {
        A: 'minecraft:bucket',
        B: '#forge:dyes/yellow',
        C: '#minecraft:wool'
    }).id(`kubejs:minecraft/sponge`)

    //======= Dragon Breath =======
    event.shaped('minecraft:dragon_breath', [' D ', 'ABA', ' D '], {
        B: 'minecraft:glass_bottle',
        A: 'mysticalagriculture:air_essence',
        D: 'mysticalagriculture:dragon_egg_essence'
    }).id(`kubejs:minecraft/dragon_breath`)

    //======= Dragon Head =======
    event.shaped('minecraft:dragon_head', ['ABA', 'BCB', 'ABA'], {
        A: 'mysticalagradditions:dragon_scale',
        B: 'minecraft:dragon_breath',
        C: 'mysticalagriculture:blank_skull'
    }).id(`kubejs:minecraft/dragon_head`)

    //======= Bell =======
    event.shaped('minecraft:bell', ['AAA', 'BBB', ' C '], {
        A: '#forge:rods/wooden',
        B: 'minecraft:gold_ingot',
        C: 'minecraft:gold_block'
    }).id(`kubejs:minecraft/bell`)

    //======= Phantom Membrane =======
    event.shaped('2x minecraft:phantom_membrane', ['  A', ' AB', 'ABC'], {
        A: 'minecraft:feather',
        B: 'minecraft:cobweb',
        C: 'silentgear:fine_silk'
    }).id(`kubejs:minecraft/phantom/membrane`)

    //======= Elytra =======
    event.shaped('minecraft:elytra', ['ABA', 'CDC', 'E E'], {
        A: 'darkutils:slowfall_plate',
        B: 'minecraft:nether_star',
        C: 'botania:mana_string',
        D: 'mekanism:jetpack',
        E: 'silentgear:fluffy_feather'
    }).id(`kubejs:minecraft/elytra`)

    //======= Totem of Undying =======
    event.shaped('minecraft:totem_of_undying', ['AEA', 'BCB', ' B '], {
        A: '#forge:storage_blocks/emerald',
        B: '#forge:ingots/soularium',
        C: 'minecraft:enchanted_golden_apple',
        E: 'minecraft:respawn_anchor'
    }).id(`kubejs:minecraft/totem_of_undying`)

    //======= Hopper =======
    event.shaped('minecraft:hopper', ['ABA', 'ABA', ' A '], {
        A: 'minecraft:iron_ingot',
        B: '#minecraft:logs'
    }).id(`kubejs:minecraft/hopper`)

    //======= Saddle =======
    event.shaped('minecraft:saddle', ['AAA', 'BCB', 'D D'], {
        A: '#forge:leather',
        B: '#forge:rope',
        C: '#forge:wool',
        D: '#forge:ingots/iron'
    }).id(`kubejs:minecraft/saddle`)

    //======= Horse Armor =======
    const horseArmorMaterials = {
        iron: 'minecraft:iron_ingot',
        golden: 'minecraft:gold_ingot',
        diamond: 'minecraft:diamond'
    };

    for (const material in horseArmorMaterials) {
        event.shaped(`minecraft:${material}_horse_armor`, ['  A', 'ABA', 'ACA'], {
            A: horseArmorMaterials[material],
            B: 'minecraft:saddle',
            C: '#forge:rope'
        }).id(`kubejs:minecraft/${material}_horse_armor`);
    }

    //======= Concrete, Terracotta, Glass, Wool, Carpet, Bed, Candle, Shulker Box, Banner =======
    colors.forEach(color => {
        const dye = `#forge:dyes/${color}`;

        // Shaped recipes
        event.shaped(`8x minecraft:${color}_concrete`, ['AAA', 'ABA', 'AAA'], { A: `minecraft:${color}_concrete_powder`, B: water }).id(`kubejs:minecraft/${color}_concrete`);
        event.shaped(`8x minecraft:${color}_concrete_powder`, ['ABB', 'BBC', 'CCC'], { A: dye, B: '#forge:sand', C: '#forge:gravel' }).id(`kubejs:minecraft/${color}_concrete_powder`);
        event.shaped(`8x minecraft:${color}_stained_glass`, ['AAA', 'ABA', 'AAA'], { A: '#forge:glass', B: dye }).id(`kubejs:minecraft/${color}_stained_glass`);
        event.shaped(`8x minecraft:${color}_stained_glass_pane`, ['AAA', 'ABA', 'AAA'], { A: '#forge:glass_panes', B: dye }).id(`kubejs:minecraft/${color}_stained_glass_pane`);
        event.shaped(`8x minecraft:${color}_terracotta`, ['AAA', 'ABA', 'AAA'], { A: '#minecraft:terracotta', B: dye }).id(`kubejs:minecraft/${color}_terracotta`);
        event.shaped(`8x minecraft:${color}_glazed_terracotta`, ['AAA', 'ABA', 'AAA'], { A: '#forge:glazed_terracotta', B: dye }).id(`kubejs:minecraft/${color}_glazed_terracotta`);
        event.shaped(`8x minecraft:${color}_wool`, ['AAA', 'ABA', 'AAA'], { A: '#forge:wool', B: dye }).id(`kubejs:minecraft/${color}_wool`);
        event.shaped(`8x minecraft:${color}_carpet`, ['AAA', 'ABA', 'AAA'], { A: '#minecraft:wool_carpets', B: dye }).id(`kubejs:minecraft/${color}_carpet`);

        // Shapeless recipes
        event.shapeless(`minecraft:${color}_bed`, ['#minecraft:beds', dye]).id(`kubejs:minecraft/${color}/bed`);
        event.shapeless(`minecraft:${color}_candle`, ['#minecraft:candles', dye]).id(`kubejs:minecraft/${color}/candle`);
        event.shapeless(`minecraft:${color}_banner`, ['#minecraft:banners', dye]).id(`kubejs:minecraft/${color}/banner`);

        //Shulker Box - Inline modifyShapeless
        const ingredientList = ['#minecraft:shulker_boxes', dye];
        event.shapeless(`minecraft:${color}_shulker_box`, ingredientList).id(`kubejs:minecraft/${color}/shulker_box`);
    })

    //======= Shapeless Conversions =======
    event.shapeless('3x minecraft:bone', 'minecraft:bone_block').id(`kubejs:minecraft/bone`);
    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/clay_ball`);
    event.shapeless('4x minecraft:string', '#minecraft:wool').id(`kubejs:minecraft/string`);
    event.shapeless('4x minecraft:glowstone_dust', 'minecraft:glowstone').id(`kubejs:minecraft/glowstone_dust`);
    event.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/quartz`);
    event.shapeless('4x minecraft:snowball', 'minecraft:snow_block').id(`kubejs:minecraft/snowball`);
    event.shapeless('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id(`kubejs:minecraft/nether_wart`);
    event.shapeless('9x minecraft:ice', 'minecraft:packed_ice').id(`kubejs:minecraft/ice`);
    event.shapeless('9x minecraft:packed_ice', 'minecraft:blue_ice').id(`kubejs:minecraft/packed_ice`);
    event.shapeless('minecraft:crying_obsidian', ['minecraft:obsidian', 'minecraft:ghast_tear']).id(`kubejs:minecraft/crying_obsidian`);
    event.shapeless('minecraft:experience_bottle', ['minecraft:lapis_lazuli', 'minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:quartz', 'minecraft:glass_bottle']).id(`kubejs:minecraft/experience_bottle`);
    event.shapeless('minecraft:experience_bottle', ['minecraft:golden_apple', 'minecraft:glass_bottle']).id(`kubejs:minecraft/experience/bottle`);
    event.shapeless('4x minecraft:honey_bottle', 'minecraft:honey_block').id(`kubejs:minecraft/honey_bottle`);

    //======= Dye Recipes =======
    event.shaped('2x minecraft:blue_dye', ['#forge:dyes/magenta', '#forge:dyes/cyan']).id(`kubejs:minecraft/blue_dye`);
    event.shaped('2x minecraft:brown_dye', ['#forge:dyes/yellow', '#forge:dyes/red', '#forge:dyes/blue']).id(`kubejs:minecraft/brown_dye`);
    event.shaped('2x minecraft:red_dye', ['#forge:dyes/pink', '#forge:dyes/yellow']).id(`kubejs:minecraft/red_dye`);
    event.shaped('2x minecraft:yellow_dye', ['#forge:dyes/red', '#forge:dyes/green']).id(`kubejs:minecraft/yellow_dye`);
    event.shaped('2x minecraft:black_dye', ['#forge:dyes/gray', '#forge:dyes/gray', '#forge:dyes/gray']).id(`kubejs:minecraft/black_dye`);

    // FUNCTIONS: modifyShaped, modifyShapeless
    function modifyShaped(event, output, count, pattern, ingredients) {
        event.remove({ output: output, type: 'minecraft:crafting_shaped' });
        event.shaped(Item.of(output, count), pattern, ingredients).id(`kubejs:${output.replace(':', '/')}`);
    }

    function modifyShapeless(event, output, count, ingredients) {
        event.remove({ output: output, type: 'minecraft:crafting_shapeless' });
        event.shapeless(Item.of(output, count), ingredients).id(`kubejs:${output.replace(':', '/')}`);
    }

    //======= Food Recipes =======
    modifyShaped(event, 'minecraft:cake', 1, ['AAA', 'BCB', 'DDD'], {
        A: '#forge:milk',
        B: '#forge:sugar',
        C: '#forge:eggs',
        D: '#forge:grain'
    });

    modifyShaped(event, 'minecraft:cookie', 1, ['   ', 'ABA', '   '], {
        A: '#forge:grain',
        B: 'minecraft:cocoa_beans'
    });

    modifyShaped(event, 'minecraft:pumpkin_pie', 1, ['AB ', 'C  '], {
        A: 'minecraft:pumpkin',
        B: '#forge:sugar',
        C: '#forge:eggs'
    });

    modifyShaped(event, 'minecraft:rabbit_stew', 1, ['ABC', 'DE ', '   '], {
        A: 'minecraft:baked_potato',
        B: 'minecraft:cooked_rabbit',
        C: 'minecraft:bowl',
        D: 'minecraft:carrot',
        E: '#forge:mushrooms'
    });

    modifyShaped(event, 'minecraft:mushroom_stew', 1, ['AA ', 'B  '], {
        A: '#forge:mushrooms',
        B: 'minecraft:bowl'
    });

    //======= Tool/Equipment Recipes =======
    modifyShaped(event, 'minecraft:book', 1, ['AA ', 'AB '], {
        A: '#forge:paper',
        B: '#forge:leather'
    });

    modifyShaped(event, 'minecraft:leather_horse_armor', 1, ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:leather',
        B: 'minecraft:saddle',
        C: '#forge:rope'
    });

    modifyShaped(event, 'minecraft:lead', 2, ['AA ', 'AB ', '  A'], {
        A: '#forge:string',
        B: '#forge:slimeballs'
    });

    modifyShaped(event, 'minecraft:bow', 1, [' AB', 'A B', ' AB'], {
        A: '#forge:rods/wooden',
        B: '#forge:string'
    });

    modifyShaped(event, 'minecraft:arrow', 8, [' A ', ' B ', ' C '], {
        A: '#forge:arrow_top',
        B: '#forge:rods/wooden',
        C: '#forge:feathers'
    });

    modifyShaped(event, 'minecraft:end_crystal', 1, ['AAA', 'ABA', 'ACA'], {
        A: '#forge:glass',
        B: 'minecraft:ender_eye',
        C: 'minecraft:ghast_tear'
    });

    modifyShaped(event, 'minecraft:torch', 4, [' A ', ' B ', '   '], {
        A: '#minecraft:coals',
        B: '#forge:rods/wooden'
    });

    modifyShaped(event, 'minecraft:soul_torch', 4, [' A ', ' B ', ' C '], {
        A: '#minecraft:coals',
        B: '#forge:rods/wooden',
        C: '#minecraft:soul_fire_base_blocks'
    });

    //======= Building Block Recipes =======
    modifyShaped(event, 'minecraft:scaffolding', 6, ['ABA', 'A A', 'A A'], {
        A: 'minecraft:bamboo',
        B: ['#forge:string', 'farmersdelight:canvas']
    });

    modifyShaped(event, 'minecraft:white_bed', 1, ['AAA', 'BBB'], {
        A: ['minecraft:white_wool', 'supplementaries:feather_block'],
        B: planks
    });

    //======= Functional Block Recipes =======
    modifyShaped(event, 'minecraft:brewing_stand', 1, ['   ', ' A ', 'BBB'], {
        A: '#forge:rods/blaze',
        B: '#forge:cobblestone'
    });

    modifyShaped(event, 'minecraft:map', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:paper',
        B: 'minecraft:compass'
    });

    modifyShaped(event, 'minecraft:smoker', 1, [' A ', 'ABA', ' A '], {
        A: '#minecraft:logs',
        B: '#misctags:furnace'
    });

    modifyShaped(event, 'minecraft:blast_furnace', 1, ['AAA', 'ABA', 'CCC'], {
        A: '#forge:ingots/iron',
        B: '#misctags:furnace',
        C: '#misctags:smooth_stone'
    });

    modifyShaped(event, 'minecraft:piston', 1, ['AAA', 'BCB', 'BDB'], {
        A: '#minecraft:planks',
        B: '#forge:cobblestone',
        C: '#forge:ingots/iron',
        D: '#forge:dusts/redstone'
    });

    modifyShaped(event, 'minecraft:dispenser', 1, ['AAA', 'ABA', 'ACA'], {
        A: '#forge:cobblestone',
        B: 'minecraft:bow',
        C: '#forge:dusts/redstone'
    });

    modifyShaped(event, 'minecraft:dropper', 1, ['AAA', 'A A', 'ABA'], {
        A: '#forge:cobblestone',
        B: '#forge:dusts/redstone'
    });

    modifyShaped(event, 'minecraft:observer', 1, ['AAA', 'BBC', 'AAA'], {
        A: '#forge:cobblestone',
        B: '#forge:dusts/redstone',
        C: 'minecraft:quartz'
    });

    modifyShaped(event, 'minecraft:daylight_detector', 1, ['AAA', 'BBB', 'CCC'], {
        A: '#forge:glass',
        B: 'minecraft:quartz',
        C: '#minecraft:wooden_slabs'
    });

    modifyShaped(event, 'minecraft:lever', 1, ['   ', ' A ', ' B '], {
        A: '#forge:rods/wooden',
        B: '#forge:cobblestone'
    });

    modifyShaped(event, 'minecraft:redstone_lamp', 1, ['ABA', 'BCB', 'ABA'], {
        A: '#forge:nuggets/copper',
        B: '#forge:dusts/redstone',
        C: 'minecraft:glowstone'
    });

    modifyShaped(event, 'minecraft:loom', 1, ['AA', 'BB'], {
        A: '#forge:string',
        B: planks
    });

    modifyShaped(event, 'minecraft:barrel', 1, ['BAB', 'B B', 'BAB'], {
        A: '#minecraft:wooden_slabs',
        B: planks
    });

    modifyShaped(event, 'minecraft:cartography_table', 1, ['AA ', 'BB ', 'BB '], {
        A: '#forge:paper',
        B: planks
    });

    modifyShaped(event, 'minecraft:grindstone', 1, ['ABA', 'C C'], {
        A: '#forge:rods/wooden',
        B: ['minecraft:stone_slab', 'aether:holystone_slab'],
        C: planks
    });

    modifyShaped(event, 'minecraft:smithing_table', 1, ['AA ', 'BB ', 'BB '], {
        A: '#forge:ingots/copper',
        B: planks
    });

    modifyShaped(event, 'minecraft:stonecutter', 1, [' A ', 'BBB'], {
        A: iron,
        B: ['minecraft:stone', 'aether:holystone', '#blue_skies:stone']
    });

    modifyShaped(event, 'minecraft:beehive', 1, ['BBB', 'AAA', 'BBB'], {
        A: 'minecraft:honeycomb',
        B: planks
    });

    modifyShaped(event, 'minecraft:sticky_piston', 1, ['A', 'B'], {
        A: slime,
        B: 'minecraft:piston'
    });

    modifyShaped(event, 'minecraft:slime_block', 1, ['AAA', 'AAA', 'AAA'], {
        A: slime
    });

    modifyShaped(event, 'minecraft:tripwire_hook', 2, ['A', 'B', 'C'], {
        A: '#forge:ingots/iron',
        B: '#forge:rods/wooden',
        C: planks
    });

    modifyShaped(event, 'minecraft:note_block', 1, ['AAA', 'ABA', 'AAA'], {
        A: planks,
        B: '#forge:dusts/redstone'
    });

    modifyShaped(event, 'minecraft:furnace_minecart', 1, ['A', 'B'], {
        A: '#misctags:furnace',
        B: 'minecraft:minecart'
    });

    modifyShaped(event, 'minecraft:shield', 1, ['ABA', 'AAA', ' A '], {
        A: planks,
        B: ['#forge:ingots/iron', 'aether:zanite_gemstone']
    });

    modifyShaped(event, 'minecraft:jukebox', 1, ['AAA', 'ABA', 'AAA'], {
        A: planks,
        B: ['#forge:gems/diamond', 'aether:enchanted_gravitite', '#blue_skies:gems/charoite']
    });

    modifyShaped(event, 'minecraft:anvil', 1, ['BBB', ' A ', 'AAA'], {
        A: iron,
        B: ['#forge:storage_blocks/iron', '#forge:storage_blocks/ventium']
    });

    //======= Shapeless Recipes =======
    modifyShapeless(event, 'minecraft:flint_and_steel', 1, [
        ['#forge:ingots/iron', 'alexsmobs:dropbear_claw'],
        ['minecraft:flint']
    ]);

    modifyShapeless(event, 'minecraft:fire_charge', 3, [
        '#forge:gunpowder',
        ['minecraft:blaze_powder', 'ars_nouveau:fire_essence'],
        '#minecraft:coals'
    ]);

})
