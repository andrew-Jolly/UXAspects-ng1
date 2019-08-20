(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/upgrade/static'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ux-aspects/ux-aspects-ng1', ['exports', '@angular/forms', '@angular/upgrade/static', '@angular/core'], factory) :
    (factory((global['ux-aspects'] = global['ux-aspects'] || {}, global['ux-aspects']['ux-aspects-ng1'] = {}),global.ng.forms,global.ng.upgrade.static,global.ng.core));
}(this, (function (exports,forms,_static,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ContactsNg1Component = /** @class */ (function (_super) {
        __extends(ContactsNg1Component, _super);
        function ContactsNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'contactGroup', elementRef, injector) || this;
            _this.overflowClick = new core.EventEmitter();
            return _this;
        }
        ContactsNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'contact-group'
                    },] }
        ];
        /** @nocollapse */
        ContactsNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        ContactsNg1Component.propDecorators = {
            contacts: [{ type: core.Input }],
            organization: [{ type: core.Input }],
            size: [{ type: core.Input }],
            colors: [{ type: core.Input }],
            maxContacts: [{ type: core.Input }],
            overflowClick: [{ type: core.Output }]
        };
        return ContactsNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ExpandInputNg1Component = /** @class */ (function (_super) {
        __extends(ExpandInputNg1Component, _super);
        function ExpandInputNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'expandInput', elementRef, injector) || this;
            _this.focus = new core.EventEmitter();
            return _this;
        }
        ExpandInputNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'expand-input'
                    },] }
        ];
        /** @nocollapse */
        ExpandInputNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        ExpandInputNg1Component.propDecorators = {
            elname: [{ type: core.Input }],
            placeHolder: [{ type: core.Input }],
            className: [{ type: core.Input }],
            clearTextIcon: [{ type: core.Input }],
            closeSearch: [{ type: core.Input }],
            expandAlways: [{ type: core.Input }],
            onEnter: [{ type: core.Input }],
            focus: [{ type: core.Output }]
        };
        return ExpandInputNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FloatingActionButtonNg1Component = /** @class */ (function (_super) {
        __extends(FloatingActionButtonNg1Component, _super);
        function FloatingActionButtonNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'floatingActionButton', elementRef, injector) || this;
            _this.items = [];
            return _this;
        }
        FloatingActionButtonNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'floating-action-button'
                    },] }
        ];
        /** @nocollapse */
        FloatingActionButtonNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        FloatingActionButtonNg1Component.propDecorators = {
            items: [{ type: core.Input }],
            primary: [{ type: core.Input }],
            direction: [{ type: core.Input }],
            fabTooltip: [{ type: core.Input }],
            fabTooltipPlacement: [{ type: core.Input }]
        };
        return FloatingActionButtonNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FlotNg1Component = /** @class */ (function (_super) {
        __extends(FlotNg1Component, _super);
        function FlotNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'uxFlotNg1', elementRef, injector) || this;
            _this.onPlotClick = new core.EventEmitter();
            _this.onPlotHover = new core.EventEmitter();
            return _this;
        }
        FlotNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'flot'
                    },] }
        ];
        /** @nocollapse */
        FlotNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        FlotNg1Component.propDecorators = {
            dataset: [{ type: core.Input }],
            options: [{ type: core.Input }],
            callback: [{ type: core.Input }],
            donutLabels: [{ type: core.Input }],
            onPlotClick: [{ type: core.Output }],
            onPlotHover: [{ type: core.Output }]
        };
        return FlotNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var GridNg1Component = /** @class */ (function (_super) {
        __extends(GridNg1Component, _super);
        function GridNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'grid', elementRef, injector) || this;
            _this.source = [];
            _this.columns = [];
            return _this;
        }
        GridNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'grid'
                    },] }
        ];
        /** @nocollapse */
        GridNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        GridNg1Component.propDecorators = {
            source: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            options: [{ type: core.Input }],
            events: [{ type: core.Input }],
            plugins: [{ type: core.Input }]
        };
        return GridNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var HierarchyBarNg1Component = /** @class */ (function (_super) {
        __extends(HierarchyBarNg1Component, _super);
        function HierarchyBarNg1Component(elementRef, injector) {
            return _super.call(this, 'hierarchyBar', elementRef, injector) || this;
        }
        HierarchyBarNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'hierarchy-bar'
                    },] }
        ];
        /** @nocollapse */
        HierarchyBarNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        HierarchyBarNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }],
            selectNode: [{ type: core.Input }],
            containerClass: [{ type: core.Input }]
        };
        return HierarchyBarNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MarqueeWizardNg1Component = /** @class */ (function (_super) {
        __extends(MarqueeWizardNg1Component, _super);
        function MarqueeWizardNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'marqueeWizard', elementRef, injector) || this;
            _this.wizardStepsChange = new core.EventEmitter();
            return _this;
        }
        MarqueeWizardNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'marquee-wizard'
                    },] }
        ];
        /** @nocollapse */
        MarqueeWizardNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        MarqueeWizardNg1Component.propDecorators = {
            wizardIcon: [{ type: core.Input }],
            wizardSteps: [{ type: core.Input }],
            buttonOptions: [{ type: core.Input }],
            onChanging: [{ type: core.Input }],
            onFinished: [{ type: core.Input }],
            onFinishing: [{ type: core.Input }],
            onCanceled: [{ type: core.Input }],
            isVisited: [{ type: core.Input }],
            sideInfo: [{ type: core.Input }],
            wizardStepsChange: [{ type: core.Output }]
        };
        return MarqueeWizardNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NestedDonutNg1Component = /** @class */ (function (_super) {
        __extends(NestedDonutNg1Component, _super);
        function NestedDonutNg1Component(elementRef, injector) {
            return _super.call(this, 'uxNestedDonutNg1', elementRef, injector) || this;
        }
        NestedDonutNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nested-donut'
                    },] }
        ];
        /** @nocollapse */
        NestedDonutNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        NestedDonutNg1Component.propDecorators = {
            dataset: [{ type: core.Input }],
            options: [{ type: core.Input }]
        };
        return NestedDonutNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var OrganizationChartNg1Component = /** @class */ (function (_super) {
        __extends(OrganizationChartNg1Component, _super);
        function OrganizationChartNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'uxOrganizationChartNg1', elementRef, injector) || this;
            _this.dataChange = new core.EventEmitter();
            _this.optionsChange = new core.EventEmitter();
            return _this;
        }
        OrganizationChartNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'organization-chart'
                    },] }
        ];
        /** @nocollapse */
        OrganizationChartNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        OrganizationChartNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }],
            dataChange: [{ type: core.Output }],
            optionsChange: [{ type: core.Output }]
        };
        return OrganizationChartNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PartitionMapNg1Component = /** @class */ (function (_super) {
        __extends(PartitionMapNg1Component, _super);
        function PartitionMapNg1Component(elementRef, injector) {
            return _super.call(this, 'uxPartitionMapNg1', elementRef, injector) || this;
        }
        PartitionMapNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'partition-map'
                    },] }
        ];
        /** @nocollapse */
        PartitionMapNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        PartitionMapNg1Component.propDecorators = {
            chartData: [{ type: core.Input }],
            chartOptions: [{ type: core.Input }],
            chartLoading: [{ type: core.Input }]
        };
        return PartitionMapNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PeityBarChartNg1Component = /** @class */ (function (_super) {
        __extends(PeityBarChartNg1Component, _super);
        function PeityBarChartNg1Component(elementRef, injector) {
            return _super.call(this, 'uxPeityBarChartNg1', elementRef, injector) || this;
        }
        PeityBarChartNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'bar-chart'
                    },] }
        ];
        /** @nocollapse */
        PeityBarChartNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        PeityBarChartNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }]
        };
        return PeityBarChartNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PeityLineChartNg1Component = /** @class */ (function (_super) {
        __extends(PeityLineChartNg1Component, _super);
        function PeityLineChartNg1Component(elementRef, injector) {
            return _super.call(this, 'uxPeityLineChartNg1', elementRef, injector) || this;
        }
        PeityLineChartNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'line-chart'
                    },] }
        ];
        /** @nocollapse */
        PeityLineChartNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        PeityLineChartNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }]
        };
        return PeityLineChartNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PeityPieChartNg1Component = /** @class */ (function (_super) {
        __extends(PeityPieChartNg1Component, _super);
        function PeityPieChartNg1Component(elementRef, injector) {
            return _super.call(this, 'uxPeityPieChartNg1', elementRef, injector) || this;
        }
        PeityPieChartNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'pie-chart'
                    },] }
        ];
        /** @nocollapse */
        PeityPieChartNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        PeityPieChartNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }]
        };
        return PeityPieChartNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PeityUpdatingLineChartNg1Component = /** @class */ (function (_super) {
        __extends(PeityUpdatingLineChartNg1Component, _super);
        function PeityUpdatingLineChartNg1Component(elementRef, injector) {
            return _super.call(this, 'uxPeityUpdatingLineChartNg1', elementRef, injector) || this;
        }
        PeityUpdatingLineChartNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'updating-line-chart'
                    },] }
        ];
        /** @nocollapse */
        PeityUpdatingLineChartNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        PeityUpdatingLineChartNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }],
            method: [{ type: core.Input }],
            updateinterval: [{ type: core.Input }]
        };
        return PeityUpdatingLineChartNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SankeyNg1Component = /** @class */ (function (_super) {
        __extends(SankeyNg1Component, _super);
        function SankeyNg1Component(elementRef, injector) {
            return _super.call(this, 'uxSankeyNg1', elementRef, injector) || this;
        }
        SankeyNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'sankey'
                    },] }
        ];
        /** @nocollapse */
        SankeyNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        SankeyNg1Component.propDecorators = {
            chartSize: [{ type: core.Input }],
            chartData: [{ type: core.Input }],
            options: [{ type: core.Input }],
            click: [{ type: core.Input }]
        };
        return SankeyNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SearchToolbarNg1Component = /** @class */ (function (_super) {
        __extends(SearchToolbarNg1Component, _super);
        function SearchToolbarNg1Component(elementRef, injector) {
            return _super.call(this, 'searchToolbar', elementRef, injector) || this;
        }
        SearchToolbarNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'search-toolbar'
                    },] }
        ];
        /** @nocollapse */
        SearchToolbarNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        SearchToolbarNg1Component.propDecorators = {
            searchTypeahead: [{ type: core.Input }],
            placeHolder: [{ type: core.Input }],
            closeSearch: [{ type: core.Input }],
            onSearch: [{ type: core.Input }],
            onFocus: [{ type: core.Input }]
        };
        return SearchToolbarNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SelectTableNg1Component = /** @class */ (function (_super) {
        __extends(SelectTableNg1Component, _super);
        function SelectTableNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'selectTable', elementRef, injector) || this;
            _this.selectedChange = new core.EventEmitter();
            return _this;
        }
        SelectTableNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'select-table'
                    },] }
        ];
        /** @nocollapse */
        SelectTableNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        SelectTableNg1Component.propDecorators = {
            values: [{ type: core.Input }],
            multipleSelect: [{ type: core.Input }],
            selectKey: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            searchText: [{ type: core.Input }],
            tableHeight: [{ type: core.Input }],
            template: [{ type: core.Input }],
            templateUrl: [{ type: core.Input }],
            selectHiddenItems: [{ type: core.Input }],
            selectedChange: [{ type: core.Output }]
        };
        return SelectTableNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SLIDER_CHART_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return SliderChartNg1Component; }),
        multi: true
    };
    var SliderChartNg1Component = /** @class */ (function (_super) {
        __extends(SliderChartNg1Component, _super);
        function SliderChartNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'sliderChart', elementRef, injector) || this;
            _this.ngModelChange = new core.EventEmitter();
            return _this;
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        SliderChartNg1Component.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) { };
        /**
         * @param {?} fn
         * @return {?}
         */
        SliderChartNg1Component.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { };
        /**
         * @param {?} fn
         * @return {?}
         */
        SliderChartNg1Component.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { };
        SliderChartNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'slider-chart',
                        providers: [SLIDER_CHART_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        SliderChartNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        SliderChartNg1Component.propDecorators = {
            sliderOptions: [{ type: core.Input }],
            ngModel: [{ type: core.Input }],
            chartOptions: [{ type: core.Input }],
            chartData: [{ type: core.Input }],
            ngModelChange: [{ type: core.Output }]
        };
        return SliderChartNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SocialChartNg1Component = /** @class */ (function (_super) {
        __extends(SocialChartNg1Component, _super);
        function SocialChartNg1Component(elementRef, injector) {
            return _super.call(this, 'uxSocialChartNg1', elementRef, injector) || this;
        }
        SocialChartNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'social-chart'
                    },] }
        ];
        /** @nocollapse */
        SocialChartNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        SocialChartNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            options: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            api: [{ type: core.Input }],
            communities: [{ type: core.Input }],
            detailStyle: [{ type: core.Input }],
            popoverStyle: [{ type: core.Input }],
            nodeDetail: [{ type: core.Input }],
            edgeDetail: [{ type: core.Input }],
            nodePopover: [{ type: core.Input }],
            edgePopover: [{ type: core.Input }],
            forceAtlasDuration: [{ type: core.Input }],
            nodeSizeAttribute: [{ type: core.Input }],
            startMaximized: [{ type: core.Input }],
            startMaximised: [{ type: core.Input }],
            showMaximizeControl: [{ type: core.Input }],
            showMaximiseControl: [{ type: core.Input }],
            socialChartContainer: [{ type: core.Input }],
            fullscreenButtonPosition: [{ type: core.Input }],
            localStrings: [{ type: core.Input }],
            chartTitle: [{ type: core.Input }],
            titleDisplayTime: [{ type: core.Input }],
            edgeWeightInfluence: [{ type: core.Input }],
            minLabels: [{ type: core.Input }]
        };
        return SocialChartNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SortDirectionToggleNg1Component = /** @class */ (function (_super) {
        __extends(SortDirectionToggleNg1Component, _super);
        function SortDirectionToggleNg1Component(elementRef, injector) {
            return _super.call(this, 'sortDirectionToggle', elementRef, injector) || this;
        }
        SortDirectionToggleNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'sort-direction-toggle'
                    },] }
        ];
        /** @nocollapse */
        SortDirectionToggleNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        SortDirectionToggleNg1Component.propDecorators = {
            label: [{ type: core.Input }],
            sorters: [{ type: core.Input }],
            descend: [{ type: core.Input }]
        };
        return SortDirectionToggleNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ThumbnailNg1Component = /** @class */ (function (_super) {
        __extends(ThumbnailNg1Component, _super);
        function ThumbnailNg1Component(elementRef, injector) {
            return _super.call(this, 'thumbnail', elementRef, injector) || this;
        }
        ThumbnailNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'thumbnail'
                    },] }
        ];
        /** @nocollapse */
        ThumbnailNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        ThumbnailNg1Component.propDecorators = {
            url: [{ type: core.Input }],
            show: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }]
        };
        return ThumbnailNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TreeGridNg1Component = /** @class */ (function (_super) {
        __extends(TreeGridNg1Component, _super);
        function TreeGridNg1Component(elementRef, injector) {
            var _this = _super.call(this, 'treegrid', elementRef, injector) || this;
            _this.optionsChange = new core.EventEmitter();
            _this.selectedChange = new core.EventEmitter();
            _this.currentRowChange = new core.EventEmitter();
            _this.treeDataChange = new core.EventEmitter();
            return _this;
        }
        TreeGridNg1Component.decorators = [
            { type: core.Directive, args: [{
                        selector: 'treegrid'
                    },] }
        ];
        /** @nocollapse */
        TreeGridNg1Component.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector }
            ];
        };
        TreeGridNg1Component.propDecorators = {
            data: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            treeData: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            currentRow: [{ type: core.Input }],
            options: [{ type: core.Input }],
            optionsChange: [{ type: core.Output }],
            selectedChange: [{ type: core.Output }],
            currentRowChange: [{ type: core.Output }],
            treeDataChange: [{ type: core.Output }],
            selectionManager: [{ type: core.Output }]
        };
        return TreeGridNg1Component;
    }(_static.UpgradeComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NavigationMenuService = /** @class */ (function () {
        function NavigationMenuService(_navigationMenuService) {
            this._navigationMenuService = _navigationMenuService;
        }
        /**
         * @return {?}
         */
        NavigationMenuService.prototype.show = /**
         * @return {?}
         */
            function () {
                this._navigationMenuService.show();
            };
        /**
         * @return {?}
         */
        NavigationMenuService.prototype.hide = /**
         * @return {?}
         */
            function () {
                this._navigationMenuService.hide();
            };
        /**
         * @return {?}
         */
        NavigationMenuService.prototype.visible = /**
         * @return {?}
         */
            function () {
                return this._navigationMenuService.visible();
            };
        /**
         * @return {?}
         */
        NavigationMenuService.prototype.collapseAtWidth = /**
         * @return {?}
         */
            function () {
                return this._navigationMenuService.collapseAtWidth();
            };
        /**
         * @param {?} width
         * @return {?}
         */
        NavigationMenuService.prototype.setCollapseAtWidth = /**
         * @param {?} width
         * @return {?}
         */
            function (width) {
                this._navigationMenuService.setCollapseAtWidth(width);
            };
        /**
         * @return {?}
         */
        NavigationMenuService.prototype.setDefaultCollapseAtWidth = /**
         * @return {?}
         */
            function () {
                this._navigationMenuService.setDefaultCollapseAtWidth();
            };
        NavigationMenuService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NavigationMenuService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['$navigationMenu',] }] }
            ];
        };
        return NavigationMenuService;
    }());
    /**
     * @param {?} injector
     * @return {?}
     */
    function navigationMenuServiceFactory(injector) {
        return injector.get('$navigationMenu');
    }
    /** @type {?} */
    var navigationMenuServiceProvider = {
        provide: '$navigationMenu',
        useFactory: navigationMenuServiceFactory,
        deps: ['$injector']
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PdfService = /** @class */ (function () {
        function PdfService(_pdfService) {
            this._pdfService = _pdfService;
        }
        /**
         * @param {?} columns
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
        PdfService.prototype.createTable = /**
         * @param {?} columns
         * @param {?} rows
         * @param {?=} options
         * @return {?}
         */
            function (columns, rows, options) {
                if (options === void 0) {
                    options = {};
                }
                return this._pdfService.createTable(columns, rows, options);
            };
        PdfService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PdfService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['$pdf',] }] }
            ];
        };
        return PdfService;
    }());
    /**
     * @param {?} injector
     * @return {?}
     */
    function pdfServiceFactory(injector) {
        return injector.get('$pdf');
    }
    /** @type {?} */
    var pdfServiceProvider = {
        provide: '$pdf',
        useFactory: pdfServiceFactory,
        deps: ['$injector']
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TimeAgoService = /** @class */ (function () {
        function TimeAgoService(_timeAgoService) {
            this._timeAgoService = _timeAgoService;
        }
        /**
         * @param {?} strings
         * @return {?}
         */
        TimeAgoService.prototype.setStrings = /**
         * @param {?} strings
         * @return {?}
         */
            function (strings) {
                this._timeAgoService.setStrings(strings);
            };
        /**
         * @param {?} past
         * @param {?} present
         * @return {?}
         */
        TimeAgoService.prototype.timeSince = /**
         * @param {?} past
         * @param {?} present
         * @return {?}
         */
            function (past, present) {
                return this._timeAgoService.timeSince(past, present);
            };
        /**
         * @param {?} moment
         * @return {?}
         */
        TimeAgoService.prototype.timeSinceNow = /**
         * @param {?} moment
         * @return {?}
         */
            function (moment) {
                return this._timeAgoService.timeSinceNow(moment);
            };
        TimeAgoService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TimeAgoService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['timeAgoService',] }] }
            ];
        };
        return TimeAgoService;
    }());
    /**
     * @param {?} injector
     * @return {?}
     */
    function timeAgoServiceFactory(injector) {
        return injector.get('timeAgoService');
    }
    /** @type {?} */
    var timeAgoServiceProvider = {
        provide: 'timeAgoService',
        useFactory: timeAgoServiceFactory,
        deps: ['$injector']
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var declarations = [
        ContactsNg1Component,
        ExpandInputNg1Component,
        FloatingActionButtonNg1Component,
        FlotNg1Component,
        GridNg1Component,
        HierarchyBarNg1Component,
        MarqueeWizardNg1Component,
        NestedDonutNg1Component,
        OrganizationChartNg1Component,
        PartitionMapNg1Component,
        PeityBarChartNg1Component,
        PeityLineChartNg1Component,
        PeityPieChartNg1Component,
        PeityUpdatingLineChartNg1Component,
        SankeyNg1Component,
        SearchToolbarNg1Component,
        SelectTableNg1Component,
        SliderChartNg1Component,
        SocialChartNg1Component,
        SortDirectionToggleNg1Component,
        TreeGridNg1Component,
        ThumbnailNg1Component,
    ];
    var HybridModule = /** @class */ (function () {
        function HybridModule() {
        }
        HybridModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        exports: declarations,
                        declarations: declarations,
                        providers: [
                            navigationMenuServiceProvider,
                            pdfServiceProvider,
                            timeAgoServiceProvider,
                            TimeAgoService,
                            PdfService,
                            NavigationMenuService,
                        ],
                    },] }
        ];
        return HybridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.ContactsNg1Component = ContactsNg1Component;
    exports.ExpandInputNg1Component = ExpandInputNg1Component;
    exports.FloatingActionButtonNg1Component = FloatingActionButtonNg1Component;
    exports.FlotNg1Component = FlotNg1Component;
    exports.GridNg1Component = GridNg1Component;
    exports.HierarchyBarNg1Component = HierarchyBarNg1Component;
    exports.MarqueeWizardNg1Component = MarqueeWizardNg1Component;
    exports.NestedDonutNg1Component = NestedDonutNg1Component;
    exports.OrganizationChartNg1Component = OrganizationChartNg1Component;
    exports.PartitionMapNg1Component = PartitionMapNg1Component;
    exports.PeityBarChartNg1Component = PeityBarChartNg1Component;
    exports.PeityLineChartNg1Component = PeityLineChartNg1Component;
    exports.PeityPieChartNg1Component = PeityPieChartNg1Component;
    exports.PeityUpdatingLineChartNg1Component = PeityUpdatingLineChartNg1Component;
    exports.SankeyNg1Component = SankeyNg1Component;
    exports.SearchToolbarNg1Component = SearchToolbarNg1Component;
    exports.SelectTableNg1Component = SelectTableNg1Component;
    exports.SLIDER_CHART_VALUE_ACCESSOR = SLIDER_CHART_VALUE_ACCESSOR;
    exports.SliderChartNg1Component = SliderChartNg1Component;
    exports.SocialChartNg1Component = SocialChartNg1Component;
    exports.SortDirectionToggleNg1Component = SortDirectionToggleNg1Component;
    exports.ThumbnailNg1Component = ThumbnailNg1Component;
    exports.TreeGridNg1Component = TreeGridNg1Component;
    exports.HybridModule = HybridModule;
    exports.navigationMenuServiceFactory = navigationMenuServiceFactory;
    exports.NavigationMenuService = NavigationMenuService;
    exports.navigationMenuServiceProvider = navigationMenuServiceProvider;
    exports.pdfServiceFactory = pdfServiceFactory;
    exports.PdfService = PdfService;
    exports.pdfServiceProvider = pdfServiceProvider;
    exports.timeAgoServiceFactory = timeAgoServiceFactory;
    exports.TimeAgoService = TimeAgoService;
    exports.timeAgoServiceProvider = timeAgoServiceProvider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ux-aspects-ux-aspects-ng1.umd.js.map