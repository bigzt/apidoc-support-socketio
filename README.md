# apidoc-support-socketio

Generates a RESTful web API Documentation.

This module was forked from [apidoc-support-socketio](https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/apidoc-support-socketio)

## Features not in the original apidoc
- Support socket.io emit / on ( in sendSampleRequest )
- Display request status by printing "Loading..."  ( in sendSampleRequest )
- Object parse. You can input object "{ name: 'UC' }" as a string  ( in sendSampleRequest )

## Changes
- Add two new parameters apisocketionamespace and apisocketioevent ( in .\parser\*， copy them to node_modules\apidoc-core-forked-v1\lib\parsers, and add them in node_modules\apidoc-core-forked-v1\lib\parser.js)
  E.g 
  @apisocketionamespace user
  @apisocketioevent user
- let the web show socket.io namespace and socket.io event (in index.html)
- update socket.io lib to 1.3.5
- support emit event with namespace ( in sendSampleRequest )
- support listen on event ( in sendSampleRequest )
- support multiplexing with socket.io 1.3.5

## Todo
- Debug, when connection disconnect from server side, the namespace can't reconnect until fresh the page.
- Optimize the respond of 'on' 
