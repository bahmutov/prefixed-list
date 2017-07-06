'use strict'

const snapshot = require('snap-shot')
const la = require('lazy-ass')

/* global describe, it */
const utils = require('./utils')
const prefixedList = require('.')

describe('utils', () => {
  describe('lengths', () => {
    it('finds lengths of strings', () => {
      const list = ['1', '12', '123']
      const ls = utils.lengths(list)
      snapshot(ls)
    })
  })

  describe('shortest', () => {
    it('finds shortest string length', () => {
      const list = ['1', '12', '123']
      const n = utils.shortest(list)
      la(n === 1, 'shortest string is 1 character', n)
    })
  })
})

describe('prefixed-list', () => {
  it('finds common prefix', () => {
    const list = ['prefix-foo', 'prefix-bar', 'prefix-baz']
    const result = prefixedList(list)
    snapshot(result)
  })

  it('returns empty string for empty list', () => {
    const result = prefixedList([])
    la(result === '')
  })

  it('handles no prefix', () => {
    const list = ['foo', 'bar', 'baz']
    const result = prefixedList(list)
    snapshot(result)
  })
})
