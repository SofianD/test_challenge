const { join } = require('path');
const getFilesExtensions = require('../08')

const dirName = join(__dirname, 'mock_dir_test_8')

describe('GetFilesExtensions', () => {
    it('should return Set{".md", ".js", ".html"}', async () => {
        const fileExtensions = await getFilesExtensions(dirName);
        const validExtensions = new Set(['.md', '.js', '.html']);
        expect(fileExtensions).toEqual(validExtensions);
    })

    it('should throw if the argument is not a dir', async () => {
        expect(async () => {
            await getFilesExtensions(__filename)
        }).rejects.toThrow("dir must be a directory!");     //  Ligne 22: seems to be uncovered but...
    })

    it('should throw if called without argument', async () => {
        expect(async () => await getFilesExtensions()).rejects.toThrow()
    })
})
