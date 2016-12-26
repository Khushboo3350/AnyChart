/**
 * @fileoverview This is an optimization file to avoid massive strings usage.
 */

goog.provide('anychart.opt');


/**
 * Constant replacer for "fill" string.
 * @const {string}
 */
anychart.opt.FILL = 'fill';


/**
 * Constant replacer for "hoverFill" string.
 * @const {string}
 */
anychart.opt.HOVER_FILL = 'hoverFill';


/**
 * Constant replacer for "selectFill" string.
 * @const {string}
 */
anychart.opt.SELECT_FILL = 'selectFill';


/**
 * Constant replacer for "oddFill" string.
 * @const {string}
 */
anychart.opt.ODD_FILL = 'oddFill';


/**
 * Constant replacer for "evenFill" string.
 * @const {string}
 */
anychart.opt.EVEN_FILL = 'evenFill';


/**
 * Constant replacer for "selectedFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_FILL = 'selectedFill';


/**
 * Constant replacer for "hatchFill" string.
 * @const {string}
 */
anychart.opt.HATCH_FILL = 'hatchFill';


/**
 * Constant replacer for "hoverHatchFill" string.
 * @const {string}
 */
anychart.opt.HOVER_HATCH_FILL = 'hoverHatchFill';


/**
 * Constant replacer for "selectHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECT_HATCH_FILL = 'selectHatchFill';


/**
 * Constant replacer for "selectedHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_HATCH_FILL = 'selectedHatchFill';


/**
 * Constant replacer for "stroke" string.
 * @const {string}
 */
anychart.opt.STROKE = 'stroke';


/**
 * Constant replacer for "topStroke" string.
 * @const {string}
 */
anychart.opt.TOP_STROKE = 'topStroke';


/**
 * Constant replacer for "rightStroke" string.
 * @const {string}
 */
anychart.opt.RIGHT_STROKE = 'rightStroke';


/**
 * Constant replacer for "bottomStroke" string.
 * @const {string}
 */
anychart.opt.BOTTOM_STROKE = 'bottomStroke';


/**
 * Constant replacer for "leftStroke" string.
 * @const {string}
 */
anychart.opt.LEFT_STROKE = 'leftStroke';


/**
 * Constant replacer for "minorStroke" string.
 * @const {string}
 */
anychart.opt.MINOR_STROKE = 'minorStroke';


/**
 * Constant replacer for "hoverStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_STROKE = 'hoverStroke';


/**
 * Constant replacer for "selectStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_STROKE = 'selectStroke';


/**
 * Constant replacer for "selectedStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_STROKE = 'selectedStroke';


/**
 * Constant replacer for "risingFill" string.
 * @const {string}
 */
anychart.opt.RISING_FILL = 'risingFill';


/**
 * Constant replacer for "hoverRisingFill" string.
 * @const {string}
 */
anychart.opt.HOVER_RISING_FILL = 'hoverRisingFill';


/**
 * Constant replacer for "selectRisingFill" string.
 * @const {string}
 */
anychart.opt.SELECT_RISING_FILL = 'selectRisingFill';


/**
 * Constant replacer for "selectedRisingFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_RISING_FILL = 'selectedRisingFill';


/**
 * Constant replacer for "risingHatchFill" string.
 * @const {string}
 */
anychart.opt.RISING_HATCH_FILL = 'risingHatchFill';


/**
 * Constant replacer for "hoverRisingHatchFill" string.
 * @const {string}
 */
anychart.opt.HOVER_RISING_HATCH_FILL = 'hoverRisingHatchFill';


/**
 * Constant replacer for "selectRisingHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECT_RISING_HATCH_FILL = 'selectRisingHatchFill';


/**
 * Constant replacer for "selectedRisingHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_RISING_HATCH_FILL = 'selectedRisingHatchFill';


/**
 * Constant replacer for "risingStroke" string.
 * @const {string}
 */
anychart.opt.RISING_STROKE = 'risingStroke';


/**
 * Constant replacer for "hoverRisingStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_RISING_STROKE = 'hoverRisingStroke';


/**
 * Constant replacer for "selectRisingStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_RISING_STROKE = 'selectRisingStroke';


/**
 * Constant replacer for "selectedRisingStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_RISING_STROKE = 'selectedRisingStroke';


/**
 * Constant replacer for "fallingFill" string.
 * @const {string}
 */
anychart.opt.FALLING_FILL = 'fallingFill';


/**
 * Constant replacer for "hoverFallingFill" string.
 * @const {string}
 */
anychart.opt.HOVER_FALLING_FILL = 'hoverFallingFill';


/**
 * Constant replacer for "selectFallingFill" string.
 * @const {string}
 */
anychart.opt.SELECT_FALLING_FILL = 'selectFallingFill';


/**
 * Constant replacer for "selectedFallingFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_FALLING_FILL = 'selectedFallingFill';


/**
 * Constant replacer for "fallingHatchFill" string.
 * @const {string}
 */
anychart.opt.FALLING_HATCH_FILL = 'fallingHatchFill';


/**
 * Constant replacer for "hoverFallingHatchFill" string.
 * @const {string}
 */
anychart.opt.HOVER_FALLING_HATCH_FILL = 'hoverFallingHatchFill';


