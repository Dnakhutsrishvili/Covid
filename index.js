


//get info via axios
    axios.get("https://covid-api.mmediagroup.fr/v1/cases").then(Response => {

    
    let arr=[];
   

    let selector=document.getElementById("select-id")
    let objectCountry=Response.data

    
     //transform object to array
    arr=Object.keys(objectCountry)
   

    //global info
 
    let ow = document.getElementById("location")
    ow.innerHTML=" "

    let ow1 = document.getElementById("update")
    ow1.innerHTML= " "

    let ow2 = document.getElementById("population")
    ow2.innerHTML=(Response.data.Global.All.population)

    let ow4 = document.getElementById("deaths")
    ow4.innerHTML=(Response.data.Global.All.deaths)

    let ow8 = document.getElementById("confirmed")
    ow8.innerHTML=(Response.data.Global.All.confirmed)

   
    let percent=Response.data.Global.All.confirmed/Response.data.Global.All.population*100
    let cett =document.getElementById("infection-rate")
  Math.round()
    cett.innerText=Math.round(percent)+"%"

    
    let percent2=Response.data.Global.All.deaths/Response.data.Global.All.population*100
    let cett2 =document.getElementById("death-rate")

    cett2.innerText=percent2+"%"



        //make options for select

        let container = document.getElementById("select-id");
        for (let item in arr) {
            let country = document.createElement("option");
            
            country.innerHTML = arr[item];
            container.appendChild(country);

        }
        
        
//select values of country
selector.addEventListener("change",function update() {
    var select = document.getElementById('select-id');
    var option = select.options[select.selectedIndex];

    let p = document.getElementById("location")
    option.value = option.text 
    
    p.innerHTML=(Response.data[option.text].All.location)
   


  
//get and display selected values



    if(Response.data[option.text].All.hasOwnProperty("updated")){
        
        let pe = document.getElementById("update")
        pe.innerHTML=(Response.data[option.text].All.updated)


    }else{
        pe.innerHTML= " "
    }


    

    if(Response.data[option.text].All.hasOwnProperty("confirmed")){
        
        let pe = document.getElementById("confirmed")
        pe.innerHTML=(Response.data[option.text].All.confirmed)


    }else{
        pe.innerHTML= " "
    }


    if(Response.data[option.text].All.hasOwnProperty("population")){
        
        let pe = document.getElementById("population")
        pe.innerHTML=(Response.data[option.text].All.population)


    }else{
        pe.innerHTML= " "
    }


    if(Response.data[option.text].All.hasOwnProperty("deaths")){
        
        let pe = document.getElementById("deaths")
        pe.innerHTML=(Response.data[option.text].All.deaths)


    }else{
        pe.innerHTML= " "
    }



        if(Response.data[option.text].All.hasOwnProperty("life_expectancy")){
        
        let pe = document.getElementById("life-expectancy")
        pe.innerHTML=(Response.data[option.text].All.life_expectancy)


    }else{
        pe.innerHTML= " "
    }

//gamotvla
    let percent=Response.data[option.text].All.confirmed/Response.data[option.text].All.population*100
    let cett =document.getElementById("infection-rate")
  Math.round()
    cett.innerText=Math.round(percent)+"%"




    let percent2=Response.data[option.text].All.deaths/Response.data[option.text].All.population*100
    let cett2 =document.getElementById("death-rate")

    cett2.innerText=percent2+"%"


    
    
} )
     


// popup
document.getElementById("butt").addEventListener("click", function open(){

    document.getElementById("gaqroba").style.display = 'block';      


 
})


document.getElementById("butt1").addEventListener("click", function open(){

    document.getElementById("gaqroba").style.display = 'none';      


 
})




        
    })

   



   
    
    
    
