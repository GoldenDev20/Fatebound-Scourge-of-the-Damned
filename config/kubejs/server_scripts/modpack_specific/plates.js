//Priority: 100
/**
 * @file plates.js
 * @description Additional Plates unify script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    const metalThermal = [
        'rose_gold',
        'netherite'
    ]
    metalThermal.forEach((metalThermal) => {
        modifyShaped(event, `thermal:${metalThermal}_plate`, 1, ['AB', 'B '], {
            A: '#alltheores:ore_hammers',
            B: `#forge:ingots/${metalThermal}`
        })
    })

    const metalAlltheores = [
        'aluminum',
        'iridium',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'steel',
        'invar',
        'electrum',
        'bronze',
        'iron',
        'gold',
        'copper',
        'enderium',
        'lumium',
        'signalum',
        'constantan',
        'brass'
    ]
    metalAlltheores.forEach((metalAlltheores) => {
        modifyShaped(event, `alltheores:${metalAlltheores}_plate`, 1, ['AB', 'B '], {
            A: '#alltheores:ore_hammers',
            B: `#forge:ingots/${metalAlltheores}`
        })
        removeRecipeByID(event, [`alltheores:${metalAlltheores}_plate`])
    })

    const metalAllthemodium = [
        'allthemodium',
        'vibranium',
        'unobtainium'
    ]
    metalAllthemodium.forEach((metalAllthemodium) => {
        modifyShaped(event, `allthemodium:${metalAllthemodium}_plate`, 1, ['AB', 'B '], {
            A: '#alltheores:ore_hammers',
            B: `#forge:ingots/${metalAllthemodium}`
        })
    })

    const metalThermalExtra = [
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel'
    ]
    metalThermalExtra.forEach((metalThermalExtra) => {
        modifyShaped(event, `thermal_extra:${metalThermalExtra}_plate`, 1, ['AB', 'B '], {
            A: '#alltheores:ore_hammers',
            B: `#forge:ingots/${metalThermalExtra}`
        })
    })

    modifyShaped(event, 'alltheores:diamond_plate', 1, ['AB', 'B '], {
        A: '#alltheores:ore_hammers',
        B: '2x #forge:gems/diamond'
    })


    removeRecipeByID(event, [
        'alltheores:diamond_plate',
        'allthemodium:allthemodium_plate',
        'allthemodium:vibranium_plate',
        'allthemodium:unobtainium_plate',
        'immersiveengineering:crafting/plate_aluminum_hammering',
        'immersiveengineering:crafting/plate_lead_hammering',
        'immersiveengineering:crafting/plate_nickel_hammering',
        'immersiveengineering:crafting/plate_silver_hammering',
        'immersiveengineering:crafting/plate_uranium_hammering',
        'immersiveengineering:crafting/plate_steel_hammering',
        'immersiveengineering:crafting/plate_electrum_hammering',
        'immersiveengineering:crafting/plate_iron_hammering',
        'immersiveengineering:crafting/plate_gold_hammering',
        'immersiveengineering:crafting/plate_copper_hammering',
        'immersiveengineering:crafting/plate_constantan_hammering',
        'immersiveengineering:crafting/plate_desh_hammering',
        'immersiveengineering:crafting/plate_ostrum_hammering',
        'immersiveengineering:crafting/plate_calorite_hammering',
    ])

})