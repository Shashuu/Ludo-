var count=0;
console.log("PASSED");

//var temp1 = { 1:0, 2:0, 3:0, 4:0};
//var temp2 = { 1: 0, 2:0, 3:0, 4:0 };

var Player = {

		coins : 4,
};

var ListOfPlayers = [];
var ListOfPlayerPositions = [4, 43, 30, 17];
var i =0;

for(i=0;i<=3;i++)
{

	var obj = Object.create(Player);
	obj.position_initial = ListOfPlayerPositions[i];
	obj.in_out = { 1:0, 2:0, 3:0, 4:0} ;
	obj.position = { 1:0, 2:0, 3:0, 4:0}; 
	ListOfPlayers.push(obj);

}

//console.log(ListOfPlayers.length);

var count  = 0;
var winner = 0;
var colors = ['#009900',' #CC9900', '#CC0000', '#0066FF'];
var PlayerCoinsClassTags = ['player1_coin','player2_coin', 'player3_coin', 'player4_coin' ];
var GrayTile = 'way';

console.log(1);

function Play(chance, value){
	console.log("Player turn: "+chance,value);
	
	var jump = value;
	var CoinNumber;

	if((ListOfPlayers[chance-1]['in_out'][1]==0||ListOfPlayers[chance-1]['in_out'][2]==0||ListOfPlayers[chance-1]['in_out'][3]==0||ListOfPlayers[chance-1]['in_out'][4]==0 )&&jump==6)
	{
		var x = prompt("Want to open a new coin ?");
		
		if(x=='Y')
		{
			do{
			CoinNumber = parseInt(prompt("Which one?"));
			}while(ListOfPlayers[chance-1].in_out[CoinNumber]==1)

			ListOfPlayers[chance-1].in_out[CoinNumber]=1;
			ListOfPlayers[chance-1].position[CoinNumber]=ListOfPlayers[chance-1].position_initial; 
			//continue;
						
			//remove continue;

			// jump = value;			
		}
	}
	else
	{
		console.log("entered else with player number : ",chance);

		if(ListOfPlayers[chance-1].in_out[1]==1||ListOfPlayers[chance-1].in_out[2]==1||ListOfPlayers[chance-1].in_out[3]==1||ListOfPlayers[chance-1].in_out[4]==1)
		{
			console.log("entered else if");

			do{
				CoinNumber = parseInt(prompt(" Which coin you want to move 1/2/3/4"));
			}while(ListOfPlayers[chance-1].in_out[CoinNumber]==0);

			var prev = ListOfPlayers[chance-1].position[CoinNumber];
			ListOfPlayers[chance-1].position[CoinNumber]+=jump;

			console.log("prev :"+prev, "jump :" + jump);

			var PrevHTML = document.getElementById("A"+ prev);

			if(prev==4){
			PrevHTML.className = 'in_way';	
			}
			else if(prev==43)
			{
				PrevHTML.className = 'way_player2';
			}
			else if(prev==30)
			{
				PrevHTML.className = 'way_player3';
			}
			else if(prev==17)
			{
				PrevHTML.className = 'way_player4';
			}
			else
			{
				PrevHTML.className = GrayTile;
			}

			console.log(PrevHTML);

			var NewHTML = document.getElementById("A"+ ListOfPlayers[chance-1].position[CoinNumber] );
			NewHTML.className = PlayerCoinsClassTags[chance-1];
		}

		//killing other player coins.
		//move a tile from prev to new(ListOfPlayers[chance-1].position[CoinNumber])
		}
		console.log("Player exiting Play Function");
}

function Roll() {
	
	console.log("count "+count);
	var chance = count%4 + 1;
	var value = Math.floor(Math.random()*6)+1;
	Play(chance, value);
	console.log("-----");
	count+=1;
}
