var HP = 0;
var MP = 0;
var kisoHP = 200;
var kisoMP = 100;
var tekiHP = 100;
var money = 0;
var healNumber = 0;
var magicNumber = 0;
var power = 0;
var tekiLevel = 0;
var type;
var textbox = document.getElementById("textbox");


// メイン画面
function level1(){
	location.href="level1.html";
}

function level2(){
	location.href="level2.html";
}

function level3(){
	location.href="level3.html";
}

function shop(){
	location.href="shop.html";
}

function home(){
	if(localStorage.getItem("お金") != null){
		money = +localStorage.getItem("お金");
		document.getElementById("homeMoney").textContent = money;
	}
}

//全体リセット
function reset(){
	localStorage.clear();
	location.reload();
}





//ショップ画面
function shopStart(){
	if(localStorage.getItem("お金") != null){
		money = +localStorage.getItem("お金");
		document.getElementById("shopMoney").textContent = money;
	}
	if(localStorage.getItem("回復ポーション") != null){
		healNumber = +localStorage.getItem("回復ポーション");
		document.getElementById("healNumber").textContent = healNumber;
	}
	if(localStorage.getItem("魔法ポーション") != null){
		magicNumber = +localStorage.getItem("魔法ポーション");
		document.getElementById("magicNumber").textContent = magicNumber;
	}
	if(localStorage.getItem("基礎HP") != null){
		kisoHP = +localStorage.getItem("基礎HP");
	}
	if(localStorage.getItem("攻撃力") != null){
		power = +localStorage.getItem("攻撃力");
	}
	if(localStorage.getItem("基礎MP") != null){
		kisoMP = +localStorage.getItem("基礎MP");
	}
}

//回復ポーション
function buyHeal(){
	if(money >= 50){
		money = money - 50;
		healNumber = healNumber + 1;
		localStorage.setItem("お金",money);
		localStorage.setItem("回復ポーション",healNumber);
		document.getElementById("healNumber").textContent = healNumber;
		document.getElementById("shopMoney").textContent = money;
	}
}

//魔法ポーション
function buyMagic(){
	if(money >= 75){
		money = money - 75;
		magicNumber = magicNumber + 1;
		localStorage.setItem("お金",money);
		localStorage.setItem("魔法ポーション",magicNumber);
		document.getElementById("magicNumber").textContent = magicNumber;
		document.getElementById("shopMoney").textContent = money;
	}
}

//体力UP
function buyHP(){
	if(money >= 100){
		money = money - 100;
		var rand = Math.floor(Math.random() * 25) + 20;
		kisoHP = kisoHP + rand;
		localStorage.setItem("お金",money);
		localStorage.setItem("基礎HP",kisoHP);
		document.getElementById("shopMoney").textContent = money;
	}
}

//攻撃力UP
function buyAtack(){
	if(money >= 200){
		money = money - 200;
		var rand = Math.floor(Math.random() * 25) + 20;
		power = power + rand;
		localStorage.setItem("お金",money);
		localStorage.setItem("攻撃力",power);
		document.getElementById("shopMoney").textContent = money;
	}
}

//魔力UP
function buyMP(){
	if(money >= 300){
		money = money - 300;
		var rand = Math.floor(Math.random() * 25) + 20;
		kisoMP = kisoMP + rand;
		localStorage.setItem("お金",money);
		localStorage.setItem("基礎MP",kisoMP);
		document.getElementById("shopMoney").textContent = money;
	}
}

function back(){
	location.href = "main.html";
}





// Level1画面
function start(Level){
	if(Level == 1){
		tekiLevel = 1;
		tekiHP = 100;
		document.getElementById("level").src = "img/level1.png";
	}else if(Level == 2){
		Level = 2;
		tekiHP = 300;
		document.getElementById("level").src = "img/level2.png";
	}else if(Level == 3){
		Level = 3;
		tekiHP = 500;
		document.getElementById("level").src = "img/level3.png";
	}
	if(localStorage.getItem("お金") != null){
		money = +localStorage.getItem("お金");
		document.getElementById("money").textContent = money;
	}
	if(localStorage.getItem("回復ポーション") != null){
		healNumber = +localStorage.getItem("回復ポーション");
		document.getElementById("healNumber").textContent = healNumber;
	}
	if(localStorage.getItem("魔法ポーション") != null){
		magicNumber = +localStorage.getItem("魔法ポーション");
		document.getElementById("magicNumber").textContent = magicNumber;
	}
	if(localStorage.getItem("基礎HP") != null){
		kisoHP = +localStorage.getItem("基礎HP");
	}
	if(localStorage.getItem("攻撃力") != null){
		power = +localStorage.getItem("攻撃力");
	}
	if(localStorage.getItem("基礎MP") != null){
		kisoMP = +localStorage.getItem("基礎MP");
	}

	textbox.style.visibility = "hidden";
	document.getElementById("typeCss").style.visibility = "hidden";
	document.getElementById("operationCss").style.visibility = "visible";

	HP = kisoHP;
	MP = kisoMP;
	document.getElementById("proHP").max = kisoHP;
	document.getElementById("proMP").max = kisoMP;
	document.getElementById("proTeki").max = tekiHP;
	document.getElementById("proHP").value = kisoHP;
	document.getElementById("proMP").value = kisoMP;
	document.getElementById("proTeki").value = tekiHP;
	document.getElementById("HP").textContent = HP + "/" + kisoHP;
	document.getElementById("MP").textContent = MP + "/" + kisoMP;
}

