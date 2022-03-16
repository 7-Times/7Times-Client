//alert("This is proably one of most stupidest projects I have ever made. ;)");

window.onload = () => { 
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
    
        document.getElementById('selin-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('selin-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('selin-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('selin-second').innerText = "Kalan saniye:" + leftSecond;
    
        if(left < 0){
            document.getElementById('selin-day').innerText = "-Over-";
        document.getElementById('selin-hour').innerText = "-Over-";
        document.getElementById('selin-minute').innerText = "-Over-";
        document.getElementById('selin-second').innerText = "-Over-";
        }
    }
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
    
        document.getElementById('dogu-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('dogu-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('dogu-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('dogu-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('cagan-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('cagan-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('cagan-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('cagan-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('defne-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('defne-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('defne-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('defne-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('arda-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('arda-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('arda-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('arda-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('mustafa-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('mustafa-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('mustafa-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('mustafa-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('eren-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('eren-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('eren-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('eren-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('cemre-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('cemre-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('cemre-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('cemre-second').innerText = "Kalan saniye:" + leftSecond;
    
        if(left < 0){
            document.getElementById('cemre-day').innerText = "-Over-";
        document.getElementById('cemre-hour').innerText = "-Over-";
        document.getElementById('cemre-minute').innerText = "-Over-";
        document.getElementById('cemre-second').innerText = "-Over-";
        }
    }
    function nisanur(){
        const objective = new Date('April 27, 2022 00:00:00').getTime();
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
    
        document.getElementById('nisanur-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('nisanur-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('nisanur-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('nisanur-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('halit-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('halit-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('halit-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('halit-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('doruk-e-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('doruk-e-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('doruk-e-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('doruk-e-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('doruk-o-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('doruk-o-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('doruk-o-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('doruk-o-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('ecrin-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('ecrin-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('ecrin-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('ecrin-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('asli-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('asli-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('asli-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('asli-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('ekremdag-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('ekremdag-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('ekremdag-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('ekremdag-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('elif-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('elif-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('elif-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('elif-second').innerText = "Kalan saniye:" + leftSecond;
    
        if(left < 0){
            document.getElementById('elif-day').innerText = "-Over-";
        document.getElementById('elif-hour').innerText = "-Over-";
        document.getElementById('elif-minute').innerText = "-Over-";
        document.getElementById('elif-second').innerText = "-Over-";
        }
    }
    function nisa(){
        const objective = new Date('March 30, 2022 00:00:00').getTime();
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
    
        document.getElementById('nisa-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('nisa-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('nisa-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('nisa-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('berat-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('berat-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('berat-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('berat-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('melih-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('melih-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('melih-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('melih-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('meliksah-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('meliksah-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('meliksah-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('meliksah-second').innerText = "Kalan saniye:" + leftSecond;
    
        if(left < 0){
            document.getElementById('meliksah-day').innerText = "-Over-";
        document.getElementById('meliksah-hour').innerText = "-Over-";
        document.getElementById('meliksah-minute').innerText = "-Over-";
        document.getElementById('meliksah-second').innerText = "-Over-";
        }
    }
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
    
        document.getElementById('sila-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('sila-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('sila-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('sila-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('yagiz-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('yagiz-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('yagiz-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('yagiz-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('tunahan-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('tunahan-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('tunahan-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('tunahan-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('tuana-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('tuana-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('tuana-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('tuana-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('yagmur-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('yagmur-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('yagmur-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('yagmur-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('arkin-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('arkin-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('arkin-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('arkin-second').innerText = "Kalan saniye:" + leftSecond;
    
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
    
        document.getElementById('mehmet-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('mehmet-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('mehmet-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('mehmet-second').innerText = "Kalan saniye:" + leftSecond;
    
        if(left < 0){
            document.getElementById('mehmet-day').innerText = "-Over-";
        document.getElementById('mehmet-hour').innerText = "-Over-";
        document.getElementById('mehmet-minute').innerText = "-Over-";
        document.getElementById('mehmet-second').innerText = "-Over-";
        }
    }
    function umay(){
        const objective = new Date('March 31, 2022 00:00:00').getTime();
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
    
        document.getElementById('umay-day').innerText = "Kalan gun:" + leftDay;
        document.getElementById('umay-hour').innerText = "Kalan saat:" + leftHour;
        document.getElementById('umay-minute').innerText = "Kalan dakika:" + leftMinute;
        document.getElementById('umay-second').innerText = "Kalan saniye:" + leftSecond;
    
        if(left < 0){
            document.getElementById('umay-day').innerText = "-Over-";
        document.getElementById('umay-hour').innerText = "-Over-";
        document.getElementById('umay-minute').innerText = "-Over-";
        document.getElementById('umay-second').innerText = "-Over-";
        }
    }

    function all(){
        selin();
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

