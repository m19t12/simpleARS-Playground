riot.tag2('json-input', '<div class="form-group" style="height: 100%;"> <label>Response Data</label> <textarea ref="json_input" class="form-control" style="height: 100%;"></textarea> </div> <div class="form-group row mt-5"> <div class="col"> <button ref="reformat_json" type="button" class="btn btn-primary" onclick="{reformatJSON}">Reformat JSON </button> </div> <div class="col text-right"> <button ref="load_json" type="button" class="btn btn-primary" onclick="{opts.open_modal}">Load JSON</button> </div> </div>', '', '', function(opts) {
        const tag = this;

        tag.reformatJSON = reformatJSON;
        tag.getJSONData = getJSONData;
        tag.insertData = insertData;

        tag.on('mount', () => {
            let json_input = $(tag.refs.json_input);

            json_input.bind("paste", (e) => {
                let pastedData = e.originalEvent.clipboardData.getData('text');
                console.log(pastedData);
                opts.add_data(pastedData);
            });
        });

        function reformatJSON() {
            let jsonText = $(tag.refs.json_input).val();
            try {
                let jsonParse = JSON.parse(jsonText);
                let jsonPretty = JSON.stringify(jsonParse, undefined, 2);
                $(tag.refs.json_input).val(jsonPretty);
            } catch (error) {
                alert('Not valid JSON');
                return error;
            }
        }

        function getJSONData() {
            let jsonText = $(tag.refs.json_input).val();
            return JSON.parse(jsonText);
        }

        function insertData(json_data) {
            let jsonPretty = JSON.stringify(json_data, undefined, 2);
            $(tag.refs.json_input).val(jsonPretty);
        }
});