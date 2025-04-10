//Priority: 1000
/**
 * @file creative_items.js
 * @description Recipe Creative Items script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Refined Storage Creative Item Storage Disk =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '    C    ',
            '   FAF   ',
            '  FABAF  ',
            ' FABDBAF ',
            'CABDEDBAC',
            ' FABDBAF ',
            '  FABAF  ',
            '   FAF   ',
            '    C    ',
        ],
        key: {
            A: {item: 'refinedstorage:processor_binding',},
            B: {item: 'refinedstorage:silicon',},
            C: {item: 'refinedstorage:advanced_processor',},
            D: {item: 'refinedstorage:64k_storage_disk',},
            E: {item: 'kubejs:crystal_of_creation',},
            F: {item: 'minecraft:nether_star',}
        },
        result: {item: 'refinedstorage:creative_storage_disk',},
    }).id(`kubejs:refinedstorage/creative_storage_disk`)

    //======= Refined Storage Creative Fluid storage Disk =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '    C    ',
            '   FAF   ',
            '  FABAF  ',
            ' FABDBAF ',
            'CABDEDBAC',
            ' FABDBAF ',
            '  FABAF  ',
            '   FAF   ',
            '    C    ',
        ],
        key: {
            A: {item: 'refinedstorage:processor_binding',},
            B: {item: 'refinedstorage:silicon',},
            C: {item: 'refinedstorage:advanced_processor',},
            D: {item: 'refinedstorage:4096k_fluid_storage_disk',},
            E: {item: 'kubejs:crystal_of_creation',},
            F: {item: 'minecraft:nether_star',}
        },
        result: {item: 'refinedstorage:creative_fluid_storage_disk',},
    }).id(`kubejs:refinedstorage/creative_fluid_storage_disk`)

    //======= Botania Creative Mana Tablet =======
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            Item.of('botania:mana_tablet', '{mana:500000}').strongNBT().toJson(),
            {item: "botania:mana_diamond"},
            {item: "botania:terrasteel_ingot"},
            {item: "kubejs:crystal_of_creation"},
            {item: "kubejs:personal_id"},
            {item: "botania:terrasteel_ingot"},
            {item: "botania:mana_diamond"}
        ],
        mana: 50000,
        output: Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').strongNBT().toJson()
    }).id(`kubejs:botania/creative_mana_tablet`)

    //======= Botania Creative Pool =======
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            Item.of('botania:mana_tablet', '{mana:500000}').strongNBT().toJson(),
            {item: "botania:mana_diamond"},
            {item: "botania:terrasteel_ingot"},
            {item: "kubejs:crystal_of_creation"},
            {item: "kubejs:personal_id"},
            {item: "botania:gaia_ingot"},
            {item: "botania:terrasteel_ingot"},
            {item: "botania:mana_diamond"}
        ],
        mana: 100000,
        output: {item: "botania:creative_pool"}
    }).id(`kubejs:botania/creative_pool`)

    //======= Mekanism Creative Fluid Tank =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '         ',
            '  HHHHH  ',
            ' HBBGBBH ',
            ' HBFDFBH ',
            ' HBDEDBH ',
            ' HBFDFBH ',
            ' AABCBAA ',
            ' AA   AA ',
            '         ',
        ],
        key: {
            A: {item: 'mekanism:dynamic_tank',},
            B: {item: 'mekanism:alloy_atomic',},
            C: {item: 'industrialforegoing:supreme_black_hole_tank',},
            D: {item: 'enderstorage:ender_tank',},
            E: {item: 'kubejs:crystal_of_creation',},
            F: {item: 'mekanism:ultimate_fluid_tank',},
            G: {item: 'kubejs:personal_id',},
            H: {item: 'minecraft:nether_star',}
        },
        result: {item: 'mekanism:creative_fluid_tank',},
    }).id(`kubejs:mekanism/creative_fluid_tank`)

    //======= Mystical Agriculture Creative Essence (Essence of Fate) =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'VZXXXXXZV',
            'ZXYYYYYXZ',
            'XYYABCYYX',
            'XYDEFGHYX',
            'XYIJKLMYX',
            'XYNOPQRYX',
            'XYYSTUYYX',
            'ZXYYYYYXZ',
            'VZXXXXXZV',
        ],
        key: {
            A: {item: 'kubejs:dreamweaver_moonstone',},
            B: {item: 'kubejs:radiant_ruby',},
            C: {item: 'kubejs:elysian_malachite',},
            D: {item: 'kubejs:dusk_citrine',},
            E: {item: 'kubejs:arcane_bloodstone',},
            F: {item: 'kubejs:glimmering_garnet',},
            G: {item: 'kubejs:veil_of_shadows',},
            H: {item: 'kubejs:luminous_peridot',},
            I: {item: 'kubejs:twilight_diamond',},
            J: {item: 'kubejs:crimson_sunstone',},
            K: {item: 'kubejs:stone_of_transcendence',},
            L: {item: 'kubejs:whispering_quartz',},
            M: {item: 'kubejs:seraphic_jade',},
            N: {item: 'kubejs:enchanted_onyx',},
            O: {item: 'kubejs:celestial_sapphire',},
            P: {item: 'kubejs:frosted_topaz',},
            Q: {item: 'kubejs:phantom_tourmaline',},
            R: {item: 'kubejs:shadow_opal',},
            S: {item: 'kubejs:starlit_aquamarine',},
            T: {item: 'kubejs:mystic_amethyst',},
            U: {item: 'kubejs:wraithstone',},
            V: {item: 'mysticalexpansion:divinium_essence',},
            X: {item: 'minecraft:nether_star',},
            Y: {item: 'mysticalagradditions:insanium_essence',},
            Z: {item: 'mysticalagriculture:supremium_essence',}
        },
        result: {item: 'mysticalagradditions:creative_essence',},
    }).id(`kubejs:mysticalagradditions/creative_essence`)

    //======= Mekanism Creative Gas Tank =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '         ',
            '  HHHHH  ',
            ' HBBGBBH ',
            ' HBFDFBH ',
            ' HBDEDBH ',
            ' HBFDFBH ',
            ' AABCBAA ',
            ' AA   AA ',
            '         ',
        ],
        key: {
            A: {item: 'alltheores:steel_block',},
            B: {item: 'mekanism:alloy_atomic',},
            C: {item: 'minecraft:diamond_block',},
            D: {type: 'forge:nbt',
                item: 'mekanism:ultimate_chemical_tank',
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:ethene",amount:512000L}}]}}',
            },
            E: {item: 'kubejs:crystal_of_creation',},
            F: {item: 'mekanism:creative_fluid_tank',},
            G: {item: 'kubejs:personal_id',},
            H: {item: 'minecraft:nether_star',}
        },
        result: {item: 'mekanism:creative_chemical_tank',},
    }).id(`kubejs:mekanism/creative_chemical_tank`)

    //======= Creative Functional Storage Vending Upgrade =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  EEEEE  ',
            ' EBFDFBE ',
            ' EFAAAFE ',
            ' EFAFFFE ',
            ' EFAFFFE ',
            ' EFAFFFE ',
            ' EFAAAFE ',
            ' EBFCFBE ',
            '  EEEEE  ',
        ],
        key: {
            A: {item: 'minecraft:nether_star',},
            B: {item: 'extendedcrafting:crafting_core',},
            C: {item: 'kubejs:crystal_of_creation',},
            D: {item: 'kubejs:personal_id',},
            E: {item: 'minecraft:amethyst_shard',},
            F: {item: 'alltheores:platinum_plate',}
        },
        result: {item: 'functionalstorage:creative_vending_upgrade',},
    }).id(`kubejs:functionalstorage/creative_vending_upgrade`)

    //======= Iron Jetpacks Creative Jetpack =======
    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:creative"}').strongNBT(), [' A ', 'BCB', ' D '], {
        A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}').strongNBT(),
        B: 'allthemodium:unobtainium_block',
        C: 'powah:battery_nitro',
        D: 'immersiveengineering:rs_engineering'
    }).id('kubejs:ironjetpacks/creative_cell')

    event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT(), ['ABA', 'BCB', 'ADA'], {
        A: 'allthemodium:unobtainium_block',
        B: 'powah:nitro_crystal_block',
        C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:creative"}').strongNBT(),
        D: 'ironfurnaces:unobtainium_furnace'
    }).id('kubejs:ironjetpacks_creative_thruster')

    event.shaped(Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:creative"}').strongNBT(), ['ACA', 'BDB', 'AEA'], {
        A: 'allthemodium:unobtainium_block',
        B: 'mekanism:sps_casing',
        C: 'powah:reactor_nitro',
        D: 'mekanism:ultimate_induction_cell',
        E: 'powah:reactor_nitro'
    }).id('kubejs:ironjetpacks_creative_capacator')

    event.shaped(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:creative",Throttle:1.0d}').strongNBT(), [' A ', 'BDB', 'C C'], {
        A: 'kubejs:crystal_of_creation',
        B: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:creative"}').strongNBT(),
        C: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT(),
        D: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:emerald",Throttle:1.0d}').strongNBT()
    }).id('kubejs:ironjetpacks_creative_jetpack')

    //======= Ars Nouveau Creative Source Jar =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  CCCCC  ',
            ' CGGGGGC ',
            ' CGBHBGC ',
            ' CGHFHGC ',
            ' CGFEFGC ',
            ' CGHFHGC ',
            ' CGBHBGC ',
            ' ADDDDDA ',
            'AAAAAAAAA',
        ],
        key: {
            A: {item: 'alltheores:brass_block',},
            B: {item: 'ars_nouveau:source_jar',},
            C: {item: 'tombstone:impregnated_diamond',},
            D: {item: 'ars_nouveau:source_gem_block',},
            E: {item: 'kubejs:crystal_of_creation',},
            F: {item: 'ars_nouveau:jar_of_light',},
            G: {item: 'ars_nouveau:source_gem',},
            H: {item: 'botania:vial',}
        },
        result: {item: 'ars_nouveau:creative_source_jar',},
    }).id(`kubejs:ars_nouveau/creative_source_jar`)

    //======= Ars Nouveau Creative Spell Book =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  ABBBBA ',
            ' ABHHGGBA',
            'ABHHGCCGB',
            'BHHGCDCGB',
            'BHGCECGHB',
            'BGCFCGHHB',
            'BGCCGHHBA',
            'ABGGHHBA ',
            ' ABBBBA  ',
        ],
        key: {
            A: {item: 'ars_nouveau:novice_spell_book', },
            B: {item: 'botania:manasteel_ingot', },
            C: {item: 'ars_nouveau:spell_prism', },
            D: {item: 'ars_nouveau:archmage_spell_book', },
            E: {item: 'kubejs:crystal_of_creation', },
            F: {item: 'ars_nouveau:apprentice_spell_book', },
            G: {item: 'mysticalagriculture:imperium_essence', },
            H: {item: 'extendedcrafting:luminessence', }
        },
        result: {item: 'ars_nouveau:creative_spell_book', },
    }).id(`kubejs:ars_nouveau/creative_spell_book`)

    //======= Mekanism Creative Energy Cube =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '  BBBBB  ',
            ' BAAAAAB ',
            ' BADCDAB ',
            ' IDFGFDI ',
            ' ICGEGCI ',
            ' IDFGFDI ',
            ' BADCDAB ',
            ' BAAAAAB ',
            '  BBBBB  ',
        ],
        key: {
            A: {item: 'mekanism:alloy_atomic', },
            B: {item: 'extendedcrafting:flux_star', },
            C: {item: 'mekanism:ultimate_induction_provider', },
            D: {item: 'mekanism:ultimate_induction_cell', },
            E: {item: 'kubejs:crystal_of_creation', },
            F: {type: "forge:nbt",
                item: "mekanism:ultimate_energy_cube",
                count: 1,
                nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}',
            },
            G: {type: "forge:nbt",
                item: "powah:battery_nitro",
                count: 1,
                nbt:   '{powah_tile_data:{energy_stored_main_energy:2000000000L}}',
            },
            I: {item: 'advgenerators:power_capacitor_tier3', }
        },
        result: {
            type: "forge:nbt",
            item: "mekanism:creative_energy_cube",
            count: 1,
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
        },
    }).id(`kubejs:mekanis/creative_energy_cube`)

    //======= Mekanism Creative Bin =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('mekanism:ultimate_bin').toJson(),
            Ingredient.of('kubejs:personal_id').toJson(),
            Ingredient.of('mekanism:ultimate_bin').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson()
        ],
        energy: '16000000',
        result: Item.of('mekanism:creative_bin').toJson()
    }).id(`kubejs:mekanism/creative_bin`)

    //======= Create Creative Motor =======
    event.custom({
        type: "create:mechanical_crafting",
        pattern: ['EAE', 'BCB', 'EDE'],
        key: {
            A: Ingredient.of('kubejs:crystal_of_creation').toJson(),
            B: Ingredient.of('kubejs:personal_id').toJson(),
            C: Ingredient.of('extendedcrafting:the_ultimate_catalyst').toJson(),
            D: Ingredient.of('create:gearbox').toJson(),
            E: Ingredient.of('alltheores:platinum_plate').toJson()
        },
        result: Ingredient.of('create:creative_motor').toJson(),
        acceptMirrored: false
    }).id('kubejs:create/creative_motor')

    //======= Create Creative Blaze Cake =======
    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('create:blaze_cake').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('allthemodium:unobtainium_block').toJson()
        ],
        results: [Ingredient.of('create:creative_blaze_cake').toJson()],
        heatRequirement: 'superheated'
    })

    //======= Create Additions Creative Generator =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of(Item.of('ironjetpacks:capacitor', {
                Id: "ironjetpacks:creative"
            }).strongNBT(), ).toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('create:creative_blaze_cake', ).toJson()
        ],
        energy: '2150000000',
        result: Item.of('createaddition:creative_energy').toJson()
    }).id(`kubejs:energizing/createaddition_creative_energy`)

    //======= RS Creative Crafter =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:dark_nether_star_block').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('extrastorage:netherite_crafter').toJson()
        ],
        energy: '185000000',
        result: Item.of('creativecrafter:creative_crafter').toJson()
    }).id(`kubejs:creativecrafter/creative_crafter`)

    //======= RS Creative Transmitter =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:dark_nether_star_block').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('refinedstorage:wireless_transmitter').toJson()
        ],
        energy: '185000000',
        result: Item.of('creativewirelesstransmitter:creative_wireless_transmitter').toJson()
    }).id(`kubejs:creativewirelesstransmitter/creative_wireless_transmitter`)

    //======= Powah Creative Energy Cell =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('powah:energy_cell_nitro').toJson(),
            Ingredient.of('mekanism:ultimate_induction_cell').toJson(),
            Ingredient.of('kubejs:personal_id').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson()
        ],
        energy: '2150000000',
        result: Item.of('powah:energy_cell_creative').toJson()
    }).id(`kubejs:energizing/powah_energy_cell_creative`)

    //======= Refined Storage Creative Wireless Grid =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:wireless_grid').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '210000000',
        result: Item.of('refinedstorage:creative_wireless_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_grid`)

    //======= Refined Storage Creative Wireless Fluid Grid =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:wireless_fluid_grid').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '210000000',
        result: Item.of('refinedstorage:creative_wireless_fluid_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_fluid_grid`)

    //======= Refined Storage Creative Wireless Crafting Monitor =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:wireless_crafting_monitor').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '210000000',
        result: Item.of('refinedstorage:creative_wireless_crafting_monitor').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_crafting_monitor`)

    //======= Refined Storage Creative Wireless Crafting Grid =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorageaddons:wireless_crafting_grid').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '210000000',
        result: Item.of('refinedstorageaddons:creative_wireless_crafting_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_crafting_grid`)

    //======= Refined Storage Creative Portable Grid =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:portable_grid').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '210000000',
        result: Item.of('refinedstorage:creative_portable_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_portable_grid`)

    //======= Refined Storage Creative Controller =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:controller').toJson(),
            Ingredient.of('kubejs:crystal_of_creation').toJson(),
            Ingredient.of(Item.of('ironjetpacks:capacitor', {
                Id: "ironjetpacks:creative"
            }).strongNBT(), ).toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2150000000',
        result: Item.of('refinedstorage:creative_controller').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_controller`)

    //======= Creative Wireless Universal Grid =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:creative_wireless_fluid_grid').toJson(),
            Ingredient.of('refinedstorage:creative_wireless_grid').toJson(),
            Ingredient.of('refinedstorageaddons:creative_wireless_crafting_grid').toJson(),
            Ingredient.of('refinedstorage:creative_wireless_crafting_monitor').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2250000000',
        result: Item.of('universalgrid:creative_wireless_universal_grid').toJson()
    }).id(`kubejs:energizing/universalgrid_creative_wireless_universal_grid`)

    //======= Crystal of Creation =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            ' AAA AAA ',
            'A  B B  A',
            'A B J B A',
            'AB DKL BA',
            '  JMINJ  ',
            'AB OPQ BA',
            'A B J B A',
            'A  B B  A',
            ' AAA AAA ',
        ],
        key: {
            A: {item: 'minecraft:nether_star', },
            B: {item: 'dreadsteel:dreadsteel_ingot', },
            D: {item: 'kubejs:kyanite_of_the_depth_empowered', },
            I: {item: 'mysticalagradditions:creative_essence', },
            J: {item: 'silentcompat:sculk_alloy_ingot', },
            K: {item: 'kubejs:crystal_of_wild_spirit_empowered', },
            L: {item: 'kubejs:jewel_of_the_deepdark_empowered', },
            M: {item: 'kubejs:void_tears_empowered', },
            N: {item: 'kubejs:stone_of_fear_empowered', },
            O: {item: 'kubejs:emerald_of_the_lost_soul_empowered', },
            P: {item: 'kubejs:skydust_amethyst_empowered', },
            Q: {item: 'kubejs:heart_of_hell_empowered', }
        },
        result: {item: 'kubejs:crystal_of_creation', },
    }).id(`kubejs:kubejs/crystal_of_creation`)

    //======= Creative Worldshaper =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            '    E    ',
            '    D    ',
            '   BBB   ',
            '  B C B  ',
            'EDBCACBDE',
            '  B C B  ',
            '   BBB   ',
            '    D    ',
            '    E    ',
        ],
        key: {
            A: {item: 'kubejs:crystal_of_creation',},
            B: {item: 'botania:sextant',},
            C: {item: 'forestry:electron_tube_diamond',},
            D: {item: 'create_new_age:overcharged_diamond',},
            E: {item: 'extendedcrafting:ender_star',}
        },
        result: {item: 'create:handheld_worldshaper',},
    }).id(`kubejs:create/handheld_worldshaper`)

    removeRecipeByID(event, [
        'creativecrafter:creative_crafter',
        'creativewirelesstransmitter:creative_wireless_transmitter'
    ])

})