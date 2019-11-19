$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var customernameI = $("input#customername").val();
    var customernamelastI = $("input#customernamelast").val();
    var customeraddressI = $("input#customeraddress").val();
    var customerstateI = $("input#customerstate").val();
    var customerzipI = $("input#customerzip").val();
    var creditcardI = $("input#creditcard").val();


    $(".customername").text(customernameI);
    $(".customernamelast").text(customernamelastI);
    $(".customeraddress").text(customeraddressI);
    $(".customerstate").text(customerstateI);
    $(".customerzip").text(customerzipI);
    $(".creditcard").text(creditcardI);


    $("#recipt").show();
    $("#blanks").hide();
    $("#pagetitle").hide();
    event.preventDefault();

  });
});
