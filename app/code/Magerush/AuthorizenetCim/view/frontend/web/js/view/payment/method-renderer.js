define(
    [
        'uiComponent',
        'Magerush_AuthorizenetCim/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'authorizenetcim',
                component: 'Magerush_AuthorizenetCim/js/view/payment/method-renderer/authorizenetcim'
            }
        );
        return Component.extend({});
    }
);