/**
 * Constant replacer for "selectFallingHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECT_FALLING_HATCH_FILL = 'selectFallingHatchFill';


/**
 * Constant replacer for "selectedFallingHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_FALLING_HATCH_FILL = 'selectedFallingHatchFill';


/**
 * Constant replacer for "fallingStroke" string.
 * @const {string}
 */
anychart.opt.FALLING_STROKE = 'fallingStroke';


/**
 * Constant replacer for "hoverFallingStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_FALLING_STROKE = 'hoverFallingStroke';


/**
 * Constant replacer for "selectFallingStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_FALLING_STROKE = 'selectFallingStroke';


/**
 * Constant replacer for "selectedFallingStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_FALLING_STROKE = 'selectedFallingStroke';


/**
 * Constant replacer for "medianStroke" string.
 * @const {string}
 */
anychart.opt.MEDIAN_STROKE = 'medianStroke';


/**
 * Constant replacer for "hoverMedianStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_MEDIAN_STROKE = 'hoverMedianStroke';


/**
 * Constant replacer for "selectMedianStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_MEDIAN_STROKE = 'selectMedianStroke';


/**
 * Constant replacer for "selectedMedianStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_MEDIAN_STROKE = 'selectedMedianStroke';


/**
 * Constant replacer for "stemStroke" string.
 * @const {string}
 */
anychart.opt.STEM_STROKE = 'stemStroke';


/**
 * Constant replacer for "hoverStemStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_STEM_STROKE = 'hoverStemStroke';


/**
 * Constant replacer for "selectStemStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_STEM_STROKE = 'selectStemStroke';


/**
 * Constant replacer for "selectedStemStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_STEM_STROKE = 'selectedStemStroke';


/**
 * Constant replacer for "whiskerStroke" string.
 * @const {string}
 */
anychart.opt.WHISKER_STROKE = 'whiskerStroke';


/**
 * Constant replacer for "hoverWhiskerStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_WHISKER_STROKE = 'hoverWhiskerStroke';


/**
 * Constant replacer for "selectWhiskerStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_WHISKER_STROKE = 'selectWhiskerStroke';


/**
 * Constant replacer for "selectedWhiskerStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_WHISKER_STROKE = 'selectedWhiskerStroke';


/**
 * Constant replacer for "rising" string.
 * @const {string}
 */
anychart.opt.RISING = 'rising';


/**
 * Constant replacer for "falling" string.
 * @const {string}
 */
anychart.opt.FALLING = 'falling';


/**
 * Constant replacer for "path" string.
 * @const {string}
 */
anychart.opt.PATH = 'path';


/**
 * Constant replacer for "rect" string.
 * @const {string}
 */
anychart.opt.RECT = 'rect';


/**
 * Constant replacer for "circle" string.
 * @const {string}
 */
anychart.opt.CIRCLE = 'circle';


/**
 * Constant replacer for "x" string.
 * @const {string}
 */
anychart.opt.X = 'x';


/**
 * Constant replacer for "y" string.
 * @const {string}
 */
anychart.opt.Y = 'y';


/**
 * Constant replacer for "zero" string.
 * @const {string}
 */
anychart.opt.ZERO = 'zero';


/**
 * Constant replacer for "zeroMissing" string.
 * @const {string}
 */
anychart.opt.ZERO_MISSING = 'zeroMissing';


/**
 * Constant replacer for "prevValue" string.
 * @const {string}
 */
anychart.opt.PREV_VALUE = 'prevValue';


/**
 * Constant replacer for "nextValue" string.
 * @const {string}
 */
anychart.opt.NEXT_VALUE = 'nextValue';


/**
 * Constant replacer for "prevZero" string.
 * @const {string}
 */
anychart.opt.PREV_ZERO = 'prevZero';


/**
 * Constant replacer for "nextZero" string.
 * @const {string}
 */
anychart.opt.NEXT_ZERO = 'nextZero';


/**
 * Constant replacer for "stackedValue" string.
 * @const {string}
 */
anychart.opt.STACKED_VALUE = 'stackedValue';


/**
 * Constant replacer for "stackedZero" string.
 * @const {string}
 */
anychart.opt.STACKED_ZERO = 'stackedZero';


/**
 * Constant replacer for "stackedValuePrev" string.
 * @const {string}
 */
anychart.opt.STACKED_VALUE_PREV = 'stackedValuePrev';


/**
 * Constant replacer for "stackedZeroPrev" string.
 * @const {string}
 */
anychart.opt.STACKED_ZERO_PREV = 'stackedZeroPrev';


/**
 * Constant replacer for "stackedValueNext" string.
 * @const {string}
 */
anychart.opt.STACKED_VALUE_NEXT = 'stackedValueNext';


/**
 * Constant replacer for "stackedZeroNext" string.
 * @const {string}
 */
anychart.opt.STACKED_ZERO_NEXT = 'stackedZeroNext';


/**
 * Constant replacer for "stackedMissing" string.
 * @const {string}
 */
anychart.opt.STACKED_MISSING = 'stackedMissing';


/**
 * Constant replacer for "value" string.
 * @const {string}
 */
