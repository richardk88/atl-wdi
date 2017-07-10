// wrap everything in a function so that the DOM loads before any Javascript runs
$(function () {

    // We will want to keep our related functions and data neatly structured
    // We can keep them in an object called CounterCollection, containing:
    //  - An array of the current counters on the page (as well as some starter data)
    //  - A function to create a new counter from the form
    //  - Another function to increment counter values
    var CounterCollection = {
        counters: [
            {
                currentValue: 0,
                counterName: 'Errors'
            },
            {
                currentValue: 0,
                counterName: 'Warnings'
            }
        ],
        createNewCounterFromForm: function (event) {

            // THIS FUNCTION IS TRIGGERED BY A CLICK EVENT
            // so we have to stop the page from refreshing
            event.preventDefault();

            // find the value of the new counter name from the form
            var newCounterName = $('#new-counter-name').val();

            // Find the value of the new counter start value from the form.
            // Be sure to convert it back to an integer, as forms
            // provide all data as Strings.
            var newCounterStartValue = $('#new-counter-start-value').val();
            var newCounterStartValueAsInteger = parseInt(newCounterStartValue);

            // create a new counter object with the values from the form
            var newCounter = {
                currentValue: newCounterStartValueAsInteger,
                counterName: newCounterName
            }

            // add new counter object to the counter collection
            // cannot use the 'this' keyword (e.g. `this.counters`) 
            // here because 'this' refers to the button that triggered
            // the click event
            CounterCollection.counters.push(newCounter);
            
            // add new counter to the DOM (be sure to pass the new index properly)
            addNewCounterToDOM(newCounter, CounterCollection.counters.length - 1 /* <-- This is the proper index for the new counter */);

            // finally, clear the form out so we can make a new counter
            $('#new-counter-name').val(''); // <-- to clear the input, just reset the value to an empty string
            $('#new-counter-start-value').val('');
        },
        addOneToCounterValue: function (counterIndex) {

            // find the counter from the array
            var counter = this.counters[counterIndex];

            // add one to the counter's current value
            counter.currentValue += 1;

            // THEN update the DOM to reflect the new counter value
            // OPTION 1: 
            // - find all divs with 'counter' class
            // - loop through until you find div with counterIndex of the one above
            // - update the span with the current value to equal the new current value

            // OPTION 2: use a CSS selector to get the span
            $(`[data-counter-index="${counterIndex}"] > span#current-value`).html(counter.currentValue);
        },
        createDOMElementsForEveryCounterInCollection: function () {
            // loop through the user's counters
            for (var i = 0; i < CounterCollection.counters.length; i++) {
                // get the current counter object
                var counter = CounterCollection.counters[i];

                // for each counter, create a new <div> to show the info
                addNewCounterToDOM(counter, i);
            }
        }

    }

    // THIS CODE WILL RUN WHEN THE BROWSER LOADS!!!
    // WHEN EVERYTHING LOADS IN THE BROWSER, WE NEED TO CREATE
    // DOM ELEMENTS FOR ALL OF THE EXISTING COUNTERS
    CounterCollection.createDOMElementsForEveryCounterInCollection();

    function addEventListenerForCounterForm () {
        // find the form submit button
        var $newCounterButton = $('#add-new-counter');

        // add an event listener to the button
        $newCounterButton.on('click', CounterCollection.createNewCounterFromForm); 
    }
    addEventListenerForCounterForm();

    
    // THE FUNCTION BELOW IS A HELPER FUNCTION THAT WE WILL USE IN MULTIPLE PLACES
    // THIS FUNCTION CREATES A NEW DOM ELEMENT FOR A COUNTER
    function addNewCounterToDOM(counter, newCounterIndex) {

        // find the counter container
        var $counterContainer = $('#counter-container');

        // create a div for the new counter
        var $newCounterDiv = $('<div>');

        // the div should have a class of counter
        $newCounterDiv.addClass('counter');

        // the div should have an attribute called data-counter-index
        // that equals the current array index
        $newCounterDiv.attr('data-counter-index', newCounterIndex)

        // the div should have a h3 with the counter name
        var $newCounterHeader = $('<h3>');
            $newCounterHeader.html(counter.counterName);
            $newCounterHeader.attr('id', 'counter-name');
        $newCounterDiv.append($newCounterHeader);

        // the div should have a span containing the currentValue
        // with an id of 'current-value'
        var $currentValueSpan = $('<span>');
            $currentValueSpan.attr('id', 'current-value');
            $currentValueSpan.html(counter.currentValue);
        $newCounterDiv.append($currentValueSpan);

        // the div should have a button that says '+1' with an id of 'add-one'
        var $plusOneButton = $('<button>');
            $plusOneButton.html('+1');
            $plusOneButton.attr('id', 'add-one');
        $newCounterDiv.append($plusOneButton);

        // the div should have a button that says 'Remove Counter' with an id of 'remove-counter'
        var $removeButton = $('<button>');
            $removeButton.html('Remove Counter');
            $removeButton.attr('id', 'remove-counter');
        $newCounterDiv.append($removeButton);

        // The div should listen for click events to both of the buttons above
        $newCounterDiv.on('click', function (event) {
            // be sure to stop the event bubbling once you've caught it
            event.stopPropagation();

            // if the remove-counter button was clicked,
            // remove the div
            if (event.target.id === 'remove-counter') {
                $(event.currentTarget).remove();
            } 
            // if the +1 button was clicked, add one to the div's count
            else if (event.target.id === 'add-one') {
                // get the index of the current counter
                var counterIndexToUpdate = $(event.currentTarget).attr('data-counter-index');

                // increment that counter's currentValue in the array of counters
                CounterCollection.addOneToCounterValue(counterIndexToUpdate);
            }

        })

        // the div should be appended to '#counter-container'
        $counterContainer.append($newCounterDiv);
    }

});
