const { test, expect } = require('@jest/globals');

const Server = require("../05")

describe('Server', () => {
    test(
        'emit ',
        done => {
            const server = new Server()
            server.on('ready', () => {
                setTimeout(
                    function() {
                        try {
                            expect(server.isReady).toBe(true);
                            done()
                        } catch (error) {
                            done(error)
                        }
                    }
                )
            })
            
        }
    )
})

