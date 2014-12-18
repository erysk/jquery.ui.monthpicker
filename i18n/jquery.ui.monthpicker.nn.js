/* Norwegian Nynorsk initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Bjørn Johansen (post@bjornjohansen.no). */
(function ($) {

$.monthpicker.regional['nn'] = {
	closeText: 'Lukk',
	prevText: '&#xAB;Førre',
	nextText: 'Neste&#xBB;',
	currentText: 'I dag',
	monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
	monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''
};
$.monthpicker.setDefaults($.monthpicker.regional['nn']);

})(jQuery);
