$(function() {
	$("body").scrollspy();

	$(".faq-answer").collapse({toggle:true, parent: "#faq-acc"});
	$(".faq-header").click(function() {
		$(this).parents(".accordion-group").find(".faq-answer").collapse('toggle');
	});
});