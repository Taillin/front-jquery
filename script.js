$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#main-heading").text("Ilya Ermakov");
    $(".headline").html("<strong>Computer Science Student & Developer</strong>");
    $("#main-heading").css("font-size", "2.5em");

    $("#light-theme").click(function() {
        $("body").removeClass("dark-theme");
    });

    $("#dark-theme").click(function() {
        $("body").addClass("dark-theme");
    });

    $("#hide-btn").click(function() {
        $(".status, .fun-facts").hide();
    });

    $("#show-btn").click(function() {
        $(".status, .fun-facts").show();
    });

    $("#toggle-btn").click(function() {
        $(".status, .fun-facts").toggle();
    });

    $("#fade-in").click(function() {
        $(".gallery-img").fadeIn();
    });

    $("#fade-out").click(function() {
        $(".gallery-img").fadeOut();
    });

    $("#fade-toggle").click(function() {
        $(".gallery-img").fadeToggle();
    });

    $(".accordion-heading").click(function() {
        $(this).next(".accordion-panel").slideToggle();
    });

    $("#add-skill").click(function() {
        var skillValue = $("#skill-input").val().trim();
        if (skillValue !== "") {
            $("#skills-list").append("<li>" + skillValue + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#prepend-skill").click(function() {
        var skillValue = $("#skill-input").val().trim();
        if (skillValue !== "") {
            $("#skills-list").prepend("<li>" + skillValue + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#remove-skill").click(function() {
        $("#skills-list li:last").remove();
    });

    var linkToggle = false;
    $("#change-link").click(function() {
        if (!linkToggle) {
            $("#social-link").attr("href", "https://linkedin.cohttps://www.linkedin.com/in/ilya-yermakov-aa00573b0/m");
            $("#social-link").text("LinkedIn");
            $(this).text("Switch to GitHub");
            linkToggle = true;
        } else {
            $("#social-link").attr("href", "https://github.com/Taillin");
            $("#social-link").text("GitHub");
            $(this).text("Switch to LinkedIn");
            linkToggle = false;
        }
    });

    $("#name-input").on("input", function() {
        var nameValue = $(this).val();
        $("#name-output").text(nameValue);
    });

    $("#email-input").on("input", function() {
        var emailValue = $(this).val();
        $("#email-output").text(emailValue);
    });

    var skillsAnimated = false;
    $("#animate-skills").click(function() {
        if (!skillsAnimated) {
            $(".skill-bar").each(function() {
                var targetWidth = $(this).data("width");
                $(this).animate({
                    width: targetWidth + "%"
                }, 1000);
            });
            skillsAnimated = true;
        } else {
            $(".skill-bar").animate({
                width: "0%"
            }, 1000);
            skillsAnimated = false;
        }
    });
});
