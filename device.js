"use strict";

class Device {

    constructor(deviceName, deviceId, socket) {
        this.deviceName = deviceName;
        this.deviceId = deviceId;
        this.socket = socket;
        this.status = 'connected';
        this.connectedSocket = null; // web socket
    }

    initConnect() {
        var me = this
        if (this.connectedSocket === null) {
            console.log('socket disconnected');    
        } else {
            console.log('socket connected');
            this.connectedSocket.on('new message', function (data) {
                console.log(data);
                if (!me.connectedSocket) return;
                me.socket.emit('new message', {
                    command: 'Hello command',
                    id: data
                });
            });
        }
        this.socket.broadcast.emit('device');
    }

    initDeviceSocket() {
        var me = this;
        this.socket.on('length detect', function (data) {
            console.log(data);
            if (!me.connectedSocket) return;
            me.connectedSocket.emit('length detect', data);
        });
    }
}

module.exports = Device;