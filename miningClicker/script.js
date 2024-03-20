"use strict"

//!------------------------- Variables Globales ---------------------------------
const pickaxeBtn = document.querySelector('.pickaxe'),
    goldsText = document.querySelector('.golds'),
    upgrades = document.querySelectorAll('.upgrades li'),
    upgradeMenu = document.querySelector('.upgrades'),
    minerNbrText = document.querySelector('.upgrade1 .nbrUpgrade'),
    minerPriceText = document.querySelector('.upgrade1 .priceUpgrade'),
    gpsText = document.querySelector('.goldPerSecond'),
    pickaxePriceText = document.querySelector('.upgrade2 .priceUpgrade'),
    pickaxeNbrText = document.querySelector('.upgrade2 .nbrUpgrade'),
    minerCount = document.querySelector('.minerCount'),
    clicksCount = document.querySelector('.clicksCount'),
    wheelbarrowPriceText = document.querySelector('.upgrade3 .priceUpgrade'),
    wheelbarrowNbrText = document.querySelector('.upgrade3 .nbrUpgrade'),
    goldsFound = document.querySelector('.goldsFound'),
    goldsSinceBeginningText = document.querySelector('.goldsSinceBeginning'),
    entryAlertBtn = document.querySelector('.entryAlertBtn'),
    entryAlert = document.querySelector('.entryAlert'),
    rulesBtn = document.querySelector('.rulesBtn'),
    bombPriceText = document.querySelector('.upgrade4 .priceUpgrade'),
    bombNbrText = document.querySelector('.upgrade4 .nbrUpgrade'),
    buffMenu = document.querySelector('.buffs'),
    buffOpenBtn = document.querySelector('.buffOpenBtn'),
    upgradeOpenBtn = document.querySelector('.upgradeOpenBtn'),
    buffs = document.querySelectorAll('.buffs li'),
    jackhammerPriceText = document.querySelector('.upgrade5 .priceUpgrade'),
    jackhammerNbrText = document.querySelector('.upgrade5 .nbrUpgrade'),
    diamondPickaxePriceText = document.querySelector('.upgrade6 .priceUpgrade'),
    diamondPickaxeNbrText = document.querySelector('.upgrade6 .nbrUpgrade'),
    tntPriceText = document.querySelector('.upgrade7 .priceUpgrade'),
    tntNbrText = document.querySelector('.upgrade7 .nbrUpgrade')




let golds = 0,
    miner = 0,
    minerPrice = 20,
    goldsPerSeconds = 0,
    unstuffedMiner = 0,
    pickaxePrice = 100,
    pickaxe = 0,
    clicks = 0,
    wheelbarrowPrice = 500,
    wheelbarrow = 0,
    foundedGolds = 0,
    goldsSinceBeginning = 0,
    bombPrice = 1500,
    bomb = 0,
    cPc = 1,
    jackhammerPrice = 3000,
    jackhammer = 0,
    diamondPickaxePrice = 7000,
    diamondPickaxe = 0,
    tnt = 0,
    tntPrice = 15000,
    buffClickState = false


//!---------------------------------------- Code -----------------------------------------------

//------------ click Listener ----------
pickaxeBtn.addEventListener("click", () => {
    golds = golds + cPc
    clicks++
    goldsSinceBeginning++
    // console.log(golds)

})
pickaxeBtn.addEventListener('mousedown', () => {
    pickaxeBtn.style.boxShadow = 'inset 1px 5px 3px 0px rgba(37, 37, 37, 0.800)'
    pickaxeBtn.style.borderTop = '0.60rem solid rgb(39, 39, 39)'

})
pickaxeBtn.addEventListener('mouseup', () => {
    document.querySelector('.pickaxe').style.boxShadow = 'inset 0px -7px 3px 3px rgba(37, 37, 37, 0.300)'
    pickaxeBtn.style.borderTop = '0.5rem solid rgb(39, 39, 39)'

})
entryAlertBtn.addEventListener('click', () => entryAlert.style.display = 'none')
rulesBtn.addEventListener('click', () => {
    if (entryAlert.style.display == 'none') {
        entryAlert.style.display = 'inherit'
    }
    else {
        entryAlert.style.display = 'none'
    }
})
buffOpenBtn.addEventListener("click", upgradesOrBuffs)
upgradeOpenBtn.addEventListener("click", upgradesOrBuffs)


//!----------- Main Interval -------------
setInterval(() => {
    foundedGolds = foundedGolds + goldsPerSeconds
    goldsSinceBeginning = goldsSinceBeginning + goldsPerSeconds
    golds = golds + goldsPerSeconds
    goldsText.textContent = Math.round(golds)
    minerNbrText.textContent = miner
    minerPriceText.textContent = minerPrice
    gpsText.textContent = (goldsPerSeconds * 10).toFixed(2)
    pickaxePriceText.textContent = pickaxePrice
    pickaxeNbrText.textContent = pickaxe
    minerCount.textContent = `Miner : ${unstuffedMiner} / ${miner}`
    clicksCount.textContent = clicks
    wheelbarrowNbrText.textContent = wheelbarrow
    wheelbarrowPriceText.textContent = wheelbarrowPrice
    goldsFound.textContent = Math.round(foundedGolds)
    goldsSinceBeginningText.textContent = Math.round(goldsSinceBeginning)
    bombNbrText.textContent = bomb
    bombPriceText.textContent = bombPrice
    jackhammerPriceText.textContent = jackhammerPrice
    jackhammerNbrText.textContent = jackhammer
    diamondPickaxePriceText.textContent = diamondPickaxePrice
    diamondPickaxeNbrText.textContent = diamondPickaxe
    tntPriceText.textContent = tntPrice
    tntNbrText.textContent = tnt




    glow(minerPrice, upgrades[0])
    glow(pickaxePrice, upgrades[1])
    glow(wheelbarrowPrice, upgrades[2])
    glow(bombPrice, upgrades[3])
    glow(jackhammerPrice, upgrades[4])
    glow(diamondPickaxePrice, upgrades[5])
    glow(tntPrice, upgrades[6])

    buffsGlowEnd(1000, buffs[0])

}, 100)


