const { once } = require('events');
const Server = require("../05")

describe('Server', () => {
    test('is instantiated', () => {
        const server = new Server()
        expect(server).toBeInstanceOf(Server);
    })
})

describe('Server.isReady method', () => {
    it('should return false before event "ready"' , async () => {
        const server = new Server();
        expect(server.isReady).toBe(false);
    })

    it('should return true after event "ready"' , async () => {
        const server = new Server();
        await once(server, 'ready');
        expect(server.isReady).toBe(true); // fonctionne aussi sans setImmediate, pê pcq once fais une opération entre le déclenchement de l'event et son "invocation"
        // setImmediate(() => expect(server.isReady).toBe(true)); // Node14...
    })
})

describe('Server.callMeMaybe method', () => {
    // ça serait bizarre de faire des require de la classe Server... non?
    // ceci dit cette solution m'a pas l'air mieux:
    // const A = () => {
    //     return JSON.parse(JSON.stringify(Server))
    // };
    // A.OHNO = false
    // console.log(Server.OHNO) // true
    // console.log(A.OHNO)      // false
    it ('should return "FOO BAR!" if Server.OHNO is undefined', async () => {
        process.stdout.write = jest.fn(x => x);
        const server = new Server();
        try {
            Server.OHNO = undefined;
            await once(server, 'ready');
            server.callMeMaybe();
            expect(process.stdout.write.mock.calls.length).toBe(1);
            expect(process.stdout.write.mock.results[0].value).toBe('FOO BAR!');
        } catch (error) {
            throw error
        } finally {
            if (Server.OHNO !== true) Server.OHNO = true;
        }
    })

    it('shpould throw an error if called before sending the "ready" event', () => {
        const server = new Server();
        expect(() => server.callMeMaybe()).toThrow('Server must be ready!');
    })
    it ('should return "WELL DONE!" if Server.OHNO is defined', async () => {
        process.stdout.write = jest.fn(x => x);
        const server = new Server();
        await once(server, 'ready');
        server.callMeMaybe();
        // setImmediate(() => server.callMeMaybe());
        expect(process.stdout.write.mock.calls.length).toBe(1);
        expect(process.stdout.write.mock.results[0].value).toBe('WELL DONE!');
    })
})
