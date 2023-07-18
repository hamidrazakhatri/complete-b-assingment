var mobiles = {
    sumsung:[
        {
            name:"samsung galaxy s10",
            memory:" memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"samsung  A10",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"samsung galaxy s22",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"samsung galaxy s23",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"samsung galaxy s24",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"samsung galaxy s25",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"samsung galaxy s26",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
    
    ],
    vivo:[
        {
            name:"vivo v10",
            memory:" memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"vivo  A10",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"vivo galaxy s22",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"vivo y23",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
     
    ],
    realme:[
        {
            name:"realme 10",
            memory:" memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"realme  A10",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"realmec53",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"realme c2",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"realme c35",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"realme c25",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"realme c25s",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
    
    ],
    oppo:[
        {
            name:" oppo a57",
            memory:" memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"oppo f1s",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"oppo f3 plus",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"oppo a53",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"oppo f19 pro",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"oppo f21",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
        {
            name:"oppo f21 pro",
            memory:"memory:128gb",
            ram:"Ram:8gb",
            cemra:"cemra:12mp",
        },
    
    ]
       
       
}

var inp = document.getElementById("inp");
var ul = document.getElementById("ul");
   
    
     
        inp.addEventListener("keyup",function(){
        var company = inp.value;

        ul.innerHTML = "";
            for(var i = 0; i < mobiles[company].length; i++){
                ul.innerHTML +=`<div class="dropdown">
                <button class="btn btn-secondary dd dropdown-toggle my-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ${mobiles[company][i].name}
                </button>
                <ul class="dropdown-menu gg  ">
                  <li><a class="dropdown-item" href="#">${mobiles[company][i].memory}</a></li>
                  <li><a class="dropdown-item" href="#">${mobiles[company][i].ram}</a></li>
        
                  <li><a class="dropdown-item" href="#">${mobiles[company][i].cemra}</a></li>
        
                </ul>
              </div>`
        
            }
            inp.value=""
        }
        
        )

     

    
    
    
    
    
    
    



