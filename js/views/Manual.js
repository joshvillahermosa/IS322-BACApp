var Manual =  BAC.extend({
    el: '#load',

    events:{
        'click #manualBac': 'addBACLevel'
    },

    initialize: function(){
        this.user = new You();
        this.you = this.user.retrieveProfile();
        this.form = '<div class="form-group"><label for="acv">Total Alcohol Content Volume in Percent(%)</label><input type="number" step="any" id="acv" name="acv" class="form-control" placeholder="0" required></div><div class="form-group"><label for="oz">Total Ounzes</label><input type="number" step="any" id="oz" name="oz" class="form-control" placeholder="0" required></div><div class="from-group"><label for="time" type="number" step="any">Total Time from Initial Drink</label><br>Hour: <input type="number" step="any" id="hour" min="0" max="24" class="" required> Minute: <input type="number" step="any" id="min" min="0" max="60" class="" required></div><br><button id="manualBac" class="btn btn-success">Calculate</button><div class="well" id="BAC"><span> Your BAC Level is: </span><span id="BACLevel"></span></div>';

        //this.manualBac = new BAC();
        //this.render();
    },

    render: function(){
        $('#notification').empty();
        this.$el.html(this.form);
        $('#notification').append('<span class="text-warning">This section still has bugs</span>');
    },

    /*calcBac: function(){
        var acv = $('#acv').val();
        var oz = $('#oz').val();
        var time = $('#time').val();
        var bac = this.calcBac(acv, oz, this.you.weight, this.you.genderBac, time);
        $('#BACLevel').empty();
        $('#BACLevel').append('<p>'+bac+'</p>');
        return bac;
    },*/

    getTime: function(){
        var date = new Date();
        var time = {
            hour: 0,
            min: 0
        };
        time.hour = date.getHours();
        time.min = date.getMinutes();

        var curTime = time.hour+':'+time.min;
        return curTime;
    },

    getDate: function(){
        var date2 = new Date();
        var date = {
            year: 0,
            month: 0,
            day:0
        };

        date.year = date2.getFullYear();
        date.month = date2.getMonth()+1;
        date.day = date2.getDate();

        var today = date.year+'-'+date.month+'-'+date.day;

        return today;
    },

    addBACLevel: function(){
        $('#notification').append('<span class="text-success"><i><b>Added to your stats</b></i></span>');
        setTimeout(function(){
            $('#notification').empty();
        },3000);
        console.log(this.you);
        //var bac = this.calcBac();
        var acv = $('#acv').val();
        acv = this.percentToDecimal(acv);
        var oz = $('#oz').val();
        var hour = $('#hour').val();
        var min = $('#min').val();
        min = this.decimalMin(min);
        var time = hour + min;
        var bac = this.calcBac(acv, oz, this.you.weight, this.you.genderBac, time);
        var time = this.getTime();
        var date = this.getDate();
        area.getCurrentLocation();

        var newBac = new PersonBAC({
            "date": date,
            "bacLevelHigh": bac,
            "bacLevelCur": 0,
            "lat": window.lat,
            "lng": window.lng,
            "timeStart": time,
            "timeFinish": time,
            "manualEnter": true
        });

        this.you.BACLevels.push(newBac);
        people.localStorage.update(this.you);

        console.log(newBac);
    },

    percentToDecimal: function(num){
        num = num/100;
        return num;
    },

    decimalMin: function(min){
        min = min/60;
        return min;
    } 
})