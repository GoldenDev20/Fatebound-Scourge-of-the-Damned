//Priority: 1
/**
 * @file worldgen.js
 * @description Global WorldGen script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
WorldgenEvents.remove((event) => {

  //======= Remove ores from multiple layers =======
  event.removeOres((props) => {
    //=== Remove ores from 'underground_ores' and 'deepslate_ores' ===
    if (props.worldgenLayer === 'underground_ores' || props.worldgenLayer === 'deepslate_ores') {
      props.blocks = [
        "create:zinc_ore",
        "create:deepslate_zinc_ore",
        "eidolon:lead_ore",
        "eidolon:deep_lead_ore",
        "eidolon:silver_ore",
        "eidolon:deep_silver_ore",
        "immersiveengineering:ore_aluminum",
        "immersiveengineering:deepslate_ore_aluminum",
        "iceandfire:silver_ore",
        "forestry:apatite_ore",
        "forestry:tin_ore"
      ]
    }

  })

})
