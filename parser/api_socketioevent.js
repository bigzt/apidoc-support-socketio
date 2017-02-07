var trim = require('../utils/trim');

function parse(content) {
    var socketevent = trim(content);

    if(socketevent.length === 0)
        return null;

    return {
        socketevent: socketevent.replace(/(\s+)/g, '_')
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
