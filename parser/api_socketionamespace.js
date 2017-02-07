var trim = require('../utils/trim');
//var trim = require('../utils/trimed');

function parse(content) {
    var socketnamespace = trim(content);

    if(socketnamespace.length === 0)
        return null;

    return {
        socketnamespace: socketnamespace.replace(/(\s+)/g, '_')
    };
}

/**
 * Exports
 */
module.exports = {
    parse : parse,
    path  : 'local',
    method: 'insert'
};