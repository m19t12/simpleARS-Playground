riot.tag2('main-container', '<navigation-bar></navigation-bar> <div class="container-fluid mt-4"> <div class="row"> <div class="col-3"> <form style="height: 100%;"> <json-input ref="json_input" open_modal="{openModal}" json_data="{store.data}"></json-input> </form> </div> <div class="col"> <form> <query-input json_data="{store.data}" process_query="{processQuery}"></query-input> <data-table if="{store.processedData}" processed_data="{store.processedData}"></data-table> </form> </div> </div> </div> <modal ref="load_modal" load_json_data="{loadJSONData}"></modal>', '', '', function(opts) {
        const tag = this;

        tag.store = {};

        tag.openModal = openModal;
        tag.loadJSONData = loadJSONData;
        tag.processQuery = processQuery;

        function openModal() {
            tag.refs.load_modal.modal.modal('toggle');
        }

        function loadJSONData(payload) {
            RiotControl.trigger('loadJSONData', payload);
            tag.refs.load_modal.modal.modal('toggle');
        }

        function processQuery(payload) {
            let json_data = tag.refs.json_input.getJSONData();
            let complete_query = {
                "data": json_data,
                "search": payload
            };

            RiotControl.trigger('processQuery', complete_query);
        }

        RiotControl.on('changed', (state) => {
            tag.store = JSON.parse(JSON.stringify(state));
            tag.update();
        });

});