'use strict';

riot.tag2('modal', '<div class="modal fade" ref="load_data_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">Load data from API</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <label>Give End Point</label> <textarea ref="url_input" class="form-control"></textarea> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> <button ref="load_data" type="button" class="btn btn-primary" onclick="{loadData}">Load Data</button> </div> </div> </div> </div>', '', '', function (opts) {
    var tag = this;

    tag.loadData = loadData;

    tag.on('mount', function () {
        tag.modal = $(tag.refs.load_data_modal);
    });

    function loadData() {
        var url = $(tag.refs.url_input).val();

        opts.load_json_data(url);
    }
});