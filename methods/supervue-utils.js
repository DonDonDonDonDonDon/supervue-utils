'use strict'

import  setupDefaults from './setupDefaults'

import  arrayEach from './array/arrayEach'
import  each from './base/each'
import  isFunction from './base/isFunction'

import  assign from './object/assign'

function mixin () {
  arrayEach(arguments, function (methods) {
    each(methods, function (fn, name) {
      SupervueUtils[name] = isFunction(fn) ? function () {
        var result = fn.apply(SupervueUtils.$context, arguments)
        SupervueUtils.$context = null
        return result
      } : fn
    })
  })
}

function setup (options) {
  return assign(setupDefaults, options)
}

function SupervueUtils () {}

SupervueUtils.v = 'v2'
SupervueUtils.mixin = mixin
SupervueUtils.setup = setup

export default SupervueUtils
