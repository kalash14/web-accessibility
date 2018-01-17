'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collapse = function () {
    function Collapse(container) {
        _classCallCheck(this, Collapse);

        this.container = container;
        this.trigger = this.container.querySelector('[aria-controls]');

        if (!this.trigger) return;

        this.content = this.container.querySelector('#' + this.trigger.getAttribute('aria-controls'));

        if (!this.content) return;

        this.handleClick();
    }

    _createClass(Collapse, [{
        key: 'handleClick',
        value: function handleClick() {
            var _this = this;

            this.trigger.addEventListener('click', function (event) {
                event.preventDefault();
                _this.toggleDropdown();
            });
        }
    }, {
        key: 'toggleDropdown',
        value: function toggleDropdown() {
            if (this.trigger.getAttribute('aria-expanded') === 'false') {
                this.trigger.setAttribute('aria-expanded', 'true');
                this.content.removeAttribute('hidden');
            } else {
                this.trigger.setAttribute('aria-expanded', 'false');
                this.content.setAttribute('hidden', 'true');
            }
        }
    }]);

    return Collapse;
}();

var collapseItems = document.querySelectorAll('[data-role="collapse"]');

[].forEach.call(collapseItems, function (collapse) {
    new Collapse(collapse);
});