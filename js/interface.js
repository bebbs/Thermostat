var thermostat = new Thermostat();


var updateTemperature = function() {
  $('#temperature').text(thermostat.temperature);
};

$(document).ready(function() {
  updateTemperature();

  $('.increaseTemp').on('click', function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
  });
  
  $('.decreaseTemp').on('click', function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('.PSM-on').on('click', function() {
    thermostat.powerSavingModeSwitch("on");
    updateTemperature();
  });

  $('.PSM-off').on('click', function() {
    thermostat.powerSavingModeSwitch("off");
    updateTemperature();
  });

});