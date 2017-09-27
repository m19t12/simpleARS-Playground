function PlaygroundStore() {
    riot.observable(this);

    const store = this;

    store.state = {
        data: {}
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
}