anychart.opt.VALUE = 'value';


/**
 * Constant replacer for "open" string.
 * @const {string}
 */
anychart.opt.OPEN = 'open';


/**
 * Constant replacer for "high" string.
 * @const {string}
 */
anychart.opt.HIGH = 'high';


/**
 * Constant replacer for "low" string.
 * @const {string}
 */
anychart.opt.LOW = 'low';


/**
 * Constant replacer for "close" string.
 * @const {string}
 */
anychart.opt.CLOSE = 'close';


/**
 * Constant replacer for "lowest" string.
 * @const {string}
 */
anychart.opt.LOWEST = 'lowest';


/**
 * Constant replacer for "q1" string.
 * @const {string}
 */
anychart.opt.Q1 = 'q1';


/**
 * Constant replacer for "median" string.
 * @const {string}
 */
anychart.opt.MEDIAN = 'median';


/**
 * Constant replacer for "q3" string.
 * @const {string}
 */
anychart.opt.Q3 = 'q3';


/**
 * Constant replacer for "highest" string.
 * @const {string}
 */
anychart.opt.HIGHEST = 'highest';


/**
 * Constant replacer for "outliers" string.
 * @const {string}
 */
anychart.opt.OUTLIERS = 'outliers';


/**
 * Constant replacer for "stem" string.
 * @const {string}
 */
anychart.opt.STEM = 'stem';


/**
 * Constant replacer for "whisker" string.
 * @const {string}
 */
anychart.opt.WHISKER = 'whisker';


/**
 * Constant replacer for "size" string.
 * @const {string}
 */
anychart.opt.SIZE = 'size';


/**
 * Constant replacer for "length" string.
 * @const {string}
 */
anychart.opt.LENGTH = 'length';


/**
 * Constant replacer for "whiskerWidth" string.
 * @const {string}
 */
anychart.opt.WHISKER_WIDTH = 'whiskerWidth';


/**
 * Constant replacer for "hoverWhiskerWidth" string.
 * @const {string}
 */
anychart.opt.HOVER_WHISKER_WIDTH = 'hoverWhiskerWidth';


/**
 * Constant replacer for "selectWhiskerWidth" string.
 * @const {string}
 */
anychart.opt.SELECT_WHISKER_WIDTH = 'selectWhiskerWidth';


/**
 * Constant replacer for "pointWidth" string.
 * @const {string}
 */
anychart.opt.POINT_WIDTH = 'pointWidth';


/**
 * Constant replacer for "connectMissingPoints" string.
 * @const {string}
 */
anychart.opt.CONNECT_MISSING_POINTS = 'connectMissingPoints';


/**
 * Constant replacer for "displayNegative" string.
 * @const {string}
 */
anychart.opt.DISPLAY_NEGATIVE = 'displayNegative';


/**
 * Constant replacer for "shapes" string.
 * @const {string}
 */
anychart.opt.SHAPES = 'shapes';


/**
 * Constant replacer for "secondaryShapes" string.
 * @const {string}
 */
anychart.opt.SECONDARY_SHAPES = 'secondaryShapes';


/**
 * Constant replacer for "missing" string.
 * @const {string}
 */
anychart.opt.MISSING = 'missing';


/**
 * Constant replacer for "front" string.
 * @const {string}
 */
anychart.opt.FRONT = 'front';


/**
 * Constant replacer for "back" string.
 * @const {string}
 */
anychart.opt.BACK = 'back';


/**
 * Constant replacer for "left" string.
 * @const {string}
 */
anychart.opt.LEFT = 'left';


/**
 * Constant replacer for "right" string.
 * @const {string}
 */
anychart.opt.RIGHT = 'right';


/**
 * Constant replacer for "bottom" string.
 * @const {string}
 */
anychart.opt.BOTTOM = 'bottom';


/**
 * Constant replacer for "top" string.
 * @const {string}
 */
anychart.opt.TOP = 'top';


/**
 * Constant replacer for "negative" string.
 * @const {string}
 */
anychart.opt.NEGATIVE = 'negative';


/**
 * Constant replacer for "negativeFill" string.
 * @const {string}
 */
anychart.opt.NEGATIVE_FILL = 'negativeFill';


/**
 * Constant replacer for "hoverNegativeFill" string.
 * @const {string}
 */
anychart.opt.HOVER_NEGATIVE_FILL = 'hoverNegativeFill';


/**
 * Constant replacer for "selectNegativeFill" string.
 * @const {string}
 */
anychart.opt.SELECT_NEGATIVE_FILL = 'selectNegativeFill';


/**
 * Constant replacer for "selectedNegativeFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_NEGATIVE_FILL = 'selectedNegativeFill';


/**
 * Constant replacer for "negativeStroke" string.
 * @const {string}
 */
anychart.opt.NEGATIVE_STROKE = 'negativeStroke';


/**
 * Constant replacer for "hoverNegativeStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_NEGATIVE_STROKE = 'hoverNegativeStroke';


/**
 * Constant replacer for "selectNegativeStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_NEGATIVE_STROKE = 'selectNegativeStroke';


/**
 * Constant replacer for "selectedNegativeStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_NEGATIVE_STROKE = 'selectedNegativeStroke';


/**
 * Constant replacer for "negativeHatchFill" string.
 * @const {string}
 */
