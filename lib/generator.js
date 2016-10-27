var Generator = {

	generateUser: function(callbackFn){
		var callback = callbackFn || console.log.bind(console);
		$.ajax({
			url: 'https://randomuser.me/api/?nat=US',
			dataType: 'json',
			success: function(data){
				callback(data);
			}
		});
	},

	generateUserPromise: function(){
		var _this = this;
		var promise = new Promise(function(resolve, reject){
			_this.generateUser(resolve);
		});
		return promise;
	},

	continuousUser: function(callback, timeInterval){
		var gen = this;
		var interval = timeInterval || 3000;
		var stop = setInterval(function(){
			gen.generateUser(callback);
		}, interval);
		return stop;
	}
	
}

String.toTitleCase = function(string){
	return string[0].toUpperCase() + string.substr(1);
}

window.PATIENTS = [{"row":1,"name":"Charles George","image":"https://robohash.org/odiofugiatnatus.jpg?size=250x250&set=set1","city":"Handan","gender":"Male","drug_company":"Supervalu Inc","diagnosis":"Chronic inflammatory demyelinating polyneuritis"},
	{"row":2,"name":"Matthew Black","image":"https://robohash.org/ullamfugaunde.jpg?size=250x250&set=set1","city":"Malasiqui","gender":"Male","drug_company":"DC Alpine Partners, LLC DBA: Sweatblock","diagnosis":"Cardiac complications of anesthesia or other sedation in labor and delivery, delivered, with or without mention of antepartum condition"},
	{"row":3,"name":"Ralph Cox","image":"https://robohash.org/illumvoluptasdolores.jpg?size=250x250&set=set1","city":"Tongchuan","gender":"Male","drug_company":"Topco Associates LLC","diagnosis":"Dental caries limited to enamel"},
	{"row":4,"name":"Henry Moreno","image":"https://robohash.org/delenitivoluptateexplicabo.jpg?size=250x250&set=set1","city":"Cầu Giấy","gender":"Male","drug_company":"Apotex Corp","diagnosis":"Open dislocation of foot, other"},
	{"row":5,"name":"Earl King","image":"https://robohash.org/cumquerationeut.jpg?size=250x250&set=set1","city":"Lýkeio","gender":"Male","drug_company":"Uriel Pharmacy Inc.","diagnosis":"Poisoning by tetanus vaccine"},
	{"row":6,"name":"Steve White","image":"https://robohash.org/verosolutadeserunt.jpg?size=250x250&set=set1","city":"Kaliterus","gender":"Male","drug_company":"Canberra Corporation","diagnosis":"Benign neoplasm of prostate"},
	{"row":7,"name":"Sandra Rodriguez","image":"https://robohash.org/temporibusvoluptasvitae.jpg?size=250x250&set=set1","city":"Santa Apolonia","gender":"Female","drug_company":"Dr. Fresh, Inc.","diagnosis":"Other disorders of neurohypophysis"},
	{"row":8,"name":"Earl Matthews","image":"https://robohash.org/ipsaomnisnobis.jpg?size=250x250&set=set1","city":"Samdo","gender":"Male","drug_company":"Phillips Company","diagnosis":"Legally induced abortion, complicated by damage to pelvic organs or tissues, unspecified"},
	{"row":9,"name":"Janice Peterson","image":"https://robohash.org/earumnisiconsectetur.jpg?size=250x250&set=set1","city":"Jincang","gender":"Female","drug_company":"Uriel Pharmacy Inc.","diagnosis":"Other specified aplastic anemias"},
	{"row":10,"name":"Joyce Nichols","image":"https://robohash.org/inciduntpraesentiumhic.jpg?size=250x250&set=set1","city":"Coyaima","gender":"Female","drug_company":"Physicians Total Care, inc.","diagnosis":"Severe atrophy of the maxilla"},
	{"row":11,"name":"Alice Thompson","image":"https://robohash.org/omnisliberooptio.jpg?size=250x250&set=set1","city":"Stupari","gender":"Female","drug_company":"Blenheim Pharmacal, Inc.","diagnosis":"Full-thickness skin loss [third degree,not otherwise specified] of back [any part]"},
	{"row":12,"name":"Annie Pierce","image":"https://robohash.org/quasiomnisquam.jpg?size=250x250&set=set1","city":"Alah Sāy","gender":"Female","drug_company":"Cardinal Health","diagnosis":"Blisters, epidermal loss [second degree] of multiple specified sites"},
	{"row":13,"name":"Ruby Meyer","image":"https://robohash.org/utrerumquaerat.jpg?size=250x250&set=set1","city":"Isehara","gender":"Female","drug_company":"Advanced Generic Corporation","diagnosis":"Accidental poisoning by unspecified gases and vapors"},
	{"row":14,"name":"Albert Ruiz","image":"https://robohash.org/eosquisquamomnis.jpg?size=250x250&set=set1","city":"Sviblovo","gender":"Male","drug_company":"Forces of Nature","diagnosis":"Acute leukemia of unspecified cell type, without mention of having achieved remission"},
	{"row":15,"name":"Philip Greene","image":"https://robohash.org/fugitadipiscipariatur.jpg?size=250x250&set=set1","city":"San Nicolas","gender":"Male","drug_company":"Natural Health Supply","diagnosis":"Injury by cutting and piercing instruments, undetermined whether accidentally or purposely inflicted"},
	{"row":16,"name":"Laura Henderson","image":"https://robohash.org/autvoluptasomnis.jpg?size=250x250&set=set1","city":"Rochester","gender":"Female","drug_company":"CVS Pharmacy","diagnosis":"Diabetes mellitus of mother, complicating pregnancy, childbirth, or the puerperium, delivered, with mention of postpartum complication"},
	{"row":17,"name":"Julie Thomas","image":"https://robohash.org/etvoluptatemadipisci.jpg?size=250x250&set=set1","city":"La Tuque","gender":"Female","drug_company":"Unither Manufacturing, LLC","diagnosis":"Motor vehicle traffic accident involving collision with other vehicle injuring rider of animal; occupant of animal-drawn vehicle"},
	{"row":18,"name":"Chris Morales","image":"https://robohash.org/reiciendisquibusdamnostrum.jpg?size=250x250&set=set1","city":"Guanzhou","gender":"Male","drug_company":"JUBILANT CADISTA PHARMACEUTICALS, INC.","diagnosis":"Nonallopathic lesions, thoracic region"},
	{"row":19,"name":"Robert Sims","image":"https://robohash.org/voluptatemtemporaexcepturi.jpg?size=250x250&set=set1","city":"Gadžin Han","gender":"Male","drug_company":"Ranbaxy Pharmaceuticals Inc.","diagnosis":"Stress incontinence, male"},
	{"row":20,"name":"Evelyn Jenkins","image":"https://robohash.org/omnisadolore.jpg?size=250x250&set=set1","city":"Drohiczyn","gender":"Female","drug_company":"Preferred Pharmaceuticals, Inc.","diagnosis":"Severe intellectual disabilities"}]

