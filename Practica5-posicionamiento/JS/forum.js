        function DameLaFechaHora() {
        var cadena  = "test";
        var hora = new Date()
        var hrs = hora.getHours();
        var min = hora.getMinutes();
        var sec = hora.getSeconds();
        var ampm;
        var hoy = new Date();
        var m = new Array();
        var day = new Array()
        var an= hoy.getYear();
        m[0]="Enero";  m[1]="Febrero";  m[2]="Marzo";
        m[3]="Abril";   m[4]="Mayo";  m[5]="Junio";
        m[6]="Julio";    m[7]="Agosto";   m[8]="Septiembre";
        m[9]="Octubre";   m[10]="Noviembre"; m[11]="Diciembre";

        day[0]="Domingo";   day[1]="Lunes";  day[2]="Martes"; day[3]="Miércoles";   day[4]="Jueves";  day[5]="Viernes"; day[6]="Sábado";
        
        if(hrs > 12)
        {
            hrs = hrs - 12;
            ampm = "pm"
        }
        else 
        {
            ampm = "am"
        }
        if(min < 10)
        {
            min = "0" + min;
        }
        else{

        }
        if(sec < 10)
        {
            sec = "0" + sec;
        } 
        cadena  = (day[hoy.getDay()]+", "+ hoy.getDate() + " de " +m[hoy.getMonth()] + " "+hrs+":"+ min + ":" + sec + " " + ampm);
        
        console.log(cadena);
        console.log(cadena);
        console.log(cadena);
        console.log(cadena);

        document.getElementById('fecha').textContent = cadena;
      }

    //   DameLaFechaHora();

// setInterval(DameLaFechaHora, 1000);