//攻撃ボタン
function atack(){
	textbox.placeholder = "攻撃";
	textbox.style.visibility = "visible";
	document.getElementById("operationCss").style.visibility = "hidden";
}

//魔法ボタン
function magic(){
	if(MP >= 20){
		document.getElementById("typeCss").style.visibility = "visible";
		document.getElementById("operationCss").style.visibility = "hidden";
	}
}

//火
function fire(){
	textbox.placeholder = "ファイヤー";
	textbox.style.visibility = "visible";
	document.getElementById("typeCss").style.visibility = "hidden";
	document.getElementById("operationCss").style.visibility = "hidden";
	type = "ファイヤー";
}

//水
function water(){
	textbox.placeholder = "ウォーター";
	textbox.style.visibility = "visible";
	document.getElementById("typeCss").style.visibility = "hidden";
	document.getElementById("operationCss").style.visibility = "hidden";
	type = "ウォーター";
}

//氷
function ice(){
	textbox.placeholder = "アイス";
	textbox.style.visibility = "visible";
	document.getElementById("typeCss").style.visibility = "hidden";
	document.getElementById("operationCss").style.visibility = "hidden";
	type = "アイス";
}

//電気
function electrical(){
	textbox.placeholder = "エレクトリカル";
	textbox.style.visibility = "visible";
	document.getElementById("typeCss").style.visibility = "hidden";
	document.getElementById("operationCss").style.visibility = "hidden";
	type = "エレクトリカル";
}

//テキストボックスエンター
function atackent(code)
{
	//エンターキーが押された
	if(13 === code)
	{
		if(textbox.value == "攻撃"){
			damage(atack);
		}else if(textbox.value == type){
			damage(magic);
		}else{
			setTimeout("teki()",2000);
			textbox.value = "";
			textbox.style.visibility = "hidden";
		}
	}
}

//ダメージ
function damage(genre){
	document.getElementById("operationCss").style.visibility = "hidden";
	if(genre == atack){
		var rand = Math.floor(Math.random() * 10) + 10 + power;
	}else if(genre == magic){
		var rand = Math.floor(Math.random() * 10) + 20 + power;
		MP = MP - 20;
		document.getElementById("MP").textContent = MP + "/" + kisoMP;
		document.getElementById("proMP").value = MP;
	}

	tekiHP = tekiHP - rand;
	document.getElementById("proTeki").value = tekiHP;
	textbox.value = "";
	textbox.style.visibility = "hidden";
	//自分が勝ったとき
	if(tekiHP <= 0){
		if(tekiLevel == 1){
			money = money + 100;
		}else if(tekiLevel == 2){
			money = money + 500;
		}else if(tekiLevel == 3){
			money = money + 1000;
		}
		document.getElementById("money").textContent = money;
		localStorage.setItem("お金",money);
		location.href = "main.html";
	}else{
		setTimeout("teki()",2000);
	}
}

//敵の攻撃
function teki(){
	var rand = Math.floor(Math.random() * 10) + 10;
	HP = HP - rand;
	document.getElementById("proHP").value = HP;
	document.getElementById("HP").textContent = HP + "/" + kisoHP;
	document.getElementById("operationCss").style.visibility = "visible";
	//自分が負けたとき
	if(HP <= 0){
		location.href = "main.html";
	}
}

//回復ポーション
function healPortion(){
	if(healNumber > 0){
		healNumber = healNumber - 1;
		localStorage.setItem("回復ポーション",healNumber);
		document.getElementById("healNumber").textContent = healNumber;

		document.getElementById("operationCss").style.visibility = "hidden";
		var rand = Math.floor(Math.random() * 25) + 20;
		HP = HP + rand;
		if(HP >= 200){
			HP = 200;
		}
		document.getElementById("proHP").value = HP;
		document.getElementById("HP").textContent = HP + "/" + kisoHP;	
		setTimeout("teki()",2000);
	}
}

//魔法ポーション
function magicPortion(){
	if(magicNumber > 0){
		magicNumber = magicNumber - 1;
		localStorage.setItem("魔法ポーション",magicNumber);
		document.getElementById("magicNumber").textContent = magicNumber;

		document.getElementById("operationCss").style.visibility = "hidden";
		var rand = Math.floor(Math.random() * 25) + 20;
		MP = MP + rand;
		if(MP >= 100){
			MP = 100;
		}
		document.getElementById("proMP").value = MP;
		document.getElementById("MP").textContent = MP + "/" + kisoMP;
		setTimeout("teki()",2000);
	}
}

//逃げる
function escape(){
	document.getElementById("operationCss").style.visibility = "hidden";
	var rand = Math.floor(Math.random() * 2);
	if(rand == 1){
		location.href = "main.html";
	}else{
		setTimeout("teki()",2000);
	}
}