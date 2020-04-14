const SupervueUtils = require('../index')

describe('Date functions', () => {
  let date = new Date(2017, 0, 1, 14, 5, 30, 99)
  let time = date.getTime()
  test('now()', () => {
    expect(
      SupervueUtils.now() >= time
    ).toEqual(true)
  })

  test('timestamp()', () => {
    expect(
      SupervueUtils.timestamp(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.timestamp(123456)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.timestamp('abc')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.timestamp([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.timestamp({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.timestamp(/\d/)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.timestamp(function () {})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.timestamp() >= time
    ).toEqual(true)
    expect(
      SupervueUtils.timestamp(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99).getTime())
    expect(
      SupervueUtils.timestamp(date)
    ).toEqual(time)
    expect(
      SupervueUtils.timestamp('2018-12-01')
    ).toEqual(new Date(2018, 11, 1).getTime())
    expect(
      SupervueUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 459).getTime())
  })

  test('isDateSame()', () => {
    expect(
      SupervueUtils.isDateSame()
    ).toEqual(false)
    expect(
      SupervueUtils.isDateSame(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isDateSame(-1, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isDateSame(-1, -1)
    ).toEqual(false)
    expect(
      SupervueUtils.isDateSame(0, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isDateSame('2018-12-01', '2018-12-11')
    ).toEqual(false)
    expect(
      SupervueUtils.isDateSame('2018-12-01', '2018-12-01')
    ).toEqual(true)
    expect(
      SupervueUtils.isDateSame(time, '2018-12-01', 'yyyy')
    ).toEqual(false)
    expect(
      SupervueUtils.isDateSame(date, SupervueUtils.toStringDate('01/01/2017', 'MM/dd/yyyy'), 'MM')
    ).toEqual(true)
    expect(
      SupervueUtils.isDateSame('2018-01-28', '2018-12-01', 'yyyy')
    ).toEqual(true)
    expect(
      SupervueUtils.isDateSame('2017-12-01', '2018-12-01', 'MM-dd')
    ).toEqual(true)
    expect(
      SupervueUtils.isDateSame(time, date, 'dd')
    ).toEqual(true)
    expect(
      SupervueUtils.isDateSame(time, date, 'yyyyMMdd')
    ).toEqual(true)
  })

  test('toStringDate()', () => {
    expect(
      SupervueUtils.toStringDate(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate('')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate(/\d/)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate(function () {})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate('2')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate('20')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate('201')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate('Year:2018 Month:01 Day:26')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toStringDate('Year:2018 Month:01 Day:26', 'Year:yyyy Month:MM Day:dd')
    ).toEqual(new Date(2018, 0, 26))
    expect(
      SupervueUtils.toStringDate('2020')
    ).toEqual(new Date(2020, 0, 1, 0, 0, 0, 0))
    expect(
      SupervueUtils.toStringDate('2020-02')
    ).toEqual(new Date(2020, 1, 1, 0, 0, 0, 0))
    expect(
      SupervueUtils.toStringDate(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      SupervueUtils.toStringDate('' + time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      SupervueUtils.toStringDate(date)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      SupervueUtils.toStringDate('2017-12-20')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      SupervueUtils.toStringDate('20|2018/12', 'dd|yyyy/MM')
    ).toEqual(new Date(2018, 11, 20))
    expect(
      SupervueUtils.toStringDate('2018/12', 'yyyy/MM')
    ).toEqual(new Date(2018, 11))
    expect(
      SupervueUtils.toStringDate('2017-12-20 10:10:30')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      SupervueUtils.toStringDate('2017-12-20T10:10:30.423+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      SupervueUtils.toStringDate('2017-12-20T10:10:30.423+08:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      SupervueUtils.toStringDate('2017-12-20T10:10:30.423+00:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+00:00'))
    expect(
      SupervueUtils.toStringDate('2017-12-20T10:10:30.423+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+10:00'))
    expect(
      SupervueUtils.toStringDate('2017-12-20T10:10:30.423Z')
    ).toEqual(new Date('2017-12-20T10:10:30.423Z'))
    expect(
      SupervueUtils.toStringDate(1513735830000)
    ).toEqual(new Date(1513735830000))
    expect(
      SupervueUtils.toStringDate(20171220101030)
    ).toEqual(new Date(20171220101030))
    expect(
      SupervueUtils.toStringDate('1513735830000')
    ).toEqual(new Date(1513735830000))
    expect(
      SupervueUtils.toStringDate('20171220101030')
    ).toEqual(new Date(20171220101030))
    expect(
      SupervueUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      SupervueUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      SupervueUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      SupervueUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      SupervueUtils.toStringDate('yyyy:2017 MM:01 dd:20', '%%%%:yyyy %%:MM %%:dd')
    ).toEqual(new Date(2017, 0, 20))
  })

  test('toDateString()', () => {
    expect(
      SupervueUtils.toDateString(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.toDateString(null)
    ).toEqual('')
    expect(
      SupervueUtils.toDateString('')
    ).toEqual('')
    expect(
      SupervueUtils.toDateString(0)
    ).toEqual('')
    expect(
      SupervueUtils.toDateString(123)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString(/\d/)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString(function () {})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString('Year:2018 Month:01 Day:26')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.toDateString('2017')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      SupervueUtils.toDateString('2017-01')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      SupervueUtils.toDateString('2017-02')
    ).toEqual('2017-02-01 00:00:00')
    expect(
      SupervueUtils.toDateString('2017-02-03')
    ).toEqual('2017-02-03 00:00:00')
    expect(
      SupervueUtils.toDateString(time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      SupervueUtils.toDateString('' + time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      SupervueUtils.toDateString(date)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      SupervueUtils.toDateString(time, 'MM/dd/yyyy')
    ).toEqual('01/01/2017')
    expect(
      SupervueUtils.toDateString('2017-01-01 10:05:30', 'M/d/yyyy')
    ).toEqual('1/1/2017')
    expect(
      SupervueUtils.toDateString(date, 'yyyyMMddHHmmssSSS')
    ).toEqual('20170101140530099')
    expect(
      SupervueUtils.toDateString(date, 'yyyy-MM-dd')
    ).toEqual('2017-01-01')
    expect(
      SupervueUtils.toDateString(date, 'yy-M-d')
    ).toEqual('17-1-1')
    expect(
      SupervueUtils.toDateString(date, 'yyyy-MM-dd HH:mm:ss.SSS')
    ).toEqual('2017-01-01 14:05:30.099')
    expect(
      SupervueUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      SupervueUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      SupervueUtils.toDateString('2017-01-07 14:05:30', 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-7 2:5:30.0 6 6')
    expect(
      SupervueUtils.toDateString(date, 'yyyy-M-d H:m:s.S')
    ).toEqual('2017-1-1 14:5:30.99')
    expect(
      SupervueUtils.toDateString(time + 86400000, 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-2 2:5:30.99 1 1')
    expect(
      SupervueUtils.toDateString(time, 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
    ).toEqual('2017年01月01日 14时05分30秒99毫秒,星期7 第1季度')
    expect(
      SupervueUtils.toDateString(time, 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度 今年第D天 今年第W周')
    ).toEqual('17年1月1日 14时5分30秒99毫秒,星期7 第1季度 今年第1天 今年第52周')
    expect(
      SupervueUtils.toDateString(time, 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 星期E e 第q季 今年第DDD天 今年第WW周 a A')
    ).toEqual('2017年01月01日 02时05分30秒099毫秒 星期7 0 第1季 今年第001天 今年第52周 pm PM')
    expect(
      SupervueUtils.toDateString(date, 'yyyy-MM-dd [yyyy-MM-dd] [yyyy]] [[MM]')
    ).toEqual('2017-01-01 yyyy-MM-dd yyyy] [MM')
    expect(
      SupervueUtils.toDateString(date, '[Week] yyyy-MM-dd [[yyyy-MM-dd]]')
    ).toEqual('Week 2017-01-01 [yyyy-MM-dd]')
  })

  test('getWhatYear()', () => {
    expect(
      SupervueUtils.getWhatYear(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatYear(date, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatYear(time, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatYear('2017-12-20', -1)
    ).toEqual(new Date(2016, 11, 20))
    expect(
      SupervueUtils.getWhatYear('2017-12-20', 1)
    ).toEqual(new Date(2018, 11, 20))
    expect(
      SupervueUtils.getWhatYear('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 0, 1, 0, 0, 0, 0))
    expect(
      SupervueUtils.getWhatYear('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 31, 23, 59, 59, 999))
  })

  test('getWhatMonth()', () => {
    expect(
      SupervueUtils.getWhatMonth(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatMonth(date, -1)
    ).toEqual(new Date(2016, 11, 1, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatMonth(time, 1)
    ).toEqual(new Date(2017, 1, 1, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatMonth('2017-12-20', -1)
    ).toEqual(new Date(2017, 10, 20))
    expect(
      SupervueUtils.getWhatMonth('2017-12-20', 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      SupervueUtils.getWhatMonth('2017-12-20', -1, 'first')
    ).toEqual(new Date(2017, 10, 1, 0, 0, 0, 0))
    expect(
      SupervueUtils.getWhatMonth('2017-12-20', 1, 'last')
    ).toEqual(new Date(2018, 0, 31, 23, 59, 59, 999))
  })

  test('getWhatWeek()', () => {
    expect(
      SupervueUtils.getWhatWeek(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatWeek(date, -1)
    ).toEqual(new Date(2016, 11, 25, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatWeek(time, 1)
    ).toEqual(new Date(2017, 0, 8, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatWeek('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 13))
    expect(
      SupervueUtils.getWhatWeek('2017-12-20', 1)
    ).toEqual(new Date(2017, 11, 27))
    expect(
      SupervueUtils.getWhatWeek('2017-12-20', -1, 5)
    ).toEqual(new Date(2017, 11, 15))
    expect(
      SupervueUtils.getWhatWeek('2017-12-20', 1, 0)
    ).toEqual(new Date(2017, 11, 31))
  })

  test('getWhatDay()', () => {
    expect(
      SupervueUtils.getWhatDay(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay(123)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getWhatDay(date, -1)
    ).toEqual(new Date(2016, 11, 31, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatDay(time, 1)
    ).toEqual(new Date(2017, 0, 2, 14, 5, 30, 99))
    expect(
      SupervueUtils.getWhatDay('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      SupervueUtils.getWhatDay('2017-12-20', 1)
    ).toEqual(new Date(2017, 11, 21))
    expect(
      SupervueUtils.getWhatDay('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 11, 20, 0, 0, 0, 0))
    expect(
      SupervueUtils.getWhatDay('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 20, 23, 59, 59, 999))
  })

  test('getYearDay()', () => {
    expect(
      SupervueUtils.getYearDay(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearDay(date)
    ).toEqual(1)
    expect(
      SupervueUtils.getYearDay('2017-01-20')
    ).toEqual(20)
    expect(
      SupervueUtils.getYearDay('2018-05-20')
    ).toEqual(140)
  })

  test('getYearWeek()', () => {
    expect(
      SupervueUtils.getYearWeek(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getYearWeek(date)
    ).toEqual(52)
    expect(
      SupervueUtils.getYearWeek('2017-01-20')
    ).toEqual(3)
    expect(
      SupervueUtils.getYearWeek('2017-01-28')
    ).toEqual(4)
    expect(
      SupervueUtils.getYearWeek('2018-05-20')
    ).toEqual(20)
    expect(
      SupervueUtils.getYearWeek('2018-11-20')
    ).toEqual(47)
    expect(
      SupervueUtils.getYearWeek('2018-12-20')
    ).toEqual(51)
  })

  test('getMonthWeek()', () => {
    expect(
      SupervueUtils.getMonthWeek(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getMonthWeek(date)
    ).toEqual(4)
    expect(
      SupervueUtils.getMonthWeek('2017-01-01')
    ).toEqual(4)
    expect(
      SupervueUtils.getMonthWeek('2017-01-20')
    ).toEqual(3)
    expect(
      SupervueUtils.getMonthWeek('2018-05-20')
    ).toEqual(2)
    expect(
      SupervueUtils.getMonthWeek('2018-05-25')
    ).toEqual(3)
    expect(
      SupervueUtils.getMonthWeek('2018-05-29')
    ).toEqual(4)
  })

  test('getDayOfYear()', () => {
    expect(
      SupervueUtils.getDayOfYear(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfYear(date)
    ).toEqual(365)
    expect(
      SupervueUtils.getDayOfYear(time)
    ).toEqual(365)
    expect(
      SupervueUtils.getDayOfYear('2017-12-20')
    ).toEqual(365)
    expect(
      SupervueUtils.getDayOfYear('2019-12-20', 1)
    ).toEqual(366)
    expect(
      SupervueUtils.getDayOfYear('2020-12-20')
    ).toEqual(366)
  })

  test('getDayOfMonth()', () => {
    expect(
      SupervueUtils.getDayOfMonth(0)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth(-1)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth(null)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth(undefined)
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth({})
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth([])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth('null')
    ).toEqual('Invalid Date')
    expect(
      SupervueUtils.getDayOfMonth(date)
    ).toEqual(31)
    expect(
      SupervueUtils.getDayOfMonth(time)
    ).toEqual(31)
    expect(
      SupervueUtils.getDayOfMonth('2017-12-20')
    ).toEqual(31)
    expect(
      SupervueUtils.getDayOfMonth('2017-12-20', -1)
    ).toEqual(30)
    expect(
      SupervueUtils.getDayOfMonth('2017-12-20', 1)
    ).toEqual(31)
  })

  test('getDateDiff()', () => {
    expect(
      SupervueUtils.getDateDiff(0)
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff(-1)
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff(null)
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff(undefined)
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff(undefined, null)
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff([])
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff(null, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff([], {})
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff({ time: 2018 }, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff(0, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff([2018, 1, 1], '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff([2018, 1, 1], 0)
    ).toEqual({ done: false, time: 0 })
    expect(
      SupervueUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30).getTime(), new Date(2017, 0, 1, 15, 1, 48).getTime())
    ).toEqual({ done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      SupervueUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30), new Date(2017, 0, 1, 15, 1, 48))
    ).toEqual({ done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      SupervueUtils.getDateDiff('2017-11-20', '2017-12-21')
    ).toEqual({ done: true, time: 2678400000, yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      SupervueUtils.getDateDiff('2017-12-20', '2017-12-21')
    ).toEqual({ done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      SupervueUtils.getDateDiff('2018-01-01', '2017-12-21')
    ).toEqual({ done: false, time: 0 })
  })
})
