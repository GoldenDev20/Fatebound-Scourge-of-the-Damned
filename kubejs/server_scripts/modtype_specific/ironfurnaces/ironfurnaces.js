//Priority: 1000
/**
 * @file ironfurnaces.js
 * @description Recipe Iron Furnaces script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Copper Furnace =======
    modifyShaped(event, 'ironfurnaces:copper_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/copper',
        B: '#misctags:furnace'
    })

    //======= Iron Furnace =======
    modifyShaped(event, 'ironfurnaces:iron_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/iron',
        B: '#forge:furnaces/copper'
    })

    //======= Silver Furnace =======
    modifyShaped(event, 'ironfurnaces:silver_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/silver',
        B: '#forge:furnaces/iron'
    })

    //======= Gold Furnace =======
    modifyShaped(event, 'ironfurnaces:gold_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/gold',
        B: '#forge:furnaces/silver'
    })

    //======= Diamond Furnace =======
    modifyShaped(event, 'ironfurnaces:diamond_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:gems/diamond',
        B: '#forge:furnaces/gold'
    })

    //======= Crystal Furnace =======
    modifyShaped(event, 'ironfurnaces:crystal_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:furnaces/diamond'
    })

    //======= Obsidian Furnace =======
    modifyShaped(event, 'ironfurnaces:obsidian_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:obsidian_with_iron',
        B: ['#forge:furnaces/emerald', 'ironfurnaces:crystal_furnace']
    })

    //======= Netherite Furnace =======
    modifyShaped(event, 'ironfurnaces:netherite_furnace', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/netherite',
        B: '#forge:furnaces/obsidian'
    })

    //======= Copper --> Silver Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_silver', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/silver',
        B: '#forge:storage_blocks/copper'
    })

    //======= Stone --> Iron Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_iron', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/iron',
        B: 'ironfurnaces:upgrade_copper'
    })

    //======= Silver --> Gold Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_gold2', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/gold',
        B: '#forge:ingots/silver'
    })

    //======= Iron --> Gold Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_gold', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/gold',
        B: 'ironfurnaces:upgrade_gold2'
    })

    //======= Gold --> Diamond Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_diamond', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:gems/diamond',
        B: '#forge:ingots/gold'
    })

    //======= Diamond --> Crystal Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_crystal', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:gems/diamond'
    })

    //======= Emerald --> Obsidian Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_obsidian', 1, ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:obsidian_with_iron',
        B: '#forge:gems/emerald'
    })

    //======= Crystal --> Obsidian Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_obsidian2', 1, ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:obsidian_with_iron',
        B: '#forge:glass'
    })

    //======= Obsidian --> Netherite Upgrade =======
    modifyShaped(event, 'ironfurnaces:upgrade_netherite', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/netherite',
        B: '#forge:storage_blocks/raw_obsidian'
    })

    //======= Rainbow Plating =======
    event.shaped('2x ironfurnaces:rainbow_plating', ['ABC', 'DEF', 'GHI'], {
        A: 'ironfurnaces:iron_furnace',
        B: 'ironfurnaces:gold_furnace',
        C: 'ironfurnaces:diamond_furnace',
        D: 'ironfurnaces:emerald_furnace',
        E: 'ironfurnaces:obsidian_furnace',
        F: 'ironfurnaces:crystal_furnace',
        G: 'ironfurnaces:netherite_furnace',
        H: 'ironfurnaces:copper_furnace',
        I: 'ironfurnaces:silver_furnace'
    }).id(`kubejs:ironfurnaces/rainbow_plating`)

    //======= Rainbow Core =======
    event.shaped('ironfurnaces:rainbow_core', ['AAA', 'BCD', 'AAA'], {
        A: '#forge:glass/rainbow',
        B: 'ironfurnaces:allthemodium_furnace',
        C: 'ironfurnaces:vibranium_furnace',
        D: 'ironfurnaces:unobtainium_furnace'
    }).id(`kubejs:ironfurnaces/rainbow_core`)

    //======= Rainbow Coal =======
    event.shaped('ironfurnaces:rainbow_coal', ['ABC', 'DED', 'GHI'], {
        A: 'mysticalagradditions:inferium_coal_block',
        B: 'mysticalagradditions:prudentium_coal_block',
        C: 'mysticalagradditions:tertium_coal_block',
        D: 'enderio:weather_crystal',
        E: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}').strongNBT(),
        G: 'mysticalagradditions:imperium_coal_block',
        H: 'mysticalagradditions:supremium_coal_block',
        I: 'mysticalagradditions:insanium_coal_block'
    }).id(`kubejs:ironfurnaces/rainbow_coal`)

    removeRecipeByID(event, [
        'ironfurnaces:rainbow_plating',
        'ironfurnaces:rainbow_core'
    ])

})