//! -------------- Upgrade Listeners -------------------

upgrades[0].addEventListener('click', () => {
    if (minerPrice <= golds) {
        goldsPerSeconds = goldsPerSeconds + 0.05
        miner = miner + 1
        unstuffedMiner = unstuffedMiner + 1
        golds = golds - minerPrice
        minerPrice = Math.round(minerPrice + (minerPrice / 5))
    }
})
upgrades[1].addEventListener('click', () => {
    if (unstuffedMiner > 0) {
        if (pickaxePrice <= golds) {
            goldsPerSeconds = goldsPerSeconds + 0.2
            pickaxe = pickaxe + 1
            golds = golds - pickaxePrice
            pickaxePrice = Math.round(pickaxePrice + (pickaxePrice / 4))
            unstuffedMiner = unstuffedMiner - 1
        }
    }
})
upgrades[2].addEventListener('click', () => {
    if (unstuffedMiner > 0) {
        if (wheelbarrowPrice <= golds) {
            goldsPerSeconds = goldsPerSeconds + 0.55
            wheelbarrow = wheelbarrow + 1
            golds = golds - wheelbarrowPrice
            wheelbarrowPrice = Math.round(wheelbarrowPrice + (wheelbarrowPrice / 4))
            unstuffedMiner = unstuffedMiner - 1
        }
    }
})
upgrades[3].addEventListener('click', () => {
    if (unstuffedMiner > 0) {
        if (bombPrice <= golds) {
            goldsPerSeconds = goldsPerSeconds + 1
            bomb = bomb + 1
            golds = golds - bombPrice
            bombPrice = Math.round(bombPrice + (bombPrice / 4))
            unstuffedMiner = unstuffedMiner - 1
        }
    }
})
upgrades[4].addEventListener('click', () => {
    if (unstuffedMiner > 0) {
        if (jackhammerPrice <= golds) {
            goldsPerSeconds = goldsPerSeconds + 1.7
            jackhammer = jackhammer + 1
            golds = golds - jackhammerPrice
            jackhammerPrice = Math.round(jackhammerPrice + (jackhammerPrice / 4))
            unstuffedMiner = unstuffedMiner - 1
        }
    }
})
upgrades[5].addEventListener('click', () => {
    if (unstuffedMiner > 0) {
        if (diamondPickaxePrice <= golds) {
            goldsPerSeconds = goldsPerSeconds + 4
            diamondPickaxe = diamondPickaxe + 1
            golds = golds - diamondPickaxePrice
            diamondPickaxePrice = Math.round(diamondPickaxePrice + (diamondPickaxePrice / 4))
            unstuffedMiner = unstuffedMiner - 1
        }
    }
})
upgrades[6].addEventListener('click', () => {
    if (unstuffedMiner > 0) {
        if (tntPrice <= golds) {
            goldsPerSeconds = goldsPerSeconds + 10
            tnt = tnt + 1
            golds = golds - tntPrice
            tntPrice = Math.round(tntPrice + (tntPrice / 4))
            unstuffedMiner = unstuffedMiner - 1
        }
    }
})
//!---------------------- Buffs Listener ---------------------------------

buffs[0].addEventListener('click', () => {
    if (1000 <= golds && buffClickState == false) {

        golds = golds - 1000
        cPc = cPc + 1
        buffClickState = true

    }
})







//!---------------------------- Fonctions nommé ------------------------------


function addGps(a) {
    goldsPerSeconds = goldsPerSeconds + a
}
function glow(a, b) {
    if (golds >= a) {
        if (unstuffedMiner > 0 || b == upgrades[0]) {
            b.style.backgroundColor = 'rgb(200, 161, 111)'
            b.style.boxShadow = "0px 0px 40px 20px rgba(229, 192, 144, 0.587)";
            b.style.cursor = 'pointer'
        }
        else {
            b.style.backgroundColor = 'rgb(247, 229, 209)'
            b.style.boxShadow = "none";
            b.style.cursor = 'pointer'
        }
    }
    else {
        b.style.backgroundColor = ''
        b.style.boxShadow = "none"
        b.style.cursor = 'default'
    }

}
function buffsGlowEnd(a, b) {
    if (golds >= a && buffClickState == false) {
        b.style.backgroundColor = 'rgb(200, 161, 111)'
        b.style.boxShadow = "0px 0px 40px 20px rgba(229, 192, 144, 0.587)";
        b.style.cursor = 'pointer'

    }
    else {
        b.style.backgroundColor = ''
        b.style.boxShadow = "none"
        b.style.cursor = 'default'
    }
}
function upgradesOrBuffs() {
    console.log(buffMenu.style.display);
    if (buffMenu.style.display == "inline-block") {
        upgradeMenu.style.display = "inline-block"
        buffMenu.style.display = "none"
        upgradeOpenBtn.style.textDecoration = "solid underline"
        buffOpenBtn.style.textDecoration = "none"
    }
    else {
        buffMenu.style.display = "inline-block"
        upgradeMenu.style.display = "none"
        buffOpenBtn.style.textDecoration = "solid underline"
        upgradeOpenBtn.style.textDecoration = "none"
    }
}








