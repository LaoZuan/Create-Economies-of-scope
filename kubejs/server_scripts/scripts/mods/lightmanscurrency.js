
onEvent('recipes', event => {
	
    lightmanscurrency_remove(event)
    lightmanscurrency(event)

})

function lightmanscurrency_remove(event) {

event.remove({ output: '#forge:coins' }) //禁用钱币制作
//event.remove({ input: '#forge:coins' })    
event.remove({ output: 'lightmanscurrency:coinmint' })
event.remove({ type: "lightmanscurrency:coin_mint" });
event.remove({ id: TC("smeltery/melting/metal/electrum/coin") })
event.remove({ id: TC("smeltery/melting/metal/lead/coin") })
event.remove({ id: TC("smeltery/melting/metal/copper/coin") })
event.remove({ id: TC("smeltery/melting/metal/netherite/coin") })
event.remove({ id: TC("smeltery/melting/metal/tin/coin") })
event.remove({ id: TC("smeltery/melting/metal/lumium/coin") })
event.remove({ id: TC("smeltery/melting/metal/bronze/coin") })
event.remove({ id: TC("smeltery/melting/metal/nickel/coin") })
event.remove({ id: TC("smeltery/melting/metal/constantan/coin") })
event.remove({ id: TC("smeltery/melting/metal/enderium/coin") })

}

function lightmanscurrency(event) {

let coinstack = (coinstack, coin) => {
	event.remove({ output: coinstack })
    event.remove({ input: coinstack })
	event.shaped(Item.of(coinstack), [
		'AAA',
		'AAA',
        'AAA',
	], {
		A: Item.of(coin)
    })	
    event.shaped(Item.of(coin, 9), [
		'A',
	], {
		A: Item.of(coinstack)
    })	
}

coinstack('createdeco:copper_coinstack', TE('copper_coin'))
coinstack('createdeco:zinc_coinstack', TE('silver_coin'))
coinstack('createdeco:gold_coinstack', TE('gold_coin'))
coinstack('createdeco:brass_coinstack', TE('bronze_coin'))
coinstack('createdeco:netherite_coinstack', TE('netherite_coin'))
coinstack('createdeco:iron_coinstack', TE('constantan_coin'))

event.remove({ output: 'lightmanscurrency:wallet_iron' })
event.remove({ output: "lightmanscurrency:wallet_gold" })
event.remove({ output: "lightmanscurrency:wallet_emerald" })
event.remove({ output: "lightmanscurrency:wallet_diamond" })
event.remove({ output: "lightmanscurrency:wallet_netherite" })

//铁钱包
event.custom({
  "type": "lightmanscurrency:crafting_wallet_upgrade",
  "group": "wallet_upgrading",
  "ingredients": [
    {
      "item": "lightmanscurrency:wallet_copper"
    },
    {
      "tag": "forge:leather"
    },
    {
      "tag": "forge:ingots/iron"
    }
  ],
  "result": {
    "item": "lightmanscurrency:wallet_iron"
  }
})
//金钱包
event.custom({
  "type": "lightmanscurrency:crafting_wallet_upgrade",
  "group": "wallet_upgrading",
  "ingredients": [
    {
      "item": "lightmanscurrency:wallet_iron"
    },
    {
      "item": "tconstruct:silky_cloth"
    },
    {
      "tag": "forge:ingots/gold"
    }
  ],
  "result": {
    "item": "lightmanscurrency:wallet_gold"
  }
})
//绿钱包
event.custom({
  "type": "lightmanscurrency:crafting_wallet_upgrade",
  "group": "wallet_upgrading",
  "ingredients": [
    {
      "item": "lightmanscurrency:wallet_gold"
    },
    {
      "item": "tconstruct:silky_cloth"
    },
    {
      "tag": "forge:gems/emerald"
    }
  ],
  "result": {
    "item": "lightmanscurrency:wallet_emerald"
  }
})
//钻钱包
event.custom({
  "type": "lightmanscurrency:crafting_wallet_upgrade",
  "group": "wallet_upgrading",
  "ingredients": [
    {
      "item": "lightmanscurrency:wallet_emerald"
    },
    {
      "item": "thermal:beekeeper_fabric"
    },
    {
      "tag": "forge:gems/diamond"
    }
  ],
  "result": {
    "item": "lightmanscurrency:wallet_diamond"
  }
})
//下界钱包
event.custom({
  "type": "lightmanscurrency:crafting_wallet_upgrade",
  "group": "wallet_upgrading",
  "ingredients": [
    {
      "item": "lightmanscurrency:wallet_diamond"
    },
    {
      "item": "thermal:hazmat_fabric"
    },
    {
      "tag": "forge:ingots/netherite"
    }
  ],
  "result": {
    "item": "lightmanscurrency:wallet_netherite"
  }
})

//钱箱子
event.remove({ id: "lightmanscurrency:wallet_netherite" })
event.shaped('lightmanscurrency:coin_chest', [
	'PPP',
	'PAP',
	'PPP'
], {
	P: MC('#planks'),
	A: 'create_dd:lapis_alloy',
})	

//ATM
event.replaceInput({ id: 'lightmanscurrency:atm' }, MC('iron_ingot'), MC('gold_ingot'))
}