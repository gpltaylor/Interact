//3:30 am
if($('#dtpselected').val() === '') {
    $('#dtpselected').val('1978-06-25T03:30:00');
}

var dtpselected = moment($('#dtpselected').val());

var nyTime = moment(dtpselected).zone('-0400');
var indiaTime = moment(dtpselected).zone('+0630');

console.log("NY: " + nyTime.format('YYYY-MM-DD HH:mm'));
console.log("dtp: " + dtpselected.format('YYYY-MM-DD HH:mm'));
console.log('utc: ' + dtpselected.utc().format('YYYY-MM-DD HH:mm'));
console.log("India: " + indiaTime.format('YYYY-MM-DD HH:mm'));