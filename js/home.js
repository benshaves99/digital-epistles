/* mobile dropdown menu */
$('#hamburger-menu').on('click', () => {
	$('#nav-dropdown-menu').show(200);
});

$('#big-x').on('click', () => {
	$('#nav-dropdown-menu').hide(200);
});

/* home page interaction */
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 0) {
		$('#mobile-romans-click').fadeIn();
	} else {
		$('#mobile-romans-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 100) {
		$('#mobile-1-corinth-click').fadeIn();
	} else {
		$('#mobile-1-corinth-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 200) {
		$('#mobile-2-corinth-click').fadeIn();
	} else {
		$('#mobile-2-corinth-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 300) {
		$('#mobile-galatians-click').fadeIn();
	} else {
		$('#mobile-galatians-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 400) {
		$('#mobile-ephesis-click').fadeIn();
	} else {
		$('#mobile-ephesis-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 500) {
		$('#mobile-philippi-click').fadeIn();
	} else {
		$('#mobile-philippi-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 600) {
		$('#mobile-colossians-click').fadeIn();
	} else {
		$('#mobile-colossians-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 700) {
		$('#mobile-1-thess-click').fadeIn();
	} else {
		$('#mobile-1-thess-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 800) {
		$('#mobile-2-thess-click').fadeIn();
	} else {
		$('#mobile-2-thess-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 900) {
		$('#mobile-1-timothy-click').fadeIn();
	} else {
		$('#mobile-1-timothy-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 1000) {
		$('#mobile-2-timothy-click').fadeIn();
	} else {
		$('#mobile-2-timothy-click').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 1050) {
		$('#mobile-titus-click').fadeIn();
	} else {
		$('#mobile-titus-click').fadeOut();
	}
});

$('#desktop-romans-click').hover(function () {
    $('#mobile-romans').show(200).fadeIn(200);
}, function () {
    $('#mobile-romans').fadeOut(200);
});

$('#desktop-1-corinth-click').hover(function () {
    $('#mobile-1-corinth').show(200).fadeIn(200);
}, function () {
    $('#mobile-1-corinth').fadeOut(200);
});

$('#desktop-2-corinth-click').hover(function () {
    $('#mobile-2-corinth').show(200).fadeIn(200);
}, function () {
    $('#mobile-2-corinth').fadeOut(200);
});

$('#desktop-galatians-click').hover(function () {
    $('#mobile-galatians').show(200).fadeIn(200);
}, function () {
    $('#mobile-galatians').fadeOut(200);
});

$('#desktop-ephesis-click').hover(function () {
    $('#mobile-ephesis').show(200).fadeIn(200);
}, function () {
    $('#mobile-ephesis').fadeOut(200);
});

$('#desktop-philippi-click').hover(function () {
    $('#mobile-philippi').show(200).fadeIn(200);
}, function () {
    $('#mobile-philippi').fadeOut(200);
});

$('#desktop-colossians-click').hover(function () {
    $('#mobile-colossians').show(200).fadeIn(200);
}, function () {
    $('#mobile-colossians').fadeOut(200);
});

$('#desktop-1-thess-click').hover(function () {
    $('#mobile-1-thess').show(200).fadeIn(200);
}, function () {
    $('#mobile-1-thess').fadeOut(200);
});

$('#desktop-2-thess-click').hover(function () {
    $('#mobile-2-thess').show(200).fadeIn(200);
}, function () {
    $('#mobile-2-thess').fadeOut(200);
});

$('#desktop-1-timothy-click').hover(function () {
    $('#mobile-1-timothy').show(200).fadeIn(200);
}, function () {
    $('#mobile-1-timothy').fadeOut(200);
});

$('#desktop-2-timothy-click').hover(function () {
    $('#mobile-2-timothy').show(200).fadeIn(200);
}, function () {
    $('#mobile-2-timothy').fadeOut(200);
});

$('#desktop-titus-click').hover(function () {
    $('#mobile-titus').show(200).fadeIn(200);
}, function () {
    $('#mobile-titus').fadeOut(200);
});

$('#desktop-romans-click').hover(function () {
    $('#main-answer-1').show(200).fadeIn(200);
});

$('#desktop-2-corinth-click').hover(function () {
    $('#main-answer-2').show(200).fadeIn(200);
});

$('#desktop-philippi-click').hover(function () {
    $('#main-answer-3').show(200).fadeIn(200);
});

$('#desktop-titus-click').hover(function () {
    $('#main-answer-4').show(200).fadeIn(200);
	$('#main-apply-button').show(0);
});

$("#main-apply-button").click(function(){
	$('#main-images-opinion').show(200);
});

$("#main-images-close").click(function(){
	$('#main-images-opinion').hide(200);
});




/* romans interaction */
$('#roman-map').on('click', () => {
	$('#roman-text-1').toggle(200);
});

$('#roman-castle').on('click', () => {
	$('#roman-text-2').toggle(200);
});

$('#roman-blindfolded-man').on('click', () => {
	$('#roman-text-3').toggle(200);
});

$('#roman-abraham').on('click', () => {
	$('#roman-text-4').toggle(200);
});

$('#roman-adam-eve').on('click', () => {
	$('#roman-text-5').toggle(200);
});

$('#roman-deadly-sins').on('click', () => {
	$('#roman-text-6').toggle(200);
});

$('#roman-law').on('click', () => {
	$('#roman-text-7').toggle(200);
});

$('#roman-holy-spirit').on('click', () => {
	$('#roman-text-8').toggle(200);
});

$('#roman-israel').on('click', () => {
	$('#roman-text-9').toggle(200);
});

$('#roman-disciple').on('click', () => {
	$('#roman-text-10').toggle(200);
});

$('#roman-walls').on('click', () => {
	$('#roman-text-11').toggle(200);
});

$('#roman-sacrifice').on('click', () => {
	$('#roman-text-12').toggle(200);
});

$('#roman-government-building').on('click', () => {
	$('#roman-text-13').toggle(200);
});

$('#roman-stumble').on('click', () => {
	$('#roman-text-14').toggle(200);
});

$('#roman-pride').on('click', () => {
	$('#roman-text-15').toggle(200);
});

$('#roman-blessing').on('click', () => {
	$('#roman-text-16').toggle(200);
});

$('#text-simple-gospel').on('click', () => {
	$('#image-simple-gospel').show(200);
	$('#roman-answer-1').show(0);
});

$('#text-discipleship').on('click', () => {
	$('#image-discipleship').show(200);
	$('#roman-answer-5').show(0);
});

$('#text-kanye-gospel').on('click', () => {
	$('#image-kanye-gospel').show(200);
	$('#mute-romans').show(200);
	$('#roman-answer-4').show(0);
});

$('#text-kanye-gospel').click(function() {
	var audio =
	document.getElementById('song-kanye-gospel');
	audio.play();
});

$('#mute-romans').click(function() {
	var audio =
	document.getElementById('song-kanye-gospel');
	audio.pause();
});

$('#mute-romans').on('click', () => {
	$('#mute-romans').hide(200);
});

$('#text-cru-sharing').on('click', () => {
	$('#site-cru-sharing').show(200);
	$('#roman-answer-2').show(0);
});

$('#text-graham-sharing').on('click', () => {
	$('#site-graham-sharing').show(200);
	$('#roman-answer-3').show(0);
});

$('#text-steps-gospel').on('click', () => {
	$('#inter-steps-gospel').show(200);
	$('#roman-answer-6').show(0);
	$('#roman-apply-button').show(0);
});

$("#inter-steps-button-1").click(function(){
	$('#inter-steps-2').show(200);
	$('#inter-steps-button-1').hide(0);
	$('#inter-steps-button-2').show(0);
});

$("#inter-steps-button-2").click(function(){
	$('#inter-steps-3').show(200);
	$('#inter-steps-button-2').hide(0);
	$('#inter-steps-button-3').show(0);
});

$("#inter-steps-button-3").click(function(){
	$('#inter-steps-4').show(200);
});

$("#roman-apply-button").click(function(){
	$('#roman-images-opinion').show(200);
});

$("#roman-images-close").click(function(){
	$('#roman-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#inter-steps-gospel').hide(200);
	$('#site-graham-sharing').hide(200);
	$('#site-cru-sharing').hide(200);
	$('#image-kanye-gospel').hide(200);
	$('#image-discipleship').hide(200);
	$('#image-simple-gospel').hide(200);
});

$("#roman-chapters").click(function(){
	$('#roman-dropdown-menu').toggle(200);
});

$("#roman-chapters-mobile").click(function(){
	$('#roman-dropdown-menu').toggle(200);
});

$('#roman-chapters-mobile').on('click', () => {
	$('#roman-text-1').toggle(200);
	$('#roman-text-2').toggle(200);
	$('#roman-text-3').toggle(200);
	$('#roman-text-4').toggle(200);
	$('#roman-text-5').toggle(200);
	$('#roman-text-6').toggle(200);
	$('#roman-text-7').toggle(200);
	$('#roman-text-8').toggle(200);
	$('#roman-text-9').toggle(200);
	$('#roman-text-10').toggle(200);
	$('#roman-text-11').toggle(200);
	$('#roman-text-12').toggle(200);
	$('#roman-text-13').toggle(200);
	$('#roman-text-14').toggle(200);
	$('#roman-text-15').toggle(200);
	$('#roman-text-16').toggle(200);
});




/* 1 corinthian interaction */
$('#one-corinth-map').on('click', () => {
	$('#one-corinth-text-1').toggle(200);
});

$('#one-corinth-christ-crucified').on('click', () => {
	$('#one-corinth-text-2').toggle(200);
});

$('#one-corinth-baby').on('click', () => {
	$('#one-corinth-text-3').toggle(200);
});

$('#one-corinth-early-church').on('click', () => {
	$('#one-corinth-text-4').toggle(200);
});

$('#one-corinth-bad-bread').on('click', () => {
	$('#one-corinth-text-5').toggle(200);
});

$('#one-corinth-lawsuit').on('click', () => {
	$('#one-corinth-text-6').toggle(200);
});

$('#one-corinth-marriage').on('click', () => {
	$('#one-corinth-text-7').toggle(200);
});

$('#one-corinth-altar').on('click', () => {
	$('#one-corinth-text-8').toggle(200);
});

$('#one-corinth-freedom').on('click', () => {
	$('#one-corinth-text-9').toggle(200);
});

$('#one-corinth-solid-rock').on('click', () => {
	$('#one-corinth-text-10').toggle(200);
});

$('#one-corinth-mercy').on('click', () => {
	$('#one-corinth-text-11').toggle(200);
});

$('#one-corinth-sacred-text').on('click', () => {
	$('#one-corinth-text-12').toggle(200);
});

$('#one-corinth-misuse').on('click', () => {
	$('#one-corinth-text-13').toggle(200);
});

$('#one-corinth-good-worship').on('click', () => {
	$('#one-corinth-text-14').toggle(200);
});

$('#one-corinth-last-supper').on('click', () => {
	$('#one-corinth-text-15').toggle(200);
});

$('#one-corinth-blessing').on('click', () => {
	$('#one-corinth-text-16').toggle(200);
});

$('#text-corinth-justice').on('click', () => {
	$('#image-corinth-justice').show(200);
	$('#one-corinth-answer-2').show(200);
});

$('#text-corinth-quiet-time').on('click', () => {
	$('#image-corinth-quiet-time').show(200);
	$('#one-corinth-answer-4').show(200);
});

$('#text-corinth-loyal').on('click', () => {
	$('#image-corinth-loyal').show(200);
	$('#one-corinth-answer-1').show(200);
});

$('#text-corinth-swear-bible').on('click', () => {
	$('#image-corinth-swear-bible').show(200);
	$('#one-corinth-answer-3').show(200);
});

$('#text-corinth-gods-word').on('click', () => {
	$('#inter-corinth-gods-word').show(200);
	$('#one-corinth-answer-5').show(200);
});

$('#text-corinth-important').on('click', () => {
	$('#inter-corinth-important').show(200);
	$('#one-corinth-answer-7').show(200);
	$('#one-corinth-apply-button').show(200);
});

$('#text-corinth-follow-laws').on('click', () => {
	$('#inter-corinth-follow-laws').show(200);
	$('#one-corinth-answer-6').show(200);
});

$("#one-corinth-apply-button").click(function(){
	$('#one-corinth-images-opinion').show(200);
});

$("#one-corinth-images-close").click(function(){
	$('#one-corinth-images-opinion').hide(200);
});

$('#inter-corinth-gods-day').click(function(){
	$('#inter-corinth-gods-day').addClass('inter-corinth-gods-word-select');
	$('#inter-corinth-gods-week').removeClass('inter-corinth-gods-word-select');
	$('#inter-corinth-gods-month').removeClass('inter-corinth-gods-word-select');
});

$('#inter-corinth-gods-month').click(function(){
	$('#inter-corinth-gods-month').addClass('inter-corinth-gods-word-select');
	$('#inter-corinth-gods-day').removeClass('inter-corinth-gods-word-select');
	$('#inter-corinth-gods-week').removeClass('inter-corinth-gods-word-select');
});

$('#inter-corinth-gods-week').click(function(){
	$('#inter-corinth-gods-week').addClass('inter-corinth-gods-word-select');
	$('#inter-corinth-gods-day').removeClass('inter-corinth-gods-word-select');
	$('#inter-corinth-gods-month').removeClass('inter-corinth-gods-word-select');
});

$(document).scroll(function() {
	$('#image-corinth-justice').hide(200);
	$('#image-corinth-quiet-time').hide(200);
	$('#image-corinth-loyal').hide(200);
	$('#image-corinth-swear-bible').hide(200);
	$('#inter-corinth-gods-word').hide(200);
	$('#inter-corinth-important').hide(200);
	$('#inter-corinth-follow-laws').hide(200);
});

$("#one-corinth-chapters").click(function(){
	$('#one-corinth-dropdown-menu').toggle(200);
});

$("#one-corinth-chapters-mobile").click(function(){
	$('#one-corinth-dropdown-menu').toggle(200);
});

$('#one-corinth-chapters-mobile').on('click', () => {
	$('#one-corinth-text-1').toggle(200);
	$('#one-corinth-text-2').toggle(200);
	$('#one-corinth-text-3').toggle(200);
	$('#one-corinth-text-4').toggle(200);
	$('#one-corinth-text-5').toggle(200);
	$('#one-corinth-text-6').toggle(200);
	$('#one-corinth-text-7').toggle(200);
	$('#one-corinth-text-8').toggle(200);
	$('#one-corinth-text-9').toggle(200);
	$('#one-corinth-text-10').toggle(200);
	$('#one-corinth-text-11').toggle(200);
	$('#one-corinth-text-12').toggle(200);
	$('#one-corinth-text-13').toggle(200);
	$('#one-corinth-text-14').toggle(200);
	$('#one-corinth-text-15').toggle(200);
	$('#one-corinth-text-16').toggle(200);
});




/* 2 corinthian interaction */
$('#two-corinth-map').on('click', () => {
	$('#two-corinth-text-1').toggle(200);
});

$('#two-corinth-healthy-grief').on('click', () => {
	$('#two-corinth-text-2').toggle(200);
});

$('#two-corinth-new-covenant').on('click', () => {
	$('#two-corinth-text-3').toggle(200);
});

$('#two-corinth-already').on('click', () => {
	$('#two-corinth-text-4').toggle(200);
});

$('#two-corinth-new-body').on('click', () => {
	$('#two-corinth-text-5').toggle(200);
});

$('#two-corinth-idolatry').on('click', () => {
	$('#two-corinth-text-6').toggle(200);
});

$('#two-corinth-letter').on('click', () => {
	$('#two-corinth-text-7').toggle(200);
});

$('#two-corinth-lords-people').on('click', () => {
	$('#two-corinth-text-8').toggle(200);
});

$('#two-corinth-serve-mural').on('click', () => {
	$('#two-corinth-text-9').toggle(200);
});

$('#two-corinth-paul-ministry').on('click', () => {
	$('#two-corinth-text-10').toggle(200);
});

$('#two-corinth-false-teachings').on('click', () => {
	$('#two-corinth-text-11').toggle(200);
});

$('#two-corinth-understanding').on('click', () => {
	$('#two-corinth-text-12').toggle(200);
});

$('#two-corinth-blessing').on('click', () => {
	$('#two-corinth-text-13').toggle(200);
});

$('#text-corinth-it-is-well').click(function() {
	var audio =
	document.getElementById('song-it-is-well');
	audio.play();
});

$('#mute-corinth').click(function() {
	var audio =
	document.getElementById('song-it-is-well');
	audio.pause();
});

$('#text-corinth-it-is-well').on('click', () => {
	$('#mute-corinth').show(200);
	$('#image-corinth-it-is-well').show(200);
	$('#two-corinth-answer-5').show(200);
});

$('#mute-corinth').on('click', () => {
	$('#mute-corinth').hide(200);
});

$('#text-corinth-shameful').on('click', () => {
	$('#image-corinth-shameful').show(200);
	$('#two-corinth-answer-2').show(200);
});

$('#text-corinth-searching').on('click', () => {
	$('#image-corinth-searching').show(200);
	$('#two-corinth-answer-1').show(200);
});

$('#text-corinth-struggles').on('click', () => {
	$('#inter-corinth-struggles').show(200);
	$('#two-corinth-answer-4').show(200);
});

$('#text-corinth-vision').on('click', () => {
	$('#image-corinth-vision').show(200);
	$('#two-corinth-answer-6').show(200);
	$('#two-corinth-apply-button').show(200);
});

$('#text-corinth-barren').on('click', () => {
	$('#image-corinth-barren').show(200);
	$('#two-corinth-answer-3').show(200);
});

$(document).scroll(function() {
	$('#image-corinth-it-is-well').hide(200);
	$('#image-corinth-shameful').hide(200);
	$('#image-corinth-searching').hide(200);
	$('#inter-corinth-struggles').hide(200);
	$('#image-corinth-vision').hide(200);
	$('#image-corinth-barren').hide(200);
});

$('#two-corinth-apply-button').on('click', () => {
	$('#two-corinth-images-opinion').show(200);
});

$('#two-corinth-images-close').on('click', () => {
	$('#two-corinth-images-opinion').hide(200);
});

$("#two-corinth-chapters").click(function(){
	$('#two-corinth-dropdown-menu').toggle(200);
});

$("#two-corinth-chapters-mobile").click(function(){
	$('#two-corinth-dropdown-menu').toggle(200);
});

$('#two-corinth-chapters-mobile').on('click', () => {
	$('#two-corinth-text-1').toggle(200);
	$('#two-corinth-text-2').toggle(200);
	$('#two-corinth-text-3').toggle(200);
	$('#two-corinth-text-4').toggle(200);
	$('#two-corinth-text-5').toggle(200);
	$('#two-corinth-text-6').toggle(200);
	$('#two-corinth-text-7').toggle(200);
	$('#two-corinth-text-8').toggle(200);
	$('#two-corinth-text-9').toggle(200);
	$('#two-corinth-text-10').toggle(200);
	$('#two-corinth-text-11').toggle(200);
	$('#two-corinth-text-12').toggle(200);
	$('#two-corinth-text-13').toggle(200);
});




/* galatians interaction */
$('#galatians-map').on('click', () => {
	$('#galatians-text-1').toggle(200);
});

$('#galatians-service').on('click', () => {
	$('#galatians-text-2').toggle(200);
});

$('#galatians-foolish-law').on('click', () => {
	$('#galatians-text-3').toggle(200);
});

$('#galatians-blind-man').on('click', () => {
	$('#galatians-text-4').toggle(200);
});

$('#galatians-freedom-christ').on('click', () => {
	$('#galatians-text-5').toggle(200);
});

$('#galatians-blessing').on('click', () => {
	$('#galatians-text-6').toggle(200);
});

$('#text-galatians-know-christ').on('click', () => {
	$('#inter-galatians-know-christ').show(200);
	$('#galatians-answer-1').show(200);
});

$('#text-galatians-good-works').on('click', () => {
	$('#inter-galatians-good-works').show(200);
	$('#galatians-answer-4').show(200);
});

$('#text-galatians-heaven').on('click', () => {
	$('#inter-galatians-heaven').show(200);
	$('#galatians-answer-5').show(200);
});

$('#text-galatians-trapped').on('click', () => {
	$('#image-galatians-trapped').show(200);
	$('#galatians-answer-2').show(200);
});

$('#text-galatians-liberty').on('click', () => {
	$('#image-galatians-liberty').show(200);
	$('#galatians-answer-3').show(200);
});

$('#text-galatians-whodoyou').on('click', () => {
	$('#image-galatians-whodoyou').show(200);
	$('#mute-galatians-whodoyou').show(200);
	$('#galatians-answer-6').show(200);
});

$('#mute-galatians-whodoyou').on('click', () => {
	$('#mute-galatians-whodoyou').hide(200);
});

$('#text-galatians-wall').on('click', () => {
	$('#image-galatians-wall').show(200);
	$('#galatians-answer-7').show(200);
	$('#galatians-apply-button').show(200);
});

$('#inter-galatians-know-christ-yes').click(function(){
	$('#inter-galatians-know-christ-yes').addClass('inter-galatians-know-christ-select');
	$('#inter-galatians-know-christ-no').removeClass('inter-galatians-know-christ-select');
});

$('#inter-galatians-know-christ-no').click(function(){
	$('#inter-galatians-know-christ-no').addClass('inter-galatians-know-christ-select');
	$('#inter-galatians-know-christ-yes').removeClass('inter-galatians-know-christ-select');
});

$('#inter-galatians-good-works-yes').click(function(){
	$('#inter-galatians-good-works-yes').addClass('inter-galatians-know-christ-select');
	$('#inter-galatians-good-works-no').removeClass('inter-galatians-know-christ-select');
});

$('#inter-galatians-good-works-no').click(function(){
	$('#inter-galatians-good-works-no').addClass('inter-galatians-know-christ-select');
	$('#inter-galatians-good-works-yes').removeClass('inter-galatians-know-christ-select');
});

$('#text-galatians-whodoyou').click(function() {
	var audio =
	document.getElementById('song-galatians-whodoyou');
	audio.play();
});

$('#mute-galatians-whodoyou').click(function() {
	var audio =
	document.getElementById('song-galatians-whodoyou');
	audio.pause();
});

$(document).scroll(function() {
	$('#inter-galatians-know-christ').hide(200);
	$('#inter-galatians-good-works').hide(200);
	$('#inter-galatians-heaven').hide(200);
	$('#image-galatians-trapped').hide(200);
	$('#image-galatians-liberty').hide(200);
	$('#image-galatians-whodoyou').hide(200);
	$('#image-galatians-wall').hide(200);
});

$("#galatians-apply-button").click(function(){
	$('#galatians-images-opinion').show(200);
});

$("#galatians-images-close").click(function(){
	$('#galatians-images-opinion').hide(200);
});

$("#galatians-chapters").click(function(){
	$('#galatians-dropdown-menu').toggle(200);
});

$("#galatians-chapters-mobile").click(function(){
	$('#galatians-dropdown-menu').toggle(200);
});

$('#galatians-chapters-mobile').on('click', () => {
	$('#galatians-text-1').toggle(200);
	$('#galatians-text-2').toggle(200);
	$('#galatians-text-3').toggle(200);
	$('#galatians-text-4').toggle(200);
	$('#galatians-text-5').toggle(200);
	$('#galatians-text-6').toggle(200);
});




/* ephesis interaction */
$('#ephesis-map').on('click', () => {
	$('#galatians-text-1').toggle(200);
});

$('#ephesis-alive-christ').on('click', () => {
	$('#galatians-text-2').toggle(200);
});

$('#ephesis-gods-plan').on('click', () => {
	$('#galatians-text-3').toggle(200);
});

$('#ephesis-unity-christ').on('click', () => {
	$('#galatians-text-4').toggle(200);
});

$('#ephesis-light-world').on('click', () => {
	$('#galatians-text-5').toggle(200);
});

$('#ephesis-blessing').on('click', () => {
	$('#galatians-text-6').toggle(200);
});

$('#text-ephesis-body').on('click', () => {
	$('#image-ephesis-body').show(200);
	$('#ephesis-answer-5').show(200);
});

$('#text-ephesis-gentiles').on('click', () => {
	$('#image-ephesis-gentiles').show(200);
	$('#ephesis-answer-4').show(200);
});

$('#text-ephesis-church').on('click', () => {
	$('#image-ephesis-church').show(200);
	$('#ephesis-answer-3').show(200);
});

$('#text-ephesis-redeemer').on('click', () => {
	$('#site-ephesis-redeemer').show(200);
	$('#ephesis-answer-2').show(200);
});

$('#text-ephesis-building').on('click', () => {
	$('#image-ephesis-building').show(200);
	$('#ephesis-answer-1').show(200);
});

$('#text-ephesis-news').on('click', () => {
	$('#site-ephesis-news').show(200);
	$('#ephesis-answer-6').show(200);
	$('#ephesis-apply-button').show(200);
});

$('#ephesis-apply-button').on('click', () => {
	$('#ephesis-images-opinion').show(200);
});

$('#ephesis-images-close').on('click', () => {
	$('#ephesis-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#image-ephesis-body').hide(200);
	$('#image-ephesis-gentiles').hide(200);
	$('#image-ephesis-church').hide(200);
	$('#site-ephesis-redeemer').hide(200);
	$('#image-ephesis-building').hide(200);
	$('#site-ephesis-news').hide(200);
});

$("#ephesis-chapters").click(function(){
	$('#ephesis-dropdown-menu').toggle(200);
});

$("#ephesis-chapters-mobile").click(function(){
	$('#ephesis-dropdown-menu').toggle(200);
});

$('#ephesis-chapters-mobile').on('click', () => {
	$('#ephesis-text-1').toggle(200);
	$('#ephesis-text-2').toggle(200);
	$('#ephesis-text-3').toggle(200);
	$('#ephesis-text-4').toggle(200);
	$('#ephesis-text-5').toggle(200);
	$('#ephesis-text-6').toggle(200);
});




/* philippi interaction */
$('#philippi-map').on('click', () => {
	$('#philippi-text-1').toggle(200);
});

$('#philippi-humble').on('click', () => {
	$('#philippi-text-2').toggle(200);
});

$('#philippi-confidence-christ').on('click', () => {
	$('#philippi-text-3').toggle(200);
});

$('#philippi-blessing').on('click', () => {
	$('#philippi-text-4').toggle(200);
});

$("#philippi-chapters").click(function(){
	$('#philippi-dropdown-menu').toggle(200);
});

$("#philippi-chapters-mobile").click(function(){
	$('#philippi-dropdown-menu').toggle(200);
});

$('#philippi-chapters-mobile').on('click', () => {
	$('#philippi-text-1').toggle(200);
	$('#philippi-text-2').toggle(200);
	$('#philippi-text-3').toggle(200);
	$('#philippi-text-4').toggle(200);
});

$('#text-philippi-testament').on('click', () => {
	$('#image-philippi-testament').show(200);
	$('#philippi-answer-1').show(200);
});

$('#text-philippi-favorite').on('click', () => {
	$('#inter-philippi-favorite').show(200);
	$('#philippi-answer-2').show(200);
});

$('#text-philippi-children').on('click', () => {
	$('#image-philippi-children').show(200);
	$('#philippi-answer-3').show(200);
	$('#mute-philippi').show(200);
});

$('#text-philippi-children').click(function() {
	var audio =
	document.getElementById('song-philippi-children');
	audio.play();
	var audio =
	document.getElementById('song-philippi-awake');
	audio.pause();
	var audio =
	document.getElementById('song-philippi-earth');
	audio.pause();
});

$('#mute-philippi').click(function() {
	var audio =
	document.getElementById('song-philippi-children');
	audio.pause();
	$('#mute-philippi').hide(200);
});

$('#text-philippi-awake').on('click', () => {
	$('#image-philippi-awake').show(200);
	$('#philippi-answer-4').show(200);
	$('#mute-philippi').show(200);
});

$('#text-philippi-awake').click(function() {
	var audio =
	document.getElementById('song-philippi-awake');
	audio.play();
	var audio =
	document.getElementById('song-philippi-children');
	audio.pause();
	var audio =
	document.getElementById('song-philippi-earth');
	audio.pause();
});

$('#mute-philippi').click(function() {
	var audio =
	document.getElementById('song-philippi-awake');
	audio.pause();
	$('#mute-philippi').hide(200);
});

$('#text-philippi-earth').on('click', () => {
	$('#image-philippi-earth').show(200);
	$('#philippi-answer-5').show(200);
	$('#mute-philippi').show(200);
});

$('#text-philippi-earth').click(function() {
	var audio =
	document.getElementById('song-philippi-earth');
	audio.play();
	var audio =
	document.getElementById('song-philippi-awake');
	audio.pause();
	var audio =
	document.getElementById('song-philippi-children');
	audio.pause();
});

$('#mute-philippi').click(function() {
	var audio =
	document.getElementById('song-philippi-earth');
	audio.pause();
	$('#mute-philippi').hide(200);
});

$('#text-philippi-rejoice').on('click', () => {
	$('#inter-philippi-rejoice').show(200);
	$('#philippi-answer-6').show(200);
});

$('#philippi-day').click(function(){
	$('#philippi-day').addClass('inter-philippi-rejoice-select');
	$('#philippi-week').removeClass('inter-philippi-rejoice-select');
	$('#philippi-month').removeClass('inter-philippi-rejoice-select');
});

$('#philippi-week').click(function(){
	$('#philippi-week').addClass('inter-philippi-rejoice-select');
	$('#philippi-day').removeClass('inter-philippi-rejoice-select');
	$('#philippi-month').removeClass('inter-philippi-rejoice-select');
});

$('#philippi-month').click(function(){
	$('#philippi-month').addClass('inter-philippi-rejoice-select');
	$('#philippi-week').removeClass('inter-philippi-rejoice-select');
	$('#philippi-day').removeClass('inter-philippi-rejoice-select');
});

$('#text-philippi-orange').on('click', () => {
	$('#image-philippi-orange').show(200);
	$('#philippi-answer-7').show(200);
	$('#philippi-apply-button').show(200);
});

$('#philippi-apply-button').click(function() {
	$('#philippi-images-opinion').show(200);
});

$('#philippi-images-close').click(function() {
	$('#philippi-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#image-philippi-testament').hide(200);
	$('#inter-philippi-favorite').hide(200);
	$('#image-philippi-children').hide(200);
	$('#image-philippi-awake').hide(200);
	$('#image-philippi-earth').hide(200);
	$('#inter-philippi-rejoice').hide(200);
	$('#image-philippi-orange').hide(200);
});




/* colossians interaction */
$('#colossians-map').on('click', () => {
	$('#colossians-text-1').toggle(200);
});

$('#colossians-fullness-christ').on('click', () => {
	$('#colossians-text-2').toggle(200);
});

$('#colossians-alive-christ').on('click', () => {
	$('#colossians-text-3').toggle(200);
});

$('#colossians-blessing').on('click', () => {
	$('#colossians-text-4').toggle(200);
});

$("#colossians-chapters").click(function(){
	$('#colossians-dropdown-menu').toggle(200);
});

$("#colossians-chapters-mobile").click(function(){
	$('#colossians-dropdown-menu').toggle(200);
});

$('#colossians-chapters-mobile').on('click', () => {
	$('#colossians-text-1').toggle(200);
	$('#colossians-text-2').toggle(200);
	$('#colossians-text-3').toggle(200);
	$('#colossians-text-4').toggle(200);
});

$('#text-colossians-haveme').on('click', () => {
	$('#image-colossians-haveme').show(200);
	$('#colossians-answer-1').show(200);
	$('#mute-colossians').show(200);
});

$('#text-colossians-haveme').click(function() {
	var audio =
	document.getElementById('song-colossians-haveme');
	audio.play();
	var audio =
	document.getElementById('song-colossians-stumble');
	audio.pause();
});

$('#mute-colossians').click(function() {
	var audio =
	document.getElementById('song-colossians-haveme');
	audio.pause();
	var audio =
	document.getElementById('song-colossians-stumble');
	audio.pause();
	$('#mute-colossians').hide(200);
});

$('#text-colossians-growing').on('click', () => {
	$('#inter-colossians-growing').show(200);
	$('#colossians-answer-2').show(200);
});

$('#colossians-yes').click(function(){
	$('#colossians-yes').addClass('inter-colossians-growing-select');
	$('#colossians-no').removeClass('inter-colossians-growing-select');
});

$('#colossians-no').click(function(){
	$('#colossians-no').addClass('inter-colossians-growing-select');
	$('#colossians-yes').removeClass('inter-colossians-growing-select');
});

$('#text-colossians-sunset').on('click', () => {
	$('#image-colossians-sunset').show(200);
	$('#colossians-answer-3').show(200);
});

$('#text-colossians-vine').on('click', () => {
	$('#image-colossians-vine').show(200);
	$('#colossians-answer-4').show(200);
});

$('#text-colossians-human').on('click', () => {
	$('#image-colossians-human').show(200);
	$('#colossians-answer-5').show(200);
});

$('#text-colossians-new').on('click', () => {
	$('#inter-colossians-new').show(200);
	$('#colossians-answer-6').show(200);
});

$('#text-colossians-stumble').on('click', () => {
	$('#image-colossians-stumble').show(200);
	$('#colossians-answer-7').show(200);
	$('#mute-colossians').show(200);
	$('#colossians-apply-button').show(200);
});

$('#text-colossians-stumble').click(function() {
	var audio =
	document.getElementById('song-colossians-stumble');
	audio.play();
	var audio =
	document.getElementById('song-colossians-haveme');
	audio.pause();
});

$('#mute-colossians').click(function() {
	var audio =
	document.getElementById('song-colossians-haveme');
	audio.pause();
	var audio =
	document.getElementById('song-colossians-stumble');
	audio.pause();
	$('#mute-colossians').hide(200);
});

$(document).scroll(function() {
	$('#image-colossians-stumble').hide(200);
	$('#inter-colossians-new').hide(200);
	$('#image-colossians-human').hide(200);
	$('#image-colossians-vine').hide(200);
	$('#image-colossians-sunset').hide(200);
	$('#inter-colossians-growing').hide(200);
	$('#image-colossians-haveme').hide(200);
});

$('#colossians-apply-button').click(function() {
	$('#colossians-images-opinion').show(200);
});

$('#colossians-images-close').click(function() {
	$('#colossians-images-opinion').hide(200);
});




/* 1 thessalonians interaction */
$('#one-thess-map').on('click', () => {
	$('#one-thess-text-1').toggle(200);
});

$('#one-thess-books-ministry').on('click', () => {
	$('#one-thess-text-2').toggle(200);
});

$('#one-thess-persecute-prison').on('click', () => {
	$('#one-thess-text-3').toggle(200);
});

$('#one-thess-pray-trust').on('click', () => {
	$('#one-thess-text-4').toggle(200);
});

$('#one-thess-blessing').on('click', () => {
	$('#one-thess-text-5').toggle(200);
});

$("#one-thess-chapters").click(function(){
	$('#one-thess-dropdown-menu').toggle(200);
});

$("#one-thess-chapters-mobile").click(function(){
	$('#one-thess-dropdown-menu').toggle(200);
});

$('#one-thess-chapters-mobile').on('click', () => {
	$('#one-thess-text-1').toggle(200);
	$('#one-thess-text-2').toggle(200);
	$('#one-thess-text-3').toggle(200);
	$('#one-thess-text-4').toggle(200);
	$('#one-thess-text-5').toggle(200);
});

$('#text-thess-today').on('click', () => {
	$('#site-thess-today').show(200);
	$('#one-thess-answer-1').show(200);
});

$('#text-thess-chinaaid').on('click', () => {
	$('#site-thess-chinaaid').show(200);
	$('#one-thess-answer-2').show(200);
});

$('#text-thess-persecute').on('click', () => {
	$('#image-thess-persecute').show(200);
	$('#one-thess-answer-3').show(200);
});

$('#text-thess-post').on('click', () => {
	$('#site-thess-post').show(200);
	$('#one-thess-answer-4').show(200);
});

$('#text-thess-christ').on('click', () => {
	$('#image-thess-christ').show(200);
	$('#one-thess-answer-5').show(200);
	$('#one-thess-apply-button').show(200);
});

$('#one-thess-apply-button').click(function() {
	$('#one-thess-images-opinion').show(200);
});

$('#one-thess-images-close').click(function() {
	$('#one-thess-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#image-thess-christ').hide(200);
	$('#site-thess-post').hide(200);
	$('#image-thess-persecute').hide(200);
	$('#site-thess-chinaaid').hide(200);
	$('#site-thess-today').hide(200);
});




/* 2 thessalonians interaction */
$('#two-thess-map').on('click', () => {
	$('#two-thess-text-1').toggle(200);
});

$('#two-thess-persecution').on('click', () => {
	$('#two-thess-text-2').toggle(200);
});

$('#two-thess-blessing').on('click', () => {
	$('#two-thess-text-3').toggle(200);
});

$("#two-thess-chapters").click(function(){
	$('#two-thess-dropdown-menu').toggle(200);
});

$("#two-thess-chapters-mobile").click(function(){
	$('#two-thess-dropdown-menu').toggle(200);
});

$('#two-thess-chapters-mobile').on('click', () => {
	$('#two-thess-text-1').toggle(200);
	$('#two-thess-text-2').toggle(200);
	$('#two-thess-text-3').toggle(200);
});

$('#text-thess-society').on('click', () => {
	$('#site-thess-society').show(200);
	$('#two-thess-answer-1').show(200);
});

$('#text-thess-misunderstood').on('click', () => {
	$('#image-thess-misunderstood').show(200);
	$('#two-thess-answer-2').show(200);
});

$('#text-thess-jew').on('click', () => {
	$('#image-thess-jew').show(200);
	$('#two-thess-answer-3').show(200);
});

$('#text-thess-flat').on('click', () => {
	$('#image-thess-flat').show(200);
	$('#two-thess-answer-4').show(200);
});

$('#text-thess-prayer').on('click', () => {
	$('#image-thess-prayer').show(200);
	$('#two-thess-answer-5').show(200);
	$('#two-thess-apply-button').show(200);
});

$('#two-thess-apply-button').click(function() {
	$('#two-thess-images-opinion').show(200);
});

$('#two-thess-images-close').click(function() {
	$('#two-thess-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#image-thess-prayer').hide(200);
	$('#image-thess-flat').hide(200);
	$('#image-thess-jew').hide(200);
	$('#image-thess-misunderstood').hide(200);
	$('#site-thess-society').hide(200);
});




/* 1 timothy interaction */
$('#one-timothy-map').on('click', () => {
	$('#one-timothy-text-1').toggle(200);
});

$('#one-timothy-worship').on('click', () => {
	$('#one-timothy-text-2').toggle(200);
});

$('#one-timothy-leaders').on('click', () => {
	$('#one-timothy-text-3').toggle(200);
});

$('#one-timothy-false-teachers').on('click', () => {
	$('#one-timothy-text-4').toggle(200);
});

$('#one-timothy-shout-jesus').on('click', () => {
	$('#one-timothy-text-5').toggle(200);
});

$('#one-timothy-blessing').on('click', () => {
	$('#one-timothy-text-6').toggle(200);
});

$("#one-timothy-chapters").click(function(){
	$('#one-timothy-dropdown-menu').toggle(200);
});

$("#one-timothy-chapters-mobile").click(function(){
	$('#one-timothy-dropdown-menu').toggle(200);
});

$('#one-timothy-chapters-mobile').on('click', () => {
	$('#one-timothy-text-1').toggle(200);
	$('#one-timothy-text-2').toggle(200);
	$('#one-timothy-text-3').toggle(200);
	$('#one-timothy-text-4').toggle(200);
	$('#one-timothy-text-5').toggle(200);
	$('#one-timothy-text-6').toggle(200);
});

$('#text-tim-breath').on('click', () => {
	$('#image-tim-breath').show(200);
	$('#one-timothy-answer-1').show(200);
	$('#mute-one-tim').show(200);
});

$('#text-tim-awaken').on('click', () => {
	$('#image-tim-awaken').show(200);
	$('#one-timothy-answer-3').show(200);
	$('#mute-one-tim').show(200);
});

$('#text-tim-breath').click(function() {
	var audio =
	document.getElementById('song-tim-breath');
	audio.play();
	var audio =
	document.getElementById('song-tim-awaken');
	audio.pause();
});

$('#text-tim-awaken').click(function() {
	var audio =
	document.getElementById('song-tim-awaken');
	audio.play();
	var audio =
	document.getElementById('song-tim-breath');
	audio.pause();
});

$('#mute-one-tim').click(function() {
	var audio =
	document.getElementById('song-tim-breath');
	audio.pause();
	var audio =
	document.getElementById('song-tim-awaken');
	audio.pause();
	$('#mute-one-tim').hide(200);
});

$('#text-tim-missions').on('click', () => {
	$('#inter-tim-missions').show(200);
	$('#one-timothy-answer-2').show(200);
});

$('#tim-missions-yes').click(function(){
	$('#tim-missions-yes').addClass('inter-colossians-growing-select');
	$('#tim-missions-no').removeClass('inter-colossians-growing-select');
});

$('#tim-missions-no').click(function(){
	$('#tim-missions-no').addClass('inter-colossians-growing-select');
	$('#tim-missions-yes').removeClass('inter-colossians-growing-select');
});

$('#text-tim-ideas').on('click', () => {
	$('#image-tim-ideas').show(200);
	$('#one-timothy-answer-4').show(200);
});

$('#text-tim-filter').on('click', () => {
	$('#site-tim-filter').show(200);
	$('#one-timothy-answer-5').show(200);
});

$('#text-tim-light').on('click', () => {
	$('#image-tim-light').show(200);
	$('#one-timothy-answer-6').show(200);
});

$('#text-tim-share').on('click', () => {
	$('#inter-tim-share').show(200);
	$('#one-timothy-answer-7').show(200);
	$('#one-timothy-apply-button').show(200);
});

$('#tim-share-1').click(function(){
	$('#tim-share-1').addClass('inter-colossians-growing-select');
	$('#tim-share-2').removeClass('inter-colossians-growing-select');
	$('#tim-share-3').removeClass('inter-colossians-growing-select');
});

$('#tim-share-2').click(function(){
	$('#tim-share-2').addClass('inter-colossians-growing-select');
	$('#tim-share-1').removeClass('inter-colossians-growing-select');
	$('#tim-share-3').removeClass('inter-colossians-growing-select');
});

$('#tim-share-3').click(function(){
	$('#tim-share-3').addClass('inter-colossians-growing-select');
	$('#tim-share-2').removeClass('inter-colossians-growing-select');
	$('#tim-share-1').removeClass('inter-colossians-growing-select');
});

$('#one-timothy-apply-button').click(function() {
	$('#one-timothy-images-opinion').show(200);
});

$('#one-timothy-images-close').click(function() {
	$('#one-timothy-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#inter-tim-share').hide(200);
	$('#image-tim-light').hide(200);
	$('#site-tim-filter').hide(200);
	$('#image-tim-ideas').hide(200);
	$('#inter-tim-missions').hide(200);
	$('#image-tim-awaken').hide(200);
	$('#image-tim-breath').hide(200);
});




/* 2 timothy interaction */
$('#two-timothy-map').on('click', () => {
	$('#two-timothy-text-1').toggle(200);
});

$('#two-timothy-assurance').on('click', () => {
	$('#two-timothy-text-2').toggle(200);
});

$('#two-timothy-final-days').on('click', () => {
	$('#two-timothy-text-3').toggle(200);
});

$('#two-timothy-blessing').on('click', () => {
	$('#two-timothy-text-4').toggle(200);
});

$("#two-timothy-chapters").click(function(){
	$('#two-timothy-dropdown-menu').toggle(200);
});

$("#two-timothy-chapters-mobile").click(function(){
	$('#two-timothy-dropdown-menu').toggle(200);
});

$('#two-timothy-chapters-mobile').on('click', () => {
	$('#two-timothy-text-1').toggle(200);
	$('#two-timothy-text-2').toggle(200);
	$('#two-timothy-text-3').toggle(200);
	$('#two-timothy-text-4').toggle(200);
});

$('#text-tim-havefaith').on('click', () => {
	$('#image-tim-havefaith').show(200);
	$('#two-timothy-answer-1').show(200);
});

$('#text-tim-justas').on('click', () => {
	$('#image-tim-justas').show(200);
	$('#two-timothy-answer-2').show(200);
	$('#mute-tim-two').show(200);
});

$('#text-tim-justas').click(function() {
	var audio =
	document.getElementById('song-tim-justas');
	audio.play();
	var audio =
	document.getElementById('song-tim-wheremind');
	audio.pause();
	var audio =
	document.getElementById('song-tim-nograve');
	audio.pause();
});

$('#mute-tim-two').click(function() {
	var audio =
	document.getElementById('song-tim-justas');
	audio.pause();
	var audio =
	document.getElementById('song-tim-wheremind');
	audio.pause();
	var audio =
	document.getElementById('song-tim-nograve');
	audio.pause();
	$('#mute-tim-two').hide(200);
});

$('#text-tim-accept').on('click', () => {
	$('#inter-tim-accept').show(200);
	$('#two-timothy-answer-3').show(200);
});

$('#text-tim-faithful').on('click', () => {
	$('#image-tim-faithful').show(200);
	$('#two-timothy-answer-4').show(200);
});

$('#text-tim-work').on('click', () => {
	$('#inter-tim-work').show(200);
	$('#two-timothy-answer-5').show(200);
});

$('#text-tim-wheremind').on('click', () => {
	$('#image-tim-wheremind').show(200);
	$('#two-timothy-answer-6').show(200);
	$('#mute-tim-two').show(200);
});

$('#text-tim-wheremind').click(function() {
	var audio =
	document.getElementById('song-tim-wheremind');
	audio.play();
	var audio =
	document.getElementById('song-tim-justas');
	audio.pause();
	var audio =
	document.getElementById('song-tim-nograve');
	audio.pause();
});

$('#text-tim-nograve').on('click', () => {
	$('#image-tim-nograve').show(200);
	$('#two-timothy-answer-7').show(200);
	$('#mute-tim-two').show(200);
});

$('#text-tim-nograve').click(function() {
	var audio =
	document.getElementById('song-tim-nograve');
	audio.play();
	var audio =
	document.getElementById('song-tim-wheremind');
	audio.pause();
	var audio =
	document.getElementById('song-tim-justas');
	audio.pause();
});

$('#text-tim-remain').on('click', () => {
	$('#inter-tim-remain').show(200);
	$('#two-timothy-answer-8').show(200);
	$('#two-timothy-apply-button').show(200);
});

$('#two-timothy-apply-button').click(function() {
	$('#two-timothy-images-opinion').show(200);
});

$('#two-timothy-images-close').click(function() {
	$('#two-timothy-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#inter-tim-remain').hide(200);
	$('#image-tim-nograve').hide(200);
	$('#image-tim-wheremind').hide(200);
	$('#inter-tim-work').hide(200);
	$('#image-tim-faithful').hide(200);
	$('#inter-tim-accept').hide(200);
	$('#image-tim-justas').hide(200);
	$('#image-tim-havefaith').hide(200);
});




/* titus interaction */
$('#titus-map').on('click', () => {
	$('#titus-text-1').toggle(200);
});

$('#titus-good-gospel').on('click', () => {
	$('#titus-text-2').toggle(200);
});

$('#titus-blessing').on('click', () => {
	$('#titus-text-3').toggle(200);
});

$("#titus-chapters").click(function(){
	$('#titus-dropdown-menu').toggle(200);
});

$("#titus-chapters-mobile").click(function(){
	$('#titus-dropdown-menu').toggle(200);
});

$('#titus-chapters-mobile').on('click', () => {
	$('#titus-text-1').toggle(200);
	$('#titus-text-2').toggle(200);
	$('#titus-text-3').toggle(200);
});

$('#text-titus-leader').on('click', () => {
	$('#image-titus-leader').show(200);
	$('#titus-answer-1').show(200);
});

$('#text-titus-elevate').on('click', () => {
	$('#site-titus-elevate').show(200);
	$('#titus-answer-2').show(200);
});

$('#text-titus-village').on('click', () => {
	$('#site-titus-village').show(200);
	$('#titus-answer-3').show(200);
});

$('#text-titus-bible').on('click', () => {
	$('#site-titus-bible').show(200);
	$('#titus-answer-4').show(200);
});

$('#text-titus-lookup').on('click', () => {
	$('#inter-titus-lookup').show(200);
	$('#titus-answer-5').show(200);
});

$('#text-titus-gifts').on('click', () => {
	$('#inter-titus-gifts').show(200);
	$('#titus-answer-6').show(200);
	$('#titus-apply-button').show(200);
});

$('#titus-apply-button').click(function() {
	$('#titus-images-opinion').show(200);
});

$('#titus-images-close').click(function() {
	$('#titus-images-opinion').hide(200);
});

$(document).scroll(function() {
	$('#inter-titus-gifts').hide(200);
	$('#inter-titus-lookup').hide(200);
	$('#site-titus-bible').hide(200);
	$('#site-titus-village').hide(200);
	$('#site-titus-elevate').hide(200);
	$('#image-titus-leader').hide(200);
});