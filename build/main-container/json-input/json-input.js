'use strict';

riot.tag2('json-input', '<div class="form-group" style="height: 100%;"> <label>Response Data</label> <textarea ref="json_input" class="form-control" style="height: 100%;"></textarea> </div> <div class="form-group row mt-5"> <div class="col"> <button ref="reformat_json" type="button" class="btn btn-primary" onclick="{reformatJSON}">Reformat JSON </button> </div> <div class="col text-right"> <button ref="load_json" type="button" class="btn btn-primary" onclick="{opts.open_modal}">Load JSON</button> </div> </div>', '', '', function (opts) {
    var tag = this;

    tag.reformatJSON = reformatJSON;

    tag.on('mount', function () {});

    tag.on('updated', function () {
        var jsonPretty = JSON.stringify(opts.json_data, undefined, 2);
        $(tag.refs.json_input).val(jsonPretty);
    });

    function reformatJSON() {
        var jsonText = $(tag.refs.json_input).val();
        try {
            var jsonParse = JSON.parse(jsonText);
            var jsonPretty = JSON.stringify(jsonParse, undefined, 2);
            $(tag.refs.json_input).val(jsonPretty);
        } catch (error) {
            alert('Not valid JSON');
            return error;
        }
    }
});