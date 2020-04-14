'use strict'

import  padEnd from './padEnd'
import  padStart from './padStart'
import  repeat from './repeat'
import  trim from './trim'
import  trimRight from './trimRight'
import  trimLeft from './trimLeft'
import  escape from './escape'
import  unescape from './unescape'
import  camelCase from './camelCase'
import  kebabCase from './kebabCase'
import  startsWith from './startsWith'
import  endsWith from './endsWith'
import  template from './template'
import  toValString from './toString'

var stringExports = {
  trim: trim,
  trimLeft: trimLeft,
  trimRight: trimRight,
  escape: escape,
  unescape: unescape,
  camelCase: camelCase,
  kebabCase: kebabCase,
  repeat: repeat,
  padStart: padStart,
  padEnd: padEnd,
  startsWith: startsWith,
  endsWith: endsWith,
  template: template,
  toString: toValString
}

export default stringExports
