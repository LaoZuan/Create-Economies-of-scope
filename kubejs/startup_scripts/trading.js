// priority: 0

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let EG = (id, x) => MOD("endergetic", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) => MOD("biomesoplenty", id, x)
let RQ = (id, x) => MOD("reliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let PP = (id, x) => MOD("prettypipes", id, x)
let OC = (id, x) => MOD("occultism", id, x)
let IM = (id, x) => MOD("immersiveengineering", id, x)
let CO = (id, x) => MOD("createoreexcavation", id, x)
let BO = (id, x) => MOD("botania", id, x)
let FA = (id, x) => MOD("forbidden_arcanus", id, x)
let ARS = (id, x) => MOD("ars_nouveau", id, x)
let BM = (id, x) => MOD("bloodmagic", id, x)
let PC = (id, x) => MOD("pneumaticcraft", id, x)
let MEK = (id, x) => MOD("mekanism", id, x)
let TF = (id, x) => MOD("twilightforest", id, x)
let PR_C = (id, x) => MOD("projectred_core", id, x)
let PR_T = (id, x) => MOD("projectred_transmission", id, x)
let PR_I = (id, x) => MOD("projectred_illumination", id, x)
let Q = (id, x) => MOD("quark", id, x)
let IW = (id, x) => MOD("immersive_weathering", id, x)
let SB = (id, x) => MOD("sophisticatedbackpacks", id, x)
//


onEvent('item.registry', event => {

	global.trades = []
	global.professions = []
	global.transactions = []

	let profession = (zhname, name, c1, c2, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
		event.create(`profession_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/profession_card")
			.texture("kubejs:item/trade/profession_card_0")
			.displayName(`§6职业铭牌：§r${zhname}`)
			.unstackable()

		/*
		event.create(`profession_agreement_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/purchase_agreement")
			.texture("kubejs:item/trade/purchase_agreement_0")
			.displayName(`§6出售协议：§r${zhname}`)
			.maxStackSize(32)
		*/
	}

	let trade = (zhname, name, c1, c2, transactions, custom) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.trades.push(id)
		global.transactions[id] = transactions
		event.create(`trade_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/trade_card")
			.texture("kubejs:item/trade/trade_card_0")
			.displayName((custom ? "" : "§6产品铭牌：§r") + zhname)
			.unstackable()
	}

	//event.create('empty_agreement').texture("kubejs:item/trade/empty_agreement").displayName('空白协议书')
	//event.create('incomplete_empty_agreement', 'create:sequenced_assembly').texture("kubejs:item/trade/incomplete_empty_agreement").displayName('空白协议书（未签字）')
	//event.create('master_agreement').texture("kubejs:item/trade/task_agreement").displayName('专精协议书').maxStackSize(4).rarity(RARITY_EPIC)
	//event.create('express_delivery').parentModel("kubejs:block/express_delivery/express_delivery").displayName('快递盒').unstackable().rarity(RARITY_UNCOMMON)

	//货币
	let C = (x) => TE('copper_coin', x)
	let S = (x) => TE('silver_coin', x)
	let G = (x) => TE('gold_coin', x)
	let P = (x) => TE('bronze_coin', x)
	let N = (x) => TE('netherite_coin', x)
	let CC = (x) => TE('constantan_coin', x)

/*
	//烹饪币
	let CO = (x) => TE('copper_coin', x)

	//科技币
	let A = (x) => TE('electrum_coin', x)
	let B = (x) => TE('lead_coin', x)
	let SI = (x) => TE('signalum_coin', x)
	let E = (x) => TE('enderium_coin', x)

	//魔力币
	let M = (x) => TE('lumium_coin', x)
	let T = (x) => TE('netherite_coin', x)
	let EL = (x) => TE('nickel_coin', x)
*/
    trade("§6货币兑换卡(铜↔银)", "Exchange Currencies A", 0x9c4529, 0x9fadb4, [
		{ in: S(1), out: C(64) },
		{ in: C(64), out: S(1) },
	], true)

	trade("§6货币兑换卡(银↔金)", "Exchange Currencies B", 0x9fadb4, 0xEBA83A, [
		{ in: G(1), out: S(64) },
		{ in: S(64), out: G(1) },
	], true)
	
	trade("§6货币兑换卡(金↔铂)", "Exchange Currencies C", 0xEBA83A, 0x3AD7EB, [
		{ in: P(1), out: G(64) },
		{ in: G(64), out: P(1) },
	], true)

	trade("§6货币兑换卡(铂↔下界)", "Exchange Currencies D", 0x3AD7EB, 0x524f53, [
		{ in: N(1), out: P(64) },
		{ in: P(64), out: N(1) },
	], true)

	trade("§6货币兑换卡(下界↔创造)", "Exchange Currencies D", 0x524f53, 0xc44bbd, [
		{ in: CC(1), out: N(64) },
		{ in: N(64), out: CC(1) },
	], true)

	profession("皮匠", "Cobbler", 0x663931, 0x7d3b2f, [
		{ in: F('#leather', 12), out: S(13), out2: S(4) },
	])

	profession("石匠", "Masonry", 0x5E6F64, 0xBA7967, [
		{ in: SP('checker_block', 64), out: S(4) },
	])
	profession("猎人", "Hunting", 0x393E46, 0xCF0000, [
		{ in: RQ('slime_pearl'), out: S(6) },
	])
	profession("厨师", "Cooking", 0xD8B384, 0xF7DAD9, [
		{ in: CR('bar_of_chocolate', 16), out: S(4) },
	])
	let quota = 8
	profession("渔夫", "Fishing", 0x9DDFD3, 0xDBF6E9, [
		{ in: MC('cod', quota), out: S(1) },
	])
	profession("铁匠", "Smithing", 0xFFC93C, 0xFF7A00, [
		{ in: MC('iron_boots'), out: S(2) },
	])
	profession("农民", "Farming", 0xFFCC29, 0x81B214, [
		{ in: FD('carrot_crate'), out: S(1) },
	])
	profession("木匠", "Carpentry", 0xD0AF84, 0x966C3B, [
		{ in: MC('oak_log', 64), out: S(1) },
	])
	profession("矿工", "Mining", 0x1C1124, 0x88FFF7, [
		{ in: CR('crushed_raw_iron', 16), out: S(8) },
	])

	let DATAGEN_QUESTS = false

	let data = []
	let group_max_width = []
	let current_group_max_width = 0
	let simulate = DATAGEN_QUESTS
	let entry_cost = 10

	let row = 0
	let col = 0
	let group = 0

	let next_group = () => {
		group++
		if (simulate)
			group_max_width.push(current_group_max_width)
		current_group_max_width = 0
		col = 0
		row++
	}

	let simple = (zhname, name, item, coin, unit, c1, c2) => {
		if (!simulate)
			trade(zhname, name, c1, c2, [{ in: unit(coin), out: item }])
		if (!DATAGEN_QUESTS)
			return

		current_group_max_width = Math.min(8, current_group_max_width + 1)
		if (simulate)
			return

		let silver = unit == S
		let split = item.split('x')
		let amount = split[0]
		let id = split.splice(1).join('x').replace(' ', '')
		let card_id = KJ("trade_card_" + name.toLowerCase().replace("'", "").split(' ').join('_'))

		if (col > 7) {
			col = 0
			row++
		}

		let x = col - (group_max_width[group] - 1) / 2
		let y = row + group / 2
		col++

		let template = `
		{
			title: "${amount}x ${zhname}"
			icon: "${id}"
			disable_toast: true
			x: ${x}d
			y: ${y}d
			shape: "hexagon"
			subtitle: "${coin} ${silver ? "银" : "金"}"
			tasks: [{
				type: "item"
				item: "thermal:silver_coin"
				icon: { id: "thermal:silver_coin", Count: ${entry_cost}b }
				count: ${entry_cost}L
			}]
			rewards: [
				{
					type: "item"
					auto: "enabled"
					item: "${card_id}"
				}
				{
					type: "custom"
					title: "可重复"
					icon: "thermal:machine_cycle_augment"
					tags: ["reset"]
					auto: "no_toast"
				}
			]
		}`
		data.push(template)
	}

	while (true) {
		group = 0
		row = 0

		entry_cost = 10
		simple("泥土", "Dirt", MC('dirt', 16), 2, S, 0x513825, 0xA87954)
		simple("沙子", "Sand", MC('sand', 16), 4, S, 0xC2B289, 0xD8D6B9)
		simple("沙砾", "Gravel", MC('gravel', 16), 2, S, 0x686160, 0xA19393)
		simple("黏土", "Clay", MC('clay', 16), 6, S, 0x878B95, 0x8E939D)
		simple("冰", "Ice", MC('ice', 16), 16, S, 0x7E99CF, 0xABB8D0)
		simple("黑石", "Blackstone", MC('blackstone', 16), 12, S, 0x140E0F, 0x2D2831)
		simple("砖泥", "Grout", TC('grout', 16), 12, S, 0x70737F, 0xAEB0B5)
		simple("圆石", "Cobblestone", MC('cobblestone', 16), 1, S, 0x585858, 0x646363)
		simple("花岗岩", "Granite", MC('granite', 16), 3, S, 0x563A2F, 0x9A6C5B)
		simple("闪长岩", "Diorite", MC('diorite', 16), 3, S, 0x7F7F7F, 0xD4D4D4)
		simple("安山岩", "Andesite", MC('andesite', 16), 3, S, 0x5F5F5F, 0x8E8E8E)
		simple("石灰岩", "Limestone", CR('limestone', 16), 3, S, 0xA7A89E, 0xC0C2BA)
		simple("熔渣", "Scoria", CR('scoria', 16), 3, S, 0x2A130C, 0x553427)
		simple("黑曜石", "Obsidian", MC('obsidian', 1), 8, S, 0x05030A, 0x36234C)
		
		next_group()
		entry_cost = 10
		simple("枯死木", "Dead Log", BOP('dead_log', 16), 2, S, 0x3D362D, 0x7A756D)
		simple("橡木", "Oak Log", MC('oak_log', 16), 4, S, 0x735932, 0xA88756)
		simple("白桦木", "Birch Log", MC('birch_log', 16), 4, S, 0xD6D6D2, 0xC4B079)
		simple("云杉木", "Spruce Log", MC('spruce_log', 16), 4, S, 0x523E21, 0x6F522F)
		simple("从林木", "Jungle Log", MC('jungle_log', 16), 4, S, 0x5A501D, 0x9B6E4C)
		simple("金合欢木", "Acacia Log", MC('acacia_log', 16), 4, S, 0x4F4B42, 0x9E552E)
		simple("深色橡木", "Dark Oak Log", MC('dark_oak_log', 16), 4, S, 0x2C1B0D, 0x422B15)
		simple("绯红菌柄", "Crimson Stem", MC('crimson_stem', 16), 8, S, 0x442332, 0x7A3852)
		simple("诡异菌柄", "Warped Stem", MC('warped_stem', 16), 8, S, 0x3E1E2D, 0x347776)
		
		next_group()
		entry_cost = 10
		simple("铁锭", "Iron Ingot", MC('iron_ingot', 8), 16, S, 0xA6A6A6, 0xD5D5D5)
		simple("锌锭", "Zinc Ingot", CR('zinc_ingot', 8), 16, S, 0x616A60, 0xD0D2C5)
		simple("铜锭", "Copper Ingot", MC('copper_ingot', 8), 16, S, 0xDD7E5D, 0xFCEFBA)
		simple("镍锭", "Nickel Ingot", TE('nickel_ingot', 8), 32, S, 0x977756, 0xE4D196)
		simple("铅锭", "Lead Ingot", TE('lead_ingot', 8), 32, S, 0x232456, 0x7C95A4)
		simple("金锭", "Gold Ingot", MC('gold_ingot', 8), 48, S, 0xD99413, 0xFAF25E)
		simple("铝锭", "Aluminum Ingot", IM('ingot_aluminum', 8), 48, S, 0xD99413, 0xFFF5EE)
		
		simple("安山合金", "Andesite Alloy", CR('andesite_alloy', 16), 8, S, 0x505050, 0x878787)
		simple("黄铜锭", "Brass Ingot", CR('brass_ingot', 8), 48, S, 0x6F3C2D, 0xFCF085)
		simple("殷钢锭", "Invar Ingot", TE('invar_ingot', 4), 64, S, 0x406D6C, 0xC3CAC1)
		
		entry_cost = 10
		simple("煤炭", "Coal", MC('coal', 16), 4, S, 0x1C1C1E, 0x383D45)
		simple("燧石", "Flint", MC('flint', 16), 4, S, 0x3C3B3B, 0xA6A6A6)
		simple("朱砂", "Cinnabar", TE('cinnabar', 4), 16, S, 0xFC7781, 0xFCCED0)
		simple("红石粉", "Redstone Dust", MC('redstone', 16), 8, S, 0xA80F01, 0xFC7781)
		simple("钻石", "Diamond", MC('diamond', 1), 1, G, 0x20C3B3, 0xD2FCF3)
		simple("青金石", "Lapis Lazuli", MC('lapis_lazuli', 8), 32, S, 0x335DC1, 0x7395E7)
		simple("绿宝石", "Emerald", MC('emerald', 1), 1, G, 0x00A82B, 0xADFACB)
		simple("硫磺", "Sulfur", TE('sulfur', 4), 8, S, 0xC7A94A, 0xEEF071)
		simple("磷灰石", "Apatite", TE('apatite', 4), 8, S, 0x27A9BB, 0x2CC7C9)
		simple("硝石", "Niter", TE('niter', 4), 8, S, 0x735A65, 0xB8AFAF)
		simple("下界石英", "Nether Quartz", MC('quartz', 8), 24, S, 0xB19E8F, 0xE7E2DB)
		simple("赛特斯石英", "Certus Quartz", AE2('certus_quartz_crystal', 8), 24, S, 0x91C5FC, 0xA7CBCF)
		simple("福鲁伊克斯石英", "Fluix Quartz", AE2('fluix_crystal', 8), 32, S, 0x8F5CCB, 0xFC7ED4)
		simple("硫化橡胶", "Cured Rubber", TE('cured_rubber', 6), 16, S, 0x3D363C, 0x594F55)
		
		next_group()
		entry_cost = 10
		simple("脚手架", "Scaffolding", MC('scaffolding', 16), 2, S, 0x7F5F41, 0xDDC683)
		simple("羊毛", "Wool", MC('white_wool', 1), 8, S, 0xBEC4C5, 0xE4E4E4)
		simple("海绵", "Sponge", MC('sponge', 1), 16, S, 0x8F8234, 0xCDCF4A)
		simple("蜘蛛网", "Cobweb", MC('cobweb', 1), 16, S, 0xC2CCCF, 0xFCFCFC)
		
		row += 4
		
		next_group()
		entry_cost = 10
		simple("稻米", "Rice", FD('rice_bag', 1), 4, S, 0x9F7653, 0xCEC6BC)
		simple("秸秆", "Straw", FD('straw', 32), 8, S, 0x623A17, 0x966537)
		simple("夜光菇", "Glowshroom", BOP('glowshroom', 4), 9, S, 0x2C65C9, 0x83A7B7)
		simple("荆棘", "Bramble", BOP('bramble', 4), 9, S, 0x8C3122, 0xECCDBC)
		simple("大麦", "Barley", BOP('barley', 4), 4, S, 0xB78B44, 0xD8BC64)
		simple("水草", "Watergrass", BOP('watergrass', 4), 4, S, 0x43763D, 0x538B51)
		simple("芦苇", "Reed", BOP('reed', 4), 5, S, 0x7B4E35, 0xB2855C)
		simple("三叶草花瓣", "Clover Petal", BOP('huge_clover_petal', 4), 10, S, 0x5B8A4F, 0x6FA960)
		simple("西班牙苔藓", "Spanish Moss", BOP('spanish_moss', 4), 7, S, 0x395B2A, 0xA2C790)
		simple("柳树藤", "Willow Vine", BOP('willow_vine', 4), 7, S, 0x265F0D, 0x317B10)
		simple("香蒲", "Cattail", BOP('cattail', 4), 4, S, 0x186B2B, 0x845738)
		simple("甘蔗", "Sugar Cane", MC('sugar_cane', 4), 3, S, 0x688546, 0xC5FC85)
		simple("海带", "Kelp", MC('kelp', 8), 3, S, 0x5B8131, 0x58A92F)
		simple("竹子", "Bamboo", MC('bamboo', 8), 5, S, 0x4F7416, 0x88AC5F)
		simple("甜浆果", "Sweet Berries", MC('sweet_berries', 8), 11, S, 0x27613F, 0xA30700)
		simple("藤蔓", "Vines", MC('vine', 4), 7, S, 0x183D08, 0x317B10)
		simple("树木肥料", "Tree Fertilizer", CR('tree_fertilizer', 1), 8, S, 0xCF8469, 0x71933A)
		
		next_group()
		entry_cost = 10
		simple("抹灰", "Daub", SP('daub', 16), 5, S, 0xBFBAAA, 0xCBC8B6)
		simple("通透玻璃", "Clear Glass", TC('clear_glass', 16), 4, S, 0xA9C3CF, 0xE8E8E8)
		simple("铜砖块", "Copper Shingles", CR('copper_shingles', 16), 3, S, 0xB5654B, 0xE4BB79)
		simple("海藻砖块", "Algal Bricks", AP('algal_bricks', 32), 6, S, 0x292926, 0x3D4D48)
		simple("橄榄石砖块", "Olivestone Bricks", AP('olivestone_bricks', 32), 8, S, 0x3A3C2E, 0x57553E)
		simple("耀阳金属块", "Sunmetal", AP('sunmetal_block', 32), 8, S, 0x603E38, 0xB48764)
		simple("金属板块", "Plating Block", AP('plating_block', 32), 8, S, 0x222225, 0x39383C)
		simple("扭曲木板", "Twisted Planks", AP('twisted_planks', 32), 8, S, 0x5E5259, 0x72616B)
		simple("骨砖", "Osseous Bricks", AP('osseous_bricks', 32), 8, S, 0x9D976F, 0xD3D0BF)
		simple("焦黑石头", "Seared Stone", TC('seared_stone', 16), 32, S, 0x393734, 0x59534F)
		simple("焦灼石", "Scorched Stone", TC('scorched_stone', 16), 32, S, 0x382C25, 0x4C3F37)
		
		simple("灯笼", "Lantern", MC('lantern', 1), 1, S, 0x484F64, 0xF6C765)
		simple("铜灯笼", "Copper Lantern", SP('copper_lantern', 1), 1, S, 0xB36535, 0xF3B154)
		simple("黄铜灯笼", "Brass Lantern", SP('brass_lantern', 1), 1, S, 0xA47C37, 0xFAEACF)
		simple("绯红灯笼", "Crimson Lantern", SP('crimson_lantern', 1), 1, S, 0x9C0E2C, 0xE7EB56)
		
		next_group()
		entry_cost = 10
		simple("黏液球", "Slime Ball", MC('slime_ball', 4), 24, S, 0x4F7E48, 0x8AD480)
		simple("线", "String", MC('string', 4), 5, S, 0x2E4446, 0xD8D8D8)
		simple("羽毛", "Feather", MC('feather', 4), 6, S, 0xD0D0D0, 0xFCFCFC)
		simple("火药", "Gunpowder", MC('gunpowder', 4), 7, S, 0x535353, 0x717171)
		simple("皮革", "Leather", MC('leather', 4), 8, S, 0x873A25, 0xC45B34)
		simple("墨囊", "Ink Sac", MC('ink_sac', 4), 8, S, 0x493F49, 0x786470)
		simple("附魔之瓶", "Experience", MC('experience_bottle', 1), 8, S, 0x689AC7, 0xFFF2FF)
		simple("潜影壳", "Shulker Shell", MC('shulker_shell', 1), 2, G, 0x6B476A, 0x956895)
		simple("蜘蛛眼", "Spider Eye", MC('spider_eye', 4), 10, S, 0x64062A, 0xC25E6A)
		simple("末影珍珠", "Ender Pearl", MC('ender_pearl', 1), 48, S, 0x0B4C41, 0x2BCBAF)
		simple("腐肉", "Rotten Flesh", MC('rotten_flesh', 4), 3, S, 0xB24320, 0x695C18)
		simple("烈焰棒", "Blaze Rod", MC('blaze_rod', 1), 20, S, 0xAC3B00, 0xD5AC26)
		simple("骨头", "Bone", MC('bone', 4), 8, S, 0xC9C4A3, 0xC9C4A3)
		simple("海晶碎片", "Prismarine Shard", MC('prismarine_shard', 4), 16, S, 0x2F6355, 0x8FC0AA)
		simple("海晶砂粒", "Prismarine Crystals", MC('prismarine_crystals', 4), 24, S, 0x71A296, 0xDCE6D9)
		
		entry_cost = 10
		simple("女巫之帽", "Witch Hat", RQ('witch_hat', 1), 1, G, 0x424242, 0x568125)
		simple("僵尸之心", "Zombie heart", RQ('zombie_heart', 1), 32, S, 0x532B38, 0x8D584A)
		simple("鱿鱼嘴", "Squid Beak", RQ('squid_beak', 1), 32, S, 0x00613B, 0x5BCDA1)
		simple("肋骨", "Rib Bone", RQ('rib_bone', 1), 32, S, 0xDFDDCE, 0xFAF9E9)
		simple("酶腺", "Catalyzing Gland", RQ('catalyzing_gland', 1), 48, S, 0x268E23, 0x63CA52)
		simple("螯角", "Chelicerae", RQ('chelicerae', 1), 32, S, 0x251721, 0x4D0C3B)
		simple("黏液珍珠", "Slime Pearl", RQ('slime_pearl', 1), 48, S, 0x1B9D33, 0x84F58E)
		simple("蝙蝠翅膀", "Bat Wing", RQ('bat_wing', 1), 2, G, 0x464646, 0x6D6D6D)
		simple("调灵肋骨", "Withered Rib", RQ('withered_rib', 1), 2, G, 0x2A2E2E, 0x434949)
		simple("熔火之心", "Molten Core", RQ('molten_core', 1), 48, S, 0xED7102, 0xFAFC58)
		simple("风暴之眼", "Eye of the Storm", RQ('eye_of_the_storm', 1), 2, G, 0xFCD607, 0x96FC52)
		simple("霜冻核心", "Frozen Core", RQ('frozen_core', 1), 48, S, 0x008DC2, 0x7571FB)
		simple("朦胧之心", "Nebulous Heart", RQ('nebulous_heart', 1), 1, G, 0x6200A0, 0xE500C3)
		simple("守卫者之刺", "Guardian Spike", RQ('guardian_spike', 1), 1, G, 0x7F4215, 0xE29964)
		simple("幻翼膜", "Phantom Membrane", MC('phantom_membrane', 1), 48, S, 0x6E506B, 0xC1B79F)
		simple("烈焰蛋糕", "Blaze Cake", CR('blaze_cake', 1), 16, S, 0x834141, 0xFCE083)
		next_group()

		if (!DATAGEN_QUESTS)
			break
		if (!simulate)
			break
		simulate = false
	}


	if (DATAGEN_QUESTS) {
		console.log("QUEST PASTER:")
		console.log(data.join(""))
		console.log(":QUEST PASTER END")
	}

})

onEvent('fluid.registry', event => {
/*
event.create("sliver_coin").displayName("流体银币").bucketColor(0x2A3345).stillTexture('kubejs:fluid/coin/sliver_still').flowingTexture('kubejs:fluid/coin/sliver_flow')
event.create("tech_coin_a").displayName("安山科技币").bucketColor(0xC1CDCD).stillTexture('kubejs:fluid/coin/tech_coin_a_still').flowingTexture('kubejs:fluid/coin/tech_coin_a_flow')
event.create("tech_coin_b").displayName("黄铜科技币").bucketColor(0xB8860B).stillTexture('kubejs:fluid/coin/tech_coin_b_still').flowingTexture('kubejs:fluid/coin/tech_coin_b_flow')
event.create("tech_coin_c").displayName("信素科技币").bucketColor(0xCD3700).stillTexture('kubejs:fluid/coin/tech_coin_c_still').flowingTexture('kubejs:fluid/coin/tech_coin_c_flow')
event.create("tech_coin_d").displayName("谐振科技币").bucketColor(0x5F9EA0).stillTexture('kubejs:fluid/coin/tech_coin_d_still').flowingTexture('kubejs:fluid/coin/tech_coin_d_flow')
*/
})

onEvent('block.registry', event => {
/*
	event.create('empty_express_delivery')
	   .model('kubejs:block/express_delivery/empty_express_delivery')
       .material('wood')
	   .hardness(0.1)
	   .box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
       .displayName('空快递盒')
	   .tagBlock("create:wrench_pickup")
*/
})