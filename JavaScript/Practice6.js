function fillup()
{
        bs = eval(document.getElementById("display").value);

        hra = (bs*30)/100;
        document.getElementById("h").innerText = document.getElementById("h").innerText+ hra;

        da = (bs*90)/100;
        document.getElementById("d").innerText = document.getElementById("d").innerText+ da;

        ta = (bs*20)/100;
        document.getElementById("t").innerText = document.getElementById("t").innerText+ ta;

        // pf = 1900 fixed
        pf = 1900;
        document.getElementById("p").innerText = document.getElementById("p").innerText+ pf;

        //gs = bs + hra + ta - pf
        gs = (bs+hra+ta)-pf;
        document.getElementById("g").innerText = document.getElementById("g").innerText+ gs;

        //tds = 10 % of gross salary
        tds = (gs*10)/100;
        document.getElementById("ds").innerText = document.getElementById("ds").innerText+ tds;

        //ns = gs - tax
        ns = gs-1000;
        document.getElementById("n").innerText = document.getElementById("n").innerText+ ns +" (tax = 1000)";
}