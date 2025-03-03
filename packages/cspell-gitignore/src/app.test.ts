import * as path from 'node:path';

import type { MockInstance } from 'vitest';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import * as app from './app.js';

describe('app', () => {
    let log: MockInstance<typeof console.log>;
    let error: MockInstance<typeof console.error>;

    beforeEach(() => {
        log = vi.spyOn(console, 'log').mockImplementation(() => undefined);
        error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test.each`
        params
        ${[path.basename(__dirname) + '/code.ts']}
        ${['../node_modules']}
        ${['../node_modules/.bin/run.mjs']}
        ${['-r', '.', 'dist']}
        ${['temp']}
        ${['-r', '.', 'temp']}
        ${['-r', '.']}
        ${[]}
        ${[' ']}
    `('app.run $params', async ({ params }) => {
        await app.run(['', '', ...params]);
        const stderr = error.mock.calls
            .map((c) => c.join(''))
            .join('\n')
            .replaceAll('\\', '/');
        const stdout = log.mock.calls
            .map((c) => c.join(''))
            .join('\n')
            .replaceAll('\\', '/');
        expect(stdout).toMatchSnapshot();
        expect(stderr).toMatchSnapshot();
    });

    test.each`
        params    | expected
        ${['-r']} | ${new Error('Missing root parameter.')}
    `('app.run errors $params', async ({ params, expected }) => {
        await expect(app.run(['', '', ...params])).rejects.toEqual(expected);
    });

    test('app.help', async () => {
        await app.run(['', '', '--help']);
        expect(error).toHaveBeenCalledTimes(0);
        expect(log.mock.calls).toMatchSnapshot();
    });
});
