function changeSelectItems () {
  var selectID = document.getElementById('select_tdoll')
  var str_items = ''
  if (set_guntype === 0) {
    str_items += '<option value=0 selected></option>'
  } else if (set_guntype === 1) { // HG
    if (num_star === 5) {
      str_items += '<option value=4 selected>No.4 蟒蛇</option>'
      str_items += '<option value=96>No.96 灰熊Mk V</option>'
      str_items += '<option value=97>No.97 M950A</option>'
      str_items += '<option value=114>No.114 维尔德Mk Ⅱ</option>'
      str_items += '<option value=126>No.126 NZ75</option>'
      str_items += '<option value=142>No.142 Five-seveN</option>'
      str_items += '<option value=166>No.166 CZ75</option>'
      str_items += '<option value=183>No.183 竞争者</option>'
      str_items += '<option value=233>No.233 Px4 风暴</option>'
      str_items += '<option value=242>No.242 P22</option>'
      str_items += '<option value=250>No.250 HS2000</option>'
      str_items += '<option value=1001>No.1 [MOD] 柯尔特左轮</option>'
    } else if (num_star === 4) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 2) { // AR
    if (num_star === 5) {
      str_items += '<option value=62 selected>No.62 G41</option>'
      str_items += '<option value=65>No.65 HK416</option>'
      str_items += '<option value=73>No.73 AUG</option>'
      str_items += '<option value=106>No.106 FAL</option>'
      str_items += '<option value=119>No.119 OTs-14</option>'
      str_items += '<option value=122>No.122 G11</option>'
      str_items += '<option value=129>No.129 95式</option>'
      str_items += '<option value=130>No.130 97式</option>'
      str_items += '<option value=172>No.172 RFB</option>'
      str_items += '<option value=175>No.175 ART556</option>'
      str_items += '<option value=181>No.181 T91</option>'
      str_items += '<option value=194>No.194 K2</option>'
      str_items += '<option value=196>No.196 Zas M21</option>'
      str_items += '<option value=205>No.205 AN-94</option>'
      str_items += '<option value=206>No.206 AK-12</option>'
      str_items += '<option value=215>No.215 MDR</option>'
      str_items += '<option value=236>No.236 K11</option>'
      str_items += '<option value=243>No.243 64式自</option>'
      str_items += '<option value=1055>No.55 [MOD] M4A1</option>'
      str_items += '<option value=1056>No.56 [MOD] M4 SOPMODⅡ</option>'
      str_items += '<option value=1057>No.57 [MOD] ST AR-15</option>'
      str_items += '<option value=1064>No.64 [MOD] G36</option>'
    } else if (num_star === 4) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 3) { // SMG
    if (num_star === 5) {
      str_items += '<option value=16 selected>No.16 汤姆森</option>'
      str_items += '<option value=20>No.20 Vector</option>'
      str_items += '<option value=28>No.28 MP7</option>'
      str_items += '<option value=59>No.59 AK-74U</option>'
      str_items += '<option value=104>No.104 G36C</option>'
      str_items += '<option value=115>No.115 索米</option>'
      str_items += '<option value=127>No.127 79式</option>'
      str_items += '<option value=135>No.135 SR-3MP</option>'
      str_items += '<option value=143>No.143 RO635</option>'
      str_items += '<option value=213>No.213 C-MS</option>'
      str_items += '<option value=224>No.224 PM-06</option>'
      str_items += '<option value=228>No.228 樱花</option>'
      str_items += '<option value=234>No.234 JS 9</option>'
      str_items += '<option value=245>No.245 P90</option>'
      str_items += '<option value=251>No.251 X95</option>'
      str_items += '<option value=1103>No.103 [MOD] UMP45</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 4) { // RF
    if (num_star === 5) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 5) { // MG
    if (num_star === 5) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  } else if (set_guntype === 6) { // SG
    if (num_star === 5) {
      str_items += '<option value=151 selected>No.151 M1887</option>'
      str_items += '<option value=157>No.157 KSG</option>'
      str_items += '<option value=160>No.160 Saiga-12</option>'
      str_items += '<option value=163>No.163 AA-12</option>'
      str_items += '<option value=164>No.164 FP-6</option>'
      str_items += '<option value=188>No.188 S.A.T.8</option>'
      str_items += '<option value=229>No.229 M870</option>'
    } else if (num_star === 4) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 3) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    } else if (num_star === 2) {
      str_items += '<option  value=-1 selected>还没做！</option>'
    }
  }
  if (switch_operate) {
    selectID.disabled = false
  } else {
    selectID.disabled = true
  }
  selectID.innerHTML = str_items
  changePreview(1)
}
function changeEquip () {
  var ID = parseInt(document.getElementById('select_tdoll').value)
  var selectID = document.getElementById('select_equip')
  var str_items = ''
  if (num_pickequip === 1) { // 第一格装备
    if (set_guntype === 1) { // HG
      str_items += '<option value=11>AC4消音器</option>'
      str_items += '<option value=41>PEQ-16A</option>'
      if (ID === 1001) { // 纳甘左轮
      }
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=11>AC4消音器</option>'
      str_items += '<option value=41>PEQ-16A</option>'
      if (ID === 56) { // ST AR-15
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=32>IOP T4外骨骼</option>'
      str_items += '<option value=31>IOP X4外骨骼</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=11>AC4消音器</option>'
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=33>Type3防弹插板</option>'
    }
  } else if (num_pickequip === 2) { // 第二格装备（AR小队双瞄具/人形放在第三）
    if (set_guntype === 1) { // HG
      str_items += '<option value=21>ILM空尖弹</option>'
      if (ID === 1002) { // M1911
      }
      if (ID === 183) str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=22>APCR高速弹</option>'
      if (ID === 56) { // ST AR-15
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=21>ILM空尖弹</option>'
    // CMS
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    // 春田
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=24>#000猎鹿弹</option>'
      str_items += '<option value=25>SABOT独头弹</option>'
    }
  } else if (num_pickequip === 3) { // 第三格装备
    if (set_guntype === 1) { // HG
      str_items += '<option value=31>IOP X4外骨骼</option>'
      str_items += '<option value=32>IOP T4外骨骼</option>'
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=31>IOP X4外骨骼</option>'
      str_items += '<option value=32>IOP T4外骨骼</option>'
      if (ID === 56) { // ST AR-15等人的瞄具，还有G41专属
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=11>AC4消音器</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=41>PEQ-16A</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=34>热光学迷彩披风</option>'
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=35>IOP极限弹链箱</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=13>ITI MARS</option>'
      str_items += '<option value=12>VFL 6-24X56</option>'
      str_items += '<option value=14>EOT 518</option>'
      str_items += '<option value=41>PEQ-16A</option>'
    }
  }
  if (switch_operate && switch_equip) {
    selectID.disabled = false
    str_items += '<option value=0>无装备</option>'
  } else {
    selectID.disabled = true
    str_items += '<option value=-1></option>'
  }
  selectID.innerHTML = str_items
  selectID.value = set_equip[num_pickequip - 1]
}
