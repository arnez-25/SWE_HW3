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

    });

    $("#feb").click(function(){
        $("#hoverbtn").text('Feburary');

    });
    
    $("#mar").click(function(){
        $("#hoverbtn").text('March');

    });
    
    $("#apr").click(function(){
        $("#hoverbtn").text('April');

    });

    $("#may").click(function(){
        $("#hoverbtn").text('May');

    });

    $("#jun").click(function(){
        $("#hoverbtn").text('June');

    });

    $("#jul").click(function(){
        $("#hoverbtn").text('July');

    });

    $("#aug").click(function(){
        $("#hoverbtn").text('August');

    });

    $("#sep").click(function(){
        $("#hoverbtn").text('September');

    });

    $("#oct").click(function(){
        $("#hoverbtn").text('October');

    });

    $("#nov").click(function(){
        $("#hoverbtn").text('November');

    });

    $("#dec").click(function(){
        $("#hoverbtn").text('December');

    });









    

});