//

window.RESTORE = {"-KV7SZw80wAEKO6GQgCR":{"diagnosis":"Chronic inflammatory demyelinating polyneuritis","drug_company":"Supervalu Inc","image":"https://randomuser.me/api/portraits/women/48.jpg","name":"Leona Hanson"},"-KV7SZwL_KCln9EpeBFX":{"diagnosis":"Cardiac complications of anesthesia or other sedation in labor and delivery, delivered, with or without mention of antepartum condition","drug_company":"DC Alpine Partners, LLC DBA: Sweatblock","image":"https://randomuser.me/api/portraits/men/5.jpg","name":"Alexander Ruiz"},"-KV7SZwNnlfNq6m7VYrk":{"diagnosis":"Dental caries limited to enamel","drug_company":"Topco Associates LLC","image":"https://randomuser.me/api/portraits/women/15.jpg","name":"Gina Austin"},"-KV7SZwOTRobHmQ2ukAy":{"diagnosis":"Open dislocation of foot, other","drug_company":"Apotex Corp","image":"https://randomuser.me/api/portraits/men/35.jpg","name":"Fernando Morris"},"-KV7SZwQxsN7TZPZprKA":{"diagnosis":"Poisoning by tetanus vaccine","drug_company":"Uriel Pharmacy Inc.","image":"https://randomuser.me/api/portraits/men/56.jpg","name":"Marion Rivera"},"-KV7SZwS8EuxfZY-I3gL":{"diagnosis":"Benign neoplasm of prostate","drug_company":"Canberra Corporation","image":"https://randomuser.me/api/portraits/men/93.jpg","name":"Jeffery Mccoy"},"-KV7SZwVs1oTkiQW5oD2":{"diagnosis":"Other disorders of neurohypophysis","drug_company":"Dr. Fresh, Inc.","image":"https://randomuser.me/api/portraits/men/69.jpg","name":"Hector Robertson"},"-KV7SZw_v6I4VrU9d6SV":{"diagnosis":"Legally induced abortion, complicated by damage to pelvic organs or tissues, unspecified","drug_company":"Phillips Company","image":"https://randomuser.me/api/portraits/women/70.jpg","name":"Vivan Myers"},"-KV7SZweR1j1Wy8_3K3N":{"diagnosis":"Other specified aplastic anemias","drug_company":"Uriel Pharmacy Inc.","image":"https://randomuser.me/api/portraits/women/59.jpg","name":"Meghan Mason"},"-KV7SZwi4ur6pBo4hnp1":{"diagnosis":"Severe atrophy of the maxilla","drug_company":"Physicians Total Care, inc.","image":"https://randomuser.me/api/portraits/men/10.jpg","name":"Tony Knight"},"-KV7SZwlthXuKGPZ5r_V":{"diagnosis":"Full-thickness skin loss [third degree,not otherwise specified] of back [any part]","drug_company":"Blenheim Pharmacal, Inc.","image":"https://randomuser.me/api/portraits/women/87.jpg","name":"Rachel Owens"},"-KV7SZwn1dxf7KK5E7sN":{"diagnosis":"Blisters, epidermal loss [second degree] of multiple specified sites","drug_company":"Cardinal Health","image":"https://randomuser.me/api/portraits/men/46.jpg","name":"Curtis Marshall"},"-KV7SZwrsDUbdXZkgIPm":{"diagnosis":"Accidental poisoning by unspecified gases and vapors","drug_company":"Advanced Generic Corporation","image":"https://randomuser.me/api/portraits/men/29.jpg","name":"Ralph Wade"},"-KV7SZwuZAdDN2KbvBY-":{"diagnosis":"Acute leukemia of unspecified cell type, without mention of having achieved remission","drug_company":"Forces of Nature","image":"https://randomuser.me/api/portraits/women/75.jpg","name":"Herminia Daniels"},"-KV7SZwyZk9AXlB0x1ND":{"diagnosis":"Injury by cutting and piercing instruments, undetermined whether accidentally or purposely inflicted","drug_company":"Natural Health Supply","image":"https://randomuser.me/api/portraits/women/43.jpg","name":"Myrtle Ruiz"},"-KV7SZx08uIU-bjpr-m1":{"diagnosis":"Diabetes mellitus of mother, complicating pregnancy, childbirth, or the puerperium, delivered, with mention of postpartum complication","drug_company":"CVS Pharmacy","image":"https://randomuser.me/api/portraits/men/52.jpg","name":"Ritthy Moreno"},"-KV7SZx3yMnscJYEEkmE":{"diagnosis":"Motor vehicle traffic accident involving collision with other vehicle injuring rider of animal; occupant of animal-drawn vehicle","drug_company":"Unither Manufacturing, LLC","image":"https://randomuser.me/api/portraits/men/76.jpg","name":"Bruce Beck"},"-KV7SZx77iwxQTknRBBd":{"diagnosis":"Nonallopathic lesions, thoracic region","drug_company":"JUBILANT CADISTA PHARMACEUTICALS, INC.","image":"https://randomuser.me/api/portraits/women/77.jpg","name":"Kathy Watts"},"-KV7SZx87ia-i59a1t48":{"diagnosis":"Stress incontinence, male","drug_company":"Ranbaxy Pharmaceuticals Inc.","image":"https://randomuser.me/api/portraits/men/96.jpg","name":"Jordan Cole"},"-KV7SZx98KCftlrVEBVB":{"diagnosis":"Severe intellectual disabilities","drug_company":"Preferred Pharmaceuticals, Inc.","image":"https://randomuser.me/api/portraits/women/17.jpg","name":"Kenzi Rhodes"}}


//

function restoreFirebase(){
	firebase.database().ref('patients').set(window.RESTORE);
}