anychart.opt.NEGATIVE_HATCH_FILL = 'negativeHatchFill';


/**
 * Constant replacer for "hoverNegativeHatchFill" string.
 * @const {string}
 */
anychart.opt.HOVER_NEGATIVE_HATCH_FILL = 'hoverNegativeHatchFill';


/**
 * Constant replacer for "selectNegativeHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECT_NEGATIVE_HATCH_FILL = 'selectNegativeHatchFill';


/**
 * Constant replacer for "selectedNegativeHatchFill" string.
 * @const {string}
 */
anychart.opt.SELECTED_NEGATIVE_HATCH_FILL = 'selectedNegativeHatchFill';


/**
 * Constant replacer for "highStroke" string.
 * @const {string}
 */
anychart.opt.HIGH_STROKE = 'highStroke';


/**
 * Constant replacer for "hoverHighStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_HIGH_STROKE = 'hoverHighStroke';


/**
 * Constant replacer for "selectHighStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_HIGH_STROKE = 'selectHighStroke';


/**
 * Constant replacer for "selectedHighStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_HIGH_STROKE = 'selectedHighStroke';


/**
 * Constant replacer for "lowStroke" string.
 * @const {string}
 */
anychart.opt.LOW_STROKE = 'lowStroke';


/**
 * Constant replacer for "hoverLowStroke" string.
 * @const {string}
 */
anychart.opt.HOVER_LOW_STROKE = 'hoverLowStroke';


/**
 * Constant replacer for "selectLowStroke" string.
 * @const {string}
 */
anychart.opt.SELECT_LOW_STROKE = 'selectLowStroke';


/**
 * Constant replacer for "selectedLowStroke" string.
 * @const {string}
 */
anychart.opt.SELECTED_LOW_STROKE = 'selectedLowStroke';


/**
 * Constant replacer for "color" string.
 * @const {string}
 */
anychart.opt.COLOR = 'color';


/**
 * Constant replacer for "xPointPosition" string.
 * @const {string}
 */
anychart.opt.X_POINT_POSITION = 'xPointPosition';


/**
 * Constant replacer for "none" string.
 * @const {string}
 */
anychart.opt.NONE = 'none';


/**
 * Constant replacer for "enabled" string.
 * @const {string}
 */
anychart.opt.ENABLED = 'enabled';


/**
 * Constant replacer for "marker" string.
 * @const {string}
 */
anychart.opt.MARKER = 'marker';


/**
 * Constant replacer for "hoverMarker" string.
 * @const {string}
 */
anychart.opt.HOVER_MARKER = 'hoverMarker';


/**
 * Constant replacer for "selectMarker" string.
 * @const {string}
 */
anychart.opt.SELECT_MARKER = 'selectMarker';


/**
 * Constant replacer for "label" string.
 * @const {string}
 */
anychart.opt.LABEL = 'label';


/**
 * Constant replacer for "hoverLabel" string.
 * @const {string}
 */
anychart.opt.HOVER_LABEL = 'hoverLabel';


/**
 * Constant replacer for "selectLabel" string.
 * @const {string}
 */
anychart.opt.SELECT_LABEL = 'selectLabel';


/**
 * Constant replacer for "outlierMarker" string.
 * @const {string}
 */
anychart.opt.OUTLIER_MARKER = 'outlierMarker';


/**
 * Constant replacer for "hoverOutlierMarker" string.
 * @const {string}
 */
anychart.opt.HOVER_OUTLIER_MARKER = 'hoverOutlierMarker';


/**
 * Constant replacer for "selectOutlierMarker" string.
 * @const {string}
 */
anychart.opt.SELECT_OUTLIER_MARKER = 'selectOutlierMarker';


/**
 * Constant replacer for "position" string.
 * @const {string}
 */
anychart.opt.POSITION = 'position';


/**
 * Constant replacer for "data" string.
 * @const {string}
 */
anychart.opt.DATA = 'data';


/**
 * Constant replacer for "meta" string.
 * @const {string}
 */
anychart.opt.META = 'meta';


/**
 * Constant replacer for "rawIndex" string.
 * @const {string}
 */
anychart.opt.RAW_INDEX = 'rawIndex';


/**
 * Constant replacer for "type" string.
 * @const {string}
 */
anychart.opt.TYPE = 'type';


/**
 * Constant replacer for "hoverType" string.
 * @const {string}
 */
anychart.opt.HOVER_TYPE = 'hoverType';


/**
 * Constant replacer for "selectType" string.
 * @const {string}
 */
anychart.opt.SELECT_TYPE = 'selectType';


/**
 * Constant replacer for "selectedType" string.
 * @const {string}
 */
anychart.opt.SELECTED_TYPE = 'selectedType';


/**
 * Constant replacer for "markerSize" string.
 * @const {string}
 */
anychart.opt.MARKER_SIZE = 'markerSize';


/**
 * Constant replacer for "hoverMarkerSize" string.
 * @const {string}
 */
anychart.opt.HOVER_MARKER_SIZE = 'hoverMarkerSize';


/**
 * Constant replacer for "selectMarkerSize" string.
 * @const {string}
 */
