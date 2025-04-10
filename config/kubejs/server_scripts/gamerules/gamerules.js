//Priority: 1
/**
 * @file gamerules
 * @description Game Rules script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.loaded((event) => {

  let gamerules = [
    { rule: 'doFireTick', value: 'false' },
    { rule: 'doImmediateRespawn', value: 'true' },
    { rule: 'playersSleepingPercentage', value: '1' }
  ]

  gamerules.forEach((gamerule) => {
    if (!event.server.persistentData[gamerule.rule]) {
      event.server.runCommandSilent(`/gamerule ${gamerule.rule} ${gamerule.value}`)
      console.log(`Default Gamerule Applied: ${gamerule.rule} = ${gamerule.value}`)
      event.server.persistentData[gamerule.rule] = gamerule.value
    }
  })

})