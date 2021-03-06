"use strict";

var LayoutUtils = {
    smoothScrollToDiv: (divStr, animationDurationInMs = 500) => {
        $('html, body').animate({
            scrollTop: $(divStr).offset().top
        }, animationDurationInMs);
    },
    getCSSVariableValue: (varName) => {
        return getComputedStyle(document.documentElement)
            .getPropertyValue(varName)
    },
    changeTheme: (themeName) => {
        switch (themeName) {
            case MYFIN.APP_THEMES.DARK_BLUE:
                // unload dark gray theme and light theme css
                $("link[href='" + MYFIN.APP_THEMES_CSS_PATH.DARK_GRAY + "']").remove();
                $("link[href='" + MYFIN.APP_THEMES_CSS_PATH.LIGHT + "']").remove();
                LocalDataManager.setCurrentTheme(MYFIN.APP_THEMES.DARK_BLUE)
                break;
            case MYFIN.APP_THEMES.DARK_GRAY:
            default:
                // unload light theme css
                $("link[href='" + MYFIN.APP_THEMES_CSS_PATH.LIGHT + "']").remove()
                // load dark gray theme css
                $('head').append('<link type="text/css" rel="stylesheet" href="' + MYFIN.APP_THEMES_CSS_PATH.DARK_GRAY + '" id="removable-css">')
                LocalDataManager.setCurrentTheme(MYFIN.APP_THEMES.DARK_GRAY)
                break;
            case MYFIN.APP_THEMES.LIGHT:
                // unload dark gray theme css
                $("link[href='" + MYFIN.APP_THEMES_CSS_PATH.DARK_GRAY + "']").remove();
                // load dark gray theme css
                $('head').append('<link type="text/css" rel="stylesheet" href="' + MYFIN.APP_THEMES_CSS_PATH.LIGHT + '" id="removable-css">')
                LocalDataManager.setCurrentTheme(MYFIN.APP_THEMES.LIGHT)
                break;
        }
    },
    getCurrentThemePath: () => {
        switch (LocalDataManager.getCurrentTheme()) {
            case MYFIN.APP_THEMES.DARK_GRAY:
            default:
                return MYFIN.APP_THEMES_CSS_PATH.DARK_GRAY
            case MYFIN.APP_THEMES.DARK_BLUE:
                return MYFIN.APP_THEMES_CSS_PATH.DARK_BLUE
            case MYFIN.APP_THEMES.LIGHT:
                return MYFIN.APP_THEMES_CSS_PATH.LIGHT

        }
    },
    getCurrentThemeName: () => {
        return LocalDataManager.getCurrentTheme() ? LocalDataManager.getCurrentTheme() : MYFIN.APP_THEMES.DARK_GRAY
    },
    scrollToWithAnimation: (elementLocator, scrollInterval = 500) => {
        $('html, body').animate({scrollTop: $(elementLocator).offset().top}, scrollInterval);
    },
}

//# sourceURL=js/utils/layoutUtils.js