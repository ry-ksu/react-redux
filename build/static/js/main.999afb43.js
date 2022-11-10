/*! For license information please see main.999afb43.js.LICENSE.txt */
!(function () {
  var e = {
      472: function (e) {
        e.exports = 'object' == typeof self ? self.FormData : window.FormData;
      },
      463: function (e, t, n) {
        'use strict';
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + 'Capture', t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var v = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e, null, !1, !1);
            }
          ),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) && (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for('react.element'),
          k = Symbol.for('react.portal'),
          x = Symbol.for('react.fragment'),
          _ = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          C = Symbol.for('react.provider'),
          N = Symbol.for('react.context'),
          O = Symbol.for('react.forward_ref'),
          P = Symbol.for('react.suspense'),
          j = Symbol.for('react.suspense_list'),
          L = Symbol.for('react.memo'),
          T = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var R = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var F = Symbol.iterator;
        function z(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (F && e[F]) || e['@@iterator'])
            ? e
            : null;
        }
        var A,
          D = Object.assign;
        function V(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              A = (t && t[1]) || '';
            }
          return '\n' + A + e;
        }
        var M = !1;
        function U(e, t) {
          if (!e || M) return '';
          M = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && 'string' === typeof s.stack) {
              for (
                var a = s.stack.split('\n'),
                  o = r.stack.split('\n'),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var u = '\n' + a[i].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (M = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? V(e) : '';
        }
        function I(e) {
          switch (e.tag) {
            case 5:
              return V(e.type);
            case 16:
              return V('Lazy');
            case 13:
              return V('Suspense');
            case 19:
              return V('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return '';
          }
        }
        function B(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case x:
              return 'Fragment';
            case k:
              return 'Portal';
            case E:
              return 'Profiler';
            case _:
              return 'StrictMode';
            case P:
              return 'Suspense';
            case j:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || 'Context') + '.Consumer';
              case C:
                return (e._context.displayName || 'Context') + '.Provider';
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case L:
                return null !== (t = e.displayName || null) ? t : B(e.type) || 'Memo';
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return B(t);
            case 8:
              return t === _ ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t) return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = H(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            'undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') && ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function le(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function ue(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? le(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n || 'number' !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ge = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && 'object' !== typeof t.style) throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          xe = null,
          _e = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ('function' !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          xe ? (_e ? _e.push(e) : (_e = [e])) : (xe = e);
        }
        function Ne() {
          if (xe) {
            var e = xe,
              t = _e;
            if (((_e = xe = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Pe() {}
        var je = !1;
        function Le(e, t, n) {
          if (je) return e(t, n);
          je = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (je = !1), (null !== xe || null !== _e) && (Pe(), Ne());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (c)
          try {
            var Fe = {};
            Object.defineProperty(Fe, 'passive', {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener('test', Fe, Fe),
              window.removeEventListener('test', Fe, Fe);
          } catch (ce) {
            Re = !1;
          }
        function ze(e, t, n, r, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ae = !1,
          De = null,
          Ve = !1,
          Me = null,
          Ue = {
            onError: function (e) {
              (Ae = !0), (De = e);
            },
          };
        function Ie(e, t, n, r, a, o, i, l, u) {
          (Ae = !1), (De = null), ze.apply(Ue, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Be(e) !== e) throw Error(o(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return We(a), e;
                    if (i === r) return We(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var St,
          kt,
          xt,
          _t,
          Et,
          Ct = !1,
          Nt = [],
          Ot = null,
          Pt = null,
          jt = null,
          Lt = new Map(),
          Tt = new Map(),
          Rt = [],
          Ft =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function zt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Ot = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Pt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              jt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Lt.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Tt.delete(t.pointerId);
          }
        }
        function At(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      xt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Vt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Mt(e, t, n) {
          Vt(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Ot && Vt(Ot) && (Ot = null),
            null !== Pt && Vt(Pt) && (Pt = null),
            null !== jt && Vt(jt) && (jt = null),
            Lt.forEach(Mt),
            Tt.forEach(Mt);
        }
        function It(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct || ((Ct = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Bt(e) {
          function t(t) {
            return It(t, e);
          }
          if (0 < Nt.length) {
            It(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && It(Ot, e),
              null !== Pt && It(Pt, e),
              null !== jt && It(jt, e),
              Lt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Rt.shift();
        }
        var $t = w.ReactCurrentBatchConfig,
          Wt = !0;
        function Ht(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function qt(e, t, n, r) {
          var a = bt,
            o = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (Wt) {
            var a = Kt(e, t, n, r);
            if (null === a) Wr(e, t, r, Gt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (Ot = At(Ot, e, t, n, r, a)), !0;
                  case 'dragenter':
                    return (Pt = At(Pt, e, t, n, r, a)), !0;
                  case 'mouseover':
                    return (jt = At(jt, e, t, n, r, a)), !0;
                  case 'pointerover':
                    var o = a.pointerId;
                    return Lt.set(o, At(Lt.get(o) || null, e, t, n, r, a)), !0;
                  case 'gotpointercapture':
                    return (o = a.pointerId), Tt.set(o, At(Tt.get(o) || null, e, t, n, r, a)), !0;
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && St(o),
                  null === (o = Kt(e, t, n, r)) && Wr(e, t, r, Gt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Kt(e, t, n, r) {
          if (((Gt = null), null !== (e = ya((e = Se(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = 'value' in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = D({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = D({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== un &&
                    (un && 'mousemove' === e.type
                      ? ((on = e.screenX - un.screenX), (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(D({}, pn, { dataTransfer: 0 })),
          vn = an(D({}, fn, { relatedTarget: 0 })),
          gn = an(D({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          yn = D({}, sn, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(D({}, sn, { data: 0 })),
          Sn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          kn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          xn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e];
        }
        function En() {
          return _n;
        }
        var Cn = D({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? kn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = an(Cn),
          On = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = an(
            D({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          jn = an(D({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Ln = D({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(Ln),
          Rn = [9, 13, 27, 32],
          Fn = c && 'CompositionEvent' in window,
          zn = null;
        c && 'documentMode' in document && (zn = document.documentMode);
        var An = c && 'TextEvent' in window && !zn,
          Dn = c && (!Fn || (zn && 8 < zn && 11 >= zn)),
          Vn = String.fromCharCode(32),
          Mn = !1;
        function Un(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Rn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function In(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var Bn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!$n[e.type] : 'textarea' === t;
        }
        function Hn(e, t, n, r) {
          Ce(r),
            0 < (t = qr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Qn = null;
        function Gn(e) {
          Vr(e, 0);
        }
        function Kn(e) {
          if (Q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ('change' === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = 'oninput' in document;
            if (!Zn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'), (Zn = 'function' === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent('onpropertychange', nr), (Qn = qn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Kn(Qn)) {
            var t = [];
            Hn(t, Qn, e, Se(e)), Le(Gn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Qn = n), (qn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Kn(Qn);
        }
        function or(e, t) {
          if ('click' === e) return Kn(t);
        }
        function ir(e, t) {
          if ('input' === e || 'change' === e) return Kn(t);
        }
        var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br ||
            null == vr ||
            vr !== G(r) ||
            ('selectionStart' in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = qr(gr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var kr = {
            animationend: Sr('Animation', 'AnimationEnd'),
            animationiteration: Sr('Animation', 'AnimationIteration'),
            animationstart: Sr('Animation', 'AnimationStart'),
            transitionend: Sr('Transition', 'TransitionEnd'),
          },
          xr = {},
          _r = {};
        function Er(e) {
          if (xr[e]) return xr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in _r) return (xr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          'TransitionEvent' in window || delete kr.transitionend.transition);
        var Cr = Er('animationend'),
          Nr = Er('animationiteration'),
          Or = Er('animationstart'),
          Pr = Er('transitionend'),
          jr = new Map(),
          Lr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Tr(e, t) {
          jr.set(e, t), u(t, [e]);
        }
        for (var Rr = 0; Rr < Lr.length; Rr++) {
          var Fr = Lr[Rr];
          Tr(Fr.toLowerCase(), 'on' + (Fr[0].toUpperCase() + Fr.slice(1)));
        }
        Tr(Cr, 'onAnimationEnd'),
          Tr(Nr, 'onAnimationIteration'),
          Tr(Or, 'onAnimationStart'),
          Tr('dblclick', 'onDoubleClick'),
          Tr('focusin', 'onFocus'),
          Tr('focusout', 'onBlur'),
          Tr(Pr, 'onTransitionEnd'),
          s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' ')
          ),
          u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' ')
          ),
          u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
          ),
          u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
          );
        var zr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Ar = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zr));
        function Dr(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, u, s) {
              if ((Ie.apply(this, arguments), Ae)) {
                if (!Ae) throw Error(o(198));
                var c = De;
                (Ae = !1), (De = null), Ve || ((Ve = !0), (Me = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Vr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== o && a.isPropagationStopped())) break e;
                  Dr(a, l, s), (o = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, l, s), (o = u);
                }
            }
          }
          if (Ve) throw ((e = Me), (Ve = !1), (Me = null), e);
        }
        function Mr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + '__bubble';
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Ir = '_reactListening' + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Ir]) {
            (e[Ir] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t && (Ar.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ir] || ((t[Ir] = !0), Ur('selectionchange', !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Ht;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Re || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ya(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = o,
              a = Se(n),
              i = [];
            e: {
              var l = jr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    u = Nn;
                    break;
                  case 'focusin':
                    (s = 'focus'), (u = vn);
                    break;
                  case 'focusout':
                    (s = 'blur'), (u = vn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    u = vn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = Pn;
                    break;
                  case Cr:
                  case Nr:
                  case Or:
                    u = gn;
                    break;
                  case Pr:
                    u = jn;
                    break;
                  case 'scroll':
                    u = dn;
                    break;
                  case 'wheel':
                    u = Tn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = On;
                }
                var c = 0 !== (4 & t),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== d && null != (m = Te(h, d)) && c.push(Hr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((l = new u(l, s, null, n, a)), i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) &&
                        (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = On), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                  (f = null == u ? l : wa(u)),
                  (p = null == s ? l : wa(s)),
                  ((l = new c(m, h + 'leave', u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + 'enter', s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Qr(p)) h++;
                    for (p = 0, m = d; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Qr(c)), (d = Qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Gr(i, l, u, c, !1), null !== s && null !== f && Gr(i, f, s, c, !0);
              }
              if (
                'select' === (u = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
              )
                var v = Yn;
              else if (Wn(l))
                if (Xn) v = ir;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (u = l.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? Hn(i, v, n, a)
                  : (g && g(e, l, r),
                    'focusout' === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      'number' === l.type &&
                      ee(l, 'number', l.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case 'focusin':
                  (Wn(g) || 'true' === g.contentEditable) && ((vr = g), (gr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = gr = vr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), wr(i, n, a);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  wr(i, n, a);
              }
              var y;
              if (Fn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Un(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (Dn &&
                  'ko' !== n.locale &&
                  (Bn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Bn && (y = en())
                    : ((Jt = 'value' in (Xt = a) ? Xt.value : Xt.textContent), (Bn = !0))),
                0 < (g = qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = In(n)) && (b.data = y))),
                (y = An
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return In(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Mn = !0), Vn);
                        case 'textInput':
                          return (e = t.data) === Vn && Mn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return 'compositionend' === e || (!Fn && Un(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Dn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, 'onBeforeInput')).length &&
                  ((a = new wn('onBeforeInput', 'beforeinput', null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Vr(i, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Te(e, n)) && r.unshift(Hr(e, o, a)),
              null != (o = Te(e, t)) && r.push(Hr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = Te(n, o)) && i.unshift(Hr(n, u, l))
                : a || (null != (u = Te(n, o)) && i.push(Hr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Kr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ('string' === typeof e ? e : '' + e).replace(Kr, '\n').replace(Yr, '');
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          oa = 'function' === typeof Promise ? Promise : void 0,
          ia =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = '__reactFiber$' + fa,
          pa = '__reactProps$' + fa,
          ha = '__reactContainer$' + fa,
          ma = '__reactEvents$' + fa,
          va = '__reactListeners$' + fa,
          ga = '__reactHandles$' + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var ka = [],
          xa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > xa || ((e.current = ka[xa]), (ka[xa] = null), xa--);
        }
        function Ca(e, t) {
          xa++, (ka[xa] = e.current), (e.current = t);
        }
        var Na = {},
          Oa = _a(Na),
          Pa = _a(!1),
          ja = Na;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ra() {
          Ea(Pa), Ea(Oa);
        }
        function Fa(e, t, n) {
          if (Oa.current !== Na) throw Error(o(168));
          Ca(Oa, t), Ca(Pa, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, $(e) || 'Unknown', a));
          return D({}, n, r);
        }
        function Aa(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Na),
            (ja = Oa.current),
            Ca(Oa, e),
            Ca(Pa, Pa.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, ja)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Pa),
              Ea(Oa),
              Ca(Oa, e))
            : Ea(Pa),
            Ca(Pa, n);
        }
        var Va = null,
          Ma = !1,
          Ua = !1;
        function Ia(e) {
          null === Va ? (Va = [e]) : Va.push(e);
        }
        function Ba() {
          if (!Ua && null !== Va) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Va;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Va = null), (Ma = !1);
            } catch (a) {
              throw (null !== Va && (Va = Va.slice(e + 1)), Qe(Ze, Ba), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var $a = [],
          Wa = 0,
          Ha = null,
          qa = 0,
          Qa = [],
          Ga = 0,
          Ka = null,
          Ya = 1,
          Xa = '';
        function Ja(e, t) {
          ($a[Wa++] = qa), ($a[Wa++] = Ha), (Ha = e), (qa = t);
        }
        function Za(e, t, n) {
          (Qa[Ga++] = Ya), (Qa[Ga++] = Xa), (Qa[Ga++] = Ka), (Ka = e);
          var r = Ya;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Ha; ) (Ha = $a[--Wa]), ($a[Wa] = null), (qa = $a[--Wa]), ($a[Wa] = null);
          for (; e === Ka; )
            (Ka = Qa[--Ga]),
              (Qa[Ga] = null),
              (Xa = Qa[--Ga]),
              (Qa[Ga] = null),
              (Ya = Qa[--Ga]),
              (Qa[Ga] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Ls(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ka ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ls(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && lo(e, t) ? io(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = w.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = _a(null),
          bo = null,
          wo = null,
          So = null;
        function ko() {
          So = wo = bo = null;
        }
        function xo(e) {
          var t = yo.current;
          Ea(yo), (e._currentValue = t);
        }
        function _o(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Eo(e, t) {
          (bo = e),
            (So = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (So !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === wo)) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var No = null;
        function Oo(e) {
          null === No ? (No = [e]) : No.push(e);
        }
        function Po(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a ? ((n.next = n), Oo(t)) : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            jo(e, r)
          );
        }
        function jo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Lo = !1;
        function To(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ro(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fo(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ou))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              jo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Oo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            jo(e, n)
          );
        }
        function Ao(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Do(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vo(e, t, n, r) {
          var a = e.updateQueue;
          Lo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = s = u = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d = 'function' === typeof (h = m.payload) ? h.call(p, f, d) : h) ||
                        void 0 === d
                      )
                        break e;
                      f = D({}, f, d);
                      break e;
                    case 2:
                      Lo = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64), null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Au |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Mo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a)) throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Uo = new r.Component().refs;
        function Io(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              o = Fo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (ns(t, e, a, r), Ao(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              o = Fo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (ns(t, e, a, r), Ao(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              a = Fo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (ns(t, e, r, n), Ao(t, e, r));
          },
        };
        function $o(e, t, n, r, a, o, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(a, o);
        }
        function Wo(e, t, n) {
          var r = !1,
            a = Na,
            o = t.contextType;
          return (
            'object' === typeof o && null !== o
              ? (o = Co(o))
              : ((a = Ta(t) ? ja : Oa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? La(e, a) : Na)),
            (t = new t(n, o)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Ho(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
        }
        function qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Uo), To(e);
          var o = t.contextType;
          'object' === typeof o && null !== o
            ? (a.context = Co(o))
            : ((o = Ta(t) ? ja : Oa.current), (a.context = La(e, o))),
            (a.state = e.memoizedState),
            'function' === typeof (o = t.getDerivedStateFromProps) &&
              (Io(e, t, o, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount && a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              t !== a.state && Bo.enqueueReplaceState(a, a.state, null),
              Vo(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qo(e, t, n) {
          if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Uo && (t = a.refs = {}), null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ('string' !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Go(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
              )
            ))
          );
        }
        function Ko(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Rs(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ds(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === x
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ('object' === typeof o && null !== o && o.$$typeof === T && Ko(o) === t.type))
              ? (((r = a(t, n.props)).ref = Qo(e, t, n)), (r.return = e), r)
              : (((r = Fs(n.type, n.key, n.props, null, e.mode, r)).ref = Qo(e, t, n)),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zs(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Ds('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Fs(t.type, t.key, t.props, null, e.mode, n)).ref = Qo(e, null, t)),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Vs(t, e.mode, n)).return = e), t;
                case T:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t)) return ((t = zs(t, e.mode, n, null)).return = e), t;
              Go(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : u(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case T:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : f(e, t, n, r, null);
              Go(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case k:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r)) return f(t, (e = e.get(n) || null), r, a, null);
              Go(t, r);
            }
            return null;
          }
          function m(a, o, l, u) {
            for (
              var s = null, c = null, f = o, m = (o = 0), v = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, l[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (o = i(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === l.length) return n(a, f), ao && Ja(a, m), s;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(a, l[m], u)) &&
                  ((o = i(f, o, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
              return ao && Ja(a, m), s;
            }
            for (f = r(a, f); m < l.length; m++)
              null !== (v = h(f, a, m, l[m], u)) &&
                (e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
                (o = i(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              s
            );
          }
          function v(a, l, u, s) {
            var c = z(u);
            if ('function' !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), m = l, v = (l = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = i(b, l, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(a, m), ao && Ja(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((l = i(y, l, v)), null === f ? (c = y) : (f.sibling = y), (f = y));
              return ao && Ja(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e && null !== y.alternate && m.delete(null === y.key ? v : y.key),
                (l = i(y, l, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, v),
              c
            );
          }
          return function e(r, o, i, u) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === x &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var s = i.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === x) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((o = a(c, i.props.children)).return = r), (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === T &&
                            Ko(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Qo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === x
                      ? (((o = zs(i.props.children, r.mode, u, i.key)).return = r), (r = o))
                      : (((u = Fs(i.type, i.key, i.props, null, r.mode, u)).ref = Qo(r, o, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling), ((o = a(o, i.children || [])).return = r), (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Vs(i, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case T:
                  return e(r, o, (c = i._init)(i._payload), u);
              }
              if (te(i)) return m(r, o, i, u);
              if (z(i)) return v(r, o, i, u);
              Go(r, i);
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Ds(i, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Xo = Yo(!0),
          Jo = Yo(!1),
          Zo = {},
          ei = _a(Zo),
          ti = _a(Zo),
          ni = _a(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ca(ni, t), Ca(ti, e), Ca(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, '');
              break;
            default:
              t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Ea(ei), Ca(ei, t);
        }
        function oi() {
          Ea(ei), Ea(ti), Ea(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Ca(ti, e), Ca(ei, n));
        }
        function li(e) {
          ti.current === e && (Ea(ei), Ea(ti));
        }
        var ui = _a(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          vi = null,
          gi = null,
          yi = !1,
          bi = !1,
          wi = 0,
          Si = 0;
        function ki() {
          throw Error(o(321));
        }
        function xi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function _i(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1), (gi = vi = null), (t.updateQueue = null), (di.current = sl), (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== vi && null !== vi.next),
            (hi = 0),
            (gi = vi = mi = null),
            (yi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ei() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi;
        }
        function Ni() {
          if (null === vi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vi.next;
          var t = null === gi ? mi.memoizedState : gi.next;
          if (null !== t) (gi = t), (vi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Oi(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Pi(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = vi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d), (mi.lanes |= f), (Au |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (Au |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ji(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Li() {}
        function Ti(e, t) {
          var n = mi,
            r = Ni(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            Wi(zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || i || (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Mi(9, Fi.bind(null, n, r, a, t), void 0, null), null === Pu))
              throw Error(o(349));
            0 !== (30 & hi) || Ri(n, t, a);
          }
          return a;
        }
        function Ri(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (mi.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Fi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ai(t) && Di(e);
        }
        function zi(e, t, n) {
          return n(function () {
            Ai(t) && Di(e);
          });
        }
        function Ai(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Di(e) {
          var t = jo(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function Vi(e) {
          var t = Ci();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Oi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Mi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return Ni().memoizedState;
        }
        function Ii(e, t, n, r) {
          var a = Ci();
          (mi.flags |= e), (a.memoizedState = Mi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bi(e, t, n, r) {
          var a = Ni();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (((o = i.destroy), null !== r && xi(r, i.deps)))
              return void (a.memoizedState = Mi(t, n, o, r));
          }
          (mi.flags |= e), (a.memoizedState = Mi(1 | t, n, o, r));
        }
        function $i(e, t) {
          return Ii(8390656, 8, e, t);
        }
        function Wi(e, t) {
          return Bi(2048, 8, e, t);
        }
        function Hi(e, t) {
          return Bi(4, 2, e, t);
        }
        function qi(e, t) {
          return Bi(4, 4, e, t);
        }
        function Qi(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Gi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Ki() {}
        function Yi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)), (e.memoizedState = n))
            : (lr(n, t) || ((n = mt()), (mi.lanes |= n), (Au |= n), (e.baseState = !0)), t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ni().memoizedState;
        }
        function tl(e, t, n) {
          var r = ts(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), rl(e))
          )
            al(t, n);
          else if (null !== (n = Po(e, t, n, r))) {
            ns(n, e, r, es()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ts(e),
            a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u ? ((a.next = a), Oo(t)) : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = Po(e, t, a, r)) && (ns(n, e, r, (a = es())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function al(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var il = {
            readContext: Co,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: $i,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ii(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ii(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ii(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Vi,
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Vi(!1),
                t = e[0];
              return (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ci();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Pu)) throw Error(o(349));
                0 !== (30 & hi) || Ri(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                $i(zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Mi(9, Fi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = Pu.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t = ':' + t + 'R' + (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = Si++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Co,
            useCallback: Yi,
            useContext: Co,
            useEffect: Wi,
            useImperativeHandle: Gi,
            useInsertionEffect: Hi,
            useLayoutEffect: qi,
            useMemo: Xi,
            useReducer: Pi,
            useRef: Ui,
            useState: function () {
              return Pi(Oi);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return Ji(Ni(), vi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Oi)[0], Ni().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Ti,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Co,
            useCallback: Yi,
            useContext: Co,
            useEffect: Wi,
            useImperativeHandle: Gi,
            useInsertionEffect: Hi,
            useLayoutEffect: qi,
            useMemo: Xi,
            useReducer: ji,
            useRef: Ui,
            useState: function () {
              return ji(Oi);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              var t = Ni();
              return null === vi ? (t.memoizedState = e) : Ji(t, vi.memoizedState, e);
            },
            useTransition: function () {
              return [ji(Oi)[0], Ni().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Ti,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += I(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = '\nError generating stack: ' + o.message + '\n' + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = 'function' === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Fo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Hu = r)), dl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Fo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              'function' === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  'function' !== typeof r && (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        function vl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Es.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fo(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function Sl(e, t, n, r) {
          t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function kl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Eo(t, a),
            (r = _i(e, t, n, r, o, a)),
            (n = Ei()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), Sl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wl(e, t, a))
          );
        }
        function xl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return 'function' !== typeof o ||
              Ts(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), _l(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref)
              return Wl(e, t, a);
          }
          return (t.flags |= 1), ((e = Rs(o, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function _l(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wl(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Nl(e, t, n, r, a);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Ca(Ru, Tu),
                (Tu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  Ca(Ru, Tu),
                  (Tu |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== o ? o.baseLanes : n),
                Ca(Ru, Tu),
                (Tu |= r);
            }
          else
            null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
              Ca(Ru, Tu),
              (Tu |= r);
          return Sl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Nl(e, t, n, r, a) {
          var o = Ta(n) ? ja : Oa.current;
          return (
            (o = La(t, o)),
            Eo(t, a),
            (n = _i(e, t, n, r, o, a)),
            (r = Ei()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), Sl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wl(e, t, a))
          );
        }
        function Ol(e, t, n, r, a) {
          if (Ta(n)) {
            var o = !0;
            Aa(t);
          } else o = !1;
          if ((Eo(t, a), null === t.stateNode)) $l(e, t), Wo(t, n, r), qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            'object' === typeof s && null !== s
              ? (s = Co(s))
              : (s = La(t, (s = Ta(n) ? ja : Oa.current)));
            var c = n.getDerivedStateFromProps,
              f = 'function' === typeof c || 'function' === typeof i.getSnapshotBeforeUpdate;
            f ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Ho(t, i, r, s)),
              (Lo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Vo(t, r, i, a),
              (u = t.memoizedState),
              l !== r || d !== u || Pa.current || Lo
                ? ('function' === typeof c && (Io(t, n, c, r), (u = t.memoizedState)),
                  (l = Lo || $o(t, n, l, r, d, u, s))
                    ? (f ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount && i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ('function' === typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (i = t.stateNode),
              Ro(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : go(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = Co(u))
                : (u = La(t, (u = Ta(n) ? ja : Oa.current)));
            var p = n.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Ho(t, i, r, u)),
              (Lo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Vo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Pa.current || Lo
              ? ('function' === typeof p && (Io(t, n, p, r), (h = t.memoizedState)),
                (s = Lo || $o(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' === typeof i.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ('function' !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, o, a);
        }
        function Pl(e, t, n, r, a, o) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Da(t, n, !1), Wl(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l = i && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xo(t, e.child, null, o)), (t.child = Xo(t, null, l, o)))
              : Sl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function jl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Fa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Fa(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Ll(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), Sl(e, t, n, r), t.child;
        }
        var Tl,
          Rl,
          Fl,
          zl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Al(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Dl(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ca(ui, 1 & i),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = As(u, a, 0, null)),
                      (e = zs(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Al(n)),
                      (t.memoizedState = zl),
                      e)
                    : Vl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ml(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = As({ mode: 'visible', children: r.children }, a, 0, null)),
                    ((i = zs(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xo(t, e.child, null, l),
                    (t.child.memoizedState = Al(l)),
                    (t.memoizedState = zl),
                    i);
              if (0 === (1 & t.mode)) return Ml(e, t, l, null);
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst;
                return (r = u), Ml(e, t, l, (r = fl((i = Error(o(419))), r, void 0)));
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Pu)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), jo(e, a), ns(r, e, a, -1));
                }
                return ms(), Ml(e, t, l, (r = fl(Error(o(421)))));
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ns.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Ga++] = Ya),
                    (Qa[Ga++] = Xa),
                    (Qa[Ga++] = Ka),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ka = t)),
                  ((t = Vl(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, a, r, i, n);
          if (l) {
            (l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: 'hidden', children: a.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0), (a.pendingProps = s), (t.deletions = null))
                : ((a = Rs(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r ? (l = Rs(r, l)) : ((l = zs(l, u, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Al(n)
                  : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = zl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Rs(l, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Vl(e, t) {
          return (
            ((t = As({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Ml(e, t, n, r) {
          return (
            null !== r && mo(r),
            Xo(t, e.child, null, n),
            ((e = Vl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _o(e.return, t, n);
        }
        function Il(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Bl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Sl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                else if (19 === e.tag) Ul(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n), (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Il(t, !1, a, n, o);
                break;
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Il(t, !0, n, null, o);
                break;
              case 'together':
                Il(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $l(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Au |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Rs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Rs(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Hl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Ta(t.type) && Ra(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ea(Pa),
                Ea(Oa),
                fi(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== oo && (is(oo), (oo = null)))),
                ql(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Rl(e, t, n, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ql(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)) {
                    case 'dialog':
                      Mr('cancel', r), Mr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Mr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < zr.length; a++) Mr(zr[a], r);
                      break;
                    case 'source':
                      Mr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Mr('error', r), Mr('load', r);
                      break;
                    case 'details':
                      Mr('toggle', r);
                      break;
                    case 'input':
                      Y(r, i), Mr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!i.multiple }), Mr('invalid', r);
                      break;
                    case 'textarea':
                      ae(r, i), Mr('invalid', r);
                  }
                  for (var u in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning && Jr(r.textContent, s, e),
                            (a = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== i.suppressHydrationWarning && Jr(r.textContent, s, e),
                            (a = ['children', '' + s]))
                        : l.hasOwnProperty(u) && null != s && 'onScroll' === u && Mr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      q(r), Z(r, i, !0);
                      break;
                    case 'textarea':
                      q(r), ie(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = le(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = u.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          'select' === n &&
                            ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Tl(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case 'dialog':
                        Mr('cancel', e), Mr('close', e), (a = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Mr('load', e), (a = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (a = 0; a < zr.length; a++) Mr(zr[a], e);
                        a = r;
                        break;
                      case 'source':
                        Mr('error', e), (a = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Mr('error', e), Mr('load', e), (a = r);
                        break;
                      case 'details':
                        Mr('toggle', e), (a = r);
                        break;
                      case 'input':
                        Y(e, r), (a = K(e, r)), Mr('invalid', e);
                        break;
                      case 'option':
                      default:
                        a = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Mr('invalid', e);
                        break;
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Mr('invalid', e);
                    }
                    for (i in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        'style' === i
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : 'children' === i
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && de(e, c)
                            : 'number' === typeof c && de(e, '' + c)
                          : 'suppressContentEditableWarning' !== i &&
                            'suppressHydrationWarning' !== i &&
                            'autoFocus' !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && 'onScroll' === i && Mr('scroll', e)
                              : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case 'input':
                        q(e), Z(e, r, !1);
                        break;
                      case 'textarea':
                        q(e), ie(e);
                        break;
                      case 'option':
                        null != r.value && e.setAttribute('value', '' + W(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Fl(0, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Ea(ui),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                      throw Error(o(317));
                    i[da] = t;
                  } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  ql(t), (i = !1);
                } else null !== oo && (is(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current) ? 0 === Fu && (Fu = 3) : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return oi(), null === e && Br(t.stateNode.containerInfo), ql(t), null;
            case 10:
              return xo(t.type._context), ql(t), null;
            case 19:
              if ((Ea(ui), null === (i = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Hl(i, !1);
                else {
                  if (0 !== Fu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            Hl(i, !1),
                            null !== (r = u.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return Ca(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Bu &&
                    ((t.flags |= 128), (r = !0), Hl(i, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      Hl(i, !0),
                      null === i.tail && 'hidden' === i.tailMode && !u.alternate && !ao)
                    )
                      return ql(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Bu &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), Hl(i, !1), (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u), (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ui.current),
                  Ca(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Tu) && (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && Ra(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                oi(),
                Ea(Pa),
                Ea(Oa),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if ((Ea(ui), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Ea(ui), null;
            case 4:
              return oi(), null;
            case 10:
              return xo(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Tl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Rl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case 'input':
                  (a = K(e, a)), (r = K(e, r)), (i = []);
                  break;
                case 'select':
                  (a = D({}, a, { value: void 0 })), (r = D({}, r, { value: void 0 })), (i = []);
                  break;
                case 'textarea':
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var u = a[c];
                    for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ('style' === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''));
                      for (o in s)
                        s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : 'children' === c
                      ? ('string' !== typeof s && 'number' !== typeof s) ||
                        (i = i || []).push(c, '' + s)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && 'onScroll' === c && Mr('scroll', e),
                            i || u === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push('style', n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Fl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Kl = !1,
          Yl = !1,
          Xl = 'function' === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                _s(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            _s(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && eu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function ou(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ou(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da], delete t[pa], delete t[ma], delete t[va], delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function lu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; ) uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; ) su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (ot && 'function' === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Yl || Zl(n, t);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, t, n),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n),
                    Bt(e))
                  : ua(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Yl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i && (0 !== (2 & o) || 0 !== (4 & o)) && eu(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (!Yl && (Zl(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  _s(n, t, l);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yl = (r = Yl) || null !== n.memoizedState), du(e, t, n), (Yl = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Os.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(o(160));
                pu(i, l, a), (cu = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                _s(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (v) {
                  _s(e, e.return, v);
                }
                try {
                  nu(5, e, e.return);
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if ((mu(t, e), gu(e), 512 & r && null !== n && Zl(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                  de(a, '');
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u && 'radio' === i.type && null != i.name && X(a, i), be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      'style' === f
                        ? ve(a, d)
                        : 'dangerouslySetInnerHTML' === f
                        ? fe(a, d)
                        : 'children' === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case 'input':
                        J(a, i);
                        break;
                      case 'textarea':
                        oe(a, i);
                        break;
                      case 'select':
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : '', !1));
                    }
                    a[pa] = i;
                  } catch (v) {
                    _s(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 3:
              if ((mu(t, e), gu(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Bt(t.containerInfo);
                } catch (v) {
                  _s(e, e.return, v);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate && null !== a.alternate.memoizedState) ||
                    (Iu = Xe())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Yl = (c = Yl) || f), mu(t, e), (Yl = c)) : mu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var m = p.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              _s(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Su(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : Su(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? 'function' === typeof (i = a.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (u.style.display = me('display', l)));
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ''), (r.flags &= -33)), su(e, lu(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  uu(e, lu(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              _s(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yu(e, t, n) {
          (Jl = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var a = Jl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Kl;
              if (!i) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Yl;
                l = Kl;
                var s = Yl;
                if (((Kl = i), (Yl = u) && !s))
                  for (Jl = a; null !== Jl; )
                    (u = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = i), (Jl = u))
                        : ku(a);
                for (; null !== o; ) (Jl = o), bu(o, t, n), (o = o.sibling);
                (Jl = a), (Kl = l), (Yl = s);
              }
              wu(e);
            } else 0 !== (8772 & a.subtreeFlags) && null !== o ? ((o.return = a), (Jl = o)) : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Mo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Mo(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            s.autoFocus && n.focus();
                            break;
                          case 'img':
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Yl || (512 & t.flags && au(t));
              } catch (p) {
                _s(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    _s(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      _s(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    _s(t, o, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    _s(t, i, u);
                  }
              }
            } catch (u) {
              _s(t, t.return, u);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var xu,
          _u = Math.ceil,
          Eu = w.ReactCurrentDispatcher,
          Cu = w.ReactCurrentOwner,
          Nu = w.ReactCurrentBatchConfig,
          Ou = 0,
          Pu = null,
          ju = null,
          Lu = 0,
          Tu = 0,
          Ru = _a(0),
          Fu = 0,
          zu = null,
          Au = 0,
          Du = 0,
          Vu = 0,
          Mu = null,
          Uu = null,
          Iu = 0,
          Bu = 1 / 0,
          $u = null,
          Wu = !1,
          Hu = null,
          qu = null,
          Qu = !1,
          Gu = null,
          Ku = 0,
          Yu = 0,
          Xu = null,
          Ju = -1,
          Zu = 0;
        function es() {
          return 0 !== (6 & Ou) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ou) && 0 !== Lu
            ? Lu & -Lu
            : null !== vo.transition
            ? (0 === Zu && (Zu = mt()), Zu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Yu) throw ((Yu = 0), (Xu = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & Ou) && e === Pu) ||
              (e === Pu && (0 === (2 & Ou) && (Du |= n), 4 === Fu && ls(e, Lu)),
              rs(e, r),
              1 === n && 0 === Ou && 0 === (1 & t.mode) && ((Bu = Xe() + 500), Ma && Ba()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                u = a[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Pu ? Lu : 0);
          if (0 === r) null !== n && Ge(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ma = !0), Ia(e);
                  })(us.bind(null, e))
                : Ia(us.bind(null, e)),
                ia(function () {
                  0 === (6 & Ou) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ps(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Ju = -1), (Zu = 0), 0 !== (6 & Ou))) throw Error(o(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = dt(e, e === Pu ? Lu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var a = Ou;
            Ou |= 2;
            var i = hs();
            for ((Pu === e && Lu === t) || (($u = null), (Bu = Xe() + 500), ds(e, t)); ; )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            ko(),
              (Eu.current = i),
              (Ou = a),
              null !== ju ? (t = 0) : ((Pu = null), (Lu = 0), (t = Fu));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (a = ht(e)) && ((r = a), (t = os(e, a))), 1 === t))
              throw ((n = zu), ds(e, 0), ls(e, r), rs(e, Xe()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vs(e, r)) && 0 !== (i = ht(e)) && ((r = i), (t = os(e, i))), 1 === t))
              )
                throw ((n = zu), ds(e, 0), ls(e, r), rs(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  Ss(e, Uu, $u);
                  break;
                case 3:
                  if ((ls(e, r), (130023424 & r) === r && 10 < (t = Iu + 500 - Xe()))) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Ss.bind(null, e, Uu, $u), t);
                    break;
                  }
                  Ss(e, Uu, $u);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _u(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Ss.bind(null, e, Uu, $u), r);
                    break;
                  }
                  Ss(e, Uu, $u);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rs(e, Xe()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function os(e, t) {
          var n = Mu;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Uu), (Uu = n), null !== t && is(t)),
            e
          );
        }
        function is(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function ls(e, t) {
          for (
            t &= ~Vu, t &= ~Du, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Ou)) throw Error(o(327));
          ks();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Xe()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = os(e, r)));
          }
          if (1 === n) throw ((n = zu), ds(e, 0), ls(e, t), rs(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Ss(e, Uu, $u),
            rs(e, Xe()),
            null
          );
        }
        function ss(e, t) {
          var n = Ou;
          Ou |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ou = n) && ((Bu = Xe() + 500), Ma && Ba());
          }
        }
        function cs(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Ou) && ks();
          var t = Ou;
          Ou |= 1;
          var n = Nu.transition,
            r = bt;
          try {
            if (((Nu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Nu.transition = n), 0 === (6 & (Ou = t)) && Ba();
          }
        }
        function fs() {
          (Tu = Ru.current), Ea(Ru);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== ju))
            for (n = ju.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && Ra();
                  break;
                case 3:
                  oi(), Ea(Pa), Ea(Oa), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Ea(ui);
                  break;
                case 10:
                  xo(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Pu = e),
            (ju = e = Rs(e.current, null)),
            (Lu = Tu = t),
            (Fu = 0),
            (zu = null),
            (Vu = Du = Au = 0),
            (Uu = Mu = null),
            null !== No)
          ) {
            for (t = 0; t < No.length; t++)
              if (null !== (r = (n = No[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            No = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = ju;
            try {
              if ((ko(), (di.current = il), yi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((hi = 0),
                (gi = vi = mi = null),
                (bi = !1),
                (wi = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (Fu = 1), (zu = t), (ju = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Lu),
                  (u.flags |= 32768),
                  null !== s && 'object' === typeof s && 'function' === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257), yl(h, l, u, 0, t), 1 & h.mode && vl(i, c, t), (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vl(i, c, t), ms();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256), yl(g, l, u, 0, t), mo(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Fu && (Fu = 2),
                  null === Mu ? (Mu = [i]) : Mu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536), (t &= -t), (i.lanes |= t), Do(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        (i.flags |= 65536), (t &= -t), (i.lanes |= t), Do(i, ml(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              ws(n);
            } catch (w) {
              (t = w), ju === n && null !== n && (ju = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Eu.current;
          return (Eu.current = il), null === e ? il : e;
        }
        function ms() {
          (0 !== Fu && 3 !== Fu && 2 !== Fu) || (Fu = 4),
            null === Pu || (0 === (268435455 & Au) && 0 === (268435455 & Du)) || ls(Pu, Lu);
        }
        function vs(e, t) {
          var n = Ou;
          Ou |= 2;
          var r = hs();
          for ((Pu === e && Lu === t) || (($u = null), ds(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((ko(), (Ou = n), (Eu.current = r), null !== ju)) throw Error(o(261));
          return (Pu = null), (Lu = 0), Fu;
        }
        function gs() {
          for (; null !== ju; ) bs(ju);
        }
        function ys() {
          for (; null !== ju && !Ke(); ) bs(ju);
        }
        function bs(e) {
          var t = xu(e.alternate, e, Tu);
          (e.memoizedProps = e.pendingProps), null === t ? ws(e) : (ju = t), (Cu.current = null);
        }
        function ws(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ql(n, t, Tu))) return void (ju = n);
            } else {
              if (null !== (n = Gl(n, t))) return (n.flags &= 32767), void (ju = n);
              if (null === e) return (Fu = 6), void (ju = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (ju = t);
            ju = t = e;
          } while (null !== t);
          0 === Fu && (Fu = 5);
        }
        function Ss(e, t, n) {
          var r = bt,
            a = Nu.transition;
          try {
            (Nu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Gu);
                if (0 !== (6 & Ou)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Pu && ((ju = Pu = null), (Lu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qu ||
                    ((Qu = !0),
                    Ps(tt, function () {
                      return ks(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Nu.transition), (Nu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Ou;
                  (Ou |= 4),
                    (Cu.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
                        if ('selectionStart' in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n || (0 !== a && 3 !== d.nodeType) || (u = l + a),
                                    d !== i || (0 !== r && 3 !== d.nodeType) || (s = l + r),
                                    3 === d.nodeType && (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = l),
                                    p === i && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n = -1 === u || -1 === s ? null : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n }, Wt = !1, Jl = t;
                        null !== Jl;

                      )
                        if (((e = (t = Jl).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? v : go(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = '')
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (S) {
                              _s(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (m = tu), (tu = !1);
                    })(e, n),
                    vu(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yu(n, e, a),
                    Ye(),
                    (Ou = u),
                    (bt = l),
                    (Nu.transition = i);
                } else e.current = n;
                if (
                  (Qu && ((Qu = !1), (Gu = e), (Ku = a)),
                  0 === (i = e.pendingLanes) && (qu = null),
                  (function (e) {
                    if (ot && 'function' === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = Hu), (Hu = null), e);
                0 !== (1 & Ku) && 0 !== e.tag && ks(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === Xu
                      ? Yu++
                      : ((Yu = 0), (Xu = e))
                    : (Yu = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Nu.transition = a), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Gu) {
            var e = wt(Ku),
              t = Nu.transition,
              n = bt;
            try {
              if (((Nu.transition = null), (bt = 16 > e ? 16 : e), null === Gu)) var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Ku = 0), 0 !== (6 & Ou))) throw Error(o(331));
                var a = Ou;
                for (Ou |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((ou(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l) (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jl = y);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w) (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (u = Jl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (k) {
                          _s(u, u.return, k);
                        }
                      if (u === l) {
                        Jl = null;
                        break e;
                      }
                      var S = u.sibling;
                      if (null !== S) {
                        (S.return = u.return), (Jl = S);
                        break e;
                      }
                      Jl = u.return;
                    }
                }
                if (((Ou = a), Ba(), ot && 'function' === typeof ot.onPostCommitFiberRoot))
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Nu.transition = t);
            }
          }
          return !1;
        }
        function xs(e, t, n) {
          (e = zo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (gt(e, 1, t), rs(e, t));
        }
        function _s(e, t, n) {
          if (3 === e.tag) xs(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xs(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch && (null === qu || !qu.has(r)))
                ) {
                  (t = zo(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (gt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Es(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Pu === e &&
              (Lu & n) === n &&
              (4 === Fu || (3 === Fu && (130023424 & Lu) === Lu && 500 > Xe() - Iu)
                ? ds(e, 0)
                : (Vu |= n)),
            rs(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = jo(e, t)) && (gt(e, t, n), rs(e, n));
        }
        function Ns(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function Os(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cs(e, n);
        }
        function Ps(e, t) {
          return Qe(e, t);
        }
        function js(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ls(e, t, n, r) {
          return new js(e, t, n, r);
        }
        function Ts(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ls(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Fs(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), 'function' === typeof e)) Ts(e) && (l = 1);
          else if ('string' === typeof e) l = 5;
          else
            e: switch (e) {
              case x:
                return zs(n.children, a, i, t);
              case _:
                (l = 8), (a |= 8);
                break;
              case E:
                return ((e = Ls(12, n, t, 2 | a)).elementType = E), (e.lanes = i), e;
              case P:
                return ((e = Ls(13, n, t, a)).elementType = P), (e.lanes = i), e;
              case j:
                return ((e = Ls(19, n, t, a)).elementType = j), (e.lanes = i), e;
              case R:
                return As(n, a, i, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case N:
                      l = 9;
                      break e;
                    case O:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case T:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ''));
            }
          return ((t = Ls(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
        }
        function zs(e, t, n, r) {
          return ((e = Ls(7, e, r, t)).lanes = n), e;
        }
        function As(e, t, n, r) {
          return (
            ((e = Ls(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ds(e, t, n) {
          return ((e = Ls(6, e, null, t)).lanes = n), e;
        }
        function Vs(e, t, n) {
          return (
            ((t = Ls(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ms(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Us(e, t, n, r, a, o, i, l, u) {
          return (
            (e = new Ms(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ls(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            To(o),
            e
          );
        }
        function Is(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: k,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Bs(e) {
          if (!e) return Na;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return za(e, n, t);
          }
          return t;
        }
        function $s(e, t, n, r, a, o, i, l, u) {
          return (
            ((e = Us(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null)),
            (n = e.current),
            ((o = Fo((r = es()), (a = ts(n)))).callback = void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rs(e, r),
            e
          );
        }
        function Ws(e, t, n, r) {
          var a = t.current,
            o = es(),
            i = ts(a);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, i)) && (ns(e, a, i, o), Ao(e, a, i)),
            i
          );
        }
        function Hs(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qs(e, t) {
          qs(e, t), (e = e.alternate) && qs(e, t);
        }
        xu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        jl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ta(t.type) && Aa(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Dl(e, t, n)
                            : (Ca(ui, 1 & ui.current),
                              null !== (e = Wl(e, t, n)) ? e.sibling : null);
                        Ca(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Bl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                          Ca(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return Wl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $l(e, t), (e = t.pendingProps);
              var a = La(t, Oa.current);
              Eo(t, n), (a = _i(null, t, r, e, a, n));
              var i = Ei();
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((i = !0), Aa(t)) : (i = !1),
                    (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                    To(t),
                    (a.updater = Bo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    qo(t, r, e, n),
                    (t = Pl(null, t, r, !0, i, n)))
                  : ((t.tag = 0), ao && i && eo(t), Sl(null, t, a, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Ts(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xl(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Nl(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ol(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((jl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Ro(e, t),
                  Vo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ll(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ll(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Wl(e, t, n);
                    break e;
                  }
                  Sl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a) ? (l = null) : null !== i && na(r, i) && (t.flags |= 32),
                Cl(e, t),
                Sl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Dl(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : Sl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                kl(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 7:
              return Sl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Sl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Ca(yo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Pa.current) {
                      t = Wl(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Fo(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f ? (s.next = s) : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              _o(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          _o(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                Sl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Eo(t, n),
                (r = r((a = Co(a)))),
                (t.flags |= 1),
                Sl(e, t, r, n),
                t.child
              );
            case 14:
              return (a = go((r = t.type), t.pendingProps)), xl(e, t, r, (a = go(r.type, a)), n);
            case 15:
              return _l(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                $l(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Aa(t)) : (e = !1),
                Eo(t, n),
                Wo(t, r, a),
                qo(t, r, a, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return Bl(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Gs =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ks(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ('function' === typeof a) {
              var l = a;
              a = function () {
                var e = Hs(i);
                l.call(e);
              };
            }
            Ws(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hs(i);
                    o.call(e);
                  };
                }
                var i = $s(t, r, e, 0, null, !1, 0, '', Zs);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ('function' === typeof r) {
                var l = r;
                r = function () {
                  var e = Hs(u);
                  l.call(e);
                };
              }
              var u = Us(e, 0, !1, null, 0, !1, 0, '', Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Ws(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Hs(i);
        }
        (Ys.prototype.render = Ks.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Ws(e, t, null, null);
          }),
          (Ys.prototype.unmount = Ks.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Ws(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++);
              Rt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n), rs(t, Xe()), 0 === (6 & Ou) && ((Bu = Xe() + 500), Ba()));
                }
                break;
              case 13:
                cs(function () {
                  var t = jo(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  Qs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = jo(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              Qs(e, 134217728);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = jo(e, t);
              if (null !== n) ns(n, e, t, es());
              Qs(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((J(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(o(90));
                      Q(r), J(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                oe(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = ss),
          (Pe = cs);
        var tc = { usingClientEntryPoint: !1, Events: [ba, wa, Sa, Ce, Ne, ss] },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Xs(t)) throw Error(o(200));
            return Is(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xs(e)) throw Error(o(299));
            var n = !1,
              r = '',
              a = Gs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Us(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Ks(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(',')), Error(o(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Js(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = '',
              l = Gs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = $s(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Js(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Js(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Js(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: function (e, t, n) {
        'use strict';
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        'use strict';
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        'use strict';
        var r = n(791),
          a = Symbol.for('react.element'),
          o = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return { $$typeof: a, type: e, key: s, ref: c, props: o, _owner: l.current };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          x = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = '' + t.key), t))
              k.call(t, a) && !_.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps) for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return { $$typeof: n, type: e, key: i, ref: l, props: o, _owner: x.current };
        }
        function C(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function O(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, i) {
          var l = typeof e;
          ('undefined' !== l && 'boolean' !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case 'string':
              case 'number':
                u = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = '' === o ? '.' + O(u, 0) : o),
              S(i)
                ? ((a = ''),
                  null != e && (a = e.replace(N, '$&/') + '/'),
                  P(i, t, a, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ''
                          : ('' + i.key).replace(N, '$&/') + '/') +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (o = '' === o ? '.' : o + ':'), S(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + O((l = e[s]), s);
              u += P(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += P((l = l.value), t, a, (c = o + O(l, s++)), i);
          else if ('object' === l)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return u;
        }
        function j(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          R = { transition: null },
          F = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: R, ReactCurrentOwner: x };
        (t.Children = {
          map: j,
          forEach: function (e, t, n) {
            j(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              j(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = x.current)),
                void 0 !== t.key && (o = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !_.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return { $$typeof: n, type: e.type, key: o, ref: i, props: a, _owner: l };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: L };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.');
          }),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      791: function (e, t, n) {
        'use strict';
        e.exports = n(117);
      },
      184: function (e, t, n) {
        'use strict';
        e.exports = n(374);
      },
      813: function (e, t) {
        'use strict';
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ('object' === typeof performance && 'function' === typeof performance.now) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), R(k);
            else {
              var t = r(c);
              null !== t && F(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(C), (C = -1)), (h = !0);
          var o = p;
          try {
            for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || (e && !P())); ) {
              var i = d.callback;
              if ('function' === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof l ? (d.callback = l) : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && F(S, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          _ = !1,
          E = null,
          C = -1,
          N = 5,
          O = -1;
        function P() {
          return !(t.unstable_now() - O < N);
        }
        function j() {
          if (null !== E) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? x() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ('function' === typeof b)
          x = function () {
            b(j);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var L = new MessageChannel(),
            T = L.port2;
          (L.port1.onmessage = j),
            (x = function () {
              T.postMessage(null);
            });
        } else
          x = function () {
            g(j, 0);
          };
        function R(e) {
          (E = e), _ || ((_ = !0), x());
        }
        function F(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), R(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ('object' === typeof o && null !== o
                ? (o = 'number' === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) && e === r(c) && (v ? (y(C), (C = -1)) : (v = !0), F(S, o - i)))
                : ((e.sortIndex = l), n(s, e), m || h || ((m = !0), R(k))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        'use strict';
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ('object' === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && 'function' === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & a && r; 'object' == typeof l && !~e.indexOf(l); l = t(l))
          Object.getOwnPropertyNames(l).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return 'static/js/' + e + '.e56f57c5.chunk.js';
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = 'react-components:';
      n.l = function (r, a, o, i) {
        if (e[r]) e[r].push(a);
        else {
          var l, u;
          if (void 0 !== o)
            for (var s = document.getElementsByTagName('script'), c = 0; c < s.length; c++) {
              var f = s[c];
              if (f.getAttribute('src') == r || f.getAttribute('data-webpack') == t + o) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement('script')).charset = 'utf-8'),
            (l.timeout = 120),
            n.nc && l.setAttribute('nonce', n.nc),
            l.setAttribute('data-webpack', t + o),
            (l.src = r)),
            (e[r] = [a]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(d.bind(null, void 0, { type: 'timeout', target: l }), 12e4);
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.p = '/'),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    i = r && r.target && r.target.src;
                  (l.message = 'Loading chunk ' + t + ' failed.\n(' + o + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            o,
            i = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (u) u(n);
          }
          for (t && t(r); s < i.length; s++) (o = i[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkreact_components = self.webpackChunkreact_components || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      'use strict';
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ('string' === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (u) {
                (l = !0), (a = u);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function s(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t, n) {
        return (
          t && c(e.prototype, t),
          n && c(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function d(e, t) {
        return (
          (d = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          d(e, t)
        );
      }
      function p(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && d(e, t);
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function m() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function v(e) {
        return (
          (v =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          v(e)
        );
      }
      function g(e, t) {
        if (t && ('object' === v(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError('Derived constructors may only return object or undefined');
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e);
      }
      function y(e) {
        var t = m();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var a = h(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return g(this, n);
        };
      }
      function b(e, t, n) {
        return (
          (b = m()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && d(a, n.prototype), a;
              }),
          b.apply(null, arguments)
        );
      }
      function w(e) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (
          (w = function (e) {
            if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]')))
              return e;
            var n;
            if ('function' !== typeof e)
              throw new TypeError('Super expression must either be null or a function');
            if ('undefined' !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return b(e, arguments, h(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
              })),
              d(r, e)
            );
          }),
          w(e)
        );
      }
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          S.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(e || (e = {}));
      var k,
        x = 'popstate';
      function _(e) {
        return { usr: e.state, key: e.key };
      }
      function E(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          S(
            { pathname: 'string' === typeof e ? e : e.pathname, search: '', hash: '' },
            'string' === typeof t ? N(t) : t,
            { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) }
          )
        );
      }
      function C(e) {
        var t = e.pathname,
          n = void 0 === t ? '/' : t,
          r = e.search,
          a = void 0 === r ? '' : r,
          o = e.hash,
          i = void 0 === o ? '' : o;
        return (
          a && '?' !== a && (n += '?' === a.charAt(0) ? a : '?' + a),
          i && '#' !== i && (n += '#' === i.charAt(0) ? i : '#' + i),
          n
        );
      }
      function N(e) {
        var t = {};
        if (e) {
          var n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
        }
        return t;
      }
      function O(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          l = void 0 === i ? document.defaultView : i,
          u = o.v5Compat,
          s = void 0 !== u && u,
          c = l.history,
          f = e.Pop,
          d = null;
        function p() {
          (f = e.Pop), d && d({ action: f, location: h.location });
        }
        var h = {
          get action() {
            return f;
          },
          get location() {
            return t(l, c);
          },
          listen: function (e) {
            if (d) throw new Error('A history only accepts one active listener');
            return (
              l.addEventListener(x, p),
              (d = e),
              function () {
                l.removeEventListener(x, p), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          push: function (t, n) {
            f = e.Push;
            var a = E(h.location, t, n);
            r && r(a, t);
            var o = _(a),
              i = h.createHref(a);
            try {
              c.pushState(o, '', i);
            } catch (u) {
              l.location.assign(i);
            }
            s && d && d({ action: f, location: a });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = E(h.location, t, n);
            r && r(a, t);
            var o = _(a),
              i = h.createHref(a);
            c.replaceState(o, '', i), s && d && d({ action: f, location: a });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return h;
      }
      function P(e, t, n) {
        void 0 === n && (n = '/');
        var r = A(('string' === typeof t ? N(t) : t).pathname || '/', n);
        if (null == r) return null;
        var a = j(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i) o = F(a[i], r);
        return o;
      }
      function j(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ''),
          e.forEach(function (e, a) {
            var o = {
              relativePath: e.path || '',
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            o.relativePath.startsWith('/') &&
              (D(
                o.relativePath.startsWith(r),
                'Absolute route path "' +
                  o.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (o.relativePath = o.relativePath.slice(r.length)));
            var i = U([r, o.relativePath]),
              l = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (D(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  i +
                  '".'
              ),
              j(e.children, t, l, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: R(i, e.index), routesMeta: l });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(k || (k = {}));
      var L = /^:\w+$/,
        T = function (e) {
          return '*' === e;
        };
      function R(e, t) {
        var n = e.split('/'),
          r = n.length;
        return (
          n.some(T) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !T(e);
            })
            .reduce(function (e, t) {
              return e + (L.test(t) ? 3 : '' === t ? 1 : 10);
            }, r)
        );
      }
      function F(e, t) {
        for (var n = e.routesMeta, r = {}, a = '/', o = [], i = 0; i < n.length; ++i) {
          var l = n[i],
            u = i === n.length - 1,
            s = '/' === a ? t : t.slice(a.length) || '/',
            c = z({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, s);
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: U([a, c.pathname]),
            pathnameBase: I(U([a, c.pathnameBase])),
            route: f,
          }),
            '/' !== c.pathnameBase && (a = U([a, c.pathnameBase]));
        }
        return o;
      }
      function z(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            V(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".'
            );
            var r = [],
              a =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), '([^\\/]+)';
                  });
            e.endsWith('*')
              ? (r.push('*'), (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : (a += n ? '\\/*$' : '(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)');
            return [new RegExp(a, t ? void 0 : 'i'), r];
          })(e.path, e.caseSensitive, e.end),
          r = l(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var u = i[0],
          s = u.replace(/(.)\/+$/, '$1'),
          c = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ('*' === t) {
              var r = c[n] || '';
              s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, '$1');
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    V(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ').'
                    ),
                    e
                  );
                }
              })(c[n] || '', t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: s,
          pattern: e,
        };
      }
      function A(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function D(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
      }
      function V(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function M(e, t, n, r) {
        void 0 === r && (r = !1);
        var a,
          o = 'string' === typeof e ? N(e) : S({}, e),
          i = '' === e || '' === o.pathname,
          l = i ? '/' : o.pathname;
        if (r || null == l) a = n;
        else {
          var u = t.length - 1;
          if (l.startsWith('..')) {
            for (var s = l.split('/'); '..' === s[0]; ) s.shift(), (u -= 1);
            o.pathname = s.join('/');
          }
          a = u >= 0 ? t[u] : '/';
        }
        var c = (function (e, t) {
            void 0 === t && (t = '/');
            var n = 'string' === typeof e ? N(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? '' : a,
              i = n.hash,
              l = void 0 === i ? '' : i,
              u = r
                ? r.startsWith('/')
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach(function (e) {
                          '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: B(o), hash: $(l) };
          })(o, a),
          f = l && '/' !== l && l.endsWith('/'),
          d = (i || '.' === l) && n.endsWith('/');
        return c.pathname.endsWith('/') || (!f && !d) || (c.pathname += '/'), c;
      }
      var U = function (e) {
          return e.join('/').replace(/\/\/+/g, '/');
        },
        I = function (e) {
          return e.replace(/\/+$/, '').replace(/^\/*/, '/');
        },
        B = function (e) {
          return e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : '';
        },
        $ = function (e) {
          return e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '';
        },
        W = (function (e) {
          p(n, e);
          var t = y(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return f(n);
        })(w(Error));
      var H = f(function e(t, n, r) {
        s(this, e), (this.status = t), (this.statusText = n || ''), (this.data = r);
      });
      function q(e) {
        return e instanceof H;
      }
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Q.apply(this, arguments)
        );
      }
      var G =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              },
        K = t.useState,
        Y = t.useEffect,
        X = t.useLayoutEffect,
        J = t.useDebugValue;
      function Z(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !G(n, r);
        } catch (a) {
          return !0;
        }
      }
      'undefined' === typeof window ||
        'undefined' === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ee = t.createContext(null);
      var te = t.createContext(null);
      var ne = t.createContext(null);
      var re = t.createContext(null);
      var ae = t.createContext(null);
      var oe = t.createContext(null);
      var ie = t.createContext({ outlet: null, matches: [] });
      var le = t.createContext(null);
      function ue() {
        return null != t.useContext(oe);
      }
      function se() {
        return ue() || D(!1), t.useContext(oe).location;
      }
      function ce(e) {
        return e.filter(function (t, n) {
          return 0 === n || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase);
        });
      }
      function fe() {
        ue() || D(!1);
        var e = t.useContext(ae),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(ie).matches,
          o = se().pathname,
          i = JSON.stringify(
            ce(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = t.useRef(!1);
        return (
          t.useEffect(function () {
            l.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ('number' !== typeof e) {
                  var a = M(e, JSON.parse(i), o, 'path' === t.relative);
                  '/' !== n && (a.pathname = '/' === a.pathname ? n : U([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, i, o]
          )
        );
      }
      var de = t.createContext(null);
      function pe(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(ie).matches,
          o = se().pathname,
          i = JSON.stringify(
            ce(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return M(e, JSON.parse(i), o, 'path' === r);
          },
          [e, i, o, r]
        );
      }
      function he() {
        var e = (function () {
            var e,
              n = t.useContext(le),
              r = be(me.UseRouteError),
              a = t.useContext(ie),
              o = a.matches[a.matches.length - 1];
            if (n) return n;
            return (
              a || D(!1), !o.route.id && D(!1), null == (e = r.errors) ? void 0 : e[o.route.id]
            );
          })(),
          n = q(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = 'rgba(200,200,200, 0.5)',
          o = { padding: '0.5rem', backgroundColor: a },
          i = { padding: '2px 4px', backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('h2', null, 'Unhandled Thrown Error!'),
          t.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? t.createElement('pre', { style: o }, r) : null,
          t.createElement('p', null, '\ud83d\udcbf Hey developer \ud83d\udc4b'),
          t.createElement(
            'p',
            null,
            'You can provide a way better UX than this when your app throws errors by providing your own\xa0',
            t.createElement('code', { style: i }, 'errorElement'),
            ' props on\xa0',
            t.createElement('code', { style: i }, '<Route>')
          )
        );
      }
      var me,
        ve = (function (e) {
          p(r, e);
          var n = y(r);
          function r(e) {
            var t;
            return (
              s(this, r),
              ((t = n.call(this, e)).state = { location: e.location, error: e.error }),
              t
            );
          }
          return (
            f(
              r,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    console.error('React Router caught the following error during render', e, t);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.state.error
                      ? t.createElement(le.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function ge(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(ee);
        return (
          o && r.route.errorElement && (o._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ie.Provider, { value: n }, a)
        );
      }
      function ye(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          var i = a.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          i >= 0 || D(!1), (a = a.slice(0, Math.min(a.length, i + 1)));
        }
        return a.reduceRight(function (e, i, l) {
          var u = i.route.id ? (null == o ? void 0 : o[i.route.id]) : null,
            s = r ? i.route.errorElement || t.createElement(he, null) : null,
            c = function () {
              return t.createElement(
                ge,
                { match: i, routeContext: { outlet: e, matches: n.concat(a.slice(0, l + 1)) } },
                u ? s : void 0 !== i.route.element ? i.route.element : e
              );
            };
          return r && (i.route.errorElement || 0 === l)
            ? t.createElement(ve, { location: r.location, component: s, error: u, children: c() })
            : c();
        }, null);
      }
      function be(e) {
        var n = t.useContext(ne);
        return n || D(!1), n;
      }
      !(function (e) {
        (e.UseLoaderData = 'useLoaderData'),
          (e.UseActionData = 'useActionData'),
          (e.UseRouteError = 'useRouteError'),
          (e.UseNavigation = 'useNavigation'),
          (e.UseRouteLoaderData = 'useRouteLoaderData'),
          (e.UseMatches = 'useMatches'),
          (e.UseRevalidator = 'useRevalidator');
      })(me || (me = {}));
      var we;
      function Se(e) {
        return (function (e) {
          var n = t.useContext(ie).outlet;
          return n ? t.createElement(de.Provider, { value: e }, n) : n;
        })(e.context);
      }
      function ke(e) {
        D(!1);
      }
      function xe(n) {
        var r = n.basename,
          a = void 0 === r ? '/' : r,
          o = n.children,
          i = void 0 === o ? null : o,
          l = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        ue() && D(!1);
        var p = a.replace(/^\/*/, '/'),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        'string' === typeof l && (l = N(l));
        var m = l,
          v = m.pathname,
          g = void 0 === v ? '/' : v,
          y = m.search,
          b = void 0 === y ? '' : y,
          w = m.hash,
          S = void 0 === w ? '' : w,
          k = m.state,
          x = void 0 === k ? null : k,
          _ = m.key,
          E = void 0 === _ ? 'default' : _,
          C = t.useMemo(
            function () {
              var e = A(g, p);
              return null == e ? null : { pathname: e, search: b, hash: S, state: x, key: E };
            },
            [p, g, b, S, x, E]
          );
        return null == C
          ? null
          : t.createElement(
              ae.Provider,
              { value: h },
              t.createElement(oe.Provider, {
                children: i,
                value: { location: C, navigationType: s },
              })
            );
      }
      function _e(n) {
        var r = n.children,
          a = n.location,
          o = t.useContext(te);
        return (function (n, r) {
          ue() || D(!1);
          var a,
            o = t.useContext(ne),
            i = t.useContext(ie).matches,
            l = i[i.length - 1],
            u = l ? l.params : {},
            s = (l && l.pathname, l ? l.pathnameBase : '/'),
            c = (l && l.route, se());
          if (r) {
            var f,
              d = 'string' === typeof r ? N(r) : r;
            '/' === s || (null == (f = d.pathname) ? void 0 : f.startsWith(s)) || D(!1), (a = d);
          } else a = c;
          var p = a.pathname || '/',
            h = P(n, { pathname: '/' === s ? p : p.slice(s.length) || '/' }),
            m = ye(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, u, e.params),
                    pathname: U([s, e.pathname]),
                    pathnameBase: '/' === e.pathnameBase ? s : U([s, e.pathnameBase]),
                  });
                }),
              i,
              o || void 0
            );
          return r
            ? t.createElement(
                oe.Provider,
                {
                  value: {
                    location: Q(
                      { pathname: '/', search: '', hash: '', state: null, key: 'default' },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                m
              )
            : m;
        })(o && !r ? o.router.routes : Ce(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = 'pending'),
          (e[(e.success = 1)] = 'success'),
          (e[(e.error = 2)] = 'error');
      })(we || (we = {}));
      var Ee = new Promise(function () {});
      t.Component;
      function Ce(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== ke && D(!1);
                var o = [].concat(u(n), [a]),
                  i = {
                    id: e.props.id || o.join('-'),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (i.children = Ce(e.props.children, o)), r.push(i);
              } else r.push.apply(r, Ce(e.props.children, n));
          }),
          r
        );
      }
      function Ne() {
        return (
          (Ne = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ne.apply(this, arguments)
        );
      }
      function Oe(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var Pe = [
          'onClick',
          'relative',
          'reloadDocument',
          'replace',
          'state',
          'target',
          'to',
          'preventScrollReset',
        ],
        je = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'children'];
      function Le(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          i = t.useRef();
        null == i.current &&
          (i.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            O(
              function (e, t) {
                var n = e.location;
                return E(
                  '',
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default'
                );
              },
              function (e, t) {
                return 'string' === typeof t ? t : C(t);
              },
              null,
              n
            )));
        var u = i.current,
          s = l(t.useState({ action: u.action, location: u.location }), 2),
          c = s[0],
          f = s[1];
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(f);
            },
            [u]
          ),
          t.createElement(xe, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: u,
          })
        );
      }
      var Te = t.forwardRef(function (e, n) {
        var r = e.onClick,
          a = e.relative,
          o = e.reloadDocument,
          i = e.replace,
          l = e.state,
          u = e.target,
          s = e.to,
          c = e.preventScrollReset,
          f = Oe(e, Pe),
          d = (function (e, n) {
            var r = (void 0 === n ? {} : n).relative;
            ue() || D(!1);
            var a = t.useContext(ae),
              o = a.basename,
              i = a.navigator,
              l = pe(e, { relative: r }),
              u = l.hash,
              s = l.pathname,
              c = l.search,
              f = s;
            return (
              '/' !== o && (f = '/' === s ? o : U([o, s])),
              i.createHref({ pathname: f, search: c, hash: u })
            );
          })(s, { relative: a }),
          p = (function (e, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              o = r.replace,
              i = r.state,
              l = r.preventScrollReset,
              u = r.relative,
              s = fe(),
              c = se(),
              f = pe(e, { relative: u });
            return t.useCallback(
              function (t) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || '_self' === t) &&
                      !(function (e) {
                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                      })(e)
                    );
                  })(t, a)
                ) {
                  t.preventDefault();
                  var n = void 0 !== o ? o : C(c) === C(f);
                  s(e, { replace: n, state: i, preventScrollReset: l, relative: u });
                }
              },
              [c, s, f, o, i, a, e, l, u]
            );
          })(s, { replace: i, state: l, target: u, preventScrollReset: c, relative: a });
        return t.createElement(
          'a',
          Ne({}, f, {
            href: d,
            onClick: o
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || p(e);
                },
            ref: n,
            target: u,
          })
        );
      });
      var Re = t.forwardRef(function (e, n) {
        var r,
          a = e['aria-current'],
          o = void 0 === a ? 'page' : a,
          i = e.caseSensitive,
          l = void 0 !== i && i,
          u = e.className,
          s = void 0 === u ? '' : u,
          c = e.end,
          f = void 0 !== c && c,
          d = e.style,
          p = e.to,
          h = e.children,
          m = Oe(e, je),
          v = pe(p),
          g = (function (e) {
            ue() || D(!1);
            var n = se().pathname;
            return t.useMemo(
              function () {
                return z(e, n);
              },
              [n, e]
            );
          })({ path: v.pathname, end: f, caseSensitive: l }),
          y = t.useContext(ne),
          b = null == y ? void 0 : y.navigation.location,
          w = pe(b || ''),
          S =
            null !=
            t.useMemo(
              function () {
                return b ? z({ path: v.pathname, end: f, caseSensitive: l }, w.pathname) : null;
              },
              [b, v.pathname, l, f, w.pathname]
            ),
          k = null != g,
          x = k ? o : void 0;
        r =
          'function' === typeof s
            ? s({ isActive: k, isPending: S })
            : [s, k ? 'active' : null, S ? 'pending' : null].filter(Boolean).join(' ');
        var _ = 'function' === typeof d ? d({ isActive: k, isPending: S }) : d;
        return t.createElement(
          Te,
          Ne({}, m, { 'aria-current': x, className: r, ref: n, style: _, to: p }),
          'function' === typeof h ? h({ isActive: k, isPending: S }) : h
        );
      });
      var Fe = { headerWrapper: 'layout_headerWrapper__Xt87c' },
        ze = n(184),
        Ae = function (e) {
          return e.isActive ? Fe['active-link'] : '';
        },
        De = function () {
          var e,
            t,
            n = Ya().gamesState,
            r = 'game/'.concat(null === (e = n.chosenGame) || void 0 === e ? void 0 : e.id);
          return (
            (null !== (t = n.chosenGame) && void 0 !== t && t.id) || (r = '/'),
            (0, ze.jsxs)(ze.Fragment, {
              children: [
                (0, ze.jsx)('div', {
                  className: Fe.headerWrapper,
                  children: (0, ze.jsxs)('header', {
                    children: [
                      (0, ze.jsx)(Re, { className: Ae, to: '/', children: 'Games' }),
                      (0, ze.jsx)(Re, { className: Ae, to: r, children: 'Game' }),
                      (0, ze.jsx)(Re, { className: Ae, to: 'forms', children: 'Forms' }),
                      (0, ze.jsx)(Re, { className: Ae, to: 'about', children: 'About' }),
                    ],
                  }),
                }),
                (0, ze.jsx)(Se, {}),
              ],
            })
          );
        },
        Ve = function () {
          return (0, ze.jsx)('h1', { children: '404: Not found page' });
        },
        Me = function () {
          return (0, ze.jsx)('h1', { children: 'About' });
        };
      function Ue() {
        Ue = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = 'function' == typeof Symbol ? Symbol : {},
          a = r.iterator || '@@iterator',
          o = r.asyncIterator || '@@asyncIterator',
          i = r.toStringTag || '@@toStringTag';
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (N) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof f ? t : f,
            o = Object.create(a.prototype),
            i = new _(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = 'suspendedStart';
              return function (a, o) {
                if ('executing' === r) throw new Error('Generator is already running');
                if ('completed' === r) {
                  if ('throw' === a) throw o;
                  return C();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var l = S(i, n);
                    if (l) {
                      if (l === c) continue;
                      return l;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = 'executing';
                  var u = s(e, t, n);
                  if ('normal' === u.type) {
                    if (((r = n.done ? 'completed' : 'suspendedYield'), u.arg === c)) continue;
                    return { value: u.arg, done: n.done };
                  }
                  'throw' === u.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg));
                }
              };
            })(e, n, i)),
            o
          );
        }
        function s(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (N) {
            return { type: 'throw', arg: N };
          }
        }
        e.wrap = u;
        var c = {};
        function f() {}
        function d() {}
        function p() {}
        var h = {};
        l(h, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          g = m && m(m(E([])));
        g && g !== t && n.call(g, a) && (h = g);
        var y = (p.prototype = f.prototype = Object.create(h));
        function b(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function r(a, o, i, l) {
            var u = s(e[a], e, o);
            if ('throw' !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && 'object' == v(f) && n.call(f, '__await')
                ? t.resolve(f.__await).then(
                    function (e) {
                      r('next', e, i, l);
                    },
                    function (e) {
                      r('throw', e, i, l);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return r('throw', e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var a;
          this._invoke = function (e, n) {
            function o() {
              return new t(function (t, a) {
                r(e, n, t, a);
              });
            }
            return (a = a ? a.then(o, o) : o());
          };
        }
        function S(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'), (t.arg = void 0), S(e, t), 'throw' === t.method)
              )
                return c;
              (t.method = 'throw'),
                (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return c;
          }
          var r = s(n, e.iterator, t.arg);
          if ('throw' === r.type)
            return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), c;
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                c)
              : a
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              c);
        }
        function k(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(k, this), this.reset(!0);
        }
        function E(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          l(y, 'constructor', p),
          l(p, 'constructor', d),
          (d.displayName = l(p, i, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === d || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), l(e, i, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          l(w.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          l(y, i, 'Generator'),
          l(y, a, function () {
            return this;
          }),
          l(y, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = E),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return r('end');
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, 'catchLoc'),
                    u = n.call(o, 'finallyLoc');
                  if (l && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u) throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (a.tryLoc <= this.prev && n.call(a, 'finallyLoc') && this.prev < a.finallyLoc) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), c) : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                c
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), c;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: E(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                c
              );
            },
          }),
          e
        );
      }
      function Ie(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function Be(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Ie(o, r, a, i, l, 'next', e);
            }
            function l(e) {
              Ie(o, r, a, i, l, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function $e(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var We,
        He = Object.prototype.toString,
        qe = Object.getPrototypeOf,
        Qe =
          ((We = Object.create(null)),
          function (e) {
            var t = He.call(e);
            return We[t] || (We[t] = t.slice(8, -1).toLowerCase());
          }),
        Ge = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return Qe(t) === e;
            }
          );
        },
        Ke = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        Ye = Array.isArray,
        Xe = Ke('undefined');
      var Je = Ge('ArrayBuffer');
      var Ze = Ke('string'),
        et = Ke('function'),
        tt = Ke('number'),
        nt = function (e) {
          return null !== e && 'object' === typeof e;
        },
        rt = function (e) {
          if ('object' !== Qe(e)) return !1;
          var t = qe(e);
          return (
            (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        at = Ge('Date'),
        ot = Ge('File'),
        it = Ge('Blob'),
        lt = Ge('FileList'),
        ut = Ge('URLSearchParams');
      function st(e, t) {
        var n,
          r,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = a.allOwnKeys,
          i = void 0 !== o && o;
        if (null !== e && 'undefined' !== typeof e)
          if (('object' !== typeof e && (e = [e]), Ye(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var l,
              u = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
              s = u.length;
            for (n = 0; n < s; n++) (l = u[n]), t.call(null, e[l], l, e);
          }
      }
      var ct,
        ft =
          ((ct = 'undefined' !== typeof Uint8Array && qe(Uint8Array)),
          function (e) {
            return ct && e instanceof ct;
          }),
        dt = Ge('HTMLFormElement'),
        pt = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        ht = Ge('RegExp'),
        mt = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          st(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        vt = {
          isArray: Ye,
          isArrayBuffer: Je,
          isBuffer: function (e) {
            return (
              null !== e &&
              !Xe(e) &&
              null !== e.constructor &&
              !Xe(e.constructor) &&
              et(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = '[object FormData]';
            return (
              e &&
              (('function' === typeof FormData && e instanceof FormData) ||
                He.call(e) === t ||
                (et(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return 'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && Je(e.buffer);
          },
          isString: Ze,
          isNumber: tt,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: nt,
          isPlainObject: rt,
          isUndefined: Xe,
          isDate: at,
          isFile: ot,
          isBlob: it,
          isRegExp: ht,
          isFunction: et,
          isStream: function (e) {
            return nt(e) && et(e.pipe);
          },
          isURLSearchParams: ut,
          isTypedArray: ft,
          isFileList: lt,
          forEach: st,
          merge: function e() {
            for (
              var t = {},
                n = function (n, r) {
                  rt(t[r]) && rt(n)
                    ? (t[r] = e(t[r], n))
                    : rt(n)
                    ? (t[r] = e({}, n))
                    : Ye(n)
                    ? (t[r] = n.slice())
                    : (t[r] = n);
                },
                r = 0,
                a = arguments.length;
              r < a;
              r++
            )
              arguments[r] && st(arguments[r], n);
            return t;
          },
          extend: function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
              a = r.allOwnKeys;
            return (
              st(
                t,
                function (t, r) {
                  n && et(t) ? (e[r] = $e(t, n)) : (e[r] = t);
                },
                { allOwnKeys: a }
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, 'super', { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, r) {
            var a,
              o,
              i,
              l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = (a = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                (i = a[o]), (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== n && qe(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: Qe,
          kindOfTest: Ge,
          endsWith: function (e, t, n) {
            (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (Ye(e)) return e;
            var t = e.length;
            if (!tt(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (var n, r = (e && e[Symbol.iterator]).call(e); (n = r.next()) && !n.done; ) {
              var a = n.value;
              t.call(e, a[0], a[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: dt,
          hasOwnProperty: pt,
          hasOwnProp: pt,
          reduceDescriptors: mt,
          freezeMethods: function (e) {
            mt(e, function (t, n) {
              var r = e[n];
              et(r) &&
                ((t.enumerable = !1),
                'writable' in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error("Can not read-only method '" + n + "'");
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              r = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return Ye(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
              return t.toUpperCase() + n;
            });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
        };
      function gt(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = 'AxiosError'),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      vt.inherits(gt, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null,
          };
        },
      });
      var yt = gt.prototype,
        bt = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
        'ERR_NOT_SUPPORT',
        'ERR_INVALID_URL',
      ].forEach(function (e) {
        bt[e] = { value: e };
      }),
        Object.defineProperties(gt, bt),
        Object.defineProperty(yt, 'isAxiosError', { value: !0 }),
        (gt.from = function (e, t, n, r, a, o) {
          var i = Object.create(yt);
          return (
            vt.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return 'isAxiosError' !== e;
              }
            ),
            gt.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      var wt = gt,
        St = n(472);
      function kt(e) {
        return vt.isPlainObject(e) || vt.isArray(e);
      }
      function xt(e) {
        return vt.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function _t(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = xt(e)), !n && t ? '[' + e + ']' : e;
              })
              .join(n ? '.' : '')
          : t;
      }
      var Et = vt.toFlatObject(vt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var Ct = function (e, t, n) {
        if (!vt.isObject(e)) throw new TypeError('target must be an object');
        t = t || new (St || FormData)();
        var r,
          a = (n = vt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !vt.isUndefined(t[e]);
            }
          )).metaTokens,
          o = n.visitor || c,
          i = n.dots,
          l = n.indexes,
          u =
            (n.Blob || ('undefined' !== typeof Blob && Blob)) &&
            (r = t) &&
            vt.isFunction(r.append) &&
            'FormData' === r[Symbol.toStringTag] &&
            r[Symbol.iterator];
        if (!vt.isFunction(o)) throw new TypeError('visitor must be a function');
        function s(e) {
          if (null === e) return '';
          if (vt.isDate(e)) return e.toISOString();
          if (!u && vt.isBlob(e)) throw new wt('Blob is not supported. Use a Buffer instead.');
          return vt.isArrayBuffer(e) || vt.isTypedArray(e)
            ? u && 'function' === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, r) {
          var o = e;
          if (e && !r && 'object' === typeof e)
            if (vt.endsWith(n, '{}')) (n = a ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (vt.isArray(e) &&
                (function (e) {
                  return vt.isArray(e) && !e.some(kt);
                })(e)) ||
              vt.isFileList(e) ||
              (vt.endsWith(n, '[]') && (o = vt.toArray(e)))
            )
              return (
                (n = xt(n)),
                o.forEach(function (e, r) {
                  !vt.isUndefined(e) &&
                    t.append(!0 === l ? _t([n], r, i) : null === l ? n : n + '[]', s(e));
                }),
                !1
              );
          return !!kt(e) || (t.append(_t(r, n, i), s(e)), !1);
        }
        var f = [],
          d = Object.assign(Et, { defaultVisitor: c, convertValue: s, isVisitable: kt });
        if (!vt.isObject(e)) throw new TypeError('data must be an object');
        return (
          (function e(n, r) {
            if (!vt.isUndefined(n)) {
              if (-1 !== f.indexOf(n)) throw Error('Circular reference detected in ' + r.join('.'));
              f.push(n),
                vt.forEach(n, function (n, a) {
                  !0 ===
                    (!vt.isUndefined(n) && o.call(t, n, vt.isString(a) ? a.trim() : a, r, d)) &&
                    e(n, r ? r.concat(a) : [a]);
                }),
                f.pop();
            }
          })(e),
          t
        );
      };
      function Nt(e) {
        var t = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\0',
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function Ot(e, t) {
        (this._pairs = []), e && Ct(e, this, t);
      }
      var Pt = Ot.prototype;
      (Pt.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (Pt.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, Nt);
              }
            : Nt;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + '=' + t(e[1]);
            }, '')
            .join('&');
        });
      var jt = Ot;
      function Lt(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function Tt(e, t, n) {
        if (!t) return e;
        var r = e.indexOf('#');
        -1 !== r && (e = e.slice(0, r));
        var a = (n && n.encode) || Lt,
          o = vt.isURLSearchParams(t) ? t.toString() : new jt(t, n).toString(a);
        return o && (e += (-1 === e.indexOf('?') ? '?' : '&') + o), e;
      }
      var Rt = (function () {
          function e() {
            s(this, e), (this.handlers = []);
          }
          return (
            f(e, [
              {
                key: 'use',
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: 'eject',
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: 'clear',
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: 'forEach',
                value: function (e) {
                  vt.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        Ft = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
        zt = 'undefined' !== typeof URLSearchParams ? URLSearchParams : jt,
        At = FormData,
        Dt = (function () {
          var e;
          return (
            ('undefined' === typeof navigator ||
              ('ReactNative' !== (e = navigator.product) && 'NativeScript' !== e && 'NS' !== e)) &&
            'undefined' !== typeof window &&
            'undefined' !== typeof document
          );
        })(),
        Vt = {
          isBrowser: !0,
          classes: { URLSearchParams: zt, FormData: At, Blob: Blob },
          isStandardBrowserEnv: Dt,
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        };
      var Mt = function (e) {
        function t(e, n, r, a) {
          var o = e[a++],
            i = Number.isFinite(+o),
            l = a >= e.length;
          return (
            (o = !o && vt.isArray(r) ? r.length : o),
            l
              ? (vt.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i)
              : ((r[o] && vt.isObject(r[o])) || (r[o] = []),
                t(e, n, r[o], a) &&
                  vt.isArray(r[o]) &&
                  (r[o] = (function (e) {
                    var t,
                      n,
                      r = {},
                      a = Object.keys(e),
                      o = a.length;
                    for (t = 0; t < o; t++) r[(n = a[t])] = e[n];
                    return r;
                  })(r[o])),
                !i)
          );
        }
        if (vt.isFormData(e) && vt.isFunction(e.entries)) {
          var n = {};
          return (
            vt.forEachEntry(e, function (e, r) {
              t(
                (function (e) {
                  return vt.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                    return '[]' === e[0] ? '' : e[1] || e[0];
                  });
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      var Ut = Vt.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, o) {
              var i = [];
              i.push(e + '=' + encodeURIComponent(t)),
                vt.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
                vt.isString(r) && i.push('path=' + r),
                vt.isString(a) && i.push('domain=' + a),
                !0 === o && i.push('secure'),
                (document.cookie = i.join('; '));
            },
            read: function (e) {
              var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, '', Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function It(e, t) {
        return e &&
          !(function (e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          })(t)
          ? (function (e, t) {
              return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
            })(e, t)
          : t;
      }
      var Bt = Vt.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a');
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute('href', r), (r = n.href)),
                n.setAttribute('href', r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, '') : '',
                  hash: n.hash ? n.hash.replace(/^#/, '') : '',
                  hostname: n.hostname,
                  port: n.port,
                  pathname: '/' === n.pathname.charAt(0) ? n.pathname : '/' + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = vt.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      function $t(e, t, n) {
        wt.call(this, null == e ? 'canceled' : e, wt.ERR_CANCELED, t, n),
          (this.name = 'CanceledError');
      }
      vt.inherits($t, wt, { __CANCEL__: !0 });
      var Wt = $t;
      var Ht = vt.toObjectSet([
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]),
        qt = Symbol('internals'),
        Qt = Symbol('defaults');
      function Gt(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Kt(e) {
        return !1 === e || null == e ? e : String(e);
      }
      function Yt(e, t, n, r) {
        return vt.isFunction(r)
          ? r.call(this, t, n)
          : vt.isString(t)
          ? vt.isString(r)
            ? -1 !== t.indexOf(r)
            : vt.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0;
      }
      function Xt(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      function Jt(e, t) {
        e && this.set(e), (this[Qt] = t || null);
      }
      Object.assign(Jt.prototype, {
        set: function (e, t, n) {
          var r = this;
          function a(e, t, n) {
            var a = Gt(t);
            if (!a) throw new Error('header name must be a non-empty string');
            var o = Xt(r, a);
            (!o || !0 === n || (!1 !== r[o] && !1 !== n)) &&
              ((e = vt.isArray(e) ? e.map(Kt) : Kt(e)), (r[o || t] = e));
          }
          return (
            vt.isPlainObject(e)
              ? vt.forEach(e, function (e, n) {
                  a(e, n, t);
                })
              : a(t, e, n),
            this
          );
        },
        get: function (e, t) {
          if ((e = Gt(e))) {
            var n = Xt(this, e);
            if (n) {
              var r = this[n];
              if (!t) return r;
              if (!0 === t)
                return (function (e) {
                  for (
                    var t, n = Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    (t = r.exec(e));

                  )
                    n[t[1]] = t[2];
                  return n;
                })(r);
              if (vt.isFunction(t)) return t.call(this, r, n);
              if (vt.isRegExp(t)) return t.exec(r);
              throw new TypeError('parser must be boolean|regexp|function');
            }
          }
        },
        has: function (e, t) {
          if ((e = Gt(e))) {
            var n = Xt(this, e);
            return !(!n || (t && !Yt(0, this[n], n, t)));
          }
          return !1;
        },
        delete: function (e, t) {
          var n = this,
            r = !1;
          function a(e) {
            if ((e = Gt(e))) {
              var a = Xt(n, e);
              !a || (t && !Yt(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return vt.isArray(e) ? e.forEach(a) : a(e), r;
        },
        clear: function () {
          return Object.keys(this).forEach(this.delete.bind(this));
        },
        normalize: function (e) {
          var t = this,
            n = {};
          return (
            vt.forEach(this, function (r, a) {
              var o = Xt(n, a);
              if (o) return (t[o] = Kt(r)), void delete t[a];
              var i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                        return t.toUpperCase() + n;
                      });
                  })(a)
                : String(a).trim();
              i !== a && delete t[a], (t[i] = Kt(r)), (n[i] = !0);
            }),
            this
          );
        },
        toJSON: function () {
          var e = Object.create(null);
          return (
            vt.forEach(Object.assign({}, this[Qt] || null, this), function (t, n) {
              null != t && !1 !== t && (e[n] = vt.isArray(t) ? t.join(', ') : t);
            }),
            e
          );
        },
      }),
        Object.assign(Jt, {
          from: function (e) {
            return vt.isString(e)
              ? new this(
                  (function (e) {
                    var t,
                      n,
                      r,
                      a = {};
                    return (
                      e &&
                        e.split('\n').forEach(function (e) {
                          (r = e.indexOf(':')),
                            (t = e.substring(0, r).trim().toLowerCase()),
                            (n = e.substring(r + 1).trim()),
                            !t ||
                              (a[t] && Ht[t]) ||
                              ('set-cookie' === t
                                ? a[t]
                                  ? a[t].push(n)
                                  : (a[t] = [n])
                                : (a[t] = a[t] ? a[t] + ', ' + n : n));
                        }),
                      a
                    );
                  })(e)
                )
              : e instanceof this
              ? e
              : new this(e);
          },
          accessor: function (e) {
            var t = (this[qt] = this[qt] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              var r = Gt(e);
              t[r] ||
                (!(function (e, t) {
                  var n = vt.toCamelCase(' ' + t);
                  ['get', 'set', 'has'].forEach(function (r) {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, a) {
                        return this[r].call(this, t, e, n, a);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return vt.isArray(e) ? e.forEach(r) : r(e), this;
          },
        }),
        Jt.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent']),
        vt.freezeMethods(Jt.prototype),
        vt.freezeMethods(Jt);
      var Zt = Jt;
      var en = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            var u = Date.now(),
              s = a[i];
            n || (n = u), (r[o] = l), (a[o] = u);
            for (var c = i, f = 0; c !== o; ) (f += r[c++]), (c %= e);
            if (((o = (o + 1) % e) === i && (i = (i + 1) % e), !(u - n < t))) {
              var d = s && u - s;
              return d ? Math.round((1e3 * f) / d) : void 0;
            }
          }
        );
      };
      function tn(e, t) {
        var n = 0,
          r = en(50, 250);
        return function (a) {
          var o = a.loaded,
            i = a.lengthComputable ? a.total : void 0,
            l = o - n,
            u = r(l);
          n = o;
          var s = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && i && o <= i ? (i - o) / u : void 0,
          };
          (s[t ? 'download' : 'upload'] = !0), e(s);
        };
      }
      function nn(e) {
        return new Promise(function (t, n) {
          var r,
            a = e.data,
            o = Zt.from(e.headers).normalize(),
            i = e.responseType;
          function l() {
            e.cancelToken && e.cancelToken.unsubscribe(r),
              e.signal && e.signal.removeEventListener('abort', r);
          }
          vt.isFormData(a) && Vt.isStandardBrowserEnv && o.setContentType(!1);
          var u = new XMLHttpRequest();
          if (e.auth) {
            var s = e.auth.username || '',
              c = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
            o.set('Authorization', 'Basic ' + btoa(s + ':' + c));
          }
          var f = It(e.baseURL, e.url);
          function d() {
            if (u) {
              var r = Zt.from('getAllResponseHeaders' in u && u.getAllResponseHeaders());
              !(function (e, t, n) {
                var r = n.config.validateStatus;
                n.status && r && !r(n.status)
                  ? t(
                      new wt(
                        'Request failed with status code ' + n.status,
                        [wt.ERR_BAD_REQUEST, wt.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                        n.config,
                        n.request,
                        n
                      )
                    )
                  : e(n);
              })(
                function (e) {
                  t(e), l();
                },
                function (e) {
                  n(e), l();
                },
                {
                  data: i && 'text' !== i && 'json' !== i ? u.response : u.responseText,
                  status: u.status,
                  statusText: u.statusText,
                  headers: r,
                  config: e,
                  request: u,
                }
              ),
                (u = null);
            }
          }
          if (
            (u.open(e.method.toUpperCase(), Tt(f, e.params, e.paramsSerializer), !0),
            (u.timeout = e.timeout),
            'onloadend' in u
              ? (u.onloadend = d)
              : (u.onreadystatechange = function () {
                  u &&
                    4 === u.readyState &&
                    (0 !== u.status || (u.responseURL && 0 === u.responseURL.indexOf('file:'))) &&
                    setTimeout(d);
                }),
            (u.onabort = function () {
              u && (n(new wt('Request aborted', wt.ECONNABORTED, e, u)), (u = null));
            }),
            (u.onerror = function () {
              n(new wt('Network Error', wt.ERR_NETWORK, e, u)), (u = null);
            }),
            (u.ontimeout = function () {
              var t = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded',
                r = e.transitional || Ft;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(new wt(t, r.clarifyTimeoutError ? wt.ETIMEDOUT : wt.ECONNABORTED, e, u)),
                (u = null);
            }),
            Vt.isStandardBrowserEnv)
          ) {
            var p = (e.withCredentials || Bt(f)) && e.xsrfCookieName && Ut.read(e.xsrfCookieName);
            p && o.set(e.xsrfHeaderName, p);
          }
          void 0 === a && o.setContentType(null),
            'setRequestHeader' in u &&
              vt.forEach(o.toJSON(), function (e, t) {
                u.setRequestHeader(t, e);
              }),
            vt.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
            i && 'json' !== i && (u.responseType = e.responseType),
            'function' === typeof e.onDownloadProgress &&
              u.addEventListener('progress', tn(e.onDownloadProgress, !0)),
            'function' === typeof e.onUploadProgress &&
              u.upload &&
              u.upload.addEventListener('progress', tn(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((r = function (t) {
                u && (n(!t || t.type ? new Wt(null, e, u) : t), u.abort(), (u = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(r),
              e.signal && (e.signal.aborted ? r() : e.signal.addEventListener('abort', r)));
          var h = (function (e) {
            var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || '';
          })(f);
          h && -1 === Vt.protocols.indexOf(h)
            ? n(new wt('Unsupported protocol ' + h + ':', wt.ERR_BAD_REQUEST, e))
            : u.send(a || null);
        });
      }
      var rn = { http: nn, xhr: nn },
        an = function (e) {
          if (vt.isString(e)) {
            var t = rn[e];
            if (!e)
              throw Error(
                vt.hasOwnProp(e)
                  ? "Adapter '".concat(e, "' is not available in the build")
                  : "Can not resolve adapter '".concat(e, "'")
              );
            return t;
          }
          if (!vt.isFunction(e)) throw new TypeError('adapter is not a function');
          return e;
        },
        on = { 'Content-Type': 'application/x-www-form-urlencoded' };
      var ln = {
        transitional: Ft,
        adapter: (function () {
          var e;
          return (
            'undefined' !== typeof XMLHttpRequest
              ? (e = an('xhr'))
              : 'undefined' !== typeof process &&
                'process' === vt.kindOf(process) &&
                (e = an('http')),
            e
          );
        })(),
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || '',
              a = r.indexOf('application/json') > -1,
              o = vt.isObject(e);
            if ((o && vt.isHTMLForm(e) && (e = new FormData(e)), vt.isFormData(e)))
              return a && a ? JSON.stringify(Mt(e)) : e;
            if (
              vt.isArrayBuffer(e) ||
              vt.isBuffer(e) ||
              vt.isStream(e) ||
              vt.isFile(e) ||
              vt.isBlob(e)
            )
              return e;
            if (vt.isArrayBufferView(e)) return e.buffer;
            if (vt.isURLSearchParams(e))
              return (
                t.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1),
                e.toString()
              );
            if (o) {
              if (r.indexOf('application/x-www-form-urlencoded') > -1)
                return (function (e, t) {
                  return Ct(
                    e,
                    new Vt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Vt.isNode && vt.isBuffer(e)
                            ? (this.append(t, e.toString('base64')), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if ((n = vt.isFileList(e)) || r.indexOf('multipart/form-data') > -1) {
                var i = this.env && this.env.FormData;
                return Ct(n ? { 'files[]': e } : e, i && new i(), this.formSerializer);
              }
            }
            return o || a
              ? (t.setContentType('application/json', !1),
                (function (e, t, n) {
                  if (vt.isString(e))
                    try {
                      return (t || JSON.parse)(e), vt.trim(e);
                    } catch (r) {
                      if ('SyntaxError' !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || ln.transitional,
              n = t && t.forcedJSONParsing,
              r = 'json' === this.responseType;
            if (e && vt.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (o) {
                if (a) {
                  if ('SyntaxError' === o.name)
                    throw wt.from(o, wt.ERR_BAD_RESPONSE, this, null, this.response);
                  throw o;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Vt.classes.FormData, Blob: Vt.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: 'application/json, text/plain, */*' } },
      };
      vt.forEach(['delete', 'get', 'head'], function (e) {
        ln.headers[e] = {};
      }),
        vt.forEach(['post', 'put', 'patch'], function (e) {
          ln.headers[e] = vt.merge(on);
        });
      var un = ln;
      function sn(e, t) {
        var n = this || un,
          r = t || n,
          a = Zt.from(r.headers),
          o = r.data;
        return (
          vt.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function cn(e) {
        return !(!e || !e.__CANCEL__);
      }
      function fn(e) {
        if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
          throw new Wt();
      }
      function dn(e) {
        return (
          fn(e),
          (e.headers = Zt.from(e.headers)),
          (e.data = sn.call(e, e.transformRequest)),
          (e.adapter || un.adapter)(e).then(
            function (t) {
              return (
                fn(e),
                (t.data = sn.call(e, e.transformResponse, t)),
                (t.headers = Zt.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                cn(t) ||
                  (fn(e),
                  t &&
                    t.response &&
                    ((t.response.data = sn.call(e, e.transformResponse, t.response)),
                    (t.response.headers = Zt.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      function pn(e, t) {
        t = t || {};
        var n = {};
        function r(e, t) {
          return vt.isPlainObject(e) && vt.isPlainObject(t)
            ? vt.merge(e, t)
            : vt.isPlainObject(t)
            ? vt.merge({}, t)
            : vt.isArray(t)
            ? t.slice()
            : t;
        }
        function a(n) {
          return vt.isUndefined(t[n])
            ? vt.isUndefined(e[n])
              ? void 0
              : r(void 0, e[n])
            : r(e[n], t[n]);
        }
        function o(e) {
          if (!vt.isUndefined(t[e])) return r(void 0, t[e]);
        }
        function i(n) {
          return vt.isUndefined(t[n])
            ? vt.isUndefined(e[n])
              ? void 0
              : r(void 0, e[n])
            : r(void 0, t[n]);
        }
        function l(n) {
          return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0;
        }
        var u = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
        };
        return (
          vt.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = u[e] || a,
              r = t(e);
            (vt.isUndefined(r) && t !== l) || (n[e] = r);
          }),
          n
        );
      }
      var hn = '1.1.2',
        mn = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
        mn[e] = function (n) {
          return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
      });
      var vn = {};
      mn.transitional = function (e, t, n) {
        function r(e, t) {
          return "[Axios v1.1.2] Transitional option '" + e + "'" + t + (n ? '. ' + n : '');
        }
        return function (n, a, o) {
          if (!1 === e)
            throw new wt(r(a, ' has been removed' + (t ? ' in ' + t : '')), wt.ERR_DEPRECATED);
          return (
            t &&
              !vn[a] &&
              ((vn[a] = !0),
              console.warn(
                r(a, ' has been deprecated since v' + t + ' and will be removed in the near future')
              )),
            !e || e(n, a, o)
          );
        };
      };
      var gn = {
          assertOptions: function (e, t, n) {
            if ('object' !== typeof e)
              throw new wt('options must be an object', wt.ERR_BAD_OPTION_VALUE);
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var o = r[a],
                i = t[o];
              if (i) {
                var l = e[o],
                  u = void 0 === l || i(l, o, e);
                if (!0 !== u)
                  throw new wt('option ' + o + ' must be ' + u, wt.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== n) throw new wt('Unknown option ' + o, wt.ERR_BAD_OPTION);
            }
          },
          validators: mn,
        },
        yn = gn.validators,
        bn = (function () {
          function e(t) {
            s(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new Rt(), response: new Rt() });
          }
          return (
            f(e, [
              {
                key: 'request',
                value: function (e, t) {
                  'string' === typeof e ? ((t = t || {}).url = e) : (t = e || {});
                  var n = (t = pn(this.defaults, t)).transitional;
                  void 0 !== n &&
                    gn.assertOptions(
                      n,
                      {
                        silentJSONParsing: yn.transitional(yn.boolean),
                        forcedJSONParsing: yn.transitional(yn.boolean),
                        clarifyTimeoutError: yn.transitional(yn.boolean),
                      },
                      !1
                    ),
                    (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
                  var r = t.headers && vt.merge(t.headers.common, t.headers[t.method]);
                  r &&
                    vt.forEach(
                      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                      function (e) {
                        delete t.headers[e];
                      }
                    ),
                    (t.headers = new Zt(t.headers, r));
                  var a = [],
                    o = !0;
                  this.interceptors.request.forEach(function (e) {
                    ('function' === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((o = o && e.synchronous), a.unshift(e.fulfilled, e.rejected));
                  });
                  var i,
                    l = [];
                  this.interceptors.response.forEach(function (e) {
                    l.push(e.fulfilled, e.rejected);
                  });
                  var u,
                    s = 0;
                  if (!o) {
                    var c = [dn.bind(this), void 0];
                    for (
                      c.unshift.apply(c, a),
                        c.push.apply(c, l),
                        u = c.length,
                        i = Promise.resolve(t);
                      s < u;

                    )
                      i = i.then(c[s++], c[s++]);
                    return i;
                  }
                  u = a.length;
                  var f = t;
                  for (s = 0; s < u; ) {
                    var d = a[s++],
                      p = a[s++];
                    try {
                      f = d(f);
                    } catch (h) {
                      p.call(this, h);
                      break;
                    }
                  }
                  try {
                    i = dn.call(this, f);
                  } catch (h) {
                    return Promise.reject(h);
                  }
                  for (s = 0, u = l.length; s < u; ) i = i.then(l[s++], l[s++]);
                  return i;
                },
              },
              {
                key: 'getUri',
                value: function (e) {
                  return Tt(
                    It((e = pn(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      vt.forEach(['delete', 'get', 'head', 'options'], function (e) {
        bn.prototype[e] = function (t, n) {
          return this.request(pn(n || {}, { method: e, url: t, data: (n || {}).data }));
        };
      }),
        vt.forEach(['post', 'put', 'patch'], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                pn(a || {}, {
                  method: e,
                  headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (bn.prototype[e] = t()), (bn.prototype[e + 'Form'] = t(!0));
        });
      var wn = bn,
        Sn = (function () {
          function e(t) {
            if ((s(this, e), 'function' !== typeof t))
              throw new TypeError('executor must be a function.');
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new Wt(e, t, a)), n(r.reason));
              });
          }
          return (
            f(
              e,
              [
                {
                  key: 'throwIfRequested',
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: 'subscribe',
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: 'unsubscribe',
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: 'source',
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })();
      var kn = (function e(t) {
        var n = new wn(t),
          r = $e(wn.prototype.request, n);
        return (
          vt.extend(r, wn.prototype, n, { allOwnKeys: !0 }),
          vt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(pn(t, n));
          }),
          r
        );
      })(un);
      (kn.Axios = wn),
        (kn.CanceledError = Wt),
        (kn.CancelToken = Sn),
        (kn.isCancel = cn),
        (kn.VERSION = hn),
        (kn.toFormData = Ct),
        (kn.AxiosError = wt),
        (kn.Cancel = kn.CanceledError),
        (kn.all = function (e) {
          return Promise.all(e);
        }),
        (kn.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (kn.isAxiosError = function (e) {
          return vt.isObject(e) && !0 === e.isAxiosError;
        }),
        (kn.formToJSON = function (e) {
          return Mt(vt.isHTMLForm(e) ? new FormData(e) : e);
        });
      var xn = kn,
        _n = 'https://api.rawg.io/api/games',
        En = 'c5e92c5eb5ea462a8da8cff455452d29',
        Cn = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '1',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '15',
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '-rating',
            a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          if (0 !== e.length)
            return xn
              .get(''.concat(_n), {
                params: {
                  search: e,
                  ordering: r,
                  page_size: n,
                  page: t,
                  search_precise: a,
                  key: En,
                },
              })
              .then(function (e) {
                return e.data;
              })
              .catch(function (e) {
                return console.error(e);
              });
        },
        Nn = 'gameSearch_pageName__NDNSc',
        On = 'gameSearch_search__nTKyT',
        Pn = function (e) {
          var t = Ya(),
            n = t.gamesState,
            r = t.gameDispatch,
            a = (function () {
              var t = Be(
                Ue().mark(function t(r) {
                  var a, o;
                  return Ue().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            r.preventDefault(),
                            e.onSubmit([], n.page, '0'),
                            e.loading(),
                            (a = n.page),
                            console.log(n.newSearchValue !== n.oldSearchValue),
                            n.newSearchValue !== n.oldSearchValue && (a = '1'),
                            (t.next = 8),
                            Cn(n.newSearchValue, a, n.pageSize, n.ordering)
                          );
                        case 8:
                          if ((o = t.sent)) {
                            t.next = 12;
                            break;
                          }
                          return e.onSubmit([], '1', '0'), t.abrupt('return');
                        case 12:
                          e.onSubmit(o.results, a, o.count), console.log(o.count);
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return (0, ze.jsxs)(ze.Fragment, {
            children: [
              (0, ze.jsx)('h1', { className: Nn, children: 'Games' }),
              (0, ze.jsx)('div', {
                className: On,
                children: (0, ze.jsxs)('form', {
                  onSubmit: a,
                  children: [
                    (0, ze.jsx)('button', { 'data-testid': 'games/search-btn' }),
                    (0, ze.jsx)('input', {
                      'data-testid': 'games/search',
                      type: 'search',
                      value: n.newSearchValue,
                      placeholder: 'Search games...',
                      onChange: function (e) {
                        var t = e.target.value;
                        r({
                          type: 'search',
                          payload: {
                            newSearchValue: t,
                            oldSearchValue: n.oldSearchValue,
                            gamesCards: n.gamesCards,
                            ordering: n.ordering,
                            page: n.page,
                            pageSize: n.pageSize,
                            count: n.count,
                            chosenGame: n.chosenGame,
                            isLoaded: n.isLoaded,
                          },
                        });
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        jn = function (e) {
          return (0, ze.jsx)('div', {
            'data-testid': 'loader',
            className: 'loading' === e.isLoading ? 'loader_active' : 'loader',
            children: (0, ze.jsx)('div', { className: 'loader__img' }),
          });
        },
        Ln = 'gameWarning_warning__hyGsl',
        Tn = function (e) {
          return (0, ze.jsx)('div', { className: Ln, children: (0, ze.jsx)('p', { children: e }) });
        };
      function Rn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Fn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function zn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fn(Object(n), !0).forEach(function (t) {
                Rn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function An(e, t) {
        var n = ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (!n) {
          if (Array.isArray(e) || (n = i(e)) || (t && e && 'number' === typeof e.length)) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          l = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function Dn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var Vn = ['name'],
        Mn = ['_f'],
        Un = ['_f'],
        In = function (e) {
          return 'checkbox' === e.type;
        },
        Bn = function (e) {
          return e instanceof Date;
        },
        $n = function (e) {
          return null == e;
        },
        Wn = function (e) {
          return 'object' === typeof e;
        },
        Hn = function (e) {
          return !$n(e) && !Array.isArray(e) && Wn(e) && !Bn(e);
        },
        qn = function (e) {
          return Hn(e) && e.target ? (In(e.target) ? e.target.checked : e.target.value) : e;
        },
        Qn = function (e, t) {
          return e.has(
            (function (e) {
              return e.substring(0, e.search(/\.\d+(\.|$)/)) || e;
            })(t)
          );
        },
        Gn = function (e) {
          return Array.isArray(e) ? e.filter(Boolean) : [];
        },
        Kn = function (e) {
          return void 0 === e;
        },
        Yn = function (e, t, n) {
          if (!t || !Hn(e)) return n;
          var r = Gn(t.split(/[,[\].]+?/)).reduce(function (e, t) {
            return $n(e) ? e : e[t];
          }, e);
          return Kn(r) || r === e ? (Kn(e[t]) ? n : e[t]) : r;
        },
        Xn = 'blur',
        Jn = 'focusout',
        Zn = 'onBlur',
        er = 'onChange',
        tr = 'onSubmit',
        nr = 'onTouched',
        rr = 'all',
        ar = 'max',
        or = 'min',
        ir = 'maxLength',
        lr = 'minLength',
        ur = 'pattern',
        sr = 'required',
        cr = 'validate',
        fr =
          (t.createContext(null),
          function (e, t, n) {
            var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              a = { defaultValues: t._defaultValues },
              o = function (o) {
                Object.defineProperty(a, o, {
                  get: function () {
                    var a = o;
                    return (
                      t._proxyFormState[a] !== rr && (t._proxyFormState[a] = !r || rr),
                      n && (n[a] = !0),
                      e[a]
                    );
                  },
                });
              };
            for (var i in e) o(i);
            return a;
          }),
        dr = function (e) {
          return Hn(e) && !Object.keys(e).length;
        },
        pr = function (e, t, n) {
          e.name;
          var r = Dn(e, Vn);
          return (
            dr(r) ||
            Object.keys(r).length >= Object.keys(t).length ||
            Object.keys(r).find(function (e) {
              return t[e] === (!n || rr);
            })
          );
        },
        hr = function (e) {
          return Array.isArray(e) ? e : [e];
        };
      function mr(e) {
        var n = t.useRef(e);
        (n.current = e),
          t.useEffect(
            function () {
              var t = !e.disabled && n.current.subject.subscribe({ next: n.current.callback });
              return function () {
                t && t.unsubscribe();
              };
            },
            [e.disabled]
          );
      }
      var vr = function (e) {
          return 'string' === typeof e;
        },
        gr = function (e, t, n, r) {
          var a = Array.isArray(e);
          return vr(e)
            ? (r && t.watch.add(e), Yn(n, e))
            : a
            ? e.map(function (e) {
                return r && t.watch.add(e), Yn(n, e);
              })
            : (r && (t.watchAll = !0), n);
        },
        yr = function (e) {
          return 'function' === typeof e;
        },
        br = function (e) {
          for (var t in e) if (yr(e[t])) return !0;
          return !1;
        };
      var wr = function (e, t, n, r, a) {
          return t
            ? zn(
                zn({}, n[e]),
                {},
                { types: zn(zn({}, n[e] && n[e].types ? n[e].types : {}), {}, Rn({}, r, a || !0)) }
              )
            : {};
        },
        Sr = function (e) {
          return /^\w*$/.test(e);
        },
        kr = function (e) {
          return Gn(e.replace(/["|']|\]/g, '').split(/\.|\[/));
        };
      function xr(e, t, n) {
        for (var r = -1, a = Sr(t) ? [t] : kr(t), o = a.length, i = o - 1; ++r < o; ) {
          var l = a[r],
            u = n;
          if (r !== i) {
            var s = e[l];
            u = Hn(s) || Array.isArray(s) ? s : isNaN(+a[r + 1]) ? {} : [];
          }
          (e[l] = u), (e = e[l]);
        }
        return e;
      }
      var _r = function e(t, n, r) {
          var a,
            o = An(r || Object.keys(t));
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i = a.value,
                l = Yn(t, i);
              if (l) {
                var u = l._f,
                  s = Dn(l, Mn);
                if (u && n(u.name)) {
                  if (u.ref.focus) {
                    u.ref.focus();
                    break;
                  }
                  if (u.refs && u.refs[0].focus) {
                    u.refs[0].focus();
                    break;
                  }
                } else Hn(s) && e(s, n);
              }
            }
          } catch (c) {
            o.e(c);
          } finally {
            o.f();
          }
        },
        Er = function (e, t, n) {
          return (
            !n &&
            (t.watchAll ||
              t.watch.has(e) ||
              u(t.watch).some(function (t) {
                return e.startsWith(t) && /^\.\w+/.test(e.slice(t.length));
              }))
          );
        },
        Cr = function (e, t, n) {
          var r = Gn(Yn(e, n));
          return xr(r, 'root', t[n]), xr(e, n, r), e;
        },
        Nr = function (e) {
          return 'boolean' === typeof e;
        },
        Or = function (e) {
          return 'file' === e.type;
        },
        Pr = function (e) {
          return vr(e) || t.isValidElement(e);
        },
        jr = function (e) {
          return 'radio' === e.type;
        },
        Lr = function (e) {
          return e instanceof RegExp;
        },
        Tr = { value: !1, isValid: !1 },
        Rr = { value: !0, isValid: !0 },
        Fr = function (e) {
          if (Array.isArray(e)) {
            if (e.length > 1) {
              var t = e
                .filter(function (e) {
                  return e && e.checked && !e.disabled;
                })
                .map(function (e) {
                  return e.value;
                });
              return { value: t, isValid: !!t.length };
            }
            return e[0].checked && !e[0].disabled
              ? e[0].attributes && !Kn(e[0].attributes.value)
                ? Kn(e[0].value) || '' === e[0].value
                  ? Rr
                  : { value: e[0].value, isValid: !0 }
                : Rr
              : Tr;
          }
          return Tr;
        },
        zr = { isValid: !1, value: null },
        Ar = function (e) {
          return Array.isArray(e)
            ? e.reduce(function (e, t) {
                return t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e;
              }, zr)
            : zr;
        };
      function Dr(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'validate';
        if (Pr(e) || (Array.isArray(e) && e.every(Pr)) || (Nr(e) && !e))
          return { type: n, message: Pr(e) ? e : '', ref: t };
      }
      var Vr = function (e) {
          return Hn(e) && !Lr(e) ? e : { value: e, message: '' };
        },
        Mr = (function () {
          var e = Be(
            Ue().mark(function e(t, n, r, a, o) {
              var i,
                l,
                u,
                s,
                c,
                f,
                d,
                p,
                h,
                m,
                v,
                g,
                y,
                b,
                w,
                S,
                k,
                x,
                _,
                E,
                C,
                N,
                O,
                P,
                j,
                L,
                T,
                R,
                F,
                z,
                A,
                D,
                V,
                M,
                U,
                I,
                B,
                $,
                W,
                H,
                q,
                Q,
                G,
                K,
                Y,
                X,
                J;
              return Ue().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = t._f),
                        (l = i.ref),
                        (u = i.refs),
                        (s = i.required),
                        (c = i.maxLength),
                        (f = i.minLength),
                        (d = i.min),
                        (p = i.max),
                        (h = i.pattern),
                        (m = i.validate),
                        (v = i.name),
                        (g = i.valueAsNumber),
                        (y = i.mount),
                        (b = i.disabled),
                        y && !b)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt('return', {});
                    case 3:
                      if (
                        ((w = u ? u[0] : l),
                        (S = function (e) {
                          a &&
                            w.reportValidity &&
                            (w.setCustomValidity(Nr(e) ? '' : e || ' '), w.reportValidity());
                        }),
                        (k = {}),
                        (x = jr(l)),
                        (_ = In(l)),
                        (E = x || _),
                        (C =
                          ((g || Or(l)) && !l.value) ||
                          '' === n ||
                          (Array.isArray(n) && !n.length)),
                        (N = wr.bind(null, v, r, k)),
                        (O = function (e, t, n) {
                          var r =
                              arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ir,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lr,
                            o = e ? t : n;
                          k[v] = zn({ type: e ? r : a, message: o, ref: l }, N(e ? r : a, o));
                        }),
                        !(o
                          ? !Array.isArray(n) || !n.length
                          : s &&
                            ((!E && (C || $n(n))) ||
                              (Nr(n) && !n) ||
                              (_ && !Fr(u).isValid) ||
                              (x && !Ar(u).isValid))))
                      ) {
                        e.next = 19;
                        break;
                      }
                      if (
                        ((P = Pr(s) ? { value: !!s, message: s } : Vr(s)),
                        (j = P.value),
                        (L = P.message),
                        !j)
                      ) {
                        e.next = 19;
                        break;
                      }
                      if (((k[v] = zn({ type: sr, message: L, ref: w }, N(sr, L))), r)) {
                        e.next = 19;
                        break;
                      }
                      return S(L), e.abrupt('return', k);
                    case 19:
                      if (C || ($n(d) && $n(p))) {
                        e.next = 28;
                        break;
                      }
                      if (
                        ((F = Vr(p)),
                        (z = Vr(d)),
                        $n(n) || isNaN(n)
                          ? ((D = l.valueAsDate || new Date(n)),
                            (V = function (e) {
                              return new Date(new Date().toDateString() + ' ' + e);
                            }),
                            (M = 'time' == l.type),
                            (U = 'week' == l.type),
                            vr(F.value) &&
                              n &&
                              (T = M ? V(n) > V(F.value) : U ? n > F.value : D > new Date(F.value)),
                            vr(z.value) &&
                              n &&
                              (R = M ? V(n) < V(z.value) : U ? n < z.value : D < new Date(z.value)))
                          : ((A = l.valueAsNumber || (n ? +n : n)),
                            $n(F.value) || (T = A > F.value),
                            $n(z.value) || (R = A < z.value)),
                        !T && !R)
                      ) {
                        e.next = 28;
                        break;
                      }
                      if ((O(!!T, F.message, z.message, ar, or), r)) {
                        e.next = 28;
                        break;
                      }
                      return S(k[v].message), e.abrupt('return', k);
                    case 28:
                      if ((!c && !f) || C || !(vr(n) || (o && Array.isArray(n)))) {
                        e.next = 38;
                        break;
                      }
                      if (
                        ((I = Vr(c)),
                        (B = Vr(f)),
                        ($ = !$n(I.value) && n.length > I.value),
                        (W = !$n(B.value) && n.length < B.value),
                        !$ && !W)
                      ) {
                        e.next = 38;
                        break;
                      }
                      if ((O($, I.message, B.message), r)) {
                        e.next = 38;
                        break;
                      }
                      return S(k[v].message), e.abrupt('return', k);
                    case 38:
                      if (!h || C || !vr(n)) {
                        e.next = 45;
                        break;
                      }
                      if (((H = Vr(h)), (q = H.value), (Q = H.message), !Lr(q) || n.match(q))) {
                        e.next = 45;
                        break;
                      }
                      if (((k[v] = zn({ type: ur, message: Q, ref: l }, N(ur, Q))), r)) {
                        e.next = 45;
                        break;
                      }
                      return S(Q), e.abrupt('return', k);
                    case 45:
                      if (!m) {
                        e.next = 79;
                        break;
                      }
                      if (!yr(m)) {
                        e.next = 58;
                        break;
                      }
                      return (e.next = 49), m(n);
                    case 49:
                      if (((G = e.sent), !(K = Dr(G, w)))) {
                        e.next = 56;
                        break;
                      }
                      if (((k[v] = zn(zn({}, K), N(cr, K.message))), r)) {
                        e.next = 56;
                        break;
                      }
                      return S(K.message), e.abrupt('return', k);
                    case 56:
                      e.next = 79;
                      break;
                    case 58:
                      if (!Hn(m)) {
                        e.next = 79;
                        break;
                      }
                      (Y = {}), (e.t0 = Ue().keys(m));
                    case 61:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 75;
                        break;
                      }
                      if (((X = e.t1.value), dr(Y) || r)) {
                        e.next = 65;
                        break;
                      }
                      return e.abrupt('break', 75);
                    case 65:
                      return (e.t2 = Dr), (e.next = 68), m[X](n);
                    case 68:
                      (e.t3 = e.sent),
                        (e.t4 = w),
                        (e.t5 = X),
                        (J = (0, e.t2)(e.t3, e.t4, e.t5)) &&
                          ((Y = zn(zn({}, J), N(X, J.message))), S(J.message), r && (k[v] = Y)),
                        (e.next = 61);
                      break;
                    case 75:
                      if (dr(Y)) {
                        e.next = 79;
                        break;
                      }
                      if (((k[v] = zn({ ref: w }, Y)), r)) {
                        e.next = 79;
                        break;
                      }
                      return e.abrupt('return', k);
                    case 79:
                      return S(!0), e.abrupt('return', k);
                    case 81:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r, a, o) {
            return e.apply(this, arguments);
          };
        })();
      var Ur =
        'undefined' !== typeof window &&
        'undefined' !== typeof window.HTMLElement &&
        'undefined' !== typeof document;
      function Ir(e) {
        var t,
          n = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
          if ((Ur && (e instanceof Blob || e instanceof FileList)) || (!n && !Hn(e))) return e;
          if (
            ((t = n ? [] : {}),
            Array.isArray(e) ||
              (function (e) {
                var t = e.constructor && e.constructor.prototype;
                return Hn(t) && t.hasOwnProperty('isPrototypeOf');
              })(e))
          )
            for (var r in e) t[r] = Ir(e[r]);
          else t = e;
        }
        return t;
      }
      var Br = function (e) {
        return {
          isOnSubmit: !e || e === tr,
          isOnBlur: e === Zn,
          isOnChange: e === er,
          isOnAll: e === rr,
          isOnTouch: e === nr,
        };
      };
      function $r(e) {
        for (var t in e) if (!Kn(e[t])) return !1;
        return !0;
      }
      function Wr(e, t) {
        var n,
          r = Sr(t) ? [t] : kr(t),
          a =
            1 == r.length
              ? e
              : (function (e, t) {
                  for (var n = t.slice(0, -1).length, r = 0; r < n; ) e = Kn(e) ? r++ : e[t[r++]];
                  return e;
                })(e, r),
          o = r[r.length - 1];
        a && delete a[o];
        for (var i = 0; i < r.slice(0, -1).length; i++) {
          var l = -1,
            u = void 0,
            s = r.slice(0, -(i + 1)),
            c = s.length - 1;
          for (i > 0 && (n = e); ++l < s.length; ) {
            var f = s[l];
            (u = u ? u[f] : e[f]),
              c === l &&
                ((Hn(u) && dr(u)) || (Array.isArray(u) && $r(u))) &&
                (n ? delete n[f] : delete e[f]),
              (n = u);
          }
        }
        return e;
      }
      function Hr() {
        var e = [];
        return {
          get observers() {
            return e;
          },
          next: function (t) {
            var n,
              r = An(e);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                n.value.next(t);
              }
            } catch (a) {
              r.e(a);
            } finally {
              r.f();
            }
          },
          subscribe: function (t) {
            return (
              e.push(t),
              {
                unsubscribe: function () {
                  e = e.filter(function (e) {
                    return e !== t;
                  });
                },
              }
            );
          },
          unsubscribe: function () {
            e = [];
          },
        };
      }
      var qr = function (e) {
        return $n(e) || !Wn(e);
      };
      function Qr(e, t) {
        if (qr(e) || qr(t)) return e === t;
        if (Bn(e) && Bn(t)) return e.getTime() === t.getTime();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var a = 0, o = n; a < o.length; a++) {
          var i = o[a],
            l = e[i];
          if (!r.includes(i)) return !1;
          if ('ref' !== i) {
            var u = t[i];
            if (
              (Bn(l) && Bn(u)) || (Hn(l) && Hn(u)) || (Array.isArray(l) && Array.isArray(u))
                ? !Qr(l, u)
                : l !== u
            )
              return !1;
          }
        }
        return !0;
      }
      var Gr = function (e) {
          var t = e ? e.ownerDocument : 0;
          return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
        },
        Kr = function (e) {
          return 'select-multiple' === e.type;
        },
        Yr = function (e) {
          return jr(e) || In(e);
        },
        Xr = function (e) {
          return Gr(e) && e.isConnected;
        };
      function Jr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Array.isArray(e);
        if (Hn(e) || n)
          for (var r in e)
            Array.isArray(e[r]) || (Hn(e[r]) && !br(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Jr(e[r], t[r]))
              : $n(e[r]) || (t[r] = !0);
        return t;
      }
      function Zr(e, t, n) {
        var r = Array.isArray(e);
        if (Hn(e) || r)
          for (var a in e)
            Array.isArray(e[a]) || (Hn(e[a]) && !br(e[a]))
              ? Kn(t) || qr(n[a])
                ? (n[a] = Array.isArray(e[a]) ? Jr(e[a], []) : zn({}, Jr(e[a])))
                : Zr(e[a], $n(t) ? {} : t[a], n[a])
              : (n[a] = !Qr(e[a], t[a]));
        return n;
      }
      var ea = function (e, t) {
          return Zr(e, t, Jr(t));
        },
        ta = function (e, t) {
          var n = t.valueAsNumber,
            r = t.valueAsDate,
            a = t.setValueAs;
          return Kn(e)
            ? e
            : n
            ? '' === e
              ? NaN
              : e
              ? +e
              : e
            : r && vr(e)
            ? new Date(e)
            : a
            ? a(e)
            : e;
        };
      function na(e) {
        var t = e.ref;
        if (
          !(e.refs
            ? e.refs.every(function (e) {
                return e.disabled;
              })
            : t.disabled)
        )
          return Or(t)
            ? t.files
            : jr(t)
            ? Ar(e.refs).value
            : Kr(t)
            ? u(t.selectedOptions).map(function (e) {
                return e.value;
              })
            : In(t)
            ? Fr(e.refs).value
            : ta(Kn(t.value) ? e.ref.value : t.value, e);
      }
      var ra = function (e, t, n, r) {
          var a,
            o = {},
            i = An(e);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var l = a.value,
                s = Yn(t, l);
              s && xr(o, l, s._f);
            }
          } catch (c) {
            i.e(c);
          } finally {
            i.f();
          }
          return { criteriaMode: n, names: u(e), fields: o, shouldUseNativeValidation: r };
        },
        aa = function (e) {
          return Kn(e)
            ? void 0
            : Lr(e)
            ? e.source
            : Hn(e)
            ? Lr(e.value)
              ? e.value.source
              : e.value
            : e;
        },
        oa = function (e) {
          return (
            e.mount &&
            (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate)
          );
        };
      function ia(e, t, n) {
        var r = Yn(e, n);
        if (r || Sr(n)) return { error: r, name: n };
        for (var a = n.split('.'); a.length; ) {
          var o = a.join('.'),
            i = Yn(t, o),
            l = Yn(e, o);
          if (i && !Array.isArray(i) && n !== o) return { name: n };
          if (l && l.type) return { name: o, error: l };
          a.pop();
        }
        return { name: n };
      }
      var la = function (e, t, n, r, a) {
          return (
            !a.isOnAll &&
            (!n && a.isOnTouch
              ? !(t || e)
              : (n ? r.isOnBlur : a.isOnBlur)
              ? !e
              : !(n ? r.isOnChange : a.isOnChange) || e)
          );
        },
        ua = function (e, t) {
          return !Gn(Yn(e, t)).length && Wr(e, t);
        },
        sa = { mode: tr, reValidateMode: er, shouldFocusError: !0 };
      function ca() {
        var e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = zn(zn({}, sa), t),
          r = {
            submitCount: 0,
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {},
          },
          a = {},
          o = Ir(n.defaultValues) || {},
          i = n.shouldUnregister ? {} : Ir(o),
          l = { action: !1, mount: !1, watch: !1 },
          s = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
          c = 0,
          f = {},
          d = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1,
          },
          p = { watch: Hr(), array: Hr(), state: Hr() },
          h = Br(n.mode),
          m = Br(n.reValidateMode),
          v = n.criteriaMode === rr,
          g = function (e) {
            return function (t) {
              clearTimeout(c), (c = window.setTimeout(e, t));
            };
          },
          y = (function () {
            var e = Be(
              Ue().mark(function e(t) {
                var o;
                return Ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((o = !1), !d.isValid)) {
                          e.next = 15;
                          break;
                        }
                        if (!n.resolver) {
                          e.next = 10;
                          break;
                        }
                        return (e.t1 = dr), (e.next = 6), _();
                      case 6:
                        (e.t2 = e.sent.errors), (e.t0 = (0, e.t1)(e.t2)), (e.next = 13);
                        break;
                      case 10:
                        return (e.next = 12), C(a, !0);
                      case 12:
                        e.t0 = e.sent;
                      case 13:
                        (o = e.t0),
                          t || o === r.isValid || ((r.isValid = o), p.state.next({ isValid: o }));
                      case 15:
                        return e.abrupt('return', o);
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          b = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              n = arguments.length > 2 ? arguments[2] : void 0,
              u = arguments.length > 3 ? arguments[3] : void 0,
              s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              c = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            if (u && n) {
              if (((l.action = !0), c && Array.isArray(Yn(a, e)))) {
                var f = n(Yn(a, e), u.argA, u.argB);
                s && xr(a, e, f);
              }
              if (d.errors && c && Array.isArray(Yn(r.errors, e))) {
                var h = n(Yn(r.errors, e), u.argA, u.argB);
                s && xr(r.errors, e, h), ua(r.errors, e);
              }
              if (d.touchedFields && c && Array.isArray(Yn(r.touchedFields, e))) {
                var m = n(Yn(r.touchedFields, e), u.argA, u.argB);
                s && xr(r.touchedFields, e, m);
              }
              d.dirtyFields && (r.dirtyFields = ea(o, i)),
                p.state.next({
                  isDirty: O(e, t),
                  dirtyFields: r.dirtyFields,
                  errors: r.errors,
                  isValid: r.isValid,
                });
            } else xr(i, e, t);
          },
          w = function (e, t) {
            xr(r.errors, e, t), p.state.next({ errors: r.errors });
          },
          S = function (e, t, n, r) {
            var u = Yn(a, e);
            if (u) {
              var s = Yn(i, e, Kn(n) ? Yn(o, e) : n);
              Kn(s) || (r && r.defaultChecked) || t ? xr(i, e, t ? s : na(u._f)) : L(e, s),
                l.mount && y();
            }
          },
          k = function (e, t, n, a, i) {
            var l = !1,
              u = { name: e },
              s = Yn(r.touchedFields, e);
            if (d.isDirty) {
              var c = r.isDirty;
              (r.isDirty = u.isDirty = O()), (l = c !== u.isDirty);
            }
            if (d.dirtyFields && (!n || a)) {
              var f = Yn(r.dirtyFields, e);
              Qr(Yn(o, e), t) ? Wr(r.dirtyFields, e) : xr(r.dirtyFields, e, !0),
                (u.dirtyFields = r.dirtyFields),
                (l = l || f !== Yn(r.dirtyFields, e));
            }
            return (
              n &&
                !s &&
                (xr(r.touchedFields, e, n),
                (u.touchedFields = r.touchedFields),
                (l = l || (d.touchedFields && s !== n))),
              l && i && p.state.next(u),
              l ? u : {}
            );
          },
          x = (function () {
            var n = Be(
              Ue().mark(function n(a, o, i, l) {
                var u, s, h;
                return Ue().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        (u = Yn(r.errors, a)),
                          (s = d.isValid && r.isValid !== o),
                          t.delayError && i
                            ? (e = g(function () {
                                return w(a, i);
                              }))(t.delayError)
                            : (clearTimeout(c),
                              (e = null),
                              i ? xr(r.errors, a, i) : Wr(r.errors, a)),
                          ((i ? Qr(u, i) : !u) && dr(l) && !s) ||
                            ((h = zn(
                              zn(zn({}, l), s ? { isValid: o } : {}),
                              {},
                              { errors: r.errors, name: a }
                            )),
                            (r = zn(zn({}, r), h)),
                            p.state.next(h)),
                          f[a]--,
                          d.isValidating &&
                            !Object.values(f).some(function (e) {
                              return e;
                            }) &&
                            (p.state.next({ isValidating: !1 }), (f = {}));
                      case 6:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, t, r, a) {
              return n.apply(this, arguments);
            };
          })(),
          _ = (function () {
            var e = Be(
              Ue().mark(function e(t) {
                return Ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!n.resolver) {
                          e.next = 6;
                          break;
                        }
                        return (
                          (e.next = 3),
                          n.resolver(
                            zn({}, i),
                            n.context,
                            ra(t || s.mount, a, n.criteriaMode, n.shouldUseNativeValidation)
                          )
                        );
                      case 3:
                        (e.t0 = e.sent), (e.next = 7);
                        break;
                      case 6:
                        e.t0 = {};
                      case 7:
                        return e.abrupt('return', e.t0);
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          E = (function () {
            var e = Be(
              Ue().mark(function e(t) {
                var n, a, o, i, l, u;
                return Ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), _();
                      case 2:
                        if (((n = e.sent), (a = n.errors), t)) {
                          o = An(t);
                          try {
                            for (o.s(); !(i = o.n()).done; )
                              (l = i.value), (u = Yn(a, l)) ? xr(r.errors, l, u) : Wr(r.errors, l);
                          } catch (s) {
                            o.e(s);
                          } finally {
                            o.f();
                          }
                        } else r.errors = a;
                        return e.abrupt('return', a);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          C = (function () {
            var e = Be(
              Ue().mark(function e(t, a) {
                var o,
                  l,
                  u,
                  c,
                  f,
                  d,
                  p,
                  h = arguments;
                return Ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (o = h.length > 2 && void 0 !== h[2] ? h[2] : { valid: !0 }),
                          (e.t0 = Ue().keys(t));
                      case 2:
                        if ((e.t1 = e.t0()).done) {
                          e.next = 23;
                          break;
                        }
                        if (((l = e.t1.value), !(u = t[l]))) {
                          e.next = 21;
                          break;
                        }
                        if (((c = u._f), (f = Dn(u, Un)), !c)) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (d = s.array.has(c.name)),
                          (e.next = 11),
                          Mr(u, Yn(i, c.name), v, n.shouldUseNativeValidation, d)
                        );
                      case 11:
                        if (!(p = e.sent)[c.name]) {
                          e.next = 16;
                          break;
                        }
                        if (((o.valid = !1), !a)) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt('break', 23);
                      case 16:
                        !a &&
                          (Yn(p, c.name)
                            ? d
                              ? Cr(r.errors, p, c.name)
                              : xr(r.errors, c.name, p[c.name])
                            : Wr(r.errors, c.name));
                      case 17:
                        if (((e.t2 = f), !e.t2)) {
                          e.next = 21;
                          break;
                        }
                        return (e.next = 21), C(f, a, o);
                      case 21:
                        e.next = 2;
                        break;
                      case 23:
                        return e.abrupt('return', o.valid);
                      case 24:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          N = function () {
            var e,
              t = An(s.unMount);
            try {
              for (t.s(); !(e = t.n()).done; ) {
                var n = e.value,
                  r = Yn(a, n);
                r &&
                  (r._f.refs
                    ? r._f.refs.every(function (e) {
                        return !Xr(e);
                      })
                    : !Xr(r._f.ref)) &&
                  I(n);
              }
            } catch (o) {
              t.e(o);
            } finally {
              t.f();
            }
            s.unMount = new Set();
          },
          O = function (e, t) {
            return e && t && xr(i, e, t), !Qr(A(), o);
          },
          P = function (e, t, n) {
            var r = zn({}, l.mount ? i : Kn(t) ? o : vr(e) ? Rn({}, e, t) : t);
            return gr(e, s, r, n);
          },
          j = function (e) {
            return Gn(Yn(l.mount ? i : o, e, t.shouldUnregister ? Yn(o, e, []) : []));
          },
          L = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = Yn(a, e),
              o = t;
            if (r) {
              var l = r._f;
              l &&
                (!l.disabled && xr(i, e, ta(t, l)),
                (o = Ur && Gr(l.ref) && $n(t) ? '' : t),
                Kr(l.ref)
                  ? u(l.ref.options).forEach(function (e) {
                      return (e.selected = o.includes(e.value));
                    })
                  : l.refs
                  ? In(l.ref)
                    ? l.refs.length > 1
                      ? l.refs.forEach(function (e) {
                          return (
                            (!e.defaultChecked || !e.disabled) &&
                            (e.checked = Array.isArray(o)
                              ? !!o.find(function (t) {
                                  return t === e.value;
                                })
                              : o === e.value)
                          );
                        })
                      : l.refs[0] && (l.refs[0].checked = !!o)
                    : l.refs.forEach(function (e) {
                        return (e.checked = e.value === o);
                      })
                  : Or(l.ref)
                  ? (l.ref.value = '')
                  : ((l.ref.value = o), l.ref.type || p.watch.next({ name: e })));
            }
            (n.shouldDirty || n.shouldTouch) && k(e, o, n.shouldTouch, n.shouldDirty, !0),
              n.shouldValidate && z(e);
          },
          T = function e(t, n, r) {
            for (var o in n) {
              var i = n[o],
                l = ''.concat(t, '.').concat(o),
                u = Yn(a, l);
              (!s.array.has(t) && qr(i) && (!u || u._f)) || Bn(i) ? L(l, i, r) : e(l, i, r);
            }
          },
          R = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              l = Yn(a, e),
              u = s.array.has(e),
              c = Ir(t);
            xr(i, e, c),
              u
                ? (p.array.next({ name: e, values: i }),
                  (d.isDirty || d.dirtyFields) &&
                    n.shouldDirty &&
                    ((r.dirtyFields = ea(o, i)),
                    p.state.next({ name: e, dirtyFields: r.dirtyFields, isDirty: O(e, c) })))
                : !l || l._f || $n(c)
                ? L(e, c, n)
                : T(e, c, n),
              Er(e, s) && p.state.next({}),
              p.watch.next({ name: e });
          },
          F = (function () {
            var t = Be(
              Ue().mark(function t(o) {
                var l, u, c, d, g, b, w, S, E, C, N, O, P, j, L;
                return Ue().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((l = o.target), (u = l.name), !(c = Yn(a, u)))) {
                          t.next = 39;
                          break;
                        }
                        if (
                          ((b = l.type ? na(c._f) : qn(o)),
                          (w = o.type === Xn || o.type === Jn),
                          (S =
                            (!oa(c._f) && !n.resolver && !Yn(r.errors, u) && !c._f.deps) ||
                            la(w, Yn(r.touchedFields, u), r.isSubmitted, m, h)),
                          (E = Er(u, s, w)),
                          xr(i, u, b),
                          w
                            ? (c._f.onBlur && c._f.onBlur(o), e && e(0))
                            : c._f.onChange && c._f.onChange(o),
                          (C = k(u, b, w, !1)),
                          (N = !dr(C) || E),
                          !w && p.watch.next({ name: u, type: o.type }),
                          !S)
                        ) {
                          t.next = 15;
                          break;
                        }
                        return t.abrupt('return', N && p.state.next(zn({ name: u }, E ? {} : C)));
                      case 15:
                        if (
                          (!w && E && p.state.next({}),
                          (f[u] = (f[u], 1)),
                          p.state.next({ isValidating: !0 }),
                          !n.resolver)
                        ) {
                          t.next = 30;
                          break;
                        }
                        return (t.next = 21), _([u]);
                      case 21:
                        (O = t.sent),
                          (P = O.errors),
                          (j = ia(r.errors, a, u)),
                          (L = ia(P, a, j.name || u)),
                          (d = L.error),
                          (u = L.name),
                          (g = dr(P)),
                          (t.next = 37);
                        break;
                      case 30:
                        return (t.next = 32), Mr(c, Yn(i, u), v, n.shouldUseNativeValidation);
                      case 32:
                        return (t.t0 = u), (d = t.sent[t.t0]), (t.next = 36), y(!0);
                      case 36:
                        g = t.sent;
                      case 37:
                        c._f.deps && z(c._f.deps), x(u, g, d, C);
                      case 39:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          z = (function () {
            var e = Be(
              Ue().mark(function e(t) {
                var o,
                  i,
                  l,
                  u,
                  c,
                  f = arguments;
                return Ue().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                          (u = hr(t)),
                          p.state.next({ isValidating: !0 }),
                          !n.resolver)
                        ) {
                          e.next = 11;
                          break;
                        }
                        return (e.next = 6), E(Kn(t) ? t : u);
                      case 6:
                        (c = e.sent),
                          (i = dr(c)),
                          (l = t
                            ? !u.some(function (e) {
                                return Yn(c, e);
                              })
                            : i),
                          (e.next = 21);
                        break;
                      case 11:
                        if (!t) {
                          e.next = 18;
                          break;
                        }
                        return (
                          (e.next = 14),
                          Promise.all(
                            u.map(
                              (function () {
                                var e = Be(
                                  Ue().mark(function e(t) {
                                    var n;
                                    return Ue().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (n = Yn(a, t)),
                                              (e.next = 3),
                                              C(n && n._f ? Rn({}, t, n) : n)
                                            );
                                          case 3:
                                            return e.abrupt('return', e.sent);
                                          case 4:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          )
                        );
                      case 14:
                        ((l = e.sent.every(Boolean)) || r.isValid) && y(), (e.next = 21);
                        break;
                      case 18:
                        return (e.next = 20), C(a);
                      case 20:
                        l = i = e.sent;
                      case 21:
                        return (
                          p.state.next(
                            zn(
                              zn(
                                zn({}, !vr(t) || (d.isValid && i !== r.isValid) ? {} : { name: t }),
                                n.resolver || !t ? { isValid: i } : {}
                              ),
                              {},
                              { errors: r.errors, isValidating: !1 }
                            )
                          ),
                          o.shouldFocus &&
                            !l &&
                            _r(
                              a,
                              function (e) {
                                return e && Yn(r.errors, e);
                              },
                              t ? u : s.mount
                            ),
                          e.abrupt('return', l)
                        );
                      case 24:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          A = function (e) {
            var t = zn(zn({}, o), l.mount ? i : {});
            return Kn(e)
              ? t
              : vr(e)
              ? Yn(t, e)
              : e.map(function (e) {
                  return Yn(t, e);
                });
          },
          D = function (e, t) {
            return {
              invalid: !!Yn((t || r).errors, e),
              isDirty: !!Yn((t || r).dirtyFields, e),
              isTouched: !!Yn((t || r).touchedFields, e),
              error: Yn((t || r).errors, e),
            };
          },
          V = function (e) {
            e
              ? hr(e).forEach(function (e) {
                  return Wr(r.errors, e);
                })
              : (r.errors = {}),
              p.state.next({ errors: r.errors });
          },
          M = function (e, t, n) {
            var o = (Yn(a, e, { _f: {} })._f || {}).ref;
            xr(r.errors, e, zn(zn({}, t), {}, { ref: o })),
              p.state.next({ name: e, errors: r.errors, isValid: !1 }),
              n && n.shouldFocus && o && o.focus && o.focus();
          },
          U = function (e, t) {
            return yr(e)
              ? p.watch.subscribe({
                  next: function (n) {
                    return e(P(void 0, t), n);
                  },
                })
              : P(e, t, !0);
          },
          I = function (e) {
            var t,
              l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              u = An(e ? hr(e) : s.mount);
            try {
              for (u.s(); !(t = u.n()).done; ) {
                var c = t.value;
                s.mount.delete(c),
                  s.array.delete(c),
                  Yn(a, c) &&
                    (l.keepValue || (Wr(a, c), Wr(i, c)),
                    !l.keepError && Wr(r.errors, c),
                    !l.keepDirty && Wr(r.dirtyFields, c),
                    !l.keepTouched && Wr(r.touchedFields, c),
                    !n.shouldUnregister && !l.keepDefaultValue && Wr(o, c));
              }
            } catch (f) {
              u.e(f);
            } finally {
              u.f();
            }
            p.watch.next({}),
              p.state.next(zn(zn({}, r), l.keepDirty ? { isDirty: O() } : {})),
              !l.keepIsValid && y();
          },
          B = function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              c = Yn(a, t),
              f = Nr(r.disabled);
            return (
              xr(
                a,
                t,
                zn(
                  zn({}, c || {}),
                  {},
                  {
                    _f: zn(
                      zn({}, c && c._f ? c._f : { ref: { name: t } }),
                      {},
                      { name: t, mount: !0 },
                      r
                    ),
                  }
                )
              ),
              s.mount.add(t),
              c ? f && xr(i, t, r.disabled ? void 0 : Yn(i, t, na(c._f))) : S(t, !0, r.value),
              zn(
                zn(
                  zn({}, f ? { disabled: r.disabled } : {}),
                  n.shouldUseNativeValidation
                    ? {
                        required: !!r.required,
                        min: aa(r.min),
                        max: aa(r.max),
                        minLength: aa(r.minLength),
                        maxLength: aa(r.maxLength),
                        pattern: aa(r.pattern),
                      }
                    : {}
                ),
                {},
                {
                  name: t,
                  onChange: F,
                  onBlur: F,
                  ref: (function (e) {
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(function (i) {
                    if (i) {
                      e(t, r), (c = Yn(a, t));
                      var f =
                          (Kn(i.value) &&
                            i.querySelectorAll &&
                            i.querySelectorAll('input,select,textarea')[0]) ||
                          i,
                        d = Yr(f),
                        p = c._f.refs || [];
                      if (
                        d
                          ? p.find(function (e) {
                              return e === f;
                            })
                          : f === c._f.ref
                      )
                        return;
                      xr(a, t, {
                        _f: zn(
                          zn({}, c._f),
                          d
                            ? {
                                refs: [].concat(
                                  u(p.filter(Xr)),
                                  [f],
                                  u(Array.isArray(Yn(o, t)) ? [{}] : [])
                                ),
                                ref: { type: f.type, name: t },
                              }
                            : { ref: f }
                        ),
                      }),
                        S(t, !1, void 0, f);
                    } else (c = Yn(a, t, {}))._f && (c._f.mount = !1), (n.shouldUnregister || r.shouldUnregister) && (!Qn(s.array, t) || !l.action) && s.unMount.add(t);
                  }),
                }
              )
            );
          },
          $ = function () {
            return (
              n.shouldFocusError &&
              _r(
                a,
                function (e) {
                  return e && Yn(r.errors, e);
                },
                s.mount
              )
            );
          },
          W = function (e, t) {
            return (function () {
              var o = Be(
                Ue().mark(function o(l) {
                  var u, s, c, f, d;
                  return Ue().wrap(
                    function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              (l &&
                                (l.preventDefault && l.preventDefault(), l.persist && l.persist()),
                              (u = !0),
                              (s = Ir(i)),
                              p.state.next({ isSubmitting: !0 }),
                              (o.prev = 4),
                              !n.resolver)
                            ) {
                              o.next = 15;
                              break;
                            }
                            return (o.next = 8), _();
                          case 8:
                            (c = o.sent),
                              (f = c.errors),
                              (d = c.values),
                              (r.errors = f),
                              (s = d),
                              (o.next = 17);
                            break;
                          case 15:
                            return (o.next = 17), C(a);
                          case 17:
                            if (!dr(r.errors)) {
                              o.next = 23;
                              break;
                            }
                            return (
                              p.state.next({ errors: {}, isSubmitting: !0 }), (o.next = 21), e(s, l)
                            );
                          case 21:
                            o.next = 27;
                            break;
                          case 23:
                            if (!t) {
                              o.next = 26;
                              break;
                            }
                            return (o.next = 26), t(zn({}, r.errors), l);
                          case 26:
                            $();
                          case 27:
                            o.next = 33;
                            break;
                          case 29:
                            throw ((o.prev = 29), (o.t0 = o.catch(4)), (u = !1), o.t0);
                          case 33:
                            return (
                              (o.prev = 33),
                              (r.isSubmitted = !0),
                              p.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: dr(r.errors) && u,
                                submitCount: r.submitCount + 1,
                                errors: r.errors,
                              }),
                              o.finish(33)
                            );
                          case 37:
                          case 'end':
                            return o.stop();
                        }
                    },
                    o,
                    null,
                    [[4, 29, 33, 37]]
                  );
                })
              );
              return function (e) {
                return o.apply(this, arguments);
              };
            })();
          },
          H = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Yn(a, e) &&
              (Kn(t.defaultValue)
                ? R(e, Yn(o, e))
                : (R(e, t.defaultValue), xr(o, e, t.defaultValue)),
              t.keepTouched || Wr(r.touchedFields, e),
              t.keepDirty ||
                (Wr(r.dirtyFields, e), (r.isDirty = t.defaultValue ? O(e, Yn(o, e)) : O())),
              t.keepError || (Wr(r.errors, e), d.isValid && y()),
              p.state.next(zn({}, r)));
          },
          q = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              u = e || o,
              c = Ir(u),
              f = e && !dr(e) ? c : o;
            if ((n.keepDefaultValues || (o = u), !n.keepValues)) {
              if (n.keepDirtyValues) {
                var h,
                  m = An(s.mount);
                try {
                  for (m.s(); !(h = m.n()).done; ) {
                    var v = h.value;
                    Yn(r.dirtyFields, v) ? xr(f, v, Yn(i, v)) : R(v, Yn(f, v));
                  }
                } catch (k) {
                  m.e(k);
                } finally {
                  m.f();
                }
              } else {
                if (Ur && Kn(e)) {
                  var g,
                    y = An(s.mount);
                  try {
                    for (y.s(); !(g = y.n()).done; ) {
                      var b = g.value,
                        w = Yn(a, b);
                      if (w && w._f) {
                        var S = Array.isArray(w._f.refs) ? w._f.refs[0] : w._f.ref;
                        try {
                          if (Gr(S)) {
                            S.closest('form').reset();
                            break;
                          }
                        } catch (x) {}
                      }
                    }
                  } catch (k) {
                    y.e(k);
                  } finally {
                    y.f();
                  }
                }
                a = {};
              }
              (i = t.shouldUnregister ? (n.keepDefaultValues ? Ir(o) : {}) : c),
                p.array.next({ values: f }),
                p.watch.next({ values: f });
            }
            (s = {
              mount: new Set(),
              unMount: new Set(),
              array: new Set(),
              watch: new Set(),
              watchAll: !1,
              focus: '',
            }),
              (l.mount = !d.isValid || !!n.keepIsValid),
              (l.watch = !!t.shouldUnregister),
              p.state.next({
                submitCount: n.keepSubmitCount ? r.submitCount : 0,
                isDirty:
                  n.keepDirty || n.keepDirtyValues
                    ? r.isDirty
                    : !(!n.keepDefaultValues || Qr(e, o)),
                isSubmitted: !!n.keepIsSubmitted && r.isSubmitted,
                dirtyFields:
                  n.keepDirty || n.keepDirtyValues
                    ? r.dirtyFields
                    : n.keepDefaultValues && e
                    ? ea(o, e)
                    : {},
                touchedFields: n.keepTouched ? r.touchedFields : {},
                errors: n.keepErrors ? r.errors : {},
                isSubmitting: !1,
                isSubmitSuccessful: !1,
              });
          },
          Q = function (e, t) {
            return q(yr(e) ? e(i) : e, t);
          },
          G = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = Yn(a, e),
              r = n && n._f;
            if (r) {
              var o = r.refs ? r.refs[0] : r.ref;
              o.focus && (o.focus(), t.shouldSelect && o.select());
            }
          };
        return {
          control: {
            register: B,
            unregister: I,
            getFieldState: D,
            _executeSchema: _,
            _focusError: $,
            _getWatch: P,
            _getDirty: O,
            _updateValid: y,
            _removeUnmounted: N,
            _updateFieldArray: b,
            _getFieldArray: j,
            _subjects: p,
            _proxyFormState: d,
            get _fields() {
              return a;
            },
            get _formValues() {
              return i;
            },
            get _stateFlags() {
              return l;
            },
            set _stateFlags(e) {
              l = e;
            },
            get _defaultValues() {
              return o;
            },
            get _names() {
              return s;
            },
            set _names(e) {
              s = e;
            },
            get _formState() {
              return r;
            },
            set _formState(e) {
              r = e;
            },
            get _options() {
              return n;
            },
            set _options(e) {
              n = zn(zn({}, n), e);
            },
          },
          trigger: z,
          register: B,
          handleSubmit: W,
          watch: U,
          setValue: R,
          getValues: A,
          reset: Q,
          resetField: H,
          clearErrors: V,
          unregister: I,
          setError: M,
          setFocus: G,
          getFieldState: D,
        };
      }
      function fa() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.useRef(),
          r = t.useState({
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: e.defaultValues,
          }),
          a = l(r, 2),
          o = a[0],
          i = a[1];
        n.current || (n.current = zn(zn({}, ca(e)), {}, { formState: o }));
        var u = n.current.control;
        return (
          (u._options = e),
          mr({
            subject: u._subjects.state,
            callback: t.useCallback(
              function (e) {
                pr(e, u._proxyFormState, !0) &&
                  ((u._formState = zn(zn({}, u._formState), e)), i(zn({}, u._formState)));
              },
              [u]
            ),
          }),
          t.useEffect(function () {
            u._stateFlags.mount ||
              (u._proxyFormState.isValid && u._updateValid(), (u._stateFlags.mount = !0)),
              u._stateFlags.watch && ((u._stateFlags.watch = !1), u._subjects.state.next({})),
              u._removeUnmounted();
          }),
          t.useEffect(
            function () {
              o.submitCount && u._focusError();
            },
            [u, o.submitCount]
          ),
          (n.current.formState = fr(o, u)),
          n.current
        );
      }
      var da = { form: 'gameList__header_form__HSHXO' },
        pa = function () {
          var e,
            t = Ya(),
            n = t.gamesState,
            r = t.gameDispatch;
          e = isNaN(Number(n.count))
            ? n.count
            : String(Math.ceil(Number(n.count) / Number(n.pageSize)));
          var a = fa({
              mode: 'onChange',
              defaultValues: { page: n.page, pageSize: n.pageSize, ordering: n.ordering },
            }),
            o = a.register,
            i = a.formState.errors,
            l = function (e) {
              var t = e.target.name;
              if (!i[t]) {
                var a = e.target.value;
                console.log('value', a),
                  'page' === t
                    ? r({
                        type: 'search',
                        payload: {
                          newSearchValue: n.newSearchValue,
                          oldSearchValue: n.oldSearchValue,
                          gamesCards: n.gamesCards,
                          ordering: n.ordering,
                          page: a,
                          pageSize: n.pageSize,
                          count: n.count,
                          chosenGame: n.chosenGame,
                          isLoaded: n.isLoaded,
                        },
                      })
                    : 'pageSize' === t
                    ? r({
                        type: 'search',
                        payload: {
                          newSearchValue: n.newSearchValue,
                          oldSearchValue: n.oldSearchValue,
                          gamesCards: n.gamesCards,
                          ordering: n.ordering,
                          page: n.page,
                          pageSize: a,
                          count: n.count,
                          chosenGame: n.chosenGame,
                          isLoaded: n.isLoaded,
                        },
                      })
                    : 'ordering' === t &&
                      r({
                        type: 'search',
                        payload: {
                          newSearchValue: n.newSearchValue,
                          oldSearchValue: n.oldSearchValue,
                          gamesCards: n.gamesCards,
                          ordering: a,
                          page: n.page,
                          pageSize: n.pageSize,
                          count: n.count,
                          chosenGame: n.chosenGame,
                          isLoaded: n.isLoaded,
                        },
                      });
              }
            };
          return (0, ze.jsxs)('form', {
            className: da.form,
            children: [
              (0, ze.jsxs)('label', {
                className: da.form__label,
                children: [
                  'Page number:',
                  (0, ze.jsx)(
                    'input',
                    zn(
                      { className: da.form__input_page, 'data-testid': 'page', type: 'number' },
                      o('page', {
                        onBlur: function (e) {
                          return l(e);
                        },
                        required: 'Page is required',
                        min: { value: 1, message: 'Minimum is 1' },
                        max: { value: Number(e) || 1, message: "Maximum is 'Total pages' or 1" },
                        validate: {
                          value: function (e) {
                            return Number(e) % 1 === 0 || 'It will be integer';
                          },
                        },
                      })
                    )
                  ),
                  (0, ze.jsx)('p', {
                    className: 'error',
                    children: i.page && String(i.page.message),
                  }),
                ],
              }),
              (0, ze.jsxs)('label', {
                children: [
                  'Page size:',
                  (0, ze.jsx)(
                    'input',
                    zn(
                      { 'data-testid': 'pageSize', type: 'number' },
                      o('pageSize', {
                        onBlur: function (e) {
                          return l(e);
                        },
                        required: 'Page size is required',
                        min: { value: 1, message: 'Minimum is 1' },
                        max: { value: 40, message: 'Maximum is 40' },
                        validate: {
                          value: function (e) {
                            return Number(e) % 1 === 0 || 'It will be integer';
                          },
                        },
                      })
                    )
                  ),
                  (0, ze.jsx)('p', {
                    className: 'error',
                    children: i.pageSize && String(i.pageSize.message),
                  }),
                ],
              }),
              (0, ze.jsxs)('label', {
                children: [
                  'Sorting:',
                  (0, ze.jsxs)(
                    'select',
                    zn(
                      zn(
                        { 'data-testid': 'ordering' },
                        o('ordering', {
                          onChange: function (e) {
                            return l(e);
                          },
                        })
                      ),
                      {},
                      {
                        children: [
                          (0, ze.jsx)('option', { value: '-rating', children: 'Rating \u2193' }),
                          (0, ze.jsx)('option', { value: 'rating', children: 'Rating \u2191' }),
                          (0, ze.jsx)('option', { value: '-name', children: 'Name \u2193' }),
                          (0, ze.jsx)('option', { value: 'name', children: 'Name \u2191' }),
                          (0, ze.jsx)('option', {
                            value: '-released',
                            children: 'Released \u2193',
                          }),
                          (0, ze.jsx)('option', { value: 'released', children: 'Released \u2191' }),
                        ],
                      }
                    )
                  ),
                ],
              }),
              (0, ze.jsxs)('p', { children: ['Total pages: ', e] }),
            ],
          });
        },
        ha = 'gameList_game-list__YlrfB',
        ma = 'gameList_game-list-wrapper__RggbL',
        va = 'gameList_game-list__header__Tbl-n',
        ga = 'gameList_game-list__content__G8qDn',
        ya = 'gameCards_card-list__+5PAd',
        ba = 'gameCards_gamesCard__o2+tF',
        wa = 'gameCards_imgWrapper__429+g',
        Sa = 'gameCards_gameRating__pipoV',
        ka = 'gameCards_gameContent__J+-42',
        xa = 'gameCards_gameReleased__adX7g',
        _a = function (e) {
          var t = Ya().gamesState;
          return (0, ze.jsx)('div', {
            className: ya,
            children: t.gamesCards.map(function (t, n) {
              return (0, ze.jsxs)(
                'div',
                {
                  'data-testid': 'games/card',
                  onClick: function (t) {
                    return e.onClick(t);
                  },
                  className: ba + ' ' + n,
                  children: [
                    (0, ze.jsx)('div', {
                      className: wa,
                      children: (0, ze.jsx)('img', { src: t.background_image, alt: 'game image' }),
                    }),
                    (0, ze.jsx)('div', { className: Sa, children: t.rating }),
                    (0, ze.jsxs)('div', {
                      className: ka,
                      children: [
                        (0, ze.jsx)('h3', { children: t.name }),
                        (0, ze.jsxs)('p', {
                          className: xa,
                          children: [
                            '\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430: ',
                            new Date(t.released).toLocaleString().slice(0, -10),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                n
              );
            }),
          });
        },
        Ea = function (e) {
          var t,
            n = Ya().gamesState;
          return (
            (t =
              'not loaded' === n.isLoaded
                ? Tn('Please enter a request...')
                : 'loaded' === n.isLoaded && 0 === n.gamesCards.length
                ? Tn('No games have been created for this query yet. Try another request.')
                : 0 != n.gamesCards.length
                ? (0, ze.jsx)(_a, { onClick: e.onClick })
                : null),
            (0, ze.jsx)('div', {
              className: ha,
              children: (0, ze.jsxs)('div', {
                className: ma,
                children: [
                  (0, ze.jsx)('div', { className: va, children: (0, ze.jsx)(pa, {}) }),
                  (0, ze.jsx)('div', { className: ga, children: t }),
                  (0, ze.jsx)(jn, { isLoading: n.isLoaded }),
                ],
              }),
            })
          );
        },
        Ca = function (e) {
          return (0, ze.jsx)('div', {
            'data-testid': 'modal',
            className: 'modal_active',
            onClick: e.onClick,
            children: (0, ze.jsxs)('div', {
              className:
                'modal_user-form' === e.status ? 'modal__content_user-form' : 'modal__content_game',
              onClick: function (e) {
                return e.stopPropagation();
              },
              children: [
                (0, ze.jsx)('div', { onClick: e.onClick, className: 'modal__cancel' }),
                e.content(),
              ],
            }),
          });
        },
        Na = function () {
          var e = Ya().gamesState;
          return null == e.chosenGame
            ? (0, ze.jsx)('p', {
                children:
                  '\u041e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d',
              })
            : (0, ze.jsxs)('div', {
                className: 'game-card',
                children: [
                  (0, ze.jsxs)('div', {
                    className: 'game-card__content_left',
                    children: [
                      (0, ze.jsx)('img', { src: e.chosenGame.background_image, alt: 'game image' }),
                      (0, ze.jsx)('p', {
                        className: 'game-card__source',
                        children: e.chosenGame.rating,
                      }),
                    ],
                  }),
                  (0, ze.jsxs)('div', {
                    className: 'game-card__content_right',
                    children: [
                      (0, ze.jsx)('h2', {
                        className: 'game-card__header',
                        children: e.chosenGame.name,
                      }),
                      (0, ze.jsx)('p', {
                        className: 'game-card__years-cancel',
                        children:
                          (null != e.chosenGame.esrb_rating && e.chosenGame.esrb_rating.name_ru) ||
                          '\u041d\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0443',
                      }),
                      (0, ze.jsxs)('p', {
                        className: 'game-card__date',
                        children: [
                          '\u0414\u0430\u0442\u0430 \u0440\u0435\u043b\u0438\u0437\u0430: ',
                          new Date(e.chosenGame.released).toLocaleString().slice(0, -10),
                        ],
                      }),
                      (0, ze.jsx)('ul', {
                        className: 'game-card__genres',
                        children: e.chosenGame.genres.map(function (e) {
                          return (0, ze.jsx)('li', { children: e.name }, e.id);
                        }),
                      }),
                    ],
                  }),
                ],
              });
        },
        Oa = function () {
          var e = Ya(),
            n = e.gamesState,
            r = e.gameDispatch,
            a = l((0, t.useState)(!1), 2),
            o = a[0],
            i = a[1],
            u = fe();
          return (0, ze.jsxs)('div', {
            'data-testid': 'pages/games',
            children: [
              (0, ze.jsx)(Pn, {
                loading: function () {
                  r({
                    type: 'loading',
                    payload: {
                      newSearchValue: n.newSearchValue,
                      oldSearchValue: n.oldSearchValue,
                      gamesCards: n.gamesCards,
                      ordering: n.ordering,
                      page: n.page,
                      pageSize: n.pageSize,
                      count: n.count,
                      chosenGame: null,
                      isLoaded: 'loading',
                    },
                  });
                },
                onSubmit: function (e, t, a) {
                  r({
                    type: 'search',
                    payload: {
                      newSearchValue: n.newSearchValue,
                      oldSearchValue: n.newSearchValue,
                      gamesCards: e,
                      ordering: n.ordering,
                      page: t,
                      pageSize: n.pageSize,
                      count: a,
                      chosenGame: null,
                      isLoaded: 'loaded',
                    },
                  });
                },
              }),
              (0, ze.jsx)(Ea, {
                onClick: function (e) {
                  var t,
                    a = Number(e.currentTarget.classList[1]);
                  r({
                    type: 'pick game',
                    payload: {
                      newSearchValue: n.newSearchValue,
                      oldSearchValue: n.oldSearchValue,
                      gamesCards: n.gamesCards,
                      ordering: n.ordering,
                      page: n.page,
                      pageSize: n.pageSize,
                      count: n.count,
                      chosenGame: n.gamesCards[a],
                      isLoaded: 'loaded',
                    },
                  }),
                    u('game/'.concat(null === (t = n.chosenGame) || void 0 === t ? void 0 : t.id));
                },
              }),
              o &&
                (0, ze.jsx)(Ca, {
                  status: 'game',
                  onClick: function () {
                    i(!1);
                  },
                  content: Na,
                }),
            ],
          });
        },
        Pa = function (e) {
          return (0, ze.jsxs)(ze.Fragment, {
            children: [
              (0, ze.jsxs)('label', {
                children: [
                  e.order && e.label,
                  (0, ze.jsx)(
                    'input',
                    zn(
                      { 'data-testid': e.name, type: e.type },
                      e.register(''.concat(e.name), e.options)
                    )
                  ),
                  !e.order && e.label,
                ],
              }),
              (0, ze.jsx)('p', {
                className: 'error',
                children: e.errors[e.name] && String(e.errors[e.name].message),
              }),
            ],
          });
        },
        ja = 'userFields_header__f8rHH',
        La = 'userFields_formWrapper__PzSuF',
        Ta = function (e) {
          var n = (0, t.useRef)(null),
            r = l((0, t.useState)(''), 2),
            a = r[0],
            o = r[1],
            i = fa({
              defaultValues: {
                name: '',
                birthday: '',
                eMail: '',
                enLvl: '',
                gender: '',
                file: '',
                PDAgreement: !1,
              },
            }),
            u = i.register,
            s = i.handleSubmit,
            c = i.reset,
            f = i.formState,
            d = f.isDirty,
            p = f.errors,
            h = f.isValid,
            m = f.isSubmitted;
          return (0, ze.jsxs)('div', {
            'data-testid': 'pages/about',
            children: [
              (0, ze.jsx)('h1', { className: ja, children: 'Forms' }),
              (0, ze.jsx)('div', {
                className: La,
                children: (0, ze.jsxs)('form', {
                  onSubmit: s(function (t) {
                    return (function (t) {
                      var r;
                      (t.file = a),
                        e.onSubmit(t),
                        c(),
                        o(''),
                        null === (r = n.current) || void 0 === r || r.setAttribute('hidden', '');
                    })(t);
                  }),
                  children: [
                    (0, ze.jsx)(Pa, {
                      register: u,
                      errors: p,
                      label: 'Name *',
                      name: 'name',
                      type: 'text',
                      order: !0,
                      options: {
                        required: 'Name is required',
                        pattern: {
                          value: /^[A-Za-z\u0410-\u042f\u0430-\u044f]+$/i,
                          message: 'Name must not include numbers',
                        },
                        minLength: { value: 2, message: 'Min length is 2' },
                      },
                    }),
                    (0, ze.jsx)(Pa, {
                      register: u,
                      errors: p,
                      label: 'Date of birthday *',
                      name: 'birthday',
                      type: 'date',
                      order: !0,
                      options: { required: 'Birthday is required' },
                    }),
                    (0, ze.jsx)(Pa, {
                      register: u,
                      errors: p,
                      label: 'E-mail *',
                      name: 'eMail',
                      type: 'text',
                      order: !0,
                      options: {
                        required: 'E-mail is required',
                        pattern: {
                          value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                          message: 'Check validation e-mail',
                        },
                      },
                    }),
                    (0, ze.jsxs)('label', {
                      children: [
                        'English level *',
                        (0, ze.jsxs)(
                          'select',
                          zn(
                            zn(
                              { 'data-testid': 'enLvl' },
                              u('enLvl', { required: 'English level is required' })
                            ),
                            {},
                            {
                              children: [
                                (0, ze.jsx)('option', {
                                  value: '',
                                  children: '-- Check a value --',
                                }),
                                (0, ze.jsx)('option', {
                                  value: 'a0',
                                  children: 'I have not studied English',
                                }),
                                (0, ze.jsx)('option', {
                                  value: 'a1',
                                  children: '(\u04101) \u2013 Beginner',
                                }),
                                (0, ze.jsx)('option', {
                                  value: 'a2',
                                  children: '(\u04102) \u2013 Elementary',
                                }),
                                (0, ze.jsx)('option', {
                                  value: 'b1',
                                  children: '(\u04121) \u2013 Intermediate',
                                }),
                                (0, ze.jsx)('option', {
                                  value: 'b2',
                                  children: '(\u04122) \u2013 Upper-Intermediate',
                                }),
                                (0, ze.jsx)('option', {
                                  value: 'c1',
                                  children: '(C1) \u2013 Advanced',
                                }),
                                (0, ze.jsx)('option', {
                                  value: 'c2',
                                  children: '(C2) \u2013 Proficiency',
                                }),
                              ],
                            }
                          )
                        ),
                      ],
                    }),
                    (0, ze.jsx)('p', {
                      className: 'error',
                      children: p.enLvl && String(p.enLvl.message),
                    }),
                    (0, ze.jsxs)('p', {
                      children: [
                        'Gender',
                        (0, ze.jsxs)('label', {
                          children: [
                            (0, ze.jsx)(
                              'input',
                              zn(
                                zn({ type: 'radio', value: 'male' }, u('gender')),
                                {},
                                { defaultChecked: !0 }
                              )
                            ),
                            'Male',
                          ],
                        }),
                        (0, ze.jsxs)('label', {
                          children: [
                            (0, ze.jsx)(
                              'input',
                              zn({ type: 'radio', value: 'female' }, u('gender'))
                            ),
                            'Female',
                          ],
                        }),
                      ],
                    }),
                    (0, ze.jsxs)('label', {
                      children: [
                        'Photo *',
                        (0, ze.jsx)(
                          'input',
                          zn(
                            {
                              'data-testid': 'file',
                              type: 'file',
                              accept: 'image/*,.png,.jpg,.gif,.web',
                            },
                            u('file', {
                              required: 'Photo is required',
                              onChange: function (e) {
                                var t;
                                if (null != e.target.files) {
                                  var r = new FileReader();
                                  (r.onload = function (e) {
                                    var t;
                                    o(
                                      String(
                                        null === (t = e.target) || void 0 === t ? void 0 : t.result
                                      )
                                    );
                                  }),
                                    r.readAsDataURL(e.target.files[0]),
                                    null === (t = n.current) ||
                                      void 0 === t ||
                                      t.removeAttribute('hidden');
                                }
                              },
                            })
                          )
                        ),
                        (0, ze.jsx)('img', { src: a, ref: n, hidden: !0 }),
                      ],
                    }),
                    (0, ze.jsx)('p', {
                      className: 'error',
                      children: p.file && String(p.file.message),
                    }),
                    (0, ze.jsx)(Pa, {
                      register: u,
                      errors: p,
                      label: 'I consent to the processing of my personal data. *',
                      name: 'PDAgreement',
                      type: 'checkbox',
                      order: !1,
                      options: { required: 'Agreement is required' },
                    }),
                    (0, ze.jsx)('input', {
                      'data-testid': 'user-form/submit-btn',
                      type: 'submit',
                      value: 'Submit',
                      disabled: m ? !h : !d,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Ra = 'userCards_userCardsWrapper__4qTHI',
        Fa = 'userCards_userCard__mrk+-',
        za = 'userCards_content__55buz',
        Aa = function () {
          var e = Ya().userState;
          return (0, ze.jsx)('div', {
            className: Ra,
            children: e.userCards.map(function (e) {
              return (0,
              ze.jsxs)('div', { 'data-testid': 'pages/user-card', className: Fa, children: [(0, ze.jsx)('img', { src: e.file }), (0, ze.jsxs)('div', { className: za, children: [(0, ze.jsxs)('h3', { children: [e.name, ' (', e.gender, ')'] }), (0, ze.jsxs)('h5', { children: ['\u041f\u043e\u0447\u0442\u0430: ', (0, ze.jsx)('strong', { children: e.eMail })] }), (0, ze.jsxs)('h5', { children: ['\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ', (0, ze.jsx)('strong', { children: e.birthday })] }), (0, ze.jsxs)('h5', { children: ['\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e: ', (0, ze.jsx)('strong', { children: e.enLvl.toUpperCase() })] }), (0, ze.jsxs)('h4', { children: ['\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u041f\u0414: ', (0, ze.jsx)('strong', { children: '\u0414\u0410' })] })] })] }, e.eMail + e.birthday);
            }),
          });
        },
        Da = function () {
          return (0, ze.jsx)('p', { className: 'content', children: 'Data added successfully!' });
        },
        Va = function () {
          var e = Ya().userDispatch,
            n = l((0, t.useState)(!1), 2),
            r = n[0],
            a = n[1];
          return (0, ze.jsxs)('div', {
            'data-testid': 'pages/user-form',
            children: [
              (0, ze.jsx)(Ta, {
                onSubmit: function (t) {
                  a(!0), e({ type: 'add', payload: t });
                },
              }),
              (0, ze.jsx)(Aa, {}),
              r &&
                (0, ze.jsx)(Ca, {
                  status: 'modal_user-form',
                  onClick: function () {
                    a(!1);
                  },
                  content: Da,
                }),
            ],
          });
        },
        Ma = 'game_page-name__X3WFY',
        Ua = 'game_game__back-btn-wrapper__CjmK0',
        Ia = 'game_game__back-btn-container__RrnIu',
        Ba = 'game_game__back-btn__pXPGE',
        $a = 'game_game__card-wrapper__f1Yuq',
        Wa = function () {
          var e = fe();
          return (0, ze.jsx)(ze.Fragment, {
            children: (0, ze.jsxs)('div', {
              'data-testid': 'pages/game',
              children: [
                (0, ze.jsx)('h1', { className: Ma, children: 'Game' }),
                (0, ze.jsx)('div', {
                  className: Ua,
                  children: (0, ze.jsx)('div', {
                    className: Ia,
                    children: (0, ze.jsx)('button', {
                      className: Ba,
                      onClick: function () {
                        return e(-1);
                      },
                      children: 'Go back',
                    }),
                  }),
                }),
                (0, ze.jsx)('div', { className: $a, children: (0, ze.jsx)(Na, {}) }),
              ],
            }),
          });
        };
      function Ha(e, t) {
        var n = t.type,
          r = t.payload;
        return 'add' === n ? { userCards: [].concat(u(e.userCards), [r]) } : e;
      }
      function qa(e, t) {
        var n = t.type,
          r = t.payload;
        switch (n) {
          case 'search':
          case 'loading':
            return {
              newSearchValue: r.newSearchValue,
              oldSearchValue: r.oldSearchValue,
              gamesCards: r.gamesCards,
              ordering: r.ordering,
              page: r.page,
              pageSize: r.pageSize,
              count: r.count,
              chosenGame: r.chosenGame,
              isLoaded: r.isLoaded,
            };
          case 'pick game':
            return {
              newSearchValue: r.newSearchValue,
              oldSearchValue: r.oldSearchValue,
              gamesCards: e.gamesCards,
              ordering: e.ordering,
              page: e.page,
              pageSize: e.pageSize,
              count: r.count,
              chosenGame: r.chosenGame,
              isLoaded: r.isLoaded,
            };
          default:
            return e;
        }
      }
      var Qa = { userCards: [] },
        Ga = {
          newSearchValue: '',
          oldSearchValue: '',
          gamesCards: [],
          ordering: '-rating',
          page: '1',
          pageSize: '15',
          count: '0',
          chosenGame: null,
          isLoaded: 'not loaded',
        },
        Ka = (0, t.createContext)({
          userState: Qa,
          userDispatch: function () {},
          gamesState: Ga,
          gameDispatch: function () {},
        }),
        Ya = function () {
          return (0, t.useContext)(Ka);
        };
      var Xa = function () {
          var e = l((0, t.useReducer)(Ha, Qa), 2),
            n = e[0],
            r = e[1],
            a = l((0, t.useReducer)(qa, Ga), 2),
            o = a[0],
            i = a[1];
          return (0, ze.jsx)(Ka.Provider, {
            value: { userState: n, userDispatch: r, gamesState: o, gameDispatch: i },
            children: (0, ze.jsx)(_e, {
              children: (0, ze.jsxs)(ke, {
                path: '/',
                element: (0, ze.jsx)(De, {}),
                children: [
                  (0, ze.jsx)(ke, { index: !0, element: (0, ze.jsx)(Oa, {}) }),
                  (0, ze.jsx)(ke, { path: 'game/:id', element: (0, ze.jsx)(Wa, {}) }),
                  (0, ze.jsx)(ke, { path: 'forms', element: (0, ze.jsx)(Va, {}) }),
                  (0, ze.jsx)(ke, { path: 'about', element: (0, ze.jsx)(Me, {}) }),
                  (0, ze.jsx)(ke, { path: '*', element: (0, ze.jsx)(Ve, {}) }),
                ],
              }),
            }),
          });
        },
        Ja = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  i = t.getTTFB;
                n(e), r(e), a(e), o(e), i(e);
              });
        };
      a
        .createRoot(document.getElementById('root'))
        .render((0, ze.jsx)(Le, { children: (0, ze.jsx)(Xa, {}) })),
        Ja();
    })();
})();
//# sourceMappingURL=main.999afb43.js.map