anychart.opt.SELECT_MARKER_SIZE = 'selectMarkerSize';


/**
 * Constant replacer for "selectedMarkerSize" string.
 * @const {string}
 */
anychart.opt.SELECTED_MARKER_SIZE = 'selectedMarkerSize';


/**
 * Constant replacer for "hoverSize" string.
 * @const {string}
 */
anychart.opt.HOVER_SIZE = 'hoverSize';


/**
 * Constant replacer for "selectSize" string.
 * @const {string}
 */
anychart.opt.SELECT_SIZE = 'selectSize';


/**
 * Constant replacer for "selectedSize" string.
 * @const {string}
 */
anychart.opt.SELECTED_SIZE = 'selectedSize';


/**
 * Constant replacer for "error" string.
 * @const {string}
 */
anychart.opt.ERROR = 'error';


/**
 * Constant replacer for "xError" string.
 * @const {string}
 */
anychart.opt.X_ERROR = 'xError';


/**
 * Constant replacer for "xLowerError" string.
 * @const {string}
 */
anychart.opt.X_LOWER_ERROR = 'xLowerError';


/**
 * Constant replacer for "xUpperError" string.
 * @const {string}
 */
anychart.opt.X_UPPER_ERROR = 'xUpperError';


/**
 * Constant replacer for "valueError" string.
 * @const {string}
 */
anychart.opt.VALUE_ERROR = 'valueError';


/**
 * Constant replacer for "valueLowerError" string.
 * @const {string}
 */
anychart.opt.VALUE_LOWER_ERROR = 'valueLowerError';


/**
 * Constant replacer for "valueUpperError" string.
 * @const {string}
 */
anychart.opt.VALUE_UPPER_ERROR = 'valueUpperError';


/**
 * Constant replacer for "text" string.
 * @const {string}
 */
anychart.opt.TEXT = 'text';


/**
 * Constant replacer for "iconEnabled" string.
 * @const {string}
 */
anychart.opt.ICON_ENABLED = 'iconEnabled';


/**
 * Constant replacer for "iconType" string.
 * @const {string}
 */
anychart.opt.ICON_TYPE = 'iconType';


/**
 * Constant replacer for "iconStroke" string.
 * @const {string}
 */
anychart.opt.ICON_STROKE = 'iconStroke';


/**
 * Constant replacer for "iconFill" string.
 * @const {string}
 */
anychart.opt.ICON_FILL = 'iconFill';


/**
 * Constant replacer for "iconHatchFill" string.
 * @const {string}
 */
anychart.opt.ICON_HATCH_FILL = 'iconHatchFill';


/**
 * Constant replacer for "disabled" string.
 * @const {string}
 */
anychart.opt.DISABLED = 'disabled';


/**
 * Constant replacer for "iconMarkerType" string.
 * @const {string}
 */
anychart.opt.ICON_MARKER_TYPE = 'iconMarkerType';


/**
 * Constant replacer for "iconMarkerStroke" string.
 * @const {string}
 */
anychart.opt.ICON_MARKER_STROKE = 'iconMarkerStroke';


/**
 * Constant replacer for "iconMarkerFill" string.
 * @const {string}
 */
anychart.opt.ICON_MARKER_FILL = 'iconMarkerFill';


/**
 * Constant replacer for "topHatch" string.
 * @const {string}
 */
anychart.opt.TOP_HATCH = 'topHatch';


/**
 * Constant replacer for "frontHatch" string.
 * @const {string}
 */
anychart.opt.FRONT_HATCH = 'frontHatch';


/**
 * Constant replacer for "rightHatch" string.
 * @const {string}
 */
anychart.opt.RIGHT_HATCH = 'rightHatch';


/**
 * Constant replacer for "zIndex" string.
 * @const {string}
 */
anychart.opt.Z_INDEX = 'zIndex';


/**
 * Constant replacer for "legendItem" string.
 * @const {string}
 */
anychart.opt.LEGEND_ITEM = 'legendItem';


/**
 * Constant replacer for "tooltip" string.
 * @const {string}
 */
anychart.opt.TOOLTIP = 'tooltip';


/**
 * Constant replacer for "clip" string.
 * @const {string}
 */
anychart.opt.CLIP = 'clip';


/**
 * Constant replacer for "unit" string.
 * @const {string}
 */
anychart.opt.UNIT = 'unit';


/**
 * Constant replacer for "count" string.
 * @const {string}
 */
anychart.opt.COUNT = 'count';


/**
 * Constant replacer for "levels" string.
 * @const {string}
 */
anychart.opt.LEVELS = 'levels';


/**
 * Constant replacer for "maxVisiblePoints" string.
 * @const {string}
 */
anychart.opt.MAX_VISIBLE_POINTS = 'maxVisiblePoints';


/**
 * Constant replacer for "minPixPerPoint" string.
 * @const {string}
 */
anychart.opt.MIN_PIX_PER_POINT = 'minPixPerPoint';


/**
 * Constant replacer for "xMode" string.
 * @const {string}
 */
anychart.opt.X_MODE = 'xMode';


/**
 * Constant replacer for "forced" string.
 * @const {string}
 */
anychart.opt.FORCED = 'forced';


/**
 * Constant replacer for "reset" string.
 * @const {string}
 */
