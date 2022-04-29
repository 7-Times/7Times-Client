//alert("This is proably one of most stupidest projects I have ever made. ;)");

window.onload = () => { 
    let keys = "";
    
    function dogu(){
        const objective = new Date('March 2, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('dogu-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('dogu-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('dogu-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('dogu-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('dogu-day').innerText = "-Over-";
            document.getElementById('dogu-hour').innerText = "-Over-";
        document.getElementById('dogu-minute').innerText = "-Over-";
        document.getElementById('dogu-second').innerText = "-Over-";
        }
    }
    function cagan(){
        const objective = new Date('January 29, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('cagan-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('cagan-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('cagan-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('cagan-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('cagan-day').innerText = "-Over-";
            document.getElementById('cagan-hour').innerText = "-Over-";
            document.getElementById('cagan-minute').innerText = "-Over-";
            document.getElementById('cagan-second').innerText = "-Over-";
        }
    }
    function defne(){
        const objective = new Date('January 2, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('defne-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('defne-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('defne-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('defne-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('defne-day').innerText = "-Over-";
        document.getElementById('defne-hour').innerText = "-Over-";
        document.getElementById('defne-minute').innerText = "-Over-";
        document.getElementById('defne-second').innerText = "-Over-";
    }
    }
    function arda(){
        const objective = new Date('November 25, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('arda-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('arda-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('arda-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('arda-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('arda-day').innerText = "-Over-";
            document.getElementById('arda-hour').innerText = "-Over-";
            document.getElementById('arda-minute').innerText = "-Over-";
            document.getElementById('arda-second').innerText = "-Over-";
        }
    }
    function mustafa(){
        /*const objective = new Date('May 17, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('mustafa-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('mustafa-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('mustafa-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('mustafa-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('mustafa-day').innerText = "-Over-";
        document.getElementById('mustafa-hour').innerText = "-Over-";
        document.getElementById('mustafa-minute').innerText = "-Over-";
        document.getElementById('mustafa-second').innerText = "-Over-";
    }*/
    document.getElementById('mustafa-day').innerText = "Dont know";
        document.getElementById('mustafa-hour').innerText = "Dont know";
        document.getElementById('mustafa-minute').innerText = "Dont know";
        document.getElementById('mustafa-second').innerText = "Dont know";
    }
    function eren(){
        const objective = new Date('July 6, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('eren-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('eren-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('eren-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('eren-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('eren-day').innerText = "-Over-";
            document.getElementById('eren-hour').innerText = "-Over-";
            document.getElementById('eren-minute').innerText = "-Over-";
            document.getElementById('eren-second').innerText = "-Over-";
        }
    }
    function cemre(){
        const objective = new Date('October 20, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('cemre-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('cemre-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('cemre-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('cemre-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('cemre-day').innerText = "-Over-";
            document.getElementById('cemre-hour').innerText = "-Over-";
            document.getElementById('cemre-minute').innerText = "-Over-";
            document.getElementById('cemre-second').innerText = "-Over-";
        }
    }
    function nisanur(){
        const objective = new Date('April 27, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('nisanur-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('nisanur-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('nisanur-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('nisanur-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('nisanur-day').innerText = "-Over-";
            document.getElementById('nisanur-hour').innerText = "-Over-";
            document.getElementById('nisanur-minute').innerText = "-Over-";
            document.getElementById('nisanur-second').innerText = "-Over-";
        }
    }
    function halit(){
        const objective = new Date('August 20, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('halit-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('halit-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('halit-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('halit-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('halit-day').innerText = "-Over-";
        document.getElementById('halit-hour').innerText = "-Over-";
        document.getElementById('halit-minute').innerText = "-Over-";
        document.getElementById('halit-second').innerText = "-Over-";
    }
}
function dorukE(){
    const objective = new Date('July 8, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const left = objective - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const leftDay = Math.floor(left / day);
    const leftHour = Math.floor((left % day) / hour);
    const leftMinute = Math.floor((left % hour) / minute);
    const leftSecond = Math.floor((left % minute) / second);
    
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentSecond = new Date().getSeconds();
    
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    
    document.getElementById('doruk-e-day').innerText = "Left Day[s]:" + leftDay;
    document.getElementById('doruk-e-hour').innerText = "Left Hour[s]:" + leftHour;
    document.getElementById('doruk-e-minute').innerText = "Left Minute[s]:" + leftMinute;
    document.getElementById('doruk-e-second').innerText = "Left Second[s]:" + leftSecond;
    
    if(left < 0){
        document.getElementById('doruk-e-day').innerText = "-Over-";
        document.getElementById('doruk-e-hour').innerText = "-Over-";
        document.getElementById('doruk-e-minute').innerText = "-Over-";
        document.getElementById('doruk-e-second').innerText = "-Over-";
    }
}
    function dorukO(){
        const objective = new Date('February 26, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('doruk-o-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('doruk-o-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('doruk-o-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('doruk-o-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('doruk-o-day').innerText = "-Over-";
            document.getElementById('doruk-o-hour').innerText = "-Over-";
            document.getElementById('doruk-o-minute').innerText = "-Over-";
            document.getElementById('doruk-o-second').innerText = "-Over-";
        }
        /*document.getElementById('doruk-o-day').innerText = "Dont know";
        document.getElementById('doruk-o-hour').innerText = "Dont know";
        document.getElementById('doruk-o-minute').innerText = "Dont know";
        document.getElementById('doruk-o-second').innerText = "Dont know";*/
    }
    function ecrin(){
        const objective = new Date('September 14, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('ecrin-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('ecrin-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('ecrin-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('ecrin-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('ecrin-day').innerText = "-Over-";
            document.getElementById('ecrin-hour').innerText = "-Over-";
            document.getElementById('ecrin-minute').innerText = "-Over-";
        document.getElementById('ecrin-second').innerText = "-Over-";
        }
    }
    function asli(){
        const objective = new Date('September 4, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('asli-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('asli-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('asli-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('asli-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('asli-day').innerText = "-Over-";
            document.getElementById('asli-hour').innerText = "-Over-";
            document.getElementById('asli-minute').innerText = "-Over-";
            document.getElementById('asli-second').innerText = "-Over-";
        }
    }
    function ekremdag(){
        /*const objective = new Date('May 17, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('ekremdag-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('ekremdag-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('ekremdag-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('ekremdag-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('ekremdag-day').innerText = "-Over-";
            document.getElementById('ekremdag-hour').innerText = "-Over-";
            document.getElementById('ekremdag-minute').innerText = "-Over-";
            document.getElementById('ekremdag-second').innerText = "-Over-";
        }*/
        document.getElementById('ekremdag-day').innerText = "Dont know";
        document.getElementById('ekremdag-hour').innerText = "Dont know";
        document.getElementById('ekremdag-minute').innerText = "Dont know";
        document.getElementById('ekremdag-second').innerText = "Dont know";
    }
    function elif(){
        const objective = new Date('March 4, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('elif-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('elif-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('elif-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('elif-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('elif-day').innerText = "-Over-";
            document.getElementById('elif-hour').innerText = "-Over-";
            document.getElementById('elif-minute').innerText = "-Over-";
            document.getElementById('elif-second').innerText = "-Over-";
        }
    }
    function nisa(){
        const objective = new Date('March 30, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('nisa-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('nisa-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('nisa-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('nisa-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('nisa-day').innerText = "-Over-";
            document.getElementById('nisa-hour').innerText = "-Over-";
            document.getElementById('nisa-minute').innerText = "-Over-";
            document.getElementById('nisa-second').innerText = "-Over-";
        }
    }
    function berat(){
        const objective = new Date('September 22, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('berat-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('berat-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('berat-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('berat-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('berat-day').innerText = "-Over-";
        document.getElementById('berat-hour').innerText = "-Over-";
        document.getElementById('berat-minute').innerText = "-Over-";
        document.getElementById('berat-second').innerText = "-Over-";
    }
    /*document.getElementById('berat-day').innerText = "Dont know";
    document.getElementById('berat-hour').innerText = "Dont know";
    document.getElementById('berat-minute').innerText = "Dont know";
        document.getElementById('berat-second').innerText = "Dont know";*/
    }
    function melih(){
        const objective = new Date('December 26, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('melih-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('melih-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('melih-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('melih-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('melih-day').innerText = "-Over-";
        document.getElementById('melih-hour').innerText = "-Over-";
        document.getElementById('melih-minute').innerText = "-Over-";
        document.getElementById('melih-second').innerText = "-Over-";
    }
}
    function meliksah(){
        const objective = new Date('October 3, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
        
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        
        document.getElementById('meliksah-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('meliksah-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('meliksah-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('meliksah-second').innerText = "Left Second[s]:" + leftSecond;
        
        if(left < 0){
            document.getElementById('meliksah-day').innerText = "-Over-";
            document.getElementById('meliksah-hour').innerText = "-Over-";
            document.getElementById('meliksah-minute').innerText = "-Over-";
            document.getElementById('meliksah-second').innerText = "-Over-";
        }
    }
    function selin(){
    const objective = new Date('May 17, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('selin-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('selin-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('selin-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('selin-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('selin-day').innerText = "-Over-";
        document.getElementById('selin-hour').innerText = "-Over-";
        document.getElementById('selin-minute').innerText = "-Over-";
        document.getElementById('selin-second').innerText = "-Over-";
        }
    }
    document.addEventListener('keydown', function(event) {
        keys = keys + event.key.toLowerCase();
        if (keys === "book") {
            alert("You have found the secret code! Send a photo of this to me at: 0539 202 40 89 to get your name on the about page. :)");
            keys = "";
        }
}, true);
    function sila(){
        const objective = new Date('November 4, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('sila-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('sila-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('sila-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('sila-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('sila-day').innerText = "-Over-";
        document.getElementById('sila-hour').innerText = "-Over-";
        document.getElementById('sila-minute').innerText = "-Over-";
        document.getElementById('sila-second').innerText = "-Over-";
        }
    }
    function yagiz(){
        const objective = new Date('June 25, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('yagiz-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('yagiz-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('yagiz-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('yagiz-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('yagiz-day').innerText = "-Over-";
        document.getElementById('yagiz-hour').innerText = "-Over-";
        document.getElementById('yagiz-minute').innerText = "-Over-";
        document.getElementById('yagiz-second').innerText = "-Over-";
        }
    }
    function tunahan(){
        /*const objective = new Date('May 17, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('tunahan-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('tunahan-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('tunahan-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('tunahan-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('tunahan-day').innerText = "-Over-";
        document.getElementById('tunahan-hour').innerText = "-Over-";
        document.getElementById('tunahan-minute').innerText = "-Over-";
        document.getElementById('tunahan-second').innerText = "-Over-";
        }*/
        document.getElementById('tunahan-day').innerText = "Dont know";
        document.getElementById('tunahan-hour').innerText = "Dont know";
        document.getElementById('tunahan-minute').innerText = "Dont know";
        document.getElementById('tunahan-second').innerText = "Dont know";
    }
    function tuana(){
        const objective = new Date('June 13, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('tuana-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('tuana-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('tuana-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('tuana-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('tuana-day').innerText = "-Over-";
        document.getElementById('tuana-hour').innerText = "-Over-";
        document.getElementById('tuana-minute').innerText = "-Over-";
        document.getElementById('tuana-second').innerText = "-Over-";
        }
    }
    function yagmur(){
        const objective = new Date('December 8, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('yagmur-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('yagmur-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('yagmur-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('yagmur-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('yagmur-day').innerText = "-Over-";
        document.getElementById('yagmur-hour').innerText = "-Over-";
        document.getElementById('yagmur-minute').innerText = "-Over-";
        document.getElementById('yagmur-second').innerText = "-Over-";
        }
    }
    function arkin(){
        const objective = new Date('August 16, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('arkin-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('arkin-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('arkin-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('arkin-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('arkin-day').innerText = "-Over-";
        document.getElementById('arkin-hour').innerText = "-Over-";
        document.getElementById('arkin-minute').innerText = "-Over-";
        document.getElementById('arkin-second').innerText = "-Over-";
        }
    }
    function mehmet(){
        const objective = new Date('January 14, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('mehmet-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('mehmet-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('mehmet-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('mehmet-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('mehmet-day').innerText = "-Over-";
        document.getElementById('mehmet-hour').innerText = "-Over-";
        document.getElementById('mehmet-minute').innerText = "-Over-";
        document.getElementById('mehmet-second').innerText = "-Over-";
        }
    }
    function umay(){
        const objective = new Date('March 31, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const left = objective - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const leftDay = Math.floor(left / day);
        const leftHour = Math.floor((left % day) / hour);
        const leftMinute = Math.floor((left % hour) / minute);
        const leftSecond = Math.floor((left % minute) / second);
    
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
    
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
    
        document.getElementById('umay-day').innerText = "Left Day[s]:" + leftDay;
        document.getElementById('umay-hour').innerText = "Left Hour[s]:" + leftHour;
        document.getElementById('umay-minute').innerText = "Left Minute[s]:" + leftMinute;
        document.getElementById('umay-second').innerText = "Left Second[s]:" + leftSecond;
    
        if(left < 0){
            document.getElementById('umay-day').innerText = "-Over-";
        document.getElementById('umay-hour').innerText = "-Over-";
        document.getElementById('umay-minute').innerText = "-Over-";
        document.getElementById('umay-second').innerText = "-Over-";
        }
    }

    function all(){
        dogu();
        cagan();
        defne();
        arda();
        mustafa();
        eren();
        cemre();
        nisanur();
        halit();
        dorukE();
        dorukO();
        ecrin();
        asli();
        ekremdag();
        elif();
        nisa();
        berat();
        melih();
        meliksah();
        selin();
        sila();
        yagiz();
        tunahan();
        tuana();
        yagmur();
        arkin();
        mehmet();
        umay();
    }
    
    setInterval(all, 500);
}

