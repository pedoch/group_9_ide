define('ace/theme/snippet', ['require', 'exports', 'module', 'ace/lib/dom'], function (e, t, n) {
  (t.isDark = !0),
    (t.cssClass = 'ace-snippet'),
    (t.cssText =
      '.ace-snippet .ace_gutter {background: #6C3082;color: #E6E1DC}.ace-snippet .ace_print-margin {width: 1px;background: #555651}.ace-snippet {background-color: #6C3082;color: #E6E1DC}.ace-snippet .ace_cursor {color: #FFFFFF}.ace-snippet .ace_marker-layer .ace_selection {background: #454545}.ace-snippet.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #6C3082;}.ace-snippet .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-snippet .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #404040}.ace-snippet .ace_marker-layer .ace_active-line {background: transparent}.ace-snippet .ace_gutter-active-line {background-color: #333435}.ace-snippet .ace_marker-layer .ace_selected-word {border: 1px solid #454545}.ace-snippet .ace_invisible {color: #404040}.ace-snippet .ace_entity.ace_name.ace_tag,.ace-snippet .ace_keyword,.ace-snippet .ace_meta,.ace-snippet .ace_meta.ace_tag,.ace-snippet .ace_storage,.ace-snippet .ace_support.ace_function {color: #FC6F09}.ace-snippet .ace_constant,.ace-snippet .ace_constant.ace_character,.ace-snippet .ace_constant.ace_character.ace_escape,.ace-snippet .ace_constant.ace_other,.ace-snippet .ace_support.ace_type {color: #1EDAFB}.ace-snippet .ace_constant.ace_character.ace_escape {color: #519F50}.ace-snippet .ace_constant.ace_language {color: #FDC251}.ace-snippet .ace_constant.ace_library,.ace-snippet .ace_string,.ace-snippet .ace_support.ace_constant {color: #8DFF0A}.ace-snippet .ace_constant.ace_numeric {color: #58C554}.ace-snippet .ace_invalid {color: #FFFFFF;background-color: #990000}.ace-snippet .ace_fold {background-color: #FC6F09;border-color: #E6E1DC}.ace-snippet .ace_comment {font-style: italic;color: #5b7696}.ace-snippet .ace_entity.ace_other.ace_attribute-name {color: #FFFF89}.ace-snippet .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQFxf3ZXB1df0PAAdsAmERTkEHAAAAAElFTkSuQmCC) right repeat-y}');
  var r = e('../lib/dom');
  r.importCssString(t.cssText, t.cssClass);
});
(function () {
  window.require(['ace/theme/snippet'], function (m) {
    if (typeof module == 'object' && typeof exports == 'object' && module) {
      module.exports = m;
    }
  });
})();
