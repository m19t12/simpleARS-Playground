riot.tag2('data-table', '<div class="form-group"> <table ref="data_table" class="display" width="100%"> </table> </div>', '', '', function(opts) {
        const tag = this;

        tag.on('updated', () => {
            ars(opts.processed_data);
        });

        function ars(data) {
            let parseData = data;
            let titles = Object.keys(data[0]);
            let columns_data = [];

            titles.forEach((title) => {
                columns_data.push(
                    {data: title, title: title}
                );
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