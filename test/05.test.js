const { test, expect } = require('@jest/globals');

const Server = require("../05")
// c'est quoi OHNO?
describe('Server', () => {
    const server = new Server()
    test(
        'is instantiated',
        () => {
            expect(server).toBeInstanceOf(Server);
        }
    )
    test(
        'callMeMaybe() throw an error if called before sending the "ready" event',
        () => {
            expect(() => {
                return server.callMeMaybe();
            })
            .toThrow('Server must be ready!');
        }
    )

    test(
        'isReady returns true after event "ready"',
        done => {
            server.on('ready', () => {
                setTimeout(
                    function() {
                        try {
                            expect(server.isReady).toBe(true);
                            done();
                        } catch (error) {
                            done(error);
                        }
                    }
                )
            })
        }
    )

    test(
        'callMeMaybe() send data to process.stdout',
        () => {
            process.stdout.write = jest.fn();
            server.callMeMaybe();
            expect(process.stdout.write.mock.calls.length).toBe(1);
        }
    )
})

