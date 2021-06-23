
let url_api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
//let url_api = "https://www.themealdb.com/api/json/v1/1/categories.php";


	
function searchh(){
	var food = document.getElementById("search_meal").value;
	url_api += food; 
	fetchData();
}

function fetchData(){
	fetch(url_api)
	.then(res=>res.json())
	.then(data=>meal_details(data))

}

const meal_details=meal=>{

     var result = Object.keys(meal).map((key) => [Number(key), meal[key]]);

	const meal_div = document.getElementById("meall");

	const meal_divvvv = document.getElementById("meall_div");

	for(var i=0;i<result.length;i++){

		const meal_name=result[i];

		for(var i=1;i<meal_name.length;i++){
		const meal_name_name=meal_name[i];

		if(meal_name_name==null){
			
			        const meal_singleDiv = document.createElement('div');

					meal_singleDiv.className="mealNoDivClass";

					const mealinfo =`
			      
					<h3>Food Not Available</h3>

					`;
					meal_singleDiv.innerHTML=mealinfo;
					meal_divvvv.appendChild(meal_singleDiv);

		}else{
		for(var i=0;i<meal_name_name.length;i++){

					const meal_name_name_name=meal_name_name[i];

					const meal_singleDiv = document.createElement('div');

					meal_singleDiv.className="mealDivClass";

					const linkk = meal_name_name_name.strMealThumb;
					
					const mealinfo =`
			       
			        <img src="${linkk}" class="mealName">
					<p>${meal_name_name_name.strMeal}</p>

					`;
					meal_singleDiv.innerHTML=mealinfo;
					meal_div.appendChild(meal_singleDiv);

					const fname=meal_name_name_name.strMeal;

					meal_singleDiv.addEventListener('click', function() {

						console.log(fname);
						const meal_div_details = document.getElementById("meall_single_details");
						meal_div_details.className="meal_ingredent_class";
						const countrysingleDiv=document.getElementById('meall_single_details');
							countrysingleDiv.innerHTML=`
							<img src="${linkk}" class="mealName_image">
							<div class="leftside">
							<h2>${fname}</h2>
							<h4>Ingredent</h4>
							<img src="check1.png">  <label>${meal_name_name_name.strMeasure1} ${meal_name_name_name.strIngredient1}</label> <br>
							<img src="check1.png">  <label>${meal_name_name_name.strMeasure2} ${meal_name_name_name.strIngredient2}</label> <br>
							<img src="check1.png">  <label>${meal_name_name_name.strMeasure3} ${meal_name_name_name.strIngredient3}</label> <br>
							<img src="check1.png">  <label>${meal_name_name_name.strMeasure4} ${meal_name_name_name.strIngredient4}</label> <br>
							<img src="check1.png">  <label>${meal_name_name_name.strMeasure5} ${meal_name_name_name.strIngredient5}</label> <br>
							<img src="check1.png">  <label>${meal_name_name_name.strMeasure6} ${meal_name_name_name.strIngredient6}</label> <br>
							</div>
							`
					}, false);

	        }
	       }
	   }

		
	}


}


	
