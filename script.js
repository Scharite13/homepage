var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

    if(nhour==0){
        ap=" AM";
        nhour=12;
    }
    else if(nhour<12){
        ap=" AM";
    }
    else if(nhour==12){
        ap=" PM";
    }
    else if(nhour>12){
        ap=" PM";
        nhour-=12;
    }

    if(nmin<=9) nmin="0"+nmin;
    if(nsec<=9) nsec="0"+nsec;

    

    var date = ""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";
    var time = ""+nhour+":"+nmin+":"+nsec+ap+"";
    document.getElementById('clockbox').innerHTML= date + "<br>" + time ;
}

GetClock();
setInterval(GetClock,1000)


function time(){
        var d=new Date();
        var nhour=d.getHours()

        if(nhour<12){
            greeting = document.getElementById('hero').innerHTML = "Good Morning, Derek!";
        }

        else if (nhour<17){
            greeting = document.getElementById('hero').innerHTML = "Good Afternoon, Derek!";
        }

        else if(nhour<24){
            greeting = document.getElementById('hero').innerHTML = "Good Evening, Derek!";
        }
    
        return greeting

}

time()

async function getQuote() {
    const response = await fetch("https://quotes.rest/qod.json?category=inspire");
    const data = await response.json();
    const quotes = data.contents.quotes[0];
    const { quote, author } = quotes;
    console.log(quote);
    console.log(author);

    document.getElementById('qod').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}

getQuote()

