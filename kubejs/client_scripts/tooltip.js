
onEvent('item.tooltip', tooltip => {
// 批量添加tooltip

tooltip.add(['kubejs:missingno'], '§7§kmissingnomissingnomissingnomissingno')
tooltip.add(['kubejs:missingno'], '§7它没有意义。。。')
tooltip.add(['kubejs:missingno'], '§c§l注意⚠！拾取该物品会对生物造成模因攻击！')
tooltip.add(['kubejs:missingno'], '§7§kmissingnomissingnomissingnomissingno')

//tooltip.add(Item.of('ftbquests:lootcrate', '{CustomModelData:12,type:"aa"}'), [`§7经典锭造型，含金属量11%！`]);
//tooltip.add(Item.of('ftbquests:lootcrate', '{CustomModelData:12,type:"aa"}'), [`§7使用时按照黄金比例砸开！`]);
tooltip.add("upgrade_aquatic:polar_kelp", [`§7只能通过魔法合成，可种植`]);
tooltip.add("twilightforest:uncrafting_table", [`§a被彻底的Ban了，不要想着获取它`]);
tooltip.add("cookingforblockheads:sink", [`§a小时候家里的水槽忘了关，现在村里成亚特兰蒂斯了`]);
tooltip.add(['kubejs:golden_pen'], '§6为部分物品添加生产编号，永不消耗');

let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} 格`])
    let main_assembly = (id, stage) => tooltip.add(id, [`§7主目标: ${stage == "4" ? "§6最终章" : "§6章节 " + stage}`, '§8思考一下如何自动化制作此物品'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7附加目标: §6章节 ${stage}`])
    let pen_regis = (id, namber, sub) => tooltip.add(id, [`§7标记配方: §2${namber}`, `§7目标: §6${sub}`])
	let not_consumed = (id) => tooltip.add(id, [`§7在§7装配线§7中不消耗，仅消耗耐久`])
	let ammo = (id, stage) => tooltip.add(id, [`§7弹药类型: §r ${stage}`])
	
	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('obsidian', 12 * 9)
	holds('diamond', 12 * 9)
//

pen_regis('kubejs:pen_regis_00', "0号", "等待切石机切割")
pen_regis('kubejs:pen_regis_01', "1号", "动力构件")
pen_regis('kubejs:pen_regis_02', "2号", "动力构件")
pen_regis('kubejs:pen_regis_03', "3号", "动力构件")
pen_regis('kubejs:pen_regis_04', "4号", "动力构件")
pen_regis('kubejs:pen_regis_10', "0号", "等待切石机切割")
pen_regis('kubejs:pen_regis_11', "1号", "动力构件")
pen_regis('kubejs:pen_regis_12', "2号", "动力构件")
pen_regis('kubejs:pen_regis_13', "3号", "动力构件")
pen_regis('kubejs:pen_regis_14', "4号", "动力构件")

//第一章
main_assembly('kubejs:kinetic_mechanism', "1")
main_assembly('create_dd:inductive_mechanism', "1")
bonus_assembly('kubejs:sealed_mechanism', "1A")

main_assembly('kubejs:gold_source_mechanism', "1M")
//第二章
main_assembly('create:precision_mechanism', "2")
bonus_assembly('kubejs:infernal_mechanism', "2A") 
bonus_assembly('kubejs:sturdy_mechanism', "2A") 
bonus_assembly('projectred_core:motor', "2A")   

bonus_assembly('kubejs:metamorphic_mechanism', "2M")
//第三章
main_assembly('kubejs:inductive_mechanism', "3")
bonus_assembly('kubejs:abstruse_mechanism', "3A")
//第四章
main_assembly('kubejs:calculation_mechanism', "4")

not_consumed('cb_microblock:stone_saw')
not_consumed('cb_microblock:iron_saw')
not_consumed('cb_microblock:diamond_saw')
not_consumed('kubejs:netherite_saw')
not_consumed('kubejs:screwdriver')
not_consumed('kubejs:chromatic_resonator')
not_consumed('kubejs:boot_medium')
not_consumed('createindustry:prospector_tool')
not_consumed('kubejs:metamorphic_lich_rod')
not_consumed('kubejs:hop_slime')
not_consumed('kubejs:thermal_grease')

ammo('musketmod:musket', "纸包弹药")
ammo('musketmod:pistol', "纸包弹药")
ammo('musketmod:musket_with_bayonet', "纸包弹药")
})