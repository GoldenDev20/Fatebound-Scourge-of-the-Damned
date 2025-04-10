//Priority: 1000
/**
 * @file farmingforblockheads.js
 * @description Farming for Blockheads script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
const FFBAPI = Java.loadClass('net.blay09.mods.farmingforblockheads.api.FarmingForBlockheadsAPI')

//======= Datapack Gen =======
ServerEvents.highPriorityData(event => {

  event.addJson('kubejs:farmingforblockheads_compat/aof.json', {
    groupOverrides: {
      "Croptopia Seeds": {
        enabled: false
      }
    }
  })

})