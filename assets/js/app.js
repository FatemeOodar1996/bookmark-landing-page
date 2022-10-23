const validateEmail = (email) => {
    return email.match(
        // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

$("#submitEmail").click(function () {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
    $result.css("style", "inline");
    if (validateEmail(email)) {
        $result.text(email + " is valid :)");
    } else {
        $result.text("Please chek your email");
        $result.css("color", "red");
        $result.css("display", "unset");
    }
    return false;
});
