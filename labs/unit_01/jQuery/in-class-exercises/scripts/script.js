$(function() {

var CounterCollection = {
    counters: [
        {
            currentValue: 0,
            counterName: 'Errors'
        },
        {
            currentValue: 0,
            counterName: 'Warnings'
        },
        {
            currentValue: 5,
            counterName: 'Whoops'
        }
    ],
    addOneToCounterValue: function (counterIndex) {
    	this.counters[counterIndex].currentValue += 1;
    }
}

// find the counter container
var $counterContainer = $('#counter-container');

// loop through the user's counters
for(var i = 0; i < CounterCollection.counters.length; i++) {
    // get the current counter object
    var counter = CounterCollection.counters[i];

    // for each counter, create a div
    var $newCounterDiv = $('<div>');

    // the div should have a class of counter
    $newCounterDiv.addClass('counter');

    // the div should have a data-counter-index of
    // the current array index
    $newCounterDiv.data('counterIndex', i)

    // the div should have a h1 with the counter name
    var $newCounterHeader = $('<h1>');
        $newCounterHeader.html(counter.counterName);
        $newCounterHeader.attr('id', 'counter-name');
    $newCounterDiv.append($newCounterHeader);

    // the div should have a span containing the currentValue
    var $currentValueSpan = $('<span>');
        $currentValueSpan.html(counter.currentValue);
    $newCounterDiv.append($currentValueSpan);

    // the div should have a button that says '+1' with an id of 'add-one'
    var $plusOneButton = $('<button>');
        $plusOneButton.html('+1');
        $plusOneButton.attr('id', 'add-one');
    $newCounterDiv.append($plusOneButton);

    var $removeButton = $('<button>');
        $removeButton.html('Remove Counter');
        $removeButton.attr('id', 'add-one');
    $newCounterDiv.append($removeButton);

    $newCounterDiv.on('click', (event) => {
    	event.stopPropagation();
    	if(event.target.id === 'remove-counter') {
    		$(event.currentTarget).remove();
    	} else if (event.target.id === 'add-one') {
    		//add one to the counter

    		CounterCollection.addOneToCounterValue[i];
    	}

    })

    // the div should be appended to '#counter-container'
    $counterContainer.append($newCounterDiv);
}
    


{/*<div class="counter" data-counter-index="0">
    <h1 id="counter-name">Errors</h1>
    <span id="current-count">0</span>
    <button id="add-one">+1</button>
</div>*/}


//find the button
var $button = $('#add-one');

// add an event listener to the button
$button.on('click', function () {
// then, inside the listener callback:

    // find the span to get the current value
    var currentValue = $('#current-count').text();
    var currentValueAsInt = parseInt(currentValue);

    // add one to the current span value
    currentValueAsInt += 1;

    // change the span to the new value
    $('#current-count').html(currentValueAsInt);
});

// find the form submit button
var $newCounterButton = $('#add-new-counter');

// add an event listener to the button
$newCounterButton.on('click', function (event) {
// inside of the event listener:
    
    // stop the page from refreshing
    event.preventDefault();

    // find the value of the new counter name
    var newCounterName = $('#new-counter-name').val();

    // find the value of the new counter start value
    var newCounterStartValue = $('#new-counter-start-value').val();

    // alert both
    alert('New Counter Name: ' + newCounterName);
    alert(`New Counter Start Value: ${newCounterStartValue}`);
})

});