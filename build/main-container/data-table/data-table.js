'use strict';

riot.tag2('data-table', '<div class="form-group"> <table ref="data_table" class="display" width="100%"> </table> </div>', '', '', function (opts) {
    var tag = this;

    tag.on('updated', function () {
        ars(opts.processed_data);
    });

    function ars(data) {
        var parseData = data;
        var titles = Object.keys(data[0]);
        var columns_data = [];

        titles.forEach(function (title) {
            columns_data.push({ data: title, title: title });
        });

        if ($.fn.DataTable.isDataTable(tag.refs.data_table)) {
            $(tag.refs.data_table).DataTable().destroy();
            $(tag.refs.data_table).empty();
        }

        $(tag.refs.data_table).DataTable({
            data: parseData,
            columns: columns_data
        });
    }
});