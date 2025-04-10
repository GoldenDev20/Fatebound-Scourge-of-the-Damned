//Priority: 1000
/**
 * @file easy_mob_farm.js
 * @description Recipe Easy Mob Farm script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= Mob Farm Template =======
    let materialForTier = {
        tier0: 'copper',
        tier1: 'gold',
        tier2: 'iron',
        tier3: 'netherite'
    }

    // Iterate through each tier and its corresponding material
    Object.entries(materialForTier).forEach(([tier, material]) => {
        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)

        if (ingotTag.getFirst().isEmpty()) {
            // Check for blocks
            ingotTag = Ingredient.of(`#forge:storage_blocks/${material}`)
            if (ingotTag.getFirst().isEmpty()) {
                // Check for plates
                ingotTag = Ingredient.of(`#forge:plates/${material}`);
                if (ingotTag.getFirst().isEmpty()) {
                    return; // Skip if no valid material is found
                }
            }
        }

        // Create mechanical crafting recipe for each tier and material
        event.custom({
            type: 'create:mechanical_crafting',
            acceptMirrored: false,
            key: {
                A: {
                    tag: `forge:storage_blocks/${material}`
                },
                B: {
                    tag: `forge:ingots/${material}`
                },
                C: {
                    item: 'mekanism:structural_glass'
                },
                D: {
                    item: 'minecraft:hopper'
                },
                E: {
                    tag: `forge:plates/${material}`
                },
                F: {
                    item: 'create:smart_chute'
                }
            },
            pattern: [
                'ABBBBBA',
                'BEEEEEB',
                'BECCCEB',
                'BECCCEB',
                'BECCCEB',
                'BEEDEEB',
                'ABBFBBA'
            ],
            result: {
                item: `easy_mob_farm:${tier}_mob_farm_template`
            }
        }).id(`kubejs:easy_mob_farm/${tier}_mob_farm_template`)
    })

    removeRecipeByID(event, [
        'easy_mob_farm:mob_farm_template/tier0_mob_farm_template',
        'easy_mob_farm:mob_farm_template/tier0_mob_farm_template_tier1',
        'easy_mob_farm:mob_farm_template/tier1_mob_farm_template',
        'easy_mob_farm:mob_farm_template/tier1_mob_farm_template_tier2',
        'easy_mob_farm:mob_farm_template/tier2_mob_farm_template',
        'easy_mob_farm:mob_farm_template/tier2_mob_farm_template_tier3',
        'easy_mob_farm:mob_farm_template/tier3_mob_farm_template'
    ])

})