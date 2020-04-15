'use strict'

var setupDefaults = require('./setupDefaults')

var arrayEach = require('./array/arrayEach')
var each = require('./base/each')
var isFunction = require('./base/isFunction')

var assign = require('./object/assign')

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

module.exports = SupervueUtils
