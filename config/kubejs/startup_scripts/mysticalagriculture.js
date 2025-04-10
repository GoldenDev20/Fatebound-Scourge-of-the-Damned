//Priority: 1
/**
 * @file mysticalagriculture.js
 * @description Disable seeds from Mystical Agriculture script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
const $MysticalAgricultureAPI = Java.loadClass('com.blakebr0.mysticalagriculture.api.MysticalAgricultureAPI')

const CropManualDisableList = ["tungsten", "titanium", "chrome", "mithril", "yellorium"]
const CropManualEnableList = []

StartupEvents.postInit(event => {
  let CropRegistry = $MysticalAgricultureAPI.getCropRegistry()
  for (const disable of CropManualDisableList) {
    CropRegistry.getCropByName(disable).setEnabled(false)
  }
  for (const enable of CropManualEnableList) {
    CropRegistry.getCropByName(enable).setEnabled(true)
  }

})