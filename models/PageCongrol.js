const mongoose = require('mongoose');

const PageControl = mongoose.Schema({
      isProduction: {
        type: Boolean,
        require: true
    },
    countries: [
      {
            country_code: {
                  type: String,
                  require: true
            },
            country_image: {
                  type: String,
                  require: true
            },
            country_link: {
                  type: String,
                  require: true
            }
      }
    ],
    videoLink:  {
      type: String,
      require: true
    },
    adsImage: [
      {
            type: String
      }
    ],
    adsLink: {
      type: String,
      require: true
    }

});

module.exports = mongoose.model('LandingPageControls', PageControl);


// _id
// 632698e21527ff02699ae2a7
// isProduction
// true

// countries
// Array

// 0
// Object
// country_code
// "sg"
// country_image
// ""
// country_link
// ""
// videoLink
// ""



// adsImage
// Array
// adsLink
// ""