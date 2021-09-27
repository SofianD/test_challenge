const { test, expect, beforeAll, afterAll } = require('@jest/globals');
const {mkdir, rm, writeFile} = require('fs/promises')

const getFilesExtensions = require('../08')
const dirName = './test/fake_dir/'

describe('GetFilesExtensions', () => {
    beforeAll(async () => {
        try {
            await mkdir(dirName)
            await writeFile(dirName + 'fakeFile.js', '')
            await writeFile(dirName + 'fakeFile.html', '')
            await mkdir(dirName + 'sub_dir')
            await writeFile(dirName + 'fakeFile.md', '')
        } catch (error) {
            console.log(error)
        }

    })
    afterAll(async () => {
        try {
            await rm(dirName, {recursive: true})
        } catch (error) {
            console.log(error)
        }
    })

    test(
        'works',
        async () => {
            expect(await getFilesExtensions(dirName)).toEqual(new Set(['.md', '.js', '.html']))
        }
    )

    test(
        'works only with dir path',
        async () => {
            // expect(await getFilesExtensions(dirName)).toEqual(new Set(['.md', '.js', '.html']))
            expect(async () => {
                await getFilesExtensions(dirName + 'fakeFile.js')
            }).rejects.toThrow("dir must be a directory!")
        }
    )
})
