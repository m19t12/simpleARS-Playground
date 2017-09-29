'use strict';

riot.tag2('data-table', '<div class="form-group"> <table ref="data_table" class="display" width="100%"> </table> </div>', '', '', function (opts) {
    var tag = this;

    tag.on('updated', function () {
        ars(opts.processed_data);
    });

    function ars(data) {
        var firstItem = data[0];
        var titles = Object.keys(firstItem);
        var columnsData = [];

        titles.forEach(function (title) {
            var sub_keys = [];

            if (babelHelpers.typeof(firstItem[title]) === "object") {
                sub_keys = Object.keys(firstItem[title]);
            }

            if (sub_keys.length > 0) {
                sub_keys.forEach(function (sub_title) {
                    columnsData.push({ data: title + "." + sub_title, title: sub_title });
                });
            } else {
                columnsData.push({ data: title, title: title });
            }
        });

        if ($.fn.DataTable.isDataTable(tag.refs.data_table)) {
            $(tag.refs.data_table).DataTable().destroy();
            $(tag.refs.data_table).empty();
        }

        $(tag.refs.data_table).DataTable({
            data: data,
            columns: columnsData
        });
    }
});