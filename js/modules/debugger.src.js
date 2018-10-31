/* *
 * (c) 2010-2018 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */

'use strict';

import H from '../parts/Globals.js';

/**
 * **Can't plot zero or subzero values on a logarithmic axis**
 *
 * This error occurs in the following situations:
 *
 * - If a zero or subzero data value is added to a logarithmic axis
 *
 * - If the minimum of a logarithimic axis is set to 0 or less
 *
 * - If the threshold is set to 0 or less
 *
 * Note: As of Highcharts 5.0.8 it is possible to bypass this error message by
 * setting Axis.prototype.allowNegativeLog to true and add custom conversion
 * functions. [View live demo](https://jsfiddle.net/gh/get/library/pure/
 * highcharts/highcharts/tree/samples/highcharts/yaxis/type-log-negative/).
 *
 * @private
 * @event Highcharts.Chart#event:error10
 */

/**
 * **Can't link axes of different type**
 *
 * This error occurs if you are using the linkedTo option to link two axes of
 * different types, for example a logarithmic axis to a linear axis. Highcharts
 * can't link those because the calculation of ticks, extremes, padding etc. is
 * different.
 *
 * @private
 * @event Highcharts.Chart#event:error11
 */

/**
 * **Highcharts expects point configuration to be numbers or arrays in turbo
 * mode**
 *
 * This error occurs if the series.data option contains object configurations
 * and the number of points exceeds the turboThreshold. It can be fixed by
 * either setting the turboThreshold option to a higher value, or changing your
 * point configurations to numbers or arrays.
 *
 * See [plotOptions.series.turboThreshold](https://api.highcharts.com/
 * highcharts#plotOptions.series.turboThreshold)
 *
 * @private
 * @event Highcharts.Chart#event:error12
 */

/**
 * **Rendering div not found**
 *
 * This error occurs if the [chart.renderTo](https://api.highcharts.com/
 * highcharts#chart.renderTo) option is misconfigured so that Highcharts is
 * unable to find the HTML element to render the chart in.
 *
 * @private
 * @event Highcharts.Chart#event:error13
 */

/**
 * **String value sent to series.data, expected Number**
 *
 * This happens if you pass in a string as a data point, for example in a setup
 * like this:
 *
 * ```
 * series: [{
 *     data: ["3", "5", "1", "6"]
 * }]
 * ```
 *
 * Highcharts expects the data values to be numbers. The most common reason for
 * this is that data is parsed from CSV or from a XML source, and the
 * implementer forgot to run `parseFloat` on the parsed value.
 *
 * Note: For performance reasons internal type casting is not performed, and
 * only the first value is checked (since 2.3).
 *
 * @private
 * @event Highcharts.Chart#event:error14
 */

/**
 * **Highcharts expects data to be sorted**
 *
 * This happens when you are trying to create a line series or a stock chart
 * where the data is not sorted in ascending X order. For performance reasons,
 * Highcharts does not sort the data, instead it is required that the
 * implementer pre-sorts the data.
 *
 * @private
 * @event Highcharts.Chart#event:error15
 */

/**
 * **Highcharts already defined in the page**
 *
 * This error happens the second time Highcharts or Highstock is loaded in the
 * same page, so the `Highcharts` namespace is already defined. Keep in mind
 * that the `Highcharts.Chart` constructor and all features of Highcharts are
 * included in Highstock, so if you are running `Chart` and `StockChart` in
 * combination, you only need to load the highstock.js file.
 *
 * @private
 * @event Highcharts.Chart#event:error16
 */

/**
 * **The requested series type does not exist**
 *
 * This error happens when you are setting `chart.type` or `series.type` to a
 * series type that isn't defined in Highcharts. A typical reason may be that
 * your are missing the extension file where the series type is defined, for
 * example in order to run an `arearange` series you need to load the
 * `highcharts-more.js` file.
 *
 * @private
 * @event Highcharts.Chart#event:error17
 */

/**
 * **The requested axis does not exist**
 *
 * This error happens when you set a series' `xAxis` or `yAxis` property to
 * point to an axis that does not exist.
 *
 * @private
 * @event Highcharts.Chart#event:error18
 */

/**
 * **Too many ticks**
 *
 * This error happens when you try to apply too many ticks to an axis,
 * specifically when you add more ticks than the axis pixel length.
 *
 * With default value this will not happen, but there are edge cases, for
 * example when setting axis categories and `xAxis.labels.step` in combination
 * with a long data range, when the axis is instructed to create a great number
 * of ticks.
 *
 * @private
 * @event Highcharts.Chart#event:error19
 */