anychart.opt.RESET = 'reset';


/**
 * Constant replacer for "considerItem" string.
 * @const {string}
 */
anychart.opt.CONSIDER_ITEM = 'considerItem';


/**
 * Constant replacer for "getResult" string.
 * @const {string}
 */
anychart.opt.GET_RESULT = 'getResult';


/**
 * Constant replacer for "COLUMN" string.
 * @const {string}
 */
anychart.opt.COLUMN = 'COLUMN';


/**
 * Constant replacer for "weights" string.
 * @const {string}
 */
anychart.opt.WEIGHTS = 'weights';


/**
 * Constant replacer for "hasPointMarker" string.
 * @const {string}
 */
anychart.opt.HAS_POINT_MARKER = 'hasPointMarker';


/**
 * Constant replacer for "hasPointLabel" string.
 * @const {string}
 */
anychart.opt.HAS_POINT_LABEL = 'hasPointLabel';


/**
 * Constant replacer for "hasPointOutlier" string.
 * @const {string}
 */
anychart.opt.HAS_POINT_OUTLIER = 'hasPointOutlier';


/**
 * Constant replacer for "hoverGap" string.
 * @const {string}
 */
anychart.opt.HOVER_GAP = 'hoverGap';


/**
 * Constant replacer for "xAnchor" string.
 * @const {string}
 */
anychart.opt.X_ANCHOR = 'xAnchor';


/**
 * Constant replacer for "valueAnchor" string.
 * @const {string}
 */
anychart.opt.VALUE_ANCHOR = 'valueAnchor';


/**
 * Constant replacer for "secondXAnchor" string.
 * @const {string}
 */
anychart.opt.SECOND_X_ANCHOR = 'secondXAnchor';


/**
 * Constant replacer for "secondValueAnchor" string.
 * @const {string}
 */
anychart.opt.SECOND_VALUE_ANCHOR = 'secondValueAnchor';


/**
 * Constant replacer for "thirdXAnchor" string.
 * @const {string}
 */
anychart.opt.THIRD_X_ANCHOR = 'thirdXAnchor';


/**
 * Constant replacer for "thirdValueAnchor" string.
 * @const {string}
 */
anychart.opt.THIRD_VALUE_ANCHOR = 'thirdValueAnchor';


/**
 * Constant replacer for "allowEdit" string.
 * @const {string}
 */
anychart.opt.ALLOW_EDIT = 'allowEdit';


/**
 * Constant replacer for "annotationsList" string.
 * @const {string}
 */
anychart.opt.ANNOTATIONS_LIST = 'annotationsList';


/**
 * Constant replacer for "anchor" string.
 * @const {string}
 */
anychart.opt.ANCHOR = 'anchor';


/**
 * Constant replacer for "offsetX" string.
 * @const {string}
 */
anychart.opt.OFFSET_X = 'offsetX';


/**
 * Constant replacer for "offsetY" string.
 * @const {string}
 */
anychart.opt.OFFSET_Y = 'offsetY';


/**
 * Constant replacer for "markerType" string.
 * @const {string}
 */
anychart.opt.MARKER_TYPE = 'markerType';


/**
 * Constant replacer for "trend" string.
 * @const {string}
 */
anychart.opt.TREND = 'trend';


/**
 * Constant replacer for "hoverTrend" string.
 * @const {string}
 */
anychart.opt.HOVER_TREND = 'hoverTrend';


/**
 * Constant replacer for "selectTrend" string.
 * @const {string}
 */
anychart.opt.SELECT_TREND = 'selectTrend';


/**
 * Constant replacer for "grid" string.
 * @const {string}
 */
anychart.opt.GRID = 'grid';


/**
 * Constant replacer for "hoverGrid" string.
 * @const {string}
 */
anychart.opt.HOVER_GRID = 'hoverGrid';


/**
 * Constant replacer for "selectGrid" string.
 * @const {string}
 */
anychart.opt.SELECT_GRID = 'selectGrid';


/**
 * Constant replacer for "default" string.
 * @const {string}
 */
anychart.opt.DEFAULT = 'default';


/**
 * Constant replacer for "dateTimeLocale" string.
 * @const {string}
 */
anychart.opt.DATE_TIME_LOCALE = 'dateTimeLocale';


/**
 * Constant replacer for "numberLocale" string.
 * @const {string}
 */
anychart.opt.NUMBER_LOCALE = 'numberLocale';


/**
 * Constant replacer for "messages" string.
 * @const {string}
 */
anychart.opt.MESSAGES = 'messages';


//region -- Text props.
/**
 * @const {string}
 */
anychart.opt.MIN_FONT_SIZE = 'minFontSize';


/**
 * @const {string}
 */
anychart.opt.MAX_FONT_SIZE = 'maxFontSize';


/**
 * @const {string}
 */
anychart.opt.ADJUST_FONT_SIZE = 'adjustFontSize';


/**
 * @const {string}
 */
anychart.opt.FONT_SIZE = 'fontSize';


/**
 * @const {string}
 */
anychart.opt.FONT_FAMILY = 'fontFamily';


/**
 * @const {string}
 */
anychart.opt.FONT_COLOR = 'fontColor';


