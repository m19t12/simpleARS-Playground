'use strict';

riot.tag2('json-input', '<div class="form-group" style="height: 100%;"> <label for="json_input">Response Data</label> <textarea ref="json_input" class="form-control" id="json_input" style="height: 100%;"></textarea> </div> <div class="form-group row mt-5"> <div class="col"> <button ref="reformat_json" type="button" class="btn btn-primary">Reformat JSON</button> </div> <div class="col text-right"> <button ref="load_json" type="button" class="btn btn-primary" data-toggle="modal">Load JSON </button> </div> </div>', '', '', function (opts) {
        var tag = this;
});