/**
 * **Can't add object point configuration to a long data series**
 *
 * In Highstock, if you try to add a point using the object literal
 * configuration syntax, it works only when the number of data points is below
 * the series' [turboThreshold](https://api.highcharts.com/highstock#
 * plotOptions.series.turboThreshold). Instead of the object syntax, use the
 * Array syntax.
 *
 * @private
 * @event Highcharts.Chart#event:error20
 */

/**
 * **Can't find Proj4js library**
 *
 * Using latitude/longitude functionality in Highmaps requires the [Proj4js](
 * http://proj4js.org) library to be loaded.
 *
 * @private
 * @event Highcharts.Chart#event:error21
 */

/**
 * **Map does not support latitude/longitude**
 *
 * The loaded map does not support latitude/longitude functionality. This is
 * only supported with maps from the [official Highmaps map collection](https://
 * code.highcharts.com/mapdata) from version 1.1.0 onwards. If you are using a
 * custom map, consider using the [Proj4js](https://proj4js.org) library to
 * convert between projections.
 *
 * @private
 * @event Highcharts.Chart#event:error22
 */

/**
 * **Unsupported color format used for color interpolation**
 *
 * Highcharts supports three color formats primarily: hex (`#FFFFFF`), rgb
 * (`rgba(255,255,255)`) and rgba (`rgba(255,255,255,1)`). If any other format,
 * like 3-digit colors (`#FFF`), named colors (`white`) or gradient structures
 * are used in for example a heatmap, Highcharts will fail to interpolate and
 * just jumps to the end color.
 *
 * We have chosen to preserve this limitation in order to keep the weight of the
 * implementation at a minimum.
 *
 * @private
 * @event Highcharts.Chart#event:error23
 */

/**
 * **Cannot run Point.update on a grouped point**
 *
 * This happens in Highstock when a point is grouped by data grouping, so there
 * is no reference to the raw points.
 *
 * @private
 * @event Highcharts.Chart#event:error24
 */

/**
 * **Can't find Moment.js library**
 *
 * Using the global.timezone option requires the [Moment.js](https://
 * momentjs.com/) library to be loaded.
 *
 * @private
 * @event Highcharts.Chart#event:error25
 */

/**
 * **WebGL not supported, and no fallback module included**
 *
 * This happens when your browser does not support WebGL, **and** the canvas
 * fallback module (`boost-canvas.js`) has not been included OR if the fallback
 * module was included **after** the boost module.
 *
 * Make sure you include `boost-canvas.js`, and that it's included before
 * `boost.js`.
 *
 * @private
 * @event Highcharts.Chart#event:error26
 */

/**
 * **This browser does not support SVG.**
 *
 * This happens in old IE when the `oldie.js` module is not loaded.
 *
 * If you need to target IE versions 6, 7 and 8, add the module after loading
 * `highcharts.js`. In a website context, it is a good idea to load it in a
 * conditional comment to avoid traffic overhead in modern browsers:
 *
 * ```
 * <!--[if lt IE 9]>
 *     <script src='https://code.highcharts.com/modules/oldie.js'></script>
 * <![endif]-->
 * ```
 *
 * @private
 * @event Highcharts.Chart#event:error27
 */

/**
 * **Fallback to export server disabled**
 *
 * This happens when the offline export module encounters a chart it can not
 * export successfully, and the fallback to the online export server is
 * disabled. The offline exporting module will fail for certain browsers, and
 * certain features (e.g. [exporting.allowHTML](https://api.highcharts.com/
 * highcharts/exporting.allowHTML)), depending on the type of image exporting
 * to. For a compatibility overview, see [Client Side Export](https://
 * www.highcharts.com/docs/export-module/client-side-export).
 *
 * For very complex charts, it is possible that export can fail in browsers that
 * don't support Blob objects, due to data URL length limits. It is always
 * recommended to define the [exporting.error](https://api.highcharts.com/
 * highcharts/exporting.error) callback if you disable fallback, so that you can
 * provide details to your users if export is not working for them.
 *
 * @private
 * @event Highcharts.Chart#event:error28
 */


