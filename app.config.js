module.exports = {
  "expo": {
    "name": "AwesomeProject",
    "slug": "AwesomeProject",
    "version": "1.0.0",
    "extra": {
      "COINMARKETCAP_API": process.env.COINMARKETCAP_API,
      "COINMARKETCAP_KEY": process.env.COINMARKETCAP_KEY,
    },
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
