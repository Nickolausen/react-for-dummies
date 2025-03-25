export const CONNECTION_STATUS = {
    CONNECTED: 0,
    DISCONNECTED: 1
}

export function createConnection() {
    // A real implementation would actually connect to the server
    return {
        connect() {
            return CONNECTION_STATUS.CONNECTED
        },
        disconnect() {
            return CONNECTION_STATUS.DISCONNECTED
        }
    };
  }