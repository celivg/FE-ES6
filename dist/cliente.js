"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  return _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_cliente) {
      this._nombre = nuevo_cliente;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuesto.monto - this._impuesto.deduccion) * 0.21;
    }
  }]);
}();
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto, deduccion) {
    _classCallCheck(this, Impuestos);
    this._monto = monto;
    this._deduccion = deduccion;
  }
  return _createClass(Impuestos, [{
    key: "monto",
    get: function get() {
      return this._monto;
    },
    set: function set(nuevo_monto) {
      this._monto = nuevo_monto;
    }
  }, {
    key: "deduccion",
    get: function get() {
      return this._deduccion;
    },
    set: function set(nueva_deduccion) {
      this._deduccion = nueva_deduccion;
    }
  }]);
}();
var impuesto1 = new Impuestos(3500, 7000);
var cliente1 = new Cliente('Felipe', impuesto1);
console.log(cliente1);
console.log("El impuesto que debe pagar es ".concat(cliente1.calcularImpuesto()));