var messages = {
    '10': {
        'title': 'Can not plot zero or subzero values on a logarithmic axis',
        'text': '<p>Error 10 text </p>'
    },
    '11': {
        'title': 'Can not link axes of different type',
        'text': '<p>Error 11 text </p>'
    },
    '12': {
        'title': 'Highcharts expects point configuration to be numbers or ' +
            'arrays in turbo\nmode',
        'text': '<p>Error 12 text </p>'
    },
    '13': {
        'title': 'Rendering div not found',
        'text': '<p>Error 13 text </p>'
    },
    '14': {
        'title': 'String value sent to series.data, expected Number',
        'text': '<p>Error 14 text </p>'
    },
    '15': {
        'title': 'Highcharts expects data to be sorted',
        'text': '<p>Error 15 text </p>'
    },
    '16': {
        'title': 'Highcharts already defined in the page',
        'text': '<p>Error 16 text </p>'
    },
    '17': {
        'title': 'The requested series type does not exist',
        'text': '<p>Error 17 text </p>'
    },
    '18': {
        'title': 'The requested axis does not exist',
        'text': '<p>Error 18 text </p>'
    },
    '19': {
        'title': 'Too many ticks',
        'text': '<p>Error 19 text </p>'
    },
    '20': {
        'title': 'Can not add object point configuration to a long data series',
        'text': '<p>Error 20 text </p>'
    },
    '21': {
        'title': 'Can not find Proj4js library',
        'text': '<p>Error 21 text </p>'
    },
    '22': {
        'title': 'Map does not support latitude/longitude',
        'text': '<p>Error 22 text </p>'
    },
    '23': {
        'title': 'Unsupported color format used for color interpolation',
        'text': '<p>Error 23 text </p>'
    },
    '24': {
        'title': 'Cannot run Point.update on a grouped point',
        'text': '<p>Error 24 text </p>'
    },
    '25': {
        'title': 'Can not find Moment.js library',
        'text': '<p>Error 25 text </p>'
    },
    '26': {
        'title': 'WebGL not supported, and no fallback module included',
        'text': '<p>Error 26 text </p>'
    },
    '27': {
        'title': 'This browser does not support SVG.',
        'text': '<p>Error 27 text </p>'
    },
    '28': {
        'title': 'Fallback to export server disabled',
        'text': '<p>Error 28 text </p>'
    },
    'meta': {
        'files': [
            {
                'path': 'js/modules/debugger.src.js',
                'line': 0
            }
        ],
        'version': '6.1.4'
    }
};


var addEvent = H.addEvent,
    isNumber = H.isNumber,
    setOptions = H.setOptions,
    each = H.each;

setOptions({
    chart: {
      /**
       * Whether to display errors on the chart. When `false`, the errors will
       * be shown only in the console. Requires `debugger.js` module.
       *
       * @type {Boolean}
       * @default true
       * @sample highcharts/chart/display-errors/
       *         True by default
       * @since 7.0.0
       * @apioption chart.displayErrors
       */
        displayErrors: true
    }
});

addEvent(H.Chart, 'displayError', function (e) {
    var chart = this,
        code = e.code,
        errorElements = this.errorElements || [],
        msg,
        options = chart.options.chart,
        renderer = chart.renderer,
        chartWidth,
        chartHeight;

    if (errorElements.length) {
        each(errorElements, function (el) {
            el.destroy();
        });
    }

    if (options.displayErrors) {
        msg = isNumber(code) ? 'Highcharts error #' + code + ': ' +
            messages[code].title + messages[code].text : code;
        chartWidth = chart.chartWidth;
        chartHeight = chart.chartHeight;

        // Render red chart frame.
        errorElements[0] = renderer.rect(
            2,
            2,
            chartWidth - 4,
            chartHeight - 4
        ).attr({
            'stroke-width': 4,
            stroke: '#ff0000',
            zIndex: 3
        }).add();

        // Render error message.
        errorElements[1] = renderer.label(
            msg,
            0,
            0,
            'rect',
            null,
            null,
            true
        ).css({
            color: '#ffffff',
            width: chartWidth - 16,
            padding: 0
        }).attr({
            fill: '#ff0000',
            width: chartWidth,
            padding: 8,
            zIndex: 10
        }).add();

        errorElements[1].attr({
            y: chartHeight - errorElements[1].getBBox().height
        });

        chart.errorElements = errorElements;
    }
});

addEvent(H.Chart, 'beforeRedraw', function () {
    var errorElements = this.errorElements;

    if (errorElements && errorElements.length) {
        each(errorElements, function (el) {
            el.destroy();
        });
    }
    this.errorElements = null;
});