/**
 * @const {string}
 */
anychart.opt.FONT_OPACITY = 'fontOpacity';


/**
 * @const {string}
 */
anychart.opt.FONT_DECORATION = 'fontDecoration';


/**
 * @const {string}
 */
anychart.opt.FONT_STYLE = 'fontStyle';


/**
 * @const {string}
 */
anychart.opt.FONT_VARIANT = 'fontVariant';


/**
 * @const {string}
 */
anychart.opt.FONT_WEIGHT = 'fontWeight';


/**
 * @const {string}
 */
anychart.opt.LETTER_SPACING = 'letterSpacing';


/**
 * @const {string}
 */
anychart.opt.TEXT_DIRECTION = 'textDirection';


/**
 * @const {string}
 */
anychart.opt.LINE_HEIGHT = 'lineHeight';


/**
 * @const {string}
 */
anychart.opt.TEXT_INDENT = 'textIndent';


/**
 * @const {string}
 */
anychart.opt.V_ALIGN = 'vAlign';


/**
 * @const {string}
 */
anychart.opt.H_ALIGN = 'hAlign';


/**
 * @const {string}
 */
anychart.opt.TEXT_WRAP = 'textWrap';


/**
 * @const {string}
 */
anychart.opt.TEXT_OVERFLOW = 'textOverflow';


/**
 * @const {string}
 */
anychart.opt.SELECTABLE = 'selectable';


/**
 * @const {string}
 */
anychart.opt.DISABLE_POINTER_EVENTS = 'disablePointerEvents';


/**
 * @const {string}
 */
anychart.opt.USE_HTML = 'useHtml';
//endregion


/**
 * @const {string}
 */
anychart.opt.TITLE_FORMATTER = 'titleFormatter';


/**
 * @const {string}
 */
anychart.opt.TEXT_FORMATTER = 'textFormatter';


/**
 * @const {string}
 */
anychart.opt.UNION_TEXT_FORMATTER = 'unionTextFormatter';


/**
 * @const {string}
 */
anychart.opt.VALUE_PREFIX = 'valuePrefix';


/**
 * @const {string}
 */
anychart.opt.VALUE_POSTFIX = 'valuePostfix';


/**
 * @const {string}
 */
anychart.opt.HIDE_DELAY = 'hideDelay';


/**
 * @const {string}
 */
anychart.opt.ALLOW_LEAVE_SCREEN = 'allowLeaveScreen';


/**
 * @const {string}
 */
anychart.opt.ALLOW_LEAVE_CHART = 'allowLeaveChart';


/**
 * @const {string}
 */
anychart.opt.DISPLAY_MODE = 'displayMode';


/**
 * @const {string}
 */
anychart.opt.POSITION_MODE = 'positionMode';


/**
 * @const {string}
 */
anychart.opt.WIDTH = 'width';


/**
 * @const {string}
 */
anychart.opt.HEIGHT = 'height';


/**
 * @const {string}
 */
anychart.opt.LEVEL_HEIGHT = 'levelHeight';


/**
 * @const {string}
 */
anychart.opt.ALIGN = 'align';


/**
 * @const {string}
 */
anychart.opt.ORIENTATION = 'orientation';


/**
 * @const {string}
 */
anychart.opt.ROTATION = 'rotation';


/**
 * @const {string}
 */
anychart.opt.OVERLAP_MODE = 'overlapMode';


/**
 * @const {string}
 */
anychart.opt.DRAW_FIRST_LABEL = 'drawFirstLabel';


/**
 * @const {string}
 */
anychart.opt.DRAW_LAST_LABEL = 'drawLastLabel';


/**
 * @const {string}
 */
anychart.opt.DRAW_FIRST_LINE = 'drawFirstLine';


/**
 * @const {string}
 */
anychart.opt.DRAW_LAST_LINE = 'drawLastLine';


/**
 * @const {string}
 */
anychart.opt.AUTO_TEXT = 'autoText';


/**
 * @const {string}
 */
anychart.opt.CORNER_TYPE = 'cornerType';


/**
 * @const {string}
 */
anychart.opt.CORNERS = 'corners';


/**
 * @const {string}
 */
anychart.opt.TITLE = 'title';


/**
 * @const {string}
 */
anychart.opt.BACKGROUND = 'background';


/**
 * @const {string}
 */
anychart.opt.MARGIN = 'margin';


/**
 * @const {string}
 */
anychart.opt.PADDING = 'padding';


/**
 * Constant replacer for "borderRadius" string.
 * @const {string}
 */
anychart.opt.BORDER_RADIUS = 'borderRadius';


/**
 * Constant replacer for "src" string.
 * @const {string}
 */
anychart.opt.SRC = 'src';


/**
 * Constant replacer for "images" string.
 * @const {string}
 */
anychart.opt.IMAGE = 'image';


/**
 * Constant replacer for "name" string.
 * @const {string}
 */
anychart.opt.NAME = 'name';


/**
 * Constant replacer for "description" string.
 * @const {string}
 */
anychart.opt.DESCRIPTION = 'description';


/**
 * Constant replacer for "tags" string.
 * @const {string}
 */
anychart.opt.TAGS = 'tags';


/**
 * Constant replacer for "minHeight" string.
 * @const {string}
 */
