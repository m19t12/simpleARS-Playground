'use strict';

riot.tag2('query-input', '<div class="form-group"> <label for="query_text">Query Input</label> <textarea ref="query_text" class="form-control" id="query_text"></textarea> </div> <div class="form-group text-right"> <button ref="execute_query" type="button" class="btn btn-primary" onclick="{executeQuery}">Execute Query </button> </div>', '', '', function (opts) {
    var tag = this;

    tag.executeQuery = executeQuery;

    function executeQuery() {
        var query = $(tag.refs.query_text).val();
        try {
            var json_query = JSON.parse(query);
            opts.process_query(json_query);
        } catch (error) {
            alert('Invalid JSON input');
            return error;
        }
    }
});