import { describe, expect, test } from 'vitest';

import { mergeDefaults } from '../utils/mergeDefaults.js';
import {
    checkCircular,
    countNodes,
    countWords,
    createTrieRootFromList,
    findNode,
    has,
    isCircular,
    iteratorTrieWords,
    validateTrie,
} from './trie-util.js';

const oc = <T>(obj: T) => expect.objectContaining(obj);

describe('Validate Util Functions', () => {
    test('createTriFromList', () => {
        const trie = createTrieRootFromList(words);
        expect(has(trie, 'sample')).toBe(true);
        expect(has(trie, 'not found')).toBe(false);
    });

    test('has', () => {
        const trie = createTrieRootFromList(words);
        // cspell:ignore sampl
        expect(has(trie, 'sample')).toBe(true);
        expect(has(trie, 'sampl')).toBe(false);
    });

    test('find', () => {
        const trie = createTrieRootFromList(words);
        expect(has(trie, 'sample')).toBe(true);
        // cspell:ignore sampl samp
        const n0 = findNode(trie, 'sample');
        const n1 = findNode(trie, 'sampl');
        const n2 = findNode(trie, 'samp');
        expect(n0?.f).toBeTruthy();
        expect(n1?.c?.['e']).toBe(n0);
        expect(n2?.c?.['l']).toBe(n1);
    });

    test('countNodes', () => {
        const trie = createTrieRootFromList(words);
        expect(countNodes(trie)).toBe(73);
    });

    test('isCircular', () => {
        const trie = createTrieRootFromList(words);
        expect(isCircular(trie)).toBe(false);
        const n = findNode(trie, 'samp');
        n && n.c && (n.c['x'] = trie);
        expect(isCircular(trie)).toBe(true);
    });

    test('checkCircular', () => {
        const trie = createTrieRootFromList(words);
        expect(isCircular(trie)).toBe(false);
        const cir = findNode(trie, 'sp');
        const n = findNode(trie, 'space');
        n && n.c && (n.c['s'] = cir || trie);
        const { ref } = checkCircular(trie);
        if (ref) ref.stack = [];
        expect(ref).toEqual(oc({ word: 'spaces', pos: 2 }));
        expect(validateTrie(trie).isValid).toBe(false);
    });

    test('countWords', () => {
        const trie = createTrieRootFromList(words);
        expect(countWords(trie)).toBe(19);
        const n = findNode(trie, 'samp');
        n && n.c && (n.c['x'] = trie);
        expect(isCircular(trie)).toBe(true);
        expect(countWords(trie)).toBe(19);
    });

    test('iteratorTrieWords', () => {
        const trie = createTrieRootFromList(words);
        expect([...iteratorTrieWords(trie)].join(' ')).toBe(
            'These There are some someone sample space spaces. words worry. with for everyone extra to use, complete is no',
        );
    });

    test('mergeDefaults', () => {
        const a = { a: 1, b: 'b', c: 'c' };
        const b = { a: 3, b: 'bb' };

        expect(mergeDefaults(a, b)).toEqual({ a: 1, b: 'b' });
        expect(mergeDefaults(b, a)).toEqual({ a: 3, b: 'bb', c: 'c' });
    });
});

describe('validateTrie', () => {
    test('validateTrie valid', () => {
        const trie = createTrieRootFromList(words);
        expect(validateTrie(trie)).toEqual(oc({ isValid: true }));

        const n = findNode(trie, 'sa');
        n && n.c && (n.c['😀'[0]] = {});

        expect(validateTrie(trie)).toEqual(
            oc({ isValid: false, error: `Invalid character "${'😀'[0]}" in trie node` }),
        );
    });
});

const sentence =
    'These are some sample words for everyone to use, complete with extra    spaces. There is no space for someone to worry.';
const words = sentence.split(' ');
