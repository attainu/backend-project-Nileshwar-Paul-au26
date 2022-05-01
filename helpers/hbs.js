const moment = require('moment');


module.exports = {
    // Formatting the date !
    formatDate: function (date, format) {
        return moment(date).format(format)

    },
    // Truncating the data !
    truncate: function (str, len) {
        if (str.length > len && str.length > 0) {
            let new_str = str + ' '
            new_str = str.substr(0, len)
            new_str = str.substr(0, new_str.lastIndexOf(' '))
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)
            return new_str + '...'
        }
        return str
    },
    // creating regular expression from any html tags !
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '')
    }
}