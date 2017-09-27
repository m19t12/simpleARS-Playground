function PlaygroundStore() {
    riot.observable(this);

    const store = this;

    store.state = {
        data: {},
        processedData: {}
    };

    store.on('loadJSONData', (payload) => {
        $.ajax({
            url: payload,
            contentType: 'application/json'
        }).done((data) => {
            store.state.data = JSON.parse(JSON.stringify(data, undefined, 2));
            store.trigger('changed', store.state)
        }).fail((error) => {
            alert('An error occurred !!!');
            return error;
        });
    });

    store.on('processQuery', (payload) => {
        $.ajax({
            url: '/ars-list',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(payload)
        }).done(function (data) {
            store.state.processedData = JSON.parse(data);
            store.trigger('changed', store.state)
        }).fail(function (error) {
            alert('An error occurred !!!');
            console.log(error);
            return error;
        });
    });
}