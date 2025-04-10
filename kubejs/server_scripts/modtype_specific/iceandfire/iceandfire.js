//Priority: 1000
/**
 * @file iceandfire.js
 * @description Recipe Ice and Fire: Dragons script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Blue Ice =======
    event.shaped('minecraft:blue_ice', ['AAA', 'AAA', 'AAA'], {
        A: 'iceandfire:dragon_ice'
    }).id(`kubejs:minecraft/blue_ice`)

    //======= DRAGONSTEEL ARMOR =======
    //======= FIRE =======
    //======= Fire Dragonsteel Helmet =======
    event.shaped('iceandfire:dragonsteel_fire_helmet', ['AAA', 'CBC'], {
        A: '#forge:storage_blocks/fire_dragonsteel',
        B: ['iceandfire:armor_red_helmet', 'iceandfire:armor_emerald_helmet',
            'iceandfire:armor_bronze_helmet', 'iceandfire:armor_gray_helmet'
        ],
        C: '#forge:ingots/fire_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_fire_helmet`)
    //======= Fire Dragonsteel Chestplate =======
    event.shaped('iceandfire:dragonsteel_fire_chestplate', ['CBC', 'CCC', 'AAA'], {
        A: '#forge:storage_blocks/fire_dragonsteel',
        B: ['iceandfire:armor_red_chestplate', 'iceandfire:armor_emerald_chestplate',
            'iceandfire:armor_bronze_chestplate', 'iceandfire:armor_gray_chestplate'
        ],
        C: '#forge:ingots/fire_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_fire_chestplate`)
    //======= Fire Dragonsteel Leggings =======
    event.shaped('iceandfire:dragonsteel_fire_leggings', ['AAA', 'CBC', 'C C'], {
        A: '#forge:storage_blocks/fire_dragonsteel',
        B: ['iceandfire:armor_red_leggings', 'iceandfire:armor_emerald_leggings',
            'iceandfire:armor_bronze_leggings', 'iceandfire:armor_gray_leggings'
        ],
        C: '#forge:ingots/fire_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_fire_leggings`)
    //======= Fire Dragonsteel Boots =======
    event.shaped('iceandfire:dragonsteel_fire_boots', ['ABA', 'C C'], {
        A: '#forge:storage_blocks/fire_dragonsteel',
        B: ['iceandfire:armor_red_boots', 'iceandfire:armor_emerald_boots',
            'iceandfire:armor_bronze_boots', 'iceandfire:armor_gray_boots'
        ],
        C: '#forge:ingots/fire_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_fire_boots`)
    //======= ICE =======
    //======= Ice Dragonsteel Helmet =======
    event.shaped('iceandfire:dragonsteel_ice_helmet', ['AAA', 'CBC'], {
        A: '#forge:storage_blocks/ice_dragonsteel',
        B: ['iceandfire:armor_blue_helmet', 'iceandfire:armor_white_helmet',
            'iceandfire:armor_sapphire_helmet', 'iceandfire:armor_silver_helmet'
        ],
        C: '#forge:ingots/ice_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_ice_helmet`)
    //======= Ice Dragonsteel Chestplate =======
    event.shaped('iceandfire:dragonsteel_ice_chestplate', ['CBC', 'CCC', 'AAA'], {
        A: '#forge:storage_blocks/ice_dragonsteel',
        B: ['iceandfire:armor_blue_chestplate', 'iceandfire:armor_white_chestplate',
            'iceandfire:armor_sapphire_chestplate', 'iceandfire:armor_silver_chestplate'
        ],
        C: '#forge:ingots/ice_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_ice_chestplate`)
    //======= Ice Dragonsteel Leggings =======
    event.shaped('iceandfire:dragonsteel_ice_leggings', ['AAA', 'CBC', 'C C'], {
        A: '#forge:storage_blocks/ice_dragonsteel',
        B: ['iceandfire:armor_blue_leggings', 'iceandfire:armor_white_leggings',
            'iceandfire:armor_sapphire_leggings', 'iceandfire:armor_silver_leggings'
        ],
        C: '#forge:ingots/ice_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_ice_leggings`)
    //======= Ice Dragonsteel Boots =======
    event.shaped('iceandfire:dragonsteel_ice_boots', ['ABA', 'C C'], {
        A: '#forge:storage_blocks/ice_dragonsteel',
        B: ['iceandfire:armor_blue_boots', 'iceandfire:armor_white_boots',
            'iceandfire:armor_sapphire_boots', 'iceandfire:armor_silver_boots'
        ],
        C: '#forge:ingots/ice_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_ice_boots`)
    //======= LIGHTNING =======
    //======= Lightning Dragonsteel Helmet =======
    event.shaped('iceandfire:dragonsteel_lightning_helmet', ['AAA', 'CBC'], {
        A: '#forge:storage_blocks/lightning_dragonsteel',
        B: ['iceandfire:armor_electric_helmet', 'iceandfire:armor_amythest_helmet',
            'iceandfire:armor_copper_helmet', 'iceandfire:armor_black_helmet'
        ],
        C: '#forge:ingots/lightning_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_lightning_helmet`)
    //======= Lightning Dragonsteel Chestplate =======
    event.shaped('iceandfire:dragonsteel_lightning_chestplate', ['CBC', 'CCC', 'AAA'], {
        A: '#forge:storage_blocks/lightning_dragonsteel',
        B: ['iceandfire:armor_electric_chestplate', 'iceandfire:armor_amythest_chestplate',
            'iceandfire:armor_copper_chestplate', 'iceandfire:armor_black_chestplate'
        ],
        C: '#forge:ingots/lightning_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_lightning_chestplate`)
    //======= Lightning Dragonsteel Leggings =======
    event.shaped('iceandfire:dragonsteel_lightning_leggings', ['AAA', 'CBC', 'C C'], {
        A: '#forge:storage_blocks/lightning_dragonsteel',
        B: ['iceandfire:armor_electric_leggings', 'iceandfire:armor_amythest_leggings',
            'iceandfire:armor_copper_leggings', 'iceandfire:armor_black_leggings'
        ],
        C: '#forge:ingots/lightning_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_lightning_leggings`)
    //======= Lightning Dragonsteel Boots =======
    event.shaped('iceandfire:dragonsteel_lightning_boots', ['ABA', 'C C'], {
        A: '#forge:storage_blocks/lightning_dragonsteel',
        B: ['iceandfire:armor_electric_boots', 'iceandfire:armor_amythest_boots',
            'iceandfire:armor_copper_boots', 'iceandfire:armor_black_boots'
        ],
        C: '#forge:ingots/lightning_dragonsteel'
    }).id(`kubejs:iceandfire/dragonsteel_lightning_boots`)

    //======= DREADSTEEL ARMOR =======
    //======= Dreadsteel Helmet =======
    event.shaped('dreadsteel:dreadsteel_helmet', ['AAA', 'ABA'], {
        A: '#forge:ingots/dreadsteel',
        B: ['iceandfire:dragonsteel_fire_helmet', 'iceandfire:dragonsteel_ice_helmet', 'iceandfire:dragonsteel_lightning_helmet']
    }).id(`kubejs:dreadsteel/dreadsteel_helmet`)
    //======= Dreadsteel Chestplate =======
    event.shaped('dreadsteel:dreadsteel_chestplate', ['ABA', 'AAA', 'AAA'], {
        A: '#forge:ingots/dreadsteel',
        B: ['iceandfire:dragonsteel_fire_chestplate', 'iceandfire:dragonsteel_ice_chestplate', 'iceandfire:dragonsteel_lightning_chestplate']
    }).id(`kubejs:dreadsteel/dreadsteel_chestplate`)
    //======= Dreadsteel Leggings =======
    event.shaped('dreadsteel:dreadsteel_leggings', ['AAA', 'ABA', 'A A'], {
        A: '#forge:ingots/dreadsteel',
        B: ['iceandfire:dragonsteel_fire_leggings', 'iceandfire:dragonsteel_ice_leggings', 'iceandfire:dragonsteel_lightning_leggings']
    }).id(`kubejs:dreadsteele/dreadsteel_leggings`)
    //======= Dreadsteel Boots =======
    event.shaped('dreadsteel:dreadsteel_boots', ['ABA', 'A A'], {
        A: '#forge:ingots/dreadsteel',
        B: ['iceandfire:dragonsteel_fire_boots', 'iceandfire:dragonsteel_ice_boots', 'iceandfire:dragonsteel_lightning_boots']
    }).id(`kubejs:dreadsteel/dreadsteel_boots`)

    //Fire Dragonsteel Sword
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '       DH',
            '      DAD',
            '     DAD ',
            'BG  DAD  ',
            ' BGDAD   ',
            ' EBAD    ',
            ' FIBG    ',
            'FCFEBG   ',
            'CF   B   ',
        ],
        key: {
            A: {
                item: 'cataclysm:ignitium_ingot',
            },
            B: {
                item: 'botania:blaze_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_fire_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_fire',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'reliquary:molten_core',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_fire'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_fire_sword',
        },
    }).id(`kubejs:iceandfire/dragonsteel_fire_sword`)

    //Fire Dragonsteel Axe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            ' DH G HD ',
            'DA  G  AD',
            'DA EFE AD',
            'DABBFBBAD',
            'DA EFE AD',
            'DA  F  AD',
            ' DH I HD ',
            '   GCG   ',
            '   GCG   ',
        ],
        key: {
            A: {
                item: 'cataclysm:ignitium_ingot',
            },
            B: {
                item: 'botania:blaze_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_fire_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_fire',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'reliquary:molten_core',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_fire'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_fire_axe',
        },
    }).id(`kubejs:iceandfire/dragonsteel_fire_axe`)

    //Fire Dragonsteel Pickaxe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DDDDD  ',
            ' DAAAAAD ',
            'DADEBEDAD',
            'HD GBG DH',
            '   GBG   ',
            '   GBG   ',
            '   FIF   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {
                item: 'cataclysm:ignitium_ingot',
            },
            B: {
                item: 'botania:blaze_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_fire_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_fire',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'reliquary:molten_core',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_fire'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_fire_pickaxe',
        },
    }).id(`kubejs:iceandfire/dragonsteel_fire_pickaxe`)

    //Fire Dragonsteel Shovel
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DAHAD  ',
            '  DAGAD  ',
            '  DAGAD  ',
            '  DABAD  ',
            '   EBE   ',
            '   GBG   ',
            '   GIG   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {
                item: 'cataclysm:ignitium_ingot',
            },
            B: {
                item: 'botania:blaze_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_fire_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_fire',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'reliquary:molten_core',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_fire'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_fire_shovel',
        },
    }).id(`kubejs:iceandfire/dragonsteel_fire_shovel`)

    //Ice Dragonsteel Sword
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '       DH',
            '      DAD',
            '     DAD ',
            'BG  DAD  ',
            ' BGDAD   ',
            ' EBAD    ',
            ' FIBG    ',
            'FCFEBG   ',
            'CF   B   ',
        ],
        key: {
            A: {
                item: 'extendedcrafting:crystaltine_ingot',
            },
            B: {
                item: 'reliquary:frozen_core',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_ice_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_ice',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'mowziesmobs:ice_crystal',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_ice'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_ice_sword',
        },
    }).id(`kubejs:iceandfire/dragonsteel_ice_sword`)

    //Ice Dragonsteel Axe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            ' DH G HD ',
            'DA  G  AD',
            'DA EFE AD',
            'DABBFBBAD',
            'DA EFE AD',
            'DA  F  AD',
            ' DH I HD ',
            '   GCG   ',
            '   GCG   ',
        ],
        key: {
            A: {
                item: 'extendedcrafting:crystaltine_ingot',
            },
            B: {
                item: 'reliquary:frozen_core',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_ice_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_ice',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'mowziesmobs:ice_crystal',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_ice'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_ice_axe',
        },
    }).id(`kubejs:iceandfire/dragonsteel_ice_axe`)

    //Ice Dragonsteel Pickxe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DDDDD  ',
            ' DAAAAAD ',
            'DADEBEDAD',
            'HD GBG DH',
            '   GBG   ',
            '   GBG   ',
            '   FIF   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {
                item: 'extendedcrafting:crystaltine_ingot',
            },
            B: {
                item: 'reliquary:frozen_core',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_ice_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_ice',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'mowziesmobs:ice_crystal',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_ice'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_ice_pickaxe',
        },
    }).id(`kubejs:iceandfire/dragonsteel_ice_pickaxe`)

    //Ice Dragonsteel Shovel
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DAHAD  ',
            '  DAGAD  ',
            '  DAGAD  ',
            '  DABAD  ',
            '   EBE   ',
            '   GBG   ',
            '   GIG   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {
                item: 'extendedcrafting:crystaltine_ingot',
            },
            B: {
                item: 'reliquary:frozen_core',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_ice_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_ice',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'mowziesmobs:ice_crystal',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_ice'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_ice_shovel',
        },
    }).id(`kubejs:iceandfire/dragonsteel_ice_shovel`)

    //Lightning Dragonsteel Sword
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '       DH',
            '      DAD',
            '     DAD ',
            'BG  DAD  ',
            ' BGDAD   ',
            ' EBAD    ',
            ' FIBG    ',
            'FCFEBG   ',
            'CF   B   ',
        ],
        key: {
            A: {
                item: 'redstone_arsenal:flux_ingot',
            },
            B: {
                item: 'minecraft:amethyst_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_lightning_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_lightning',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'botania:thunder_sword',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_lightning'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_lightning_sword',
        },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_sword`)

    //Lightning Dragonsteel Axe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            ' DH G HD ',
            'DA  G  AD',
            'DA EFE AD',
            'DABBFBBAD',
            'DA EFE AD',
            'DA  F  AD',
            ' DH I HD ',
            '   GCG   ',
            '   GCG   ',
        ],
        key: {
            A: {
                item: 'redstone_arsenal:flux_ingot',
            },
            B: {
                item: 'minecraft:amethyst_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_lightning_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_lightning',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'botania:thunder_sword',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_lightning'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_lightning_axe',
        },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_axe`)

    //Lightning Dragonsteel Pickxe
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DDDDD  ',
            ' DAAAAAD ',
            'DADEBEDAD',
            'HD GBG DH',
            '   GBG   ',
            '   GBG   ',
            '   FIF   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {
                item: 'redstone_arsenal:flux_ingot',
            },
            B: {
                item: 'minecraft:amethyst_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_lightning_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_lightning',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'botania:thunder_sword',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_lightning'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_lightning_pickaxe',
        },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_pickaxe`)

    //Lightning Dragonsteel Shovel
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  DAHAD  ',
            '  DAGAD  ',
            '  DAGAD  ',
            '  DABAD  ',
            '   EBE   ',
            '   GBG   ',
            '   GIG   ',
            '   FCF   ',
            '   FCF   ',
        ],
        key: {
            A: {
                item: 'redstone_arsenal:flux_ingot',
            },
            B: {
                item: 'minecraft:amethyst_block',
            },
            C: {
                item: 'iceandfire:dragon_bone_block',
            },
            D: {
                item: 'iceandfire:dragonsteel_lightning_ingot',
            },
            E: {
                item: 'iceandfire:summoning_crystal_lightning',
            },
            F: {
                item: 'iceandfire:witherbone',
            },
            G: {
                item: 'minecraft:nether_star',
            },
            H: {
                item: 'botania:thunder_sword',
            },
            I: {
                item: 'iceandfire:dragonbone_sword_lightning'
            },
        },
        result: {
            item: 'iceandfire:dragonsteel_lightning_shovel',
        },
    }).id(`kubejs:iceandfire/dragonsteel_lightning_shovel`)

    removeRecipeByID(event, [
        'iceandfire:packed_ice',
        'iceandfire:dragonsteel_fire_sword',
        'iceandfire:dragonsteel_fire_axe',
        'iceandfire:dragonsteel_fire_pickaxe',
        'iceandfire:dragonsteel_fire_shovel',
        'iceandfire:dragonsteel_ice_sword',
        'iceandfire:dragonsteel_ice_axe',
        'iceandfire:dragonsteel_ice_pickaxe',
        'iceandfire:dragonsteel_ice_shovel',
        'iceandfire:dragonsteel_lightning_sword',
        'iceandfire:dragonsteel_lightning_axe',
        'iceandfire:dragonsteel_lightning_pickaxe',
        'iceandfire:dragonsteel_lightning_shovel',
        'dreadsteel:dreadsteel_helmet',
        'dreadsteel:dreadsteel_chestplate',
        'dreadsteel:dreadsteel_leggings',
        'dreadsteel:dreadsteel_boots',
        'iceandfire:dragonsteel_fire_helmet',
        'iceandfire:dragonsteel_fire_chestplate',
        'iceandfire:dragonsteel_fire_leggings',
        'iceandfire:dragonsteel_fire_boots',
        'iceandfire:dragonsteel_ice_helmet',
        'iceandfire:dragonsteel_ice_chestplate',
        'iceandfire:dragonsteel_ice_leggings',
        'iceandfire:dragonsteel_ice_boots',
        'iceandfire:dragonsteel_lightning_helmet',
        'iceandfire:dragonsteel_lightning_chestplate',
        'iceandfire:dragonsteel_lightning_leggings',
        'iceandfire:dragonsteel_lightning_boots',
    ])

})