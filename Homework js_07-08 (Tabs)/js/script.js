$(document).ready(function() {
$('#div1').addClass('displayed');
var currentTab = 1;

$('a').on('click', function(e){
	newTab = e.target.id.slice(-1);
	console.log(newTab);
	$('#div' + currentTab).slideToggle();
	$( '#div' + currentTab ).removeClass( 'displayed' );
	$(' #div' + newTab ).slideToggle();
	$(' #div' + newTab ).addClass( 'displayed' );
	currentTab = newTab;
})

$('li').each(function() {
	var input = $(this).children('input');
	var div = $(this).children('div');
	input.hover( 
		function() {
		div.addClass('viz').fadeIn( 500 );
	},
		function() {
		div.removeClass('viz').fadeOut( 500 );
		}
	);
	input.focusin( function() {
		div.addClass('viz').fadeIn( 500 );
	});
	input.focusout( function() {
		div.fadeOut( 500 ).removeClass('viz');
	});
	console.log(div);
})
});

//function openCity(evt, cityName) {
//    // Declare all variables
//    var i, tabcontent, tablinks;
//
//    // Get all elements with class="tabcontent" and hide them
//    tabcontent = document.getElementsByClassName("tabcontent");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//
//    // Get all elements with class="tablinks" and remove the class "active"
//    tablinks = document.getElementsByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//
//    // Show the current tab, and add an "active" class to the link that opened the tab
//    document.getElementById(cityName).style.display = "block";
//    evt.currentTarget.className += " active";
//}


//$('li:lt(3)').hide().fadeIn(1500);
//$('li').on('click', function() {
//	$(this).remove();
//})
//
//function getTarget (e) {
//	return e.target;
//};
//
//function myFunc (e) {
//	var kid, parent, grandparent;
//	kid = getTarget(e);
//	parent = kid.parentNode;
//	grandparent = parent.parentNode;
//	grandparent.removeChild(parent);
//	if (e.preventDefault) {
//		e.preventDefault();
//	}
//};
//
//var grandparent = document.getElementsByClassName('julia')[0];
//if (grandparent.addEventListener) {
//	console.log('im here');
//	grandparent.addEventListener('click', function (e) {
//		myFunc(e);
//	}, false);
//}