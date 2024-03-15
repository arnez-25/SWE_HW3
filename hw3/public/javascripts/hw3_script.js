// Jacob Arnez

$(document).ready(function() {

    
            
    $("#order").click(function(){
        //Get the variables
        var txt = $("textarea").val();
        var quantity = $("select").val();
        var topping = $("input[type='radio'][name='topping']:checked").val();

        if (txt == "vegan" ) {
            
            alert("Stupid cheesecake has dairy");
        }else {
            $("form").hide();

            alert("Thank you, your order has been placed \n"
             + "Quantity: " +quantity + "\n"
              + "Topping: " + topping + "\n"
              + "Note: " + txt);
            $("#thankyouText").text("Thank you!");
        }
    });

        
    

    $("#jan").click(function(){
        $("#hoverbtn").text('January');
        // We have a post in orders that sends the json so when we call post here we can finally obtain it
        $.post('/orders', "JAN",function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            alert(data);

        });

    });

    $("#feb").click(function(){
        $("#hoverbtn").text('Feburary');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });
    
    $("#mar").click(function(){
        $("#hoverbtn").text('March');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });
    
    $("#apr").click(function(){
        $("#hoverbtn").text('April');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#may").click(function(){
        $("#hoverbtn").text('May');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#jun").click(function(){
        $("#hoverbtn").text('June');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#jul").click(function(){
        $("#hoverbtn").text('July');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#aug").click(function(){
        $("#hoverbtn").text('August');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#sep").click(function(){
        $("#hoverbtn").text('September');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#oct").click(function(){
        $("#hoverbtn").text('October');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#nov").click(function(){
        $("#hoverbtn").text('November');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });

    $("#dec").click(function(){
        $("#hoverbtn").text('December');
        $.post('/orders', function(data){
            //alert(data[0].topping + ", " + data[0].quantity )
            $("#order1").text(data[0].quantity + " " + data[0].topping);
            $("#order2").text(data[1].quantity + " " + data[1].topping);
            $("#order3").text(data[2].quantity + " " + data[2].topping);
        });

    });









    

});