anychart.opt.MIN_HEIGHT = 'minHeight';


/**
 * Constant replacer for "maxHeight" string.
 * @const {string}
 */
anychart.opt.MAX_HEIGHT = 'maxHeight';


/**
 * Constant replacer for "opacity" string.
 * @const {string}
 */
anychart.opt.OPACITY = 'opacity';


/**
 * Constant replacer for "fittingMode" string.
 * @const {string}
 */
anychart.opt.FITTING_MODE = 'fittingMode';


/**
 * Constant replacer for "imageSrc" string.
 * @const {string}
 */
anychart.opt.IMAGE_SRC = 'imageSrc';


/**
 * @const {string}
 */
anychart.opt.SEPARATOR = 'separator';


/**
 * Constant replacer for "each" string.
 * @const {string}
 */
anychart.opt.EACH = 'each';


/**
 * Constant replacer for "on" string.
 * @const {string}
 */
anychart.opt.ON = 'on';


/**
 * Constant replacer for "from" string.
 * @const {string}
 */
anychart.opt.FROM = 'from';


/**
 * Constant replacer for "to" string.
 * @const {string}
 */
anychart.opt.TO = 'to';


/**
 * Constant replacer for "starts" string.
 * @const {string}
 */
anychart.opt.STARTS = 'starts';


/**
 * Constant replacer for "ends" string.
 * @const {string}
 */
anychart.opt.ENDS = 'ends';


/**
 * Constant replacer for "isWorking" string.
 * @const {string}
 */
anychart.opt.IS_WORKING = 'isWorking';


/**
 * Constant replacer for "oddHolidayFill" string.
 * @const {string}
 */
anychart.opt.ODD_HOLIDAY_FILL = 'oddHolidayFill';


/**
 * Constant replacer for "evenHolidayFill" string.
 * @const {string}
 */
anychart.opt.EVEN_HOLIDAY_FILL = 'evenHolidayFill';


/**
 * Constant replacer for "oddHatchFill" string.
 * @const {string}
 */
anychart.opt.ODD_HATCH_FILL = 'oddHatchFill';


/**
 * Constant replacer for "evenHatchFill" string.
 * @const {string}
 */
anychart.opt.EVEN_HATCH_FILL = 'evenHatchFill';


/**
 * Constant replacer for "oddHolidayHatchFill" string.
 * @const {string}
 */
anychart.opt.ODD_HOLIDAY_HATCH_FILL = 'oddHolidayHatchFill';


/**
 * Constant replacer for "evenHolidayHatchFill" string.
 * @const {string}
 */
anychart.opt.EVEN_HOLIDAY_HATCH_FILL = 'evenHolidayHatchFill';


/**
 * Constant replacer for "horizontalStroke" string.
 * @const {string}
 */
anychart.opt.HORIZONTAL_STROKE = 'horizontalStroke';


/**
 * Constant replacer for "verticalStroke" string.
 * @const {string}
 */
anychart.opt.VERTICAL_STROKE = 'verticalStroke';


/**
 * Constant replacer for "activities" string.
 * @const {string}
 */
anychart.opt.ACTIVITIES = 'activities';


/**
 * Constant replacer for "start" string.
 * @const {string}
 */
anychart.opt.START = 'start';


/**
 * Constant replacer for "end" string.
 * @const {string}
 */
anychart.opt.END = 'end';


/**
 * Constant replacer for "drawTopLine" string.
 * @const {string}
 */
anychart.opt.DRAW_TOP_LINE = 'drawTopLine';


/**
 * Constant replacer for "drawRightLine" string.
 * @const {string}
 */
anychart.opt.DRAW_RIGHT_LINE = 'drawRightLine';


/**
 * Constant replacer for "drawBottomLine" string.
 * @const {string}
 */
anychart.opt.DRAW_BOTTOM_LINE = 'drawBottomLine';


/**
 * Constant replacer for "drawLeftLine" string.
 * @const {string}
 */
anychart.opt.DRAW_LEFT_LINE = 'drawLeftLine';


/**
 * Constant replacer for "intervals" string.
 * @const {string}
 */
anychart.opt.INTERVALS = 'intervals';


/**
 * Constant replacer for "minutesPerDay" string.
 * @const {string}
 */
anychart.opt.MINUTES_PER_DAY = 'minutesPerDay';


/**
 * Constant replacer for "id" string.
 * @const {string}
 */
anychart.opt.ID = 'id';


/**
 * Constant replacer for "className" string.
 * @const {string}
 */
anychart.opt.CLASS_NAME = 'className';


/**
 * Constant replacer for "totalMinutes" string.
 * @const {string}
 */
anychart.opt.TOTAL_MINUTES = 'totalMinutes';


/**
 * Constant replacer for "rowHeight" string.
 * @const {string}
 */
anychart.opt.ROW_HEIGHT = 'rowHeight';


/**
 * Constant replacer for "minRowHeight" string.
 * @const {string}
 */
anychart.opt.MIN_ROW_HEIGHT = 'minRowHeight';


/**
 * Constant replacer for "maxRowHeight" string.
 * @const {string}
 */
anychart.opt.MAX_ROW_HEIGHT = 